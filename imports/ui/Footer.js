import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default () =>
    <div id="footer">
        <div className="container text-center">
            <div className="fnav">
                <p>Copyright &copy; 2016 Magnum. Designed by <a href="http://www.templatewire.com" rel="nofollow">TemplateWire</a></p>
                <Link to="/edit">login/edit portfolio</Link>
            </div>
        </div>
    </div>