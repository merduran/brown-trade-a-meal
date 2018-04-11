import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedTab: this.props.selectedTab,
        };
    }

    componentDidMount(){
        this.selectedTab();
    }

    selectedTab(){
        $('#' + this.state.selectedTab).css('border-bottom', '3px solid white')
    }

    render() {
        let button = <a className="navbar-brand" href = "/" id = "a-logout"> Logout </a>;
        if (this.props.loggedIn == "off") {
            button = ""
        }
        
        return ( 
        <div className="navbar navbar-default width 100" id="div-header"> 
            <a className="logo" href = "/"> Brown Trade-A-Meal </a>
            <div className="tab_container">
                <div className="tab" id="home-tab">
                    <a id=""href = "/">Home</a>
                </div>
                <div className="tab" id="market-tab">
                    <a href = "/market">Market</a>
                </div>
                <div className="tab" id="profile-tab">
                    <a href = "/profile">Profile</a>
                </div>
                <div className="tab" id="login-tab">
                    <a href = "/login">Login</a>
                </div>
            </div>
            {button}
        </div>
        )
    }
}
