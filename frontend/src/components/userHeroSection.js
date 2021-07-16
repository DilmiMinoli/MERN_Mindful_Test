import React from 'react';
import {Button} from './Button/Button';

export default function userHeroSection() {
    return (
        <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted/>
        <p>what are you waiting?</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET START
            </Button>

            <Button className='btns' buttonStyle='btn--prymary' buttonSize='btn--large'>
            WATCH TRAILER
            <i className ='far fa-play-circle'/>
            </Button>
        </div>
       
   </div>
    )
}

