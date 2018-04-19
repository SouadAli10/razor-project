import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import AccountsUIWrapper from './AccountsUIWrapper.js';
import { Tasks } from '../api/tasks.js';
import Task from './Task.js';
import { Meteor } from 'meteor/meteor';
import { setTimeout } from 'timers';
import Header from './Header'
import Navigation from './Navigation'
import Vision from './Vision'
import Why from './Why'
import Team from './Team'
import Portfolio from './Portfolio';
import Active from './Active'
import Contact from './Contact'
import Footer from './Footer'
import Menusimentic from './menusimentic'
// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
      width: '1000px'
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

  changeWidth = () => {
    this.setState({
      width: $(window).width()
    })
  }

  whatWidth = () => {
    window.addEventListener("resize", this.changeWidth)
  }

  phoneWidth = () => {
    if (this.state.width < 768) {
      return (<Menusimentic />)
    }
    else {
      return (this.fullWidthRender())
    }
  }
  fullWidthRender = () => {
    return (
      <div>
        <Header />

        <Navigation />

        <Vision />

        <Why />

        <Team />

        <Portfolio />

        <Active />

        <Contact />

        <Footer />
      </div>
    )
  }

  render() {

    return (

      <div className="my-site-wrapper">
        {this.whatWidth()}
        {console.log(this.state.width)}
        {this.phoneWidth()}
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