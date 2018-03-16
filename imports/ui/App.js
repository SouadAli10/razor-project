import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
import Portfolio from './Portfolio';
//import Contact from './Contact'
import { setTimeout } from 'timers';
import Map from './Map';


// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('tasks.insert', text);
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
      owner: Meteor.userId(),           // _id of logged in user
      username: Meteor.user().username,  // username of logged in user
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }
  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }
    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  render() {

    return (

      <div className="my-site-wrapper">
        <header id="header">
          <div className="intro">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h1>Razor Co.</h1>
                  <hr />
                  <p>Venture Capital</p>
                  <a href="#about" className="btn btn-default btn-lg page-scroll">Learn More</a> </div>
              </div>
            </div>
          </div>
        </header>

        <div id="nav">
          <nav className="navbar navbar-custom">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>
              </div>

              <div className="collapse navbar-collapse navbar-main-collapse">
                <ul className="nav navbar-nav">

                  <li className="hidden"> <a href="#page-top"></a> </li>
                  <li> <a className="page-scroll" href="#about">About</a> </li>
                  <li> <a className="page-scroll" href="#geo">Geo</a> </li>
                  <li> <a className="page-scroll" href="#Team">Team</a> </li>
                  <li> <a className="page-scroll" href="#portfolio">Portfolio</a> </li>
                  <li> <a className="page-scroll" href="#contact">Contact</a> </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div id="about">
          <div className="container">
            <div className="section-title text-center center">
              <h2>About Me</h2>
              <hr />
            </div>
            <div className="row">
              <div className="col-md-12 text-center"><img src="../img/about.jpg" className="img-responsive" /></div>
              <div className="col-md-8 col-md-offset-2">
                <div className="about-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.</p>
                  <a href="#portfolio" className="btn btn-default btn-lg page-scroll">My Portfolio</a> </div>
              </div>
            </div>
          </div>
        </div>
        <div id="geo">
          <div className="container">
            <div className="section-title text-center center">
              <h2>Geolocation</h2>
              <hr />
            </div>
            <div className="row">
            </div>
          </div>
          <Map />
        </div>
        <div id="Team">
          <div className="container">
            <div className="section-title text-center center">
              <h2>Meet Our Team</h2>
              <hr />
            </div>
            <div className="row">
            </div>
          </div>

        </div>
        <Portfolio />
        <div id="contact" className="text-center">
          <div className="container">
            <div className="section-title center">
              <h2>Get In Touch</h2>
              <hr />
            </div>
            <div className="col-md-8 col-md-offset-2">
              <form name="sentMessage" id="contactForm">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required />
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-default btn-lg">Send Message</button>
              </form>
              <div className="social">
                <ul>
                  <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i className="fa fa-behance"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <div className="fnav">
              <p>Copyright &copy; 2016 Magnum. Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default withTracker(() => {
  Meteor.subscribe('tasks');
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
    currentUser: Meteor.user(),
  };
})(App);