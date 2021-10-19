import React from 'react';
import './Footer.css';
import './mailer'
import {SocialIcon} from "react-social-icons"
import Mailer from './mailer';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-sub'>
          Send me an email here
        </p>
        <p className='footer-subscription-text'>
          Thank you for your consideration
        </p>
        <Mailer> </Mailer>
         
          <div class='social-icons'>
          <SocialIcon url= "https://github.com/BLara408" className="" target="blank" fgColor= "#ffff" style ={{height: 45, width: 45}} />
          <SocialIcon url= "https://www.linkedin.com/in/brandon-lara-23b3a0142/" className="" target="blank" fgColor= "#ffff" style ={{height: 45, width: 45}} />
             
          
           
          
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
