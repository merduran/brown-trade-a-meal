import React from 'react';
import Offer from './Offer.jsx'
export default class Featured extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className = "featured-body">
                <p className = "p-featured"> Latest Offers </p>
                <ul className = "ul-container">
                    <Offer title="Selling Today" location="Ratty" number="2" price="5.99" type="Sell"/>
                    <Offer title="Selling this week" location="Ratty" number="3" price="5.99" type="Sell"/>
                    <Offer title="Title 1" location="Ratty" number="5" price="5.99" type="Buy"/>
                </ul>
            </div>
        )
  }
}
