
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class LoginPage extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="section-title text-center center">
                    <h2>Login to edit portfolio list</h2>
                    <hr />
                    <Link className="btn btn-default btn-lg" to="/">Home</Link>
                    <Link className="btn btn-default btn-lg" to="/edit">Edit</Link>
                    <div className="col-md-8 col-md-offset-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" id="username"  className="form-control" placeholder="username" required="required" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="password" id="password"  className="form-control" placeholder="password" required="required" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div id="success"></div>
                        <button type="submit" className="btn btn-default btn-lg" >LOGIN</button>
                        <br />
                    </div>

                </div>
            </div>
        )
    }
}