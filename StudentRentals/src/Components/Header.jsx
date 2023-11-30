import React from "react";
import '../CSS/Header.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link'
import logo from '../Images/logo.png'
import profile from '../Images/citlogo.png'

function Header(){
  return(
    <header>
      <div className="logo-container">
        <img 
        src={logo} 
        alt="company-logo" 
        style={{
          width: "80px",
          margin: "20px"
        }}/>
      </div>
      <div className="nh container">
        <Link smooth to='/'>
          <a className="nh" href="">Home</a>
        </Link >
        <Link smooth to='#forthsection'>
          <a className="nh" href="">Service</a>
        </Link >
        <Link smooth to='#fifthsection'>
          <a className="nh" href="">Contact Us</a>
        </Link >
      </div>
      <div className="nh-side">
        <Link to='/login'><button>Login</button></Link>
        <box-icon type='solid' name='bell' color='white' animation='tada-hover'></box-icon>
        <div className="profile-container">
          <img src={profile} alt="profile" 
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '20px'
          }}/>
        </div>
      </div>
    </header>
  )
}

export default Header