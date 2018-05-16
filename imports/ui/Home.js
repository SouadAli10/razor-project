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
import { isContext } from 'vm';


// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false, //to show or hide the sidebar on mob size
      width: $(window).width(), //to see what width now and render Mob size or orginal size
      height: $(window).height(),
      menuClass: "menuStartNotFixed" //to change class name of menu bar (Nav.) fixed or not fixed
    };
  }

  // Listener function to know when the user scroll page and run changeMenuPosition function
  scrollListener = () => {
    window.addEventListener("scroll", this.changeMenuPosition)
  }

  // function to change className of the main menu when it's getting top
  changeMenuPosition = () => {
    const height = this.state.height * 0.9
    console.log(height)
    if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
      if (this.state.menuClass == "menuStartNotFixed") {
        this.setState({
          menuClass: "menuStartFixed"
        })
      }
    } else {
      if (this.state.menuClass == "menuStartFixed") {
        this.setState({
          menuClass: "menuStartNotFixed"
        })
      }
    }
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
      width: $(window).width(),
      height: $(window).height()
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

        <Navigation className={this.state.menuClass} />
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
        {this.scrollListener()}
        {this.renderMobORFullScreen()}
      </div>
    );
  }
}

export default App;