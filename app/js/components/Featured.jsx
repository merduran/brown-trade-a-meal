import React from 'react';
import Offer from './Offer.jsx'
export default class Featured extends React.Component {
    constructor(props) {
        super(props);
        this.offers = [
            { title:"Selling Today", location: ["Ratty"], number: "2", price: "5.99", type: "Sell" },
            { title:"Title 1", location: ["Ratty", "VDUB"], number: "5", price: "5.99", type: "Buy" }, 
            { title:"Title 2", location: ["Joes"], number: "2", price: "5.99", type: "Sell" }, 
            { title:"Title 3", location: ["All"], number: "2", price: "5.99", type: "Sell" },  
        ];
    }
    render() {
        var i = 0;
        let featured = this.offers.map((offer) => {
            i++;
            return(
                <Offer 
                    key={i} 
                    title={offer.title} 
                    location={offer.location} 
                    number={offer.number} 
                    price={offer.price} 
                    type={offer.type} 
                    // toggleOfferExpansion={(expandOfferCallback) => this.toggleOfferExpansion(expandOfferCallback)}
                    // getClickedOffer={(clickedOfferCallback) => this.getClickedOffer(clickedOfferCallback)}
                />
            );
        });
        return (
            <div className = "featured-body">
                <p className = "p-featured"> Latest Offers </p>
                <ul className = "ul-container-scrollable">
                    {featured}
                </ul>
            </div>
        )
  }
}
