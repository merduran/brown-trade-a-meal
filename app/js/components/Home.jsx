import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SearchOffers from './SearchOffers.jsx'
import Featured from './Featured.jsx'
import js from '../home.js'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        } 
    }
    render() {
        return (
            <div className="div-body">
                <Header loggedIn="off" />
                <div className="img-hero">
                    <h1 className="h1-hero"> Save on deals every day</h1>
                    <button type="button" className="btn btn-default" id="home-button">
                    Shop now</button>
                </div>
                <Featured />
                <Footer />
            </div>
        )
  }
}
