import React from 'react';
export default () =>
    <div id="contact" className="text-center">
        <div className="container">
            <div className="section-title center">
                <h2>Get In Touch</h2>
                <hr />
            </div>
            <div className="col-md-8 col-md-offset-2">
                <form name="sentMessage" id="contactForm">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="text" id="name" className="form-control" placeholder="Name" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" id="email" className="form-control" placeholder="Email" required="required" />
                                <p className="help-block text-danger"></p>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required />
                        <p className="help-block text-danger"></p>
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