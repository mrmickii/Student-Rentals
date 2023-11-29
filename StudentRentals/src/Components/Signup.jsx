import React from "react";
import '../CSS/Login.css'
import bg from '../Images/bg-login.jpg'
import logo from '../Images/logo.png'
import citlogo from '../Images/citlogo.png'

function Signup (){
  return (
    <>
    <div className="lgn-components">
      <div className="lgn-leftside">
        <img src={bg} alt="lgb-bg" style={{
          filter: "blur(8px)",
          width: "100%",
          height: "100vh"
        }} />
        <img src={logo} alt="company-logo" style={{
          position: "absolute",
          width: "600px",
          left: "10%",
          top: "15%"
        }} />
        <h1 className="lgn-title">STUDENT RENTALS</h1>
        <h2 className="lgn-title">MADE4EASY</h2>
      </div>

      <div className="lgn-rightside">
        <div className="back-container">
          <box-icon name='arrow-back' size='md'></box-icon>
          <p>BACK</p>
        </div>
        <div className="lgn-container">
          <img src={citlogo} alt="citlogo" style={{
            width: "150px",
            paddingTop: "50px",
            position: "absolute",
            top: '15%'
          }} />
          <p>Create Account</p>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Phone number" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Confirm Password" />
          <button>Continue</button>
          <div><h3>By signing up, I have read an agree to <a href="#"> Terms <span
          style={{
            color: "black",
            textDecoration: "none"
          }}>&</span> Privacy Policy</a></h3></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Signup