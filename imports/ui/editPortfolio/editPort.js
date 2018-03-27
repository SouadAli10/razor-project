import React from 'react';

export default class ShowEditPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDiscrp = this.handleChangeDiscrp.bind(this);
        this.state = {

            handleChangeDiscrp: this.handleChangeDiscrp,
            description: this.props.showFromArray[0].description
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const description = nextProps.showFromArray[0].description
        if(description !== this.state.description){
            this.setState({ description })
        }
    }
    handleChangeDiscrp(e) {
        this.setState({ description: e.target.value })
    }
    render() {
        return (
            <div>
                {console.log(this.props.showFromArray[0])}
                <div >
                    <h2 >Edit Portfolio</h2>
                    <hr />
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2">
                            <div className="row">
                                <div className="form-group">
                                    <textarea name="description" id="description" className="form-control" rows="4" placeholder="description" value={this.state.description} onChange={this.state.handleChangeDiscrp} required />
                                    <p className="help-block text-danger"></p>
                                </div>
                                <div id="success"></div>
                                <button type="submit" className="btn btn-default btn-lg" onClick={() => this.props.changePortfolio(this.props.showFromArray[0]._id,  this.state.description)} >SAVE</button>
                                <button type="submit" onClick={this.props.HiddenEditBox} className="btn btn-default btn-lg" >CANCEL</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
