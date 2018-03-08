import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return ( 
        <div className="navbar navbar-default width 100"> 
            <a className="navbar-brand" href = "/"> Brown Trade-A-Meal </a>
            <a className="navbar-brand" href = "/" id = "a-logout"> Logout </a>
        </div>
        )
    }
}
