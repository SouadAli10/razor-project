import React from 'react';
import Divider from "../divider.js"

export default class ShowEditPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeDiscrp = this.handleChangeDiscrp.bind(this);
        this.handleChangeURL = this.handleChangeURL.bind(this);
        this.state = {
            
            handleChangeDiscrp: this.handleChangeDiscrp,
            handleChangeURL: this.handleChangeURL,
            description: this.props.showFromArray[0].description,
            URL: this.props.showFromArray[0].URL
        }
    }
    
    componentWillReceiveProps(nextProps) {
        const description = nextProps.showFromArray[0].description
        if (description !== this.state.description) {
            this.setState({ description })
        }
        const URL = nextProps.showFromArray[0].URL
        if (URL !== this.state.URL) {
            this.setState({ URL })
        }
    }
    handleChangeDiscrp(e) {
        this.setState({ description: e.target.value })
    }
    handleChangeURL(e) {
        this.setState({ URL: e.target.value })
    }
    render() {
        return (
            <div>
                <div >
                    <h2 >Edit Portfolio</h2>
            <Divider/>

                    <div className="form-group">
                        <textarea name="description" id="description" className="form-control" rows="4" placeholder="description" value={this.state.description} onChange={this.state.handleChangeDiscrp} required />
                        <input name='projectURL' id='projectURL' value={this.state.URL} onChange={this.state.handleChangeURL} className="form-control" required />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-default btn-lg" onClick={() => this.props.changePortfolio(this.props.showFromArray[0]._id, this.state.description, this.state.URL)} >SAVE</button>
                    <button type="submit" onClick={this.props.HiddenEditBox} className="btn btn-default btn-lg" >CANCEL</button>
                    <br />
                </div>
            </div>
        )
    }
}
