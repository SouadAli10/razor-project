import React from 'react';

export default ({ small, large, title }) =>
    <div className="col-sm-6 col-md-3 col-lg-3 graphic">
        <div className="portfolio-item">
            <div className="hover-bg"> <a href={large} title={title} data-lightbox-gallery="gallery1">
                <div className="hover-text">
                    <h4>{title}</h4>
                </div>
                <img src={small} className="img-responsive" alt={title} /> </a> </div>
        </div>
    </div>