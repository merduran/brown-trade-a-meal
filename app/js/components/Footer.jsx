import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    render() {
        return ( 
        <div className = "div-footer"> 
            <ul className = "ul-bot-nav">
                  <li className = "li-bot-nav"><a className = "a-bot-href" href = "/"> Contact Us </a></li>
                  <li className = "li-bot-nav"><a className = "a-bot-href" href = "/"> About </a></li>
            </ul>
        </div>)
    }
}
