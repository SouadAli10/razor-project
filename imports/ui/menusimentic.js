import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon } from 'semantic-ui-react';
import Header from './Header'
import Vision from './Vision'
import Why from './Why'
import Team from './Team'
import Portfolio from './Portfolio';
import Active from './Active'
import Contact from './Contact'
import Footer from './Footer'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class SidebarLeftOverlay extends Component {
    state = { visible: false }

    toggleVisibility = () => this.setState({ visible: !this.state.visible })
    toggleVisibilityFalse = () => this.setState({ visible: false })

    render() {
        const { visible } = this.state
        return (
            <div>
                <Button onClick={this.toggleVisibility} className="menuButton" ><Icon name='content' /></Button>

                <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='unhide'>
                        <Link activeClass="active" className="test1 page-scroll" to="#Vision" spy={true} smooth={true} duration={1500} onClick={this.toggleVisibilityFalse}><Icon name='unhide' /> <br />Our Vision</Link>
                    </Menu.Item>
                    <Menu.Item name='help!'>
                        <Link activeClass="active" className="test1 page-scroll" to="#Why" spy={true} smooth={true} duration={1500} onClick={this.toggleVisibilityFalse}><Icon name='help' /> <br />Why?</Link>
                    </Menu.Item>
                    <Menu.Item name='users'>
                        <Link activeClass="active" className="test1 page-scroll" to="#Team" spy={true} smooth={true} duration={1500} onClick={this.toggleVisibilityFalse}><Icon name='users' /> <br />Team</Link>
                    </Menu.Item>
                    <Menu.Item name='road'>
                        <Link activeClass="active" className="test1 page-scroll" to="#portfolio" spy={true} smooth={true} duration={1500} onClick={this.toggleVisibilityFalse}><Icon name='road' /> <br />Portfolio</Link>
                    </Menu.Item>
                    <Menu.Item name='sitemap'>
                        <Link activeClass="active" className="test1 page-scroll" to="#Active" spy={true} smooth={true} duration={1500} onClick={this.toggleVisibilityFalse}><Icon name='sitemap' /> <br />Partnerships</Link>
                    </Menu.Item>
                    <Menu.Item name='comments'>
                        <Link activeClass="active" className="test1 page-scroll" to="#contact" spy={true} smooth={true} duration={1500} onClick={this.toggleVisibilityFalse}><Icon name='comments' /> <br />Contact</Link>
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <div className='HtmlContainer' onClick={this.toggleVisibilityFalse} >
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
                </Sidebar.Pusher>


            </div>
        )
    }
} export default SidebarLeftOverlay