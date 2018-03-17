import React from 'react';

export default class Offer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( 
            <li className="li-offer">
                <div className="div-offer">
                    <div className="offer-title">
                    <p className="p-offer-title"> {this.props.title} </p>
                    </div>
                    <div className="offer-description">
                    <ul className="ul-days">
                    </ul>
                    <p className="p-location">Location: {this.props.location} </p>
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
