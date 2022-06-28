import React, { Component } from 'react'
import loading from "./loading.gif";

export default class Loader extends Component {
  render() {
    return (
      <div>
        <div className="text-center my-6">
    <img src={loading} alt="no  image " height="auto" width="3%" ></img>
    </div>
      </div>
    )
  }
}
