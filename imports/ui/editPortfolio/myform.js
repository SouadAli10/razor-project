import React, { Component } from 'react';
import ShowPortfolio from './showPortfolio';
import EditPort from './editPort.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withTracker } from 'meteor/react-meteor-data';
import { Mongo } from 'meteor/mongo';
import { Portfolios, Images } from '../../api/portfolios.js';
import { Meteor } from 'meteor/meteor';
import Divider from "../divider.js"

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.handleChangeDiscrp = this.handleChangeDiscrp.bind(this);
        this.handleChangeUpload = this.handleChangeUpload.bind(this);
        this.addPortfolio = this.addPortfolio.bind(this);
        this.removePortfolio = this.removePortfolio.bind(this);
        this.showPortEditor = this.showPortEditor.bind(this);
        this.showEditBox = this.showEditBox.bind(this);
        this.HiddenEditBox = this.HiddenEditBox.bind(this);
        this.changePortfolio = this.changePortfolio.bind(this);

        this.state = {
            handleChangeDiscrp: this.handleChangeDiscrp,
            handleChangeUpload: this.handleChangeUpload,
            addPortfolio: this.addPortfolio,
            removePortfolio: this.removePortfolio,
            showPortEditor: this.showPortEditor,
            showEditBox: this.showEditBox,
            HiddenEditBox: this.HiddenEditBox,
            changePortfolio: this.changePortfolio,
            uploadVal: '',
            showFromArray: "",
            description: "",
            comment: "",
            editBox: false
        }

    }
    changePortfolio(portfolioID, description) {
        Meteor.call("portfolios.edit", portfolioID, description)
        this.HiddenEditBox();
    }
    showPortEditor() {
        if (this.state.editBox) {
            return (
                <EditPort showFromArray={this.state.showFromArray} HiddenEditBox={this.HiddenEditBox} changePortfolio={this.state.changePortfolio} />
            );
        }
    }
    showEditBox(id) {
        const portfolioNow = Portfolios.find({ _id: id }).fetch()
        this.setState({
            editBox: true,
            showFromArray: portfolioNow
        });
    }
    HiddenEditBox() {
        this.setState({
            editBox: false
        });
    }
    handleChangeDiscrp(e) {
        this.setState({ description: e.target.value })
    }
    handleChangeUpload(e) {
        this.setState({ uploadVal: e.target.value })
    }
    removePortfolio(id) {
        Meteor.call("portfolios.remove", id)
    }
    addPortfolio(e) {

        if (this.state.description == "") {
            this.setState({
                comment: "HEY, there are filds empty"
            })

        } else if (this.state.description != "") {
            const description = this.state.description
            const file = this.fileInput.files[0]
            const upload = Images.insert({
                file,
                streams: 'dynamic',
                chunkSize: 'dynamic'
            }, false)
            upload.on('start', () => console.log('upload started'))
            upload.on('end', (err, fileObj) => {
                if (err) { alert('oh no') }
                else {
                    const image_id = fileObj._id
                    const image = fileObj.name
                    const ext = fileObj.extension
                    const description = this.state.description
                    const photo = image_id + "." + ext
                    Meteor.call("portfolios.add", description, photo)
                    this.setState({
                        description: "",
                        uploadVal: ''
                    })
                }
            })
            upload.start();
        }
    }
    render() {
        return (
            <div className="main-div-edit" >
                <Link className="btn btn-default btn-lg button-edit-page" to="/">Home</Link>
                <div className="col-md-8 col-md-offset-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input ref={el => this.fileInput = el} type="file" id="add_photo" className="form-control" accept="image/*" placeholder="add photo" value={this.state.uploadVal} onChange={this.state.handleChangeUpload} required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea name="description" id="description" value={this.state.description} onChange={this.state.handleChangeDiscrp} className="form-control" rows="4" placeholder="description" required />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <div>{this.state.comment}</div>
                    <button type="submit" className="btn btn-default btn-lg" onClick={this.state.addPortfolio} >ADD</button>
                    <br />
                </div>

                <Divider />
                <div className="protfolio-main" id="col-gray">
                    <br />
                    {this.showPortEditor()}
                    <Divider />
                    {this.props.portfolioM.map((props, key) => {
                        return (
                            <ShowPortfolio key={props.id || key} id={props._id} description={props.description} photo={props.photo} removePortfolio={this.removePortfolio} showEditBox={this.showEditBox} HiddenEditBox={this.HiddenEditBox} />

                        )

                    })}

                </div>
            </div>
        )
    }

}
export default withTracker(() => {
    Meteor.subscribe('portfolios')
    return {
        portfolioM: Portfolios.find({}).fetch(),

    };
})(AddForm);
