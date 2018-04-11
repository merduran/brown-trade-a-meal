import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Offer from './Offer.jsx'
import SearchOffers from './SearchOffers.jsx'
import Sidebar from './Sidebar.jsx'
import ExpandedOffer from './ExpandedOffer.jsx'


export default class EditProfile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return ( 
            <div>
                <Header selectedTab = "profile-tab"/>
                <div className = "profile-container">
                    <img className = "profile-picture" src="https://image.flaticon.com/icons/svg/181/181549.svg"/>
                    <div style={{margin: 30, position: 'relative'}}>
                        <ul className = "profile-info">
                            <div className = "profile-info-field">
                                <div className = "profile-info-header">Username</div>
                                <input className = "profile-info-value-input" type = "text" placeholder = "Murat Erduran"/>
                            </div>
                            <div className = "profile-info-field">
                                <div className = "profile-info-header">Brown Email</div>
                                <input className = "profile-info-value-input" type = "text" placeholder = "murat_erduran@brown.edu"/>
                            </div>
                            <div className = "profile-info-field">
                                <div className = "profile-info-header">Phone Number</div>
                                <input className = "profile-info-value-input" type = "text" placeholder = "444-444-4444"/>
                            </div>
                            <button id="contact-button" onClick = {() => window.location.href = '/profile'}>Submit</button>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
