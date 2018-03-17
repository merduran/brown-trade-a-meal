import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Offer from './Offer.jsx'
import SearchOffers from './SearchOffers.jsx'
import Sidebar from './Sidebar.jsx'

export default class Market extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( 
            <div className="div-outer-body">
                <div className="div-body">
                    <Header />
                    <SearchOffers />
                    <div className = "market-body">
                        <Sidebar />
                        <div className = "offer-body">
                            <ul className = "ul-container">
                                <Offer title="Selling Today" location="Ratty" number="2" price="5.99" type="Sell"/>
                                <Offer title="Selling this week" location="Ratty" number="3" price="5.99" type="Sell"/>
                                <Offer title="Title 1" location="Ratty" number="5" price="5.99" type="Buy"/>
                                <Offer title="Title 1" location="Ratty" number="2" price="5.99" type="Buy"/>
                                <Offer title="Title 1" location="Ratty" number="2" price="5.99" type="Buy"/>
                            </ul>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        )
    }
}
