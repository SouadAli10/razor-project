import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import MyForm from '../myform.js';


export default class App extends Component {

  render() {
    return (
      <div className="container">
        <div className="section-title text-center center">
          <h2>add Portfolio</h2>
          <hr />

          <MyForm {...this.state} />
        </div>
      </div>
    )
  }
}