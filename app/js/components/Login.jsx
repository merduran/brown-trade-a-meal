import React from 'react';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="div-login">
                <div className="panel panel-login" id = "outer-panel">
                    <div className="panel-heading">
                        <div id = "login-panel">
                            <a href="#">Login</a>
                        </div>
                        <div id = "register-panel">
                            <a href="#">Register</a>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <form id="form-login" action="/" method="post">
                                    <div className="form-group">
                                        <input type="text" name="username" className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password"className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6 col-sm-offset-3">
                                                <input type="submit" name="login-submit" className="form-control btn btn-login" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <form id="form-register" action="/" method="post">
                                    <div className="form-group">
                                        <input type="text" name="username"className="form-control" placeholder="Username" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" name="email" className="form-control" placeholder="Email Address" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="password" className="form-control" placeholder="Password" />
                                    </div>
                                    <div className="form-group">
                                        <input type="password" name="confirm-password" className="form-control" placeholder="Confirm Password" />
                                    </div>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-sm-6 col-sm-offset-3">
                                                <input type="submit" name="register-submit" id="register-submit" className="form-control btn btn-register" value="Register Now" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}


