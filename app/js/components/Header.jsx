import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let button = <a className="navbar-brand" href = "/" id = "a-logout"> Logout </a>;
        if (this.props.loggedIn == "off") {
            button = ""
        }
        return ( 
        <div className="navbar navbar-default width 100" id="div-header"> 
            <a className="logo" href = "/"> Brown Trade-A-Meal </a>
            {button}
        </div>
        )
    }
}
