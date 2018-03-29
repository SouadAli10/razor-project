import { Meteor } from 'meteor/meteor';

Meteor.startup(function(){
    Meteor.Mailgun.config({
      username: 'anthony nakhle',
      password: 'Anthony.na75'
    });
  });

  // In your server code: define a method that the client can call
  Meteor.methods({
    sendEmail: function (mailFields) {
        console.log("about to send email...");
        check([mailFields.to, mailFields.from, mailFields.subject, mailFields.text, mailFields.html], [String]);

        // Let other method calls from the same client start running,
        // without waiting for the email sending to complete.
        this.unblock();

        Meteor.Mailgun.send({
            to: mailFields.to,
            from: mailFields.from,
            subject: mailFields.subject,
            text: mailFields.text,
            html: mailFields.html
        });
        console.log("email sent!");
    }
  });

  Meteor.call('sendEmail',{
    to: 'anthony.na75@gmail.com',
    from: 'no-reply@where-ever.com',
    subject: 'I really like sending emails with Mailgun!',
    text: 'Mailgun is totally awesome for sending emails!',
    html: 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.'
  });