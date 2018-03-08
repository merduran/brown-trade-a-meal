import React from 'react';

export default class Tweet extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'colorOn': false
        }
    }
    render() {
        let toggleColor = (element) => {
            console.log('toggleColor')
            this.setState({'colorOn' : !this.state.colorOn})
        }
        let tweetStyle = {}
        if (this.state.colorOn) {
            tweetStyle['backgroundColor'] = '#00CCFF'
        } else {
            tweetStyle['backgroundColor'] = 'white'
        }
        return ( 
        <li className = 'li-feed' style = {tweetStyle}>
        <p className='tweet-author'> {this.props.tweetData.user.name} </p>
        <div className='toggle-color' onClick = {toggleColor}>Toggle Color</div>
        <img className='img-author' src= {this.props.tweetData.user.profile_image_url} alt = 'img/no_photo.png'></img>
        <p className='tweet-text'>{this.props.tweetData.text} </p>
        </li>)
    }
}
