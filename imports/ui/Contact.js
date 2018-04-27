import React, { Component } from 'react';
import '../api/sendEmail';
import { Message, Icon } from 'semantic-ui-react';
import Divider from "./divider.js"

messageNow = (iconName, load, headerInput, messageInput) => {
    return (
        <Message icon>
            <Icon name={iconName} loading={load} />
            <Message.Content>
                <Message.Header>{headerInput}</Message.Header>
                {messageInput}
            </Message.Content>
        </Message>
    )
}


afterSubmit = (loadORdone, message, isError) => {
    if (isError) {
        console.error(message)
    } else {
        console.log(message)
    }
}




export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            nowState: "noThing",
            errorMessage: ''
        }
    }
    endUpload = () => {
        this.onLoadState("endLoad");
    }
    onSubmit = (evt, tester) => {
        evt.preventDefault()
        const form = evt.target
        const name = form.name.value
        const email = form.email.value
        const message = form.message.value
        const file = form.file.files[0]
        const mail = {
            to: "",
            subject: '',
            attachments: file,
            html: `
            <h1> This is a message from your website 'RAZOR'</h1>
            <hr>
            <strong>from: </strong> `+ name + `<br>
            <strong>email: </strong> `+ email + `<br>
            <strong>message: </strong><br> `+ `<h2>` + message + `</h2>` + `
            `
        }

        if (!file) {
            Meteor.call('sendEmail', mail);
            this.afterSubmit("Uploading")
            return;
        }

        const size = file.size
        const type = file.type.slice('/')[0];
        const path = file.path

        // if (type !== 'image') {
        //     this.afterSubmit(file.name + " is not an image", true)
        //     return
        // }

        const maxSize = 3
        if (size > (maxSize * 1000000)) {
            this.afterSubmit(file.name + " is too large, " + maxSize + "Mb max plz", true)
            return
        }

        const reader = new FileReader();
        reader.onload = (event) => {
            const contents = event.target.result
            const fileName = file.name
            Meteor.call('sendEmail', mail, fileName, contents, endUpload = this.endUpload);
            this.onLoadState("onLoad");
        }
        reader.onerror = (error) => {
            console.error(error);
            this.onLoadState("error", error.message);
        }

        reader.readAsDataURL(file)
    }
    showNow() {
        if (this.state.nowState == "noThing") {
            return
        } else if (this.state.nowState == "onLoad") {
            return messageNow("circle notched", true, "Uploading", "Your attachment getting uploaded soon")
        } else if (this.state.nowState == "error") {
            return messageNow("dont", false, "ERROR", "Sorry, there was an error: " + errorMessage)
        } else if (this.state.nowState == "endLoad") {
            document.getElementById("contactForm").reset();
            return messageNow("check", false, "Your Message was sent", "thank you! We will get back in touch soon.")
        }
    }
    onLoadState = (show, err) => {
        if (err) {
            this.setState({
                nowState: show,
                errorMessage: err
            })
        } else {
            this.setState({
                nowState: show,
                errorMessage: ""
            })
        }
    }

    render() {
        return (
            <div id="contact" className="text-center">
                <div className="container">
                    <div className="section-title center">
                        <h2>Get In Touch</h2>
                        <Divider />
                    </div>
                    <div className="col-md-8 col-md-offset-2">
                        <form name="sentMessage" id="contactForm" onSubmit={this.onSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" id="name" name="name" className="form-control" placeholder="Name" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="email" id="email" name="email" className="form-control" placeholder="Email" required="required" />
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group">
                                <textarea name="message" id="message" name="message" className="form-control" rows="4" placeholder="Message" required ></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="file" id="upload" name="file" className="form-control" placeholder="Upload" />
                                    <p className="help-block text-danger"></p>
                                </div>
                            </div>
                            <div id="success"></div>
                            <button type="submit" className="btn btn-default btn-lg">Send Message</button>
                            {this.showNow()}
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}

