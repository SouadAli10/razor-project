import React from 'react';
export default () =>
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
