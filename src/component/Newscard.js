import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Newscard extends Component {
 d=new Date(this.props.date)

    
  render() {
    return (
      <div>
        <div className= " my-3">
          <div className="card" >
  <img src={this.props.imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
  <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{zIndex:1,left:'90%'}}>
    {this.props.source}
    
  </span>
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.desc}</p>
    <p className="card-text"><small className="text-muted">{this.props.author} at {this.d.toGMTString()}</small></p>
    <a href={this.props.newsUrl} target="_blank" className="btn btn-sm btn-secondary">read more</a>
  </div>
</div>
</div>
      </div>
    )
  }
}

 

  
  
 