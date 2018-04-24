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
                            <a className="page-scroll" href="#Vision" onClick={this.toggleVisibilityFalse}><Icon name='unhide' /><br />Our Vision</a>
                        </Menu.Item>
                        <Menu.Item name='help!'>
                            <a className="page-scroll" href="#Why" onClick={this.toggleVisibilityFalse}><Icon name='help' /><br />Why?</a>
                        </Menu.Item>
                        <Menu.Item name='users'>
                            <a className="page-scroll" href="#Team" onClick={this.toggleVisibilityFalse}><Icon name='users' /><br />Team</a>
                        </Menu.Item>
                        <Menu.Item name='road'>
                            <a className="page-scroll" href="#portfolio" onClick={this.toggleVisibilityFalse}><Icon name='road' /><br />Portfolio</a>
                        </Menu.Item>
                        <Menu.Item name='sitemap'>
                            <a className="page-scroll" href="#Active" onClick={this.toggleVisibilityFalse}><Icon name='sitemap' /><br />Partnerships</a>
                        </Menu.Item>
                        <Menu.Item name='comments'>
                            <a className="page-scroll" href="#contact" onClick={this.toggleVisibilityFalse}><Icon name='comments' /><br />Contact</a>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <div className='HtmlContainer' onClick={this.toggleVisibilityFalse} >
                            <Header />

                            <Vision />

                            <Why />

                            <Team />

                            <Portfolio />

                            <Active />

                            <Contact />

                            <Footer />
                        </div>
                    </Sidebar.Pusher>
                

            </div>
        )
    }
} export default SidebarLeftOverlay