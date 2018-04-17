import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import { check } from 'meteor/check'

Meteor.methods({
    'sendEmail'(props, fileName, contents, endUpload) {
        props.to = 'fadimoubassaleh@gmail.com'
        props.subject = 'contact mail from the website on ' + (new Date()).toString()
        const attachments = []

        if (contents) { 
            const fileConfig = { filename: fileName, path: contents }
            attachments.push(fileConfig)
        }

        Email.send({
            to: props.to,
            subject: props.subject,
            attachments: attachments,
            html: props.html
        })
        endUpload;
        console.log('mail sent')
    }
})