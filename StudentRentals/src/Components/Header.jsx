import React from 'react';
import {HashLink as Link } from 'react-router-hash-link'
import { useAuth } from '../Components/AuthContext'; 
import '../CSS/Header.css';
import logo from '../Images/logo.png';
import profile from '../Images/citlogo.png';

function Header({ isAdmin, hideUlAndButton, hideUl }) {
  const { isLoggedIn, logout } = useAuth();

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
        {!hideUl && !hideUlAndButton && !isAdmin && (
          <ul>
            <Link smooth to='#firstsection' style={{ textDecoration: 'none' }}>
              <li className="nh">Home</li>
            </Link>
            <Link smooth to='#thirdsection' style={{ textDecoration: 'none' }}>
              <li className="nh">About</li>
            </Link>
            <Link smooth to='#forthsection' style={{ textDecoration: 'none' }}>
              <li className="nh">Service</li>
            </Link>
            <Link smooth to='#fifthsection' style={{ textDecoration: 'none' }}>
              <li className="nh">Contact</li>
            </Link>
          </ul>
        )}
      </div>

      <div className="nh-side">
        {isLoggedIn ? (
          <Link to='/logout'>
            <button onClick={logout}>Logout</button>
          </Link>
        ) : (
          isAdmin ? (
            <Link to='/logout'>
              <button onClick={logout}>Logout</button>
            </Link>
          ) : (
            !hideUlAndButton && (
              <Link to='/login'>
                <button>Login</button>
              </Link>
            )
          )
        )}
        {isLoggedIn && !isAdmin && (
          <>
            <box-icon type='solid' name='bell' color='white' animation='tada-hover'></box-icon>
            <Link to='/editprofile'>
              <div className="profile-container">
                <img
                  src={profile}
                  alt="profile"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '20px',
                    display: 'inline-block',
                  }}
                />
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
