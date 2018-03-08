import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Offer from './Offer.jsx'
import SearchOffers from './SearchOffers.jsx'
export default class Market extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( 
            <div className="div-body">
                <Header />
                <SearchOffers />
                <div className = "offer-body">
                    <Offer />
                    <Offer />
                    <Offer />
                </div>
                <Footer />
            </div>
        )
    }
}
