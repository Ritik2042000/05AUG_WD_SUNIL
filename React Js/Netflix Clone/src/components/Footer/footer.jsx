import React from 'react';
import './footer.css';
import youtubeIcon from '../../assets/youtube_icon.png';
import twitterIcon from '../../assets/twitter_icon.png';
import instagramIcon from '../../assets/instagram_icon.png';
import facebookIcon from '../../assets/facebook_icon.png';
const footer = () => {
    return (
        <div className='footer'>
            <div className="footer-icons">
                <img src={facebookIcon} alt="fbicon" />
                <img src={instagramIcon} alt="instaicon" />
                <img src={twitterIcon} alt="twitticon" />
                <img src={youtubeIcon} alt="yticon" />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift cards</li>
                <li>Media center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of use</li>
                <li>Privacy</li>
                <li>Legal Notice</li>
                <li>Cookie preferences</li>
                <li>Corporate Information</li>
                <li>Contact Us</li>
            </ul>
            <p className='copyright-text'>
                1997-2023 Netfilx, Inc.
            </p>
        </div>
    );
};

export default footer;