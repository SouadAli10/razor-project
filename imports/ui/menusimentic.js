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

    render() {
        const { visible } = this.state
        return (
            <div>
                <Button onClick={this.toggleVisibility}>Menu</Button>
                <Sidebar.Pushable as={Segment}>
                    <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted>
                        <Menu.Item name='OUR VISION'>
                            <Icon name='OUR VISION' />
                            OUR VISION

                        </Menu.Item>
                        <Menu.Item name='WHY!'>
                            <Icon name='WHY!' />
                            WHY!

                        </Menu.Item>
                        <Menu.Item name='TEAM'>
                            <Icon name='TEAM' />
                            TEAM

                        </Menu.Item>
                        <Menu.Item name='PORTFOLIO'>
                            <Icon name='PORTFOLIO' />
                            PORTFOLIO

                        </Menu.Item>
                        <Menu.Item name='PARTNERSHIPS'>
                            <Icon name='PARTNERSHIPS' />
                            PARTNERSHIPS

                        </Menu.Item>
                        <Menu.Item name='CONTACT'>
                        </Menu.Item>
                    </Sidebar>
                    <Sidebar.Pusher>
                        <Segment basic>
                                <Header />
                        
                                <Vision />
                        
                                <Why/>
                        
                                <Team />
                        
                                <Portfolio />
                        
                                <Active />
                        
                                <Contact />
                        
                                <Footer />
                        
                        </Segment>
                    </Sidebar.Pusher>
                </Sidebar.Pushable>

            </div>
        )
    }
} export default SidebarLeftOverlay