import React from 'react';
import '../api/sendEmail';

afterSubmit = (message, isError) => {
    if (isError) {
        console.error(message)
    } else {
        console.log(message)
    }
}

onSubmit = (evt) => {
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

    console.log(file.name)
    if (!file) {
        Meteor.call('sendEmail', mail);
        this.afterSubmit("thank you! We will get back in touch soon")
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
    console.log(reader)

    reader.onload = (event) => {
        const contents = event.target.result
        console.log(event.target.result)
        const fileName = file.name
        Meteor.call('sendEmail', mail, fileName, contents);
        this.afterSubmit("thank you! We will get back in touch soon")
    }
    reader.onerror = (error) => {
        console.error(error);
        this.afterSubmit("Sorry, there was an error: " + error.message, true)
    }

    reader.readAsDataURL(file)
}

export default () => (
    <div id="contact" className="text-center">
        <div className="container">
            <div className="section-title center">
                <h2>Get In Touch</h2>
                <hr />
            </div>
            <div className="col-md-8 col-md-offset-2">
                <form name="sentMessage" id="contactForm" onSubmit={onSubmit}>
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
                    <div className="form-group">
                        <textarea name="message" id="message" name="message" className="form-control" rows="4" placeholder="Message" required />
                        <p className="help-block text-danger"></p>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="file" id="upload" name="file" className="form-control" placeholder="Upload" />
                            <p className="help-block text-danger"></p>
                        </div>
                    </div>
                    <div id="success"></div>
                    <button type="submit" className="btn btn-default btn-lg">Send Message</button>
                </form>
                <div className="social">
                    <ul>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        <li><a href="#"><i className="fa fa-behance"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
)
