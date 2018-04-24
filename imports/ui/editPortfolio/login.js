
import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Divider from "../divider.js"

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.submit = this.submit.bind(this);
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.state = {
            submit: this.submit,
            handleChangeUsername: this.handleChangeUsername,
            handleChangePassword: this.handleChangePassword,
            username: '',
            password: ''
        }
    }

    handleChangeUsername(e) {
        this.setState({ username: e.target.value })
    }

    handleChangePassword(e) {
        this.setState({ password: e.target.value })
    }

    submit() {
        if (this.state.username != this.props.logIn.username || this.state.password != this.props.logIn.password) {
            alert('username or password is wrong !')
        } else {
            return this.props.printFields(this.state.username, this.state.password)
        }
    }

    render() {
        return (
            <div className="container">
                <div className="section-title text-center center">
                    <h2>Login to edit portfolio list</h2>
                    <Divider />
                    <Link className="btn btn-default btn-lg" to="/">Home</Link>
                    <div className="col-md-8 col-md-offset-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        id="username"
                                        className="form-control"
                                        placeholder="username"
                                        required="required"
                                        value={this.state.username}
                                        onChange={this.handleChangeUsername}
                                    />
                                    < p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-control"
                                        placeholder="password"
                                        required="required"
                                        value={this.state.password}
                                        onChange={this.handleChangePassword}
                                    />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                        </div>
                        <div id="success"></div>
                        <button type="submit" className="btn btn-default btn-lg" onClick={() => this.submit()} >LOGIN</button>
                        <br />
                    </div>

                </div>
            </div>
        )
    }
}