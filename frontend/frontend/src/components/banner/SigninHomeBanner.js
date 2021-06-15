import React from 'react';
import img from '../../images/bannerSignin.jpeg';
import './Banner.css';
import Button from '../button/Button';

function SigninHomeBanner() {
    return (
        <div className="body-image">
        <img id="panel-img" src={img} alt=""/>
        <div className="content">
            <h1>Discover the world’s top designers & creatives</h1>
            <p>Dribbble is the leading destination to find & showcase creative work and home to the world's best
                design
                professionals.</p>
            {/* <div><a className="signup" href="/dribblePage/signUp.html">Sign Up</a></div> */}
            {/* <Button >Sign Up</Button> */}
        </div>
    </div>
    )
}

export default SigninHomeBanner;
