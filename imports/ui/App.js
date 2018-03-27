import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import Edit from "./editPortfolio/AppP.js"
import LoginPage from "./editPortfolio/login.js"

export default () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/edit" component={Edit}/>
      <Route path="/login" component={LoginPage}/>
    </div>
  </Router>

);