import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Offer from './Offer.jsx'
import SearchOffers from './SearchOffers.jsx'
import Sidebar from './Sidebar.jsx'
import ExpandedOffer from './ExpandedOffer.jsx'


export default class Profile extends React.Component {
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
                                <div className = "profile-info-value">Murat Erduran</div>
                            </div>
                            <div className = "profile-info-field">
                                <div className = "profile-info-header">Brown Email</div>
                                <div className = "profile-info-value">murat_erduran@brown.edu</div>
                            </div>
                            <div className = "profile-info-field">
                                <div className = "profile-info-header">Phone Number</div>
                                <div className = "profile-info-value">444-444-4444</div>
                            </div>
                        </ul>
                        <div className = "edit-button-container" onClick = {() => window.location.href = '/edit_profile'}>
                            <img src="https://image.flaticon.com/icons/svg/263/263062.svg" className = "edit-button-img"/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
