import React from 'react';


export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return ( 
            <div className = "filter-body">
                <p className="categories-text"> Filter by </p>
                <ul className="ul-categories">
                  <li className="li-categories">Time</li>
                  <li className="li-categories">Rating</li>
                  <li className="li-categories">Location</li>
                  <li className="li-categories">Price</li>
                </ul>
            </div>
        )
    }
}

