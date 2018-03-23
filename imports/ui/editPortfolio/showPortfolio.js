import React from 'react';
// import { console } from 'meteor/tools';

export default class ShowPortfolio extends React.Component {
    render() {
        return (
            <div className="col-sm-6 col-md-3 col-lg-3 graphic">
                <div className="portfolio-item">
                    <div className="hover-bg"> <a data-lightbox-gallery="gallery1">
                        {this.props.title}
                        <div className="hover-text">
                            <button className='btn btn-default btn-lg' onClick={() => this.props.removePort(this.props.id)}>Delete</button>
                            <button className='btn btn-default btn-lg' onClick={() => this.props.showEditBox(this.props.id)}>Edit</button>
                        </div>
                        <img src={this.props.photo} className="img-responsive" alt={this.props.title} /> </a> </div>
                </div>
            </div>
        )
    }
}
{/* <button className='btn btn-default btn-lg' onClick={editPort}>Edit</button> */ }