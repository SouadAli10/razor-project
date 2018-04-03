import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import MyForm from './myform.js';
import LoginPage from './login.js'

export default class App extends Component {
  constructor() {
    super()
    this.printFields = this.printFields.bind(this);
    this.isLogin = this.isLogin.bind(this);
    this.state = {
      printFields: this.printFields,
      isLogin: this.isLogin,
      logIn: { username: "razor", password: "razor" },
      nowUser: '',
      nowPass: ''
    }
  }

  printFields(username, password) {
    this.setState({
      nowUser: username,
      nowPass: password
    })
  }

  isLogin() {
    if (this.state.nowUser != this.state.logIn.username || this.state.nowPass != this.state.logIn.password) {
      return <LoginPage printFields={this.printFields} logIn={this.state.logIn} />
    }else{
      return <MyForm {...this.state} />
    }
  }
  render() {
    return (
      <div className="container">
        <div className="section-title text-center center">
          <h2>add Portfolio</h2>
          <hr />
          {this.isLogin()}
        </div>
      </div>
    )
  }
}