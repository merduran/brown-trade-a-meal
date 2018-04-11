import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Offer from './Offer.jsx'
import SearchOffers from './SearchOffers.jsx'
import Sidebar from './Sidebar.jsx'

export default class ExpandedOffer extends React.Component {
    constructor(props) {
        super(props);
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
            <div>
                <div className = "market-body">
                        <div className = "expanded-offer-body">
                        <button onClick={() => this.props.toggleOfferExpansion(false)}>
                            Back to Market
                        </button>
                        <h1 className = "expanded-offer-title">Selling {this.props.number} Credits for ${this.props.price}</h1>
                        <hr/>
                        <div className = "expanded-offer-content-container">
                            <div className = "expanded-offer-content">
                                <div className = "expanded-offer-time">
                                    <h2 className="expanded-offer-time-title">Meeting Time</h2>
                                    <h3 className = "expanded-offer-meeting-days">Mon, Tu, Wed</h3>
                                    <button type="button" id="contact-button">Get Deal</button>
                                </div>
                                <div className = "expanded-offer-location">
                                    <h2 className="expanded-offer-time-title">Meeting Location</h2>
                                    <ul className="ul-location">
                                        {html_array}
                                    </ul>
                                </div>
                            </div>
                            <hr/>
                            <div className = "expanded-offer-content" onClick={() => window.location.href = '/profile'}>
                                <h2 className="expanded-offer-time-title">Dealer Profile</h2>
                                    <div className = "expanded-offer-contact-profile-info">
                                        <img className = "expanded-offer-contact-profile-photo" src="https://image.flaticon.com/icons/svg/181/181549.svg"/>
                                        <h3 className = "expanded-offer-contact-profile-username">Murat Erduran</h3>
                                    </div>
                                <div className = "expanded-offer-contact-contact-info">
                                    <h2 className="expanded-offer-time-title">Contact Info</h2>
                                    <img className = "expanded-offer-contact-contact-mail-icon" src="https://image.flaticon.com/icons/svg/181/181535.svg"/>
                                    <h5 className = "expanded-offer-contact-contact-mail">murat_erduran@brown.edu</h5>
                                    <button type="button" id="contact-button">Contact Dealer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
