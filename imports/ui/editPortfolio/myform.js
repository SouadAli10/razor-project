import React, { Component } from 'react';
import ShowPortfolio from './showPortfolio';
import EditPort from './editPort.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import { console } from 'meteor/tools';

export default class AddForm extends Component {
    constructor(props) {
        super(props);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDiscrp = this.handleChangeDiscrp.bind(this);
        this.addPortfolio = this.addPortfolio.bind(this);
        this.removePort = this.removePort.bind(this);
        this.showEditBox = this.showEditBox.bind(this);
        this.HiddenEditBox = this.HiddenEditBox.bind(this);
        this.showPortEditor = this.showPortEditor.bind(this);
        this.changePortfolio = this.changePortfolio.bind(this);

        this.state = {
            portfolio: [
                { id: 1, title: "title 1", discription: "Hello my friends", photo: "img/portfolio/01-small.jpg" },
                { id: 2, title: "title 2", discription: "Hello my friends", photo: "img/portfolio/02-small.jpg" },
                { id: 3, title: "title 3", discription: "Hello my friends", photo: "img/portfolio/03-small.jpg" },
                { id: 4, title: "title 3", discription: "Hello my friends", photo: "img/portfolio/03-small.jpg" },
                { id: 5, title: "title 4", discription: "Hello my friends", photo: "img/portfolio/04-small.jpg" }
            ],
            handleChangeTitle: this.handleChangeTitle,
            handleChangeDiscrp: this.handleChangeDiscrp,
            addPortfolio: this.addPortfolio,
            removePort: this.removePort,
            HiddenEditBox: this.HiddenEditBox,
            showEditBox: this.showEditBox,
            showPortEditor: this.showPortEditor,
            changePortfolio: this.changePortfolio,
            nextId: 6,
            titleInput: "",
            discriptionInput: "",
            comment: "",
            editBox: false,
            editTitle: '',
            editDisc: '',
            showFromArray: ''
        }
    }
    // componentWillReceiveProps(nextProps) {
    //     this.setState({ ...nextProps })
    // }
    // editPort(tit)

    changePortfolio(id, title, discription) {
        var portfolioArray = this.state.portfolio
        var counter = portfolioArray.map((prop) => {
            if (id == prop.id) {
                prop.title = title
                prop.discription = discription
            }
        })
        this.setState({
            portfolio: portfolioArray
        })
        this.HiddenEditBox();
    }
    showPortEditor() {
        console.log(this.state.editBox)
        if (this.state.editBox) {
            return (
                <EditPort showFromArray={this.state.showFromArray} HiddenEditBox={this.HiddenEditBox} changePortfolio={this.state.changePortfolio} />
            );
        }
    }
    showEditBox(id) {
        const portfolio = this.state.portfolio.find((port, index) => port.id == id)

        debugger;
        this.setState({
            editBox: true,
            showFromArray: portfolio
            // editTitle = this.state.showFromArray.title,
            // editDisc = this.state.showFromArray.discription
        });
    }
    HiddenEditBox() {
        debugger;
        this.setState({
            editBox: false
        });
    }
    removePort(id) {
        console.log("hi" + id)
        this.setState({
            portfolio: this.state.portfolio.filter((port, index) => port.id !== id)
        });
    }
    handleChangeTitle(e) {
        this.setState({ titleInput: e.target.value })
    }
    handleChangeDiscrp(e) {
        this.setState({ discriptionInput: e.target.value })
    }
    addPortfolio(e) {
        if (this.state.titleInput == "" || this.state.discriptionInput == "") {
            this.setState({
                comment: "HEY, there are filds empty"
            })
        } else if (this.state.titleInput != "" || this.state.discriptionInput != "") {
            let portfolio = this.state.portfolio.slice();
            portfolio.push({ id: this.state.nextId, title: this.state.titleInput, discription: this.state.discriptionInput, photo: "./04-small.jpg" })
            this.setState({
                portfolio: portfolio,
                nextId: this.state.nextId + 1,
                titleInput: "",
                discriptionInput: "",
                comment: ""
            });
            console.log(this.state.nextId)
        }
    }

    render() {
        return (
            <div >
                <Link className="btn btn-default btn-lg" to="/">Home</Link>
                <div className="col-md-8 col-md-offset-2">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="file" id="add_photo" className="form-control" accept="image/*" placeholder="add photo" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="add_title" value={this.state.titleInput} onChange={this.state.handleChangeTitle} className="form-control" placeholder="add title" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea name="description" id="description" value={this.state.discriptionInput} onChange={this.state.handleChangeDiscrp} className="form-control" rows="4" placeholder="description" required />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div id="success"></div>
                    <div>{this.state.comment}</div>
                    <button type="submit" className="btn btn-default btn-lg" onClick={this.state.addPortfolio}>ADD</button>
                    <br />
                </div>

                <hr className="allWidth" />
                <div className="col-md-8 col-md-offset-2 gray-back" id="col-gray">
                    <br />
                    {this.showPortEditor()}
                    <hr />
                    {this.state.portfolio.map((props) => {
                        return (
                            <ShowPortfolio key={props.id} id={props.id} photo={props.photo} title={props.title} removePort={this.removePort} showEditBox={this.showEditBox} />
                        )

                    })}
                </div>

            </div>
        );
    }
}

