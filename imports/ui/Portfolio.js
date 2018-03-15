import React from 'react';
import PortfolioItem from './PortfolioItem'

export default () =>
    <div id="portfolio">
        <div className="container">
            <div className="section-title text-center center">
                <h2>Portfolio</h2>
                <hr />
            </div>
            <div className="row">
                <div className="portfolio-items">
                    <PortfolioItem small="img/portfolio/01-small.jpg" large="img/portfolio/01-large.jpg" title="Project 1" description=" { description }"/>
                    <PortfolioItem small="img/portfolio/02-small.jpg" large="img/portfolio/01-large.jpg" title="Project 2" description=" { description }"/>
                    <PortfolioItem small="img/portfolio/03-small.jpg" large="img/portfolio/01-large.jpg" title="Project 3" description=" { description }"/>
                    <PortfolioItem small="img/portfolio/04-small.jpg" large="img/portfolio/01-large.jpg" title="Project 4" description=" { description }"/>
                    <PortfolioItem small="img/portfolio/05-small.jpg" large="img/portfolio/01-large.jpg" title="Project 5" description=" { description }"/>
                    <PortfolioItem small="img/portfolio/06-small.jpg" large="img/portfolio/01-large.jpg" title="Project 6" description=" { description }"/>
                    <PortfolioItem small="img/portfolio/07-small.jpg" large="img/portfolio/01-large.jpg" title="Project 7" description=" { description }"/>
                    <PortfolioItem small="img/portfolio/08-small.jpg" large="img/portfolio/01-large.jpg" title="Project 8" description=" { description }"/>
                </div>
            </div>
        </div>
    </div>