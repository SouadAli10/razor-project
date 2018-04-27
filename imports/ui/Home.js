import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
import Menusimentic from './menusimentic';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false, //to show or hide the sidebar on mob size
      width: $(window).width() //to see what width now and render Mob size or orginal size
    };
  } 

  // Function to change show or hide the side bar on Mob size
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted,
    });
  }

  // Function to change width and used wih (whatWidth FUNCTION)
  changeWidth = () => {
    this.setState({
      width: $(window).width()
    })
  }

  // Function to listen if screen size is changed
  whatWidth = () => {
    window.addEventListener("resize", this.changeWidth)
  }

  // Function to test screen size and render orginal size or Mob size, use width state
  renderMobORFullScreen = () => {
    if (this.state.width < 768) {
      return (<Menusimentic />)
    }
    else {
      return (this.fullWidthRender())
    }
  }

  // Function to render the original verion for the site
  fullWidthRender = () => {
    return (
      <div>
        <Header />

        <Navigation />
        <Element name="#Vision" className="element" >
          <Vision />
        </Element>

        <Element name="#Why" className="element" >
          <Why />
        </Element>

        <Element name="#Team" className="element" >
          <Team />
        </Element>

        <Element name="#portfolio" className="element" >
          <Portfolio />
        </Element>

        <Element name="#Active" className="element" >
          <Active />
        </Element>

        <Element name="#contact" className="element" >
          <Contact />
        </Element>

        <Footer />
      </div>
    )
  }

  render() {

    return (

      <div className="my-site-wrapper">
        {this.whatWidth()}
        {console.log(this.state.width)}
        {this.renderMobORFullScreen()}
      </div>
    );
  }
}

export default App;