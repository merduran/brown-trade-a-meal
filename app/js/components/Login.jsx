import React from 'react';
import js from '../../js/login.js'
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
            <Header loggedIn="off" selectedTab = "login-tab"/> 
            <div className = "login-container">
                <div className="div-login">
                    <div className="panel panel-login" id = "outer-panel">
                        <div className="panel-heading">
                            <div id = "panel-login" className="panel-active">
                                Login
                            </div>
                            <div id = "panel-register">
                                Register
                            </div>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <form id="form-login" action="/" method="post">
                                        <div className="form-group">
                                            <input type="text" name="login-username" className="form-control" 
                                            placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="login-password" className="form-control" 
                                            placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="login-submit" 
                                                    className="form-control btn btn-login" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <form id="form-register" action="/" method="post">
                                        <div className="form-group">
                                            <input type="text" name="register-username" className="form-control" 
                                            placeholder="Username" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="register-email" className="form-control"
                                             placeholder="Email Address" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="register-password" className="form-control" 
                                            placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" name="register-confirm" className="form-control" 
                                            placeholder="Confirm Password" />
                                        </div>
                                        <div className="form-group">
                                            <div className="row">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" name="register-submit" 
                                                    className="form-control btn btn-register"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            </div> 
        )
    }
}


