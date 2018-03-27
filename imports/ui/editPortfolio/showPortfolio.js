import React from 'react';


export default class ShowPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editButton: this.editButton
        }
        this.editButton = this.editButton.bind(this);
    }
    editButton() {
        this.props.HiddenEditBox()
        this.props.showEditBox(this.props.id)
    }
    render() {
        return (
            <div className="col-sm-6 col-md-3 col-lg-3 graphic">
                <div className="portfolio-item">
                    <div className="hover-bg"> <a data-lightbox-gallery="gallery1">
                        <div className="hover-text">
                            <button className='btn btn-default btn-lg' onClick={() => this.props.removePortfolio(this.props.id)}>Delete</button>
                            <button className='btn btn-default btn-lg' onClick={() => this.editButton()}>Edit</button>
                        </div>
                        {console.log(this.props.photo)}
                        <img className="img-responsive" src={this.props.photo} /> </a> </div>
                </div>
                <div className="portfolio-item">
                    <div className="portfolio-item">
                        <div className="hover-text">
                            {this.props.description}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
{/* <button className='btn btn-default btn-lg' onClick={editPort}>Edit</button> */ }