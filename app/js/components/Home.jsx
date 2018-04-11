import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import SearchOffers from './SearchOffers.jsx'
import Featured from './Featured.jsx'
import js from '../home.js'
export default class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="div-body">
                <Header loggedIn="off" selectedTab="home-tab"/>
                <div className="img-hero">
                    <h1 className="h1-hero"> Save on deals every day</h1>
                    <button type="button" id="home-button">
                    Shop now</button>
                </div>
                <Featured />
                <Footer />
            </div>
        )
  }
}
