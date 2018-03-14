import React from 'react';
import PortfolioItem from './PortfolioItem'

export default () =>
    <div id="portfolio">
        <div className="container">
            <div className="section-title text-center center">
                <h2>Portfolio</h2>
                <hr />
            </div>
            <div className="categories">
                <ul className="cat">
                    <li>
                        <ol className="type">
                            <li><a href="#" data-filter="*" className="active">All</a></li>
                            <li><a href="#" data-filter=".graphic">Graphic Design</a></li>
                            <li><a href="#" data-filter=".illustration">Illustration</a></li>
                            <li><a href="#" data-filter=".photography">Photography</a></li>
                        </ol>
                    </li>
                </ul>
                <div className="clearfix"></div>
            </div>
            <div className="row">
                <div className="portfolio-items">
                    <PortfolioItem small="img/portfolio/01-small.jpg" large="img/portfolio/01-large.jpg" title="atata" />
                    <PortfolioItem small="img/portfolio/02-small.jpg" large="img/portfolio/01-large.jpg" title="atata2" />
                    <PortfolioItem small="img/portfolio/03-small.jpg" large="img/portfolio/01-large.jpg" title="atata3" />
                    <PortfolioItem small="img/portfolio/04-small.jpg" large="img/portfolio/01-large.jpg" title="atata4" />
                </div>
            </div>
        </div>
    </div>