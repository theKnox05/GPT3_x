import React from 'react'
import './footer.css'
import gpt3logo from '../../../../assets/logo.svg';
const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to future before others</h1>
      </div>
      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <img src={gpt3logo} alt="logo" />
          <p>Tamilnadu,Chennai,knox. <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Tamilnadu Chennai 182 JK knox</p>
        <p>085-132567</p>
        <p>info@knox.net</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2024 GPT-3. All rights reserved.</p>
    </div>
        
    
    </div>
  )
}

export default Footer;