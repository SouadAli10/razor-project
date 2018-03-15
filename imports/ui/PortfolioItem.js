import React from 'react';

export default ({ small, large, title, description }) =>
    <div className="col-sm-6 col-md-3 col-lg-3 graphic">
        <div className="portfolio-item">
            <h4>{title}</h4>
            <div className="hover-bg"> <a href={large}  data-lightbox-gallery="gallery1">
                <div className="hover-text">
                    <p> { description } </p>
                </div>
                <img src={small} className="img-responsive" alt={title} /> </a> </div>
        </div>
    </div>


// 1- replace title from hover div to the title place before img 
// 2- add a description to the hover div 