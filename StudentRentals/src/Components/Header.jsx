import React, { useState } from "react";
import '../CSS/Header.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../Images/logo.png';
import profile from '../Images/citlogo.png';

function Header() {
  // useState for managing visibility
  const [isBellVisible, setIsBellVisible] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);

  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img
            src={logo}
            alt="company-logo"
            style={{
              width: "80px",
              margin: "20px"
            }}
          />
        </div>
      </Link>

      <div className="nh container">
        <ul>
          <Link smooth to='#firstsection' style={{ textDecoration: 'none' }}>
            <li className="nh" href="">Home</li>
          </Link>
          <Link smooth to='#thirdsection' style={{ textDecoration: 'none' }}>
            <li className="nh" href="" >About</li>
          </Link>
          <Link smooth to='#forthsection' style={{ textDecoration: 'none' }}>
            <li className="nh" href="">Service</li>
          </Link>
          <Link smooth to='#fifthsection' style={{ textDecoration: 'none' }}>
            <li className="nh" href="">Contact</li>
          </Link>
        </ul>
      </div>

      <div className="nh-side">
        <Link to='/login'><button>Login</button></Link>
        {isBellVisible && <box-icon type='solid' name='bell' color='white' animation='tada-hover'></box-icon>}
        {isProfileVisible && (
          <div className="profile-container">
            <img src={profile} alt="profile"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '20px'
              }} />
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
