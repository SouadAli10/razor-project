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
            <div className="portfolios">
                <div className="part-1" >
                    <img className="img-responsive" src={"../portfolioIMG/" + this.props.photo} />
                    <button className='btn btn-default btn-lg' onClick={() => this.props.removePortfolio(this.props.id)}>Delete</button>
                    <button className='btn btn-default btn-lg' onClick={() => this.editButton()}>Edit</button>
                </div>
                <div className="part-2" >
                    {this.props.description}
                </div>
                <hr className="nonStyleHR"/>
            </div>
        )
    }
}