import React from "react";
import '../CSS/Login.css'
import bg from '../Images/bg-login.jpg'
import logo from '../Images/logo.png'
import citlogo from '../Images/citlogo.png'

function Login (){
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
          <p>Sign In</p>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <button>Login</button>
          <hr class="solid"></hr>
          <button>Login as Admin</button>
          <div><h3>Don't Have an Account yet?<a href="#"> Signup</a></h3></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Login