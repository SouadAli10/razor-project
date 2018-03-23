import React from 'react';

export default class ShowEditPortfolio extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeDiscrp = this.handleChangeDiscrp.bind(this);
        this.state = {
            id: this.props.showFromArray.id,
            title: this.props.showFromArray.title,
            discription: this.props.showFromArray.discription,
            handleChangeTitle: this.handleChangeTitle,
            handleChangeDiscrp: this.handleChangeDiscrp
        }
    }
    handleChangeTitle(e) {
        this.setState({ title: e.target.value })
    }
    handleChangeDiscrp(e) {
        this.setState({ discription: e.target.value })
    }
    render() {
        debugger;
        console.log(this.props);
        return (
            <div >
                <div >
                    <h2 >Edit Portfolio</h2>
                    <hr />
                    <div className="row">
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
                                        <input type="text" id="add_title" className="form-control" placeholder="add title" value={this.state.title} onChange={this.state.handleChangeTitle} required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <textarea name="discription" id="discription" className="form-control" rows="4" placeholder="discription" value={this.state.discription} onChange={this.state.handleChangeDiscrp} required />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-default btn-lg" onClick={() => this.props.changePortfolio(this.state.id, this.state.title, this.state.discription)} >SAVE</button>
                            <button type="submit" onClick={this.props.HiddenEditBox} className="btn btn-default btn-lg" >CANCEL</button>
                            <br />
                        </div>


                    </div>
                </div>
            </div>
        )
    }
}