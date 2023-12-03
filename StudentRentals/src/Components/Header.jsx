import React, {useState} from "react";
import '../CSS/Header.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HashLink as Link } from 'react-router-hash-link'
import logo from '../Images/logo.png'
import profile from '../Images/citlogo.png'

function Header(){

  const [show, setShow] = useState(false)

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
        <ul>
          <Link smooth to='/' style={{textDecoration: 'none'}}>
            <li className="nh" href="">Home</li>
          </Link >
          <Link smooth to='#forthsection' style={{textDecoration: 'none'}}>
            <li className="nh" href="" >Service</li>
          </Link >
          <Link smooth to='#thirdsection' style={{textDecoration: 'none'}}>
            <li className="nh" href="">About Us</li>
          </Link >
          <Link smooth to='#fifthsection' style={{textDecoration: 'none'}}>
            <li className="nh" href="">Contact Us</li>
          </Link >
        </ul>
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