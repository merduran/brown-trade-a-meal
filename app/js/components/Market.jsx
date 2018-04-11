import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Offer from './Offer.jsx'
import SearchOffers from './SearchOffers.jsx'
import Sidebar from './Sidebar.jsx'
import ExpandedOffer from './ExpandedOffer.jsx'


export default class Market extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expandOffer: false,
            clickedOffer: '',
        };
        this.offers = [
            { title:"Selling Today", location: ["Ratty"], number: "2", price: "5.99", type: "Sell" },
            { title:"Title 1", location: ["Ratty", "VDUB"], number: "5", price: "5.99", type: "Buy" }, 
            { title:"Title 2", location: ["Joes"], number: "2", price: "5.99", type: "Sell" }, 
            { title:"Title 3", location: ["All"], number: "2", price: "5.99", type: "Sell" },  
        ];
    }

    toggleOfferExpansion(expandOfferCallback){
        this.setState({ expandOffer: expandOfferCallback });
    }

    getClickedOffer(clickedOfferCallback){
        this.setState({ clickedOffer: clickedOfferCallback });
    }

    displayOffer(){
        if (!this.state.expandOffer){
            var i = 0;
            let offers = this.offers.map((offer) => {
                i++;
                return(
                    <Offer 
                        key={i} 
                        title={offer.title} 
                        location={offer.location} 
                        number={offer.number} 
                        price={offer.price} 
                        type={offer.type} 
                        toggleOfferExpansion={(expandOfferCallback) => this.toggleOfferExpansion(expandOfferCallback)}
                        getClickedOffer={(clickedOfferCallback) => this.getClickedOffer(clickedOfferCallback)}
                    />
                );
            });
            return(
                <div className = "market-body">
                    <Sidebar expandOffer = {this.state.expandOffer}/>
                    <div className = "offer-body">
                        <ul className = "ul-container">
                            {offers}
                        </ul>
                    </div>
                </div>

                
            );
        }  
    }

    expandOffer(){
        if (this.state.expandOffer){
            var otherOffers = this.offers.slice();
            var idx = 0;
            for (var i = 0; i < otherOffers.length; i++){
                if ((otherOffers[i].title == this.state.clickedOffer.title) &&
                    (otherOffers[i].location == this.state.clickedOffer.location) &&
                    (otherOffers[i].price == this.state.clickedOffer.price) &&
                    (otherOffers[i].type == this.state.clickedOffer.type)){  
                    idx = i;
                    break;
                }
            }
            otherOffers.splice(idx, 1);
            return (
                <div className = "market-body">
                    <Sidebar 
                        expandOffer = {this.state.expandOffer} 
                        otherOffers = {otherOffers} 
                        getClickedOffer={(clickedOfferCallback) => this.getClickedOffer(clickedOfferCallback)}
                    />
                    <ExpandedOffer
                        title={this.state.clickedOffer.title} 
                        location={this.state.clickedOffer.location} 
                        number={this.state.clickedOffer.number} 
                        price={this.state.clickedOffer.price} 
                        type={this.state.clickedOffer.type}
                        toggleOfferExpansion={(expandOfferCallback) => this.toggleOfferExpansion(expandOfferCallback)}/>  
                </div>
            );
        }
    }


    render() {
        return ( 
            <div>
                <Header selectedTab = "market-tab"/>
                <div className="div-outer-body">
                    <div className="div-body">
                    <SearchOffers/>
                        {this.displayOffer()}
                        {this.expandOffer()}
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}
