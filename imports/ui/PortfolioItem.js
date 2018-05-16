import React from 'react';

const PortfolioItem = ({ src, description, URL }) =>
    <div className="portfolio-item">
        <div className="portfolio-img">
            <a href={'https://' + URL}>
                <img src={"./portfolioIMG/" + src} />
            </a>
        </div>
        <div className="portfolio-description"><p>{description}</p></div>
    </div>

export default PortfolioItem

// 1- replace title from hover div to the title place before img 
// 2- add a description to the hover div 