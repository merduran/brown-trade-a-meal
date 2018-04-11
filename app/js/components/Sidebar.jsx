import React from 'react';


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    displayOtherOffersBar(){
      if (this.props.expandOffer){
        var i = 0;
        let other_offers = this.props.otherOffers.map((offer) => {
          i++;
          console.log("offer = ", offer);
          var clicked_offer = offer;
          return(
            <li 
              className="li-categories"
              key = {i}
              onClick = {() => this.props.getClickedOffer(clicked_offer)}>
              {offer.title}
            </li>
          );
        });
        return(
          <div className = "filter-body">
            <p className="categories-text"> Other Offers </p>
            <ul className="ul-categories">
              {other_offers}
            </ul>
          </div>
        );
      }
    }

    displayFilterBar(){
      if (!this.props.expandOffer){
        return(
          <div className = "filter-body">
            <p className="categories-text"> Filter by </p>
            <ul className="ul-categories">
              <li className="li-categories">Time</li>
              <li className="li-categories">Rating</li>
              <li className="li-categories">Location</li>
              <li className="li-categories">Price</li>
            </ul>
          </div>
        );
      }
    }

    render() {
      return (
        <div>
          {this.displayFilterBar()}
          {this.displayOtherOffersBar()}
        </div>
      );
    }
}

