import React from "react";
import '../CSS/Footer.css'
import logo from '../Images/logo.png'
import {HashLink as Link } from 'react-router-hash-link'

const email = 'studentrentals@email.com'
const number = '+63 945 1234 542'
const address = 'Natalio B. Bacalso Ave, Cebu City, 6000 Cebu'


function Footer(){
  return(
    <footer>
      <Link smooth to ='#firstsection'>
        <div>
          <img 
            src={logo} 
            alt="company-logo"
            style={{
              width: 'auto',
              height: '100px'
            }} />
        </div>
      </Link>
      <div className="fsc-container">
        <div className="footer-sec">
          <h1>COMPANY</h1>
          <Link smooth to='#forthsection'>Service</Link>
          <Link smooth to='#thirdsection'>About Us</Link>
          <Link smooth to='#fifthsection'>Contact Us</Link>
        </div>
        <div className="footer-sec">
          <h1>HELP CENTER</h1>
          <Link smooth to='#secondsection'>Find a property</Link>
          <Link smooth to='#forthsection'>Why us?</Link>
        </div>
        <div className="footer-sec">
          <h1>CONTACT INFO</h1>
          <p>Phone: {number}</p>
          <p>Email: {email}</p>
          <p>Location: {address}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer