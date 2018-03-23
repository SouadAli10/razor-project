import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home"
import Edit from "./editPortfolio/AppP.js"

export default () => (
  <Router>
    <div>
      <Route exact path="/" render={() => { console.log('home'); return <Home /> }} />
      <Route path="/edit" render={() => { console.log('edit'); return <Edit /> }} />
    </div>
  </Router>

);