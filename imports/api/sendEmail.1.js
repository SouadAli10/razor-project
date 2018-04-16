import { Meteor } from 'meteor/meteor';
import { Email } from 'meteor/email';
import {check } from 'meteor/check'


const to='fadimoubassaleh@gmail.com'
// const from='blah@gmail.com'
const subject='contact mail from the website on '+(new Date()).toString()



Meteor.methods({
	'sendEmail'(name, from,filename,file, message) {
    
	check([name], [String]);
	// check([email], [String]);
	// check([message], [String]);

	this.unblock();
	
	const attachments = []

	if(file){
		// check([filename],[String])
		// check([file],[Image])
		const fileConfig = {filename,content:file}
		attachments.push(fileConfig)
	}
	console.log(to, from, subject, name, message, attachments);

    Email.send({ to, from, subject, attachments,
        html: message + 'With meteor it&apos;s easy to set up <strong>HTML</strong> <span style="color:red">emails</span> too.' });
    console.log('mail sent')
  }
});