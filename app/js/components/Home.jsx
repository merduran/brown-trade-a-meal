import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Login from  './Login.jsx';
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        } 
    }
    render() {
        return (
            <div className="div-body">
                <Header loggedIn="off"/>
                <Login />
                <Footer />
            </div>
        )
  }
}
