import React from 'react';

export default class Offer extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let example_template = ['Ratty', 'Andrews Commons', 'Blue Room']
        if (this.props.test1 == "example2") {
            example_template = ['Ratty', 'Andrews Commons']
        } else if (this.props.test1 == "example3") {
            example_template = ["All"]
        }
        let html_array = example_template.map((el) => {
            return <li className="li-location"> 
            <p className = "p-location-tag"> {el} </p>
            </li>
        })
        return ( 
            <li className="li-offer">
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
