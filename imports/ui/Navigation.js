import React from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class Navigation extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div id="nav" className={this.props.className} >
                <nav className="navbar navbar-custom">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse"> <i className="fa fa-bars"></i> </button>
                        </div>

                        <div className="collapse navbar-collapse navbar-main-collapse">
                            <ul className="nav navbar-nav">
                                <li className="hidden"> <a href="#page-top"></a> </li>
                                <li><Link activeClass="active" className="test1 page-scroll" to="#Vision" spy={true} smooth={true} duration={1500} >Our Vision</Link></li>
                                <li><Link activeClass="active" className="test1 page-scroll" to="#Why" spy={true} smooth={true} duration={1500} >Why?</Link></li>
                                <li><Link activeClass="active" className="test1 page-scroll" to="#Team" spy={true} smooth={true} duration={2000} >Team</Link></li>
                                <li><Link activeClass="active" className="test1 page-scroll" to="#portfolio" spy={true} smooth={true} duration={2000} >Portfolio</Link></li>
                                <li><Link activeClass="active" className="test1 page-scroll" to="#Active" spy={true} smooth={true} duration={2000} >Partnerships</Link></li>
                                <li><Link activeClass="active" className="test1 page-scroll" to="#contact" spy={true} smooth={true} duration={2000} >Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        )
    }
}
