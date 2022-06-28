import React, { Component } from 'react'
import Navbar from './component/Navbar'
import Newsblock from './component/Newsblock'
import Newscard from './component/Newscard'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <Navbar/>
       
        <Routes>
          <Route path='/' element={<Newsblock key='1'  pageSize="50" country="us" category="general" />}/>
          <Route path='/business' element={<Newsblock key='2'  pageSize="50" country="us" category="business" />}/>
          <Route path='/entertainment' element={<Newsblock key='3'  pageSize="50" country="us" category="entertainment" />}/>
          <Route path='/health' element={<Newsblock key='4'  pageSize="50" country="us" category="health" />}/>
          <Route path='/science' element={<Newsblock key='5'  pageSize="50" country="us" category="science" />}/>
          <Route path='/sports' element={<Newsblock key='6'  pageSize="50" country="us" category="sports" />}/>
          <Route path='/technology' element={<Newsblock key='7'  pageSize="50" country="us" category="technology" />}/>
         
        </Routes>
          
        
      



      </div>
      </Router>
    )
  }
}

