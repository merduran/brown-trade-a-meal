import React from 'react';
// import DetailedOffer from './DetailedOffer.js'
import js from '../../js/market.js'

export default class Offer extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick(){
        if (window.location.href === 'http://localhost:8080/'){
            window.location.href = '/market';
        } else {
            this.props.toggleOfferExpansion(true);
            this.props.getClickedOffer(
                {
                    title: this.props.title,
                    location: this.props.location, 
                    number: this.props.number,
                    price: this.props.price,
                    type: this.props.type,
                }
            );
        }
        
    }

    render() {
        var i = 0
        let html_array = this.props.location.map((el) => {
            i++;
            return <li className="li-location" key={i}> 
            <p className = "p-location-tag"> {el} </p>
            </li>

        })
        return (            
            <li className="li-offer" onClick={() => this.handleClick()}>
                <div className="div-offer">
                    <div className="offer-title">
                        <p className="p-offer-title"> {this.props.title} </p>
                    </div>
                    <div className="offer-description">
                        <p className="p-location">Locations</p>
                        <ul className="ul-location">
                            {html_array}
                        </ul>
                    </div>
                    <div className="offer-footer">
                        <p className="p-stock"> {this.props.number} in stock.</p>
                        <p className="price">${this.props.price} </p>
                    </div>
                </div>
            </li>
        )
    }
}
