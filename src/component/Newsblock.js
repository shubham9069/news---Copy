import React, { Component } from 'react'
import Newscard from './Newscard';
import ReactDOM from 'react'
import Loader from './Loader';
import InfiniteScroll from "react-infinite-scroll-component";

export default class Newsblock extends Component {
  static defaultProps = {
    pageSize: 10,
    country: 'in',
    category: 'sport'
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }
  fetchMoreData = async () => {
    this.setState({page:this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1eed8106919b44d0b679ae963c8a7879&page=1&pageSize=${this.props.pageSize}`;
    
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      
    })
   
    
    
  }




  
  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=1eed8106919b44d0b679ae963c8a7879&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({ articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
     })
    
  }

 

  render() {
    console.log("render");

    return (
      <div>
        <div className="container my-3">
          <h2 className="text-center my-3">news top- {this.props.category} headline</h2>
        {/* {this.state.loading==true ? <Loader/> : ""} */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!=this.state.totalResults}
          loader={<Loader/>}
        >
          <div className="row"> 
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                <Newscard title={element.title}
                  desc={element.description} imageUrl={element.urlToImage}
                  newsUrl={element.url} author={element.author==null ?"unknown": element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
          </div>
          </InfiniteScroll>
         

        </div>
      </div>
    );
  }
}

