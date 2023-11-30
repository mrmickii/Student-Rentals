import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bg from '../Images/bg-login.jpg';
import logo from '../Images/logo.png';
import citlogo from '../Images/citlogo.png';
import '../CSS/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function

  const handleLogin = async (isAdmin) => {
    try {
      const endpoint = isAdmin
        ? 'http://localhost:8080/studentrentals/admin'
        : 'http://localhost:8080/studentrentals'; // Adjusted the URLs

      const response = await axios.post(endpoint, { username, password });

      // Check if response.data is defined before accessing its properties
      if (response.data) {
        // Handle successful login, e.g., store the token in local storage
        console.log('Login successful:', response.data);

        if (isAdmin) {
          navigate('/admin'); // Use the navigate function to navigate to '/admin'
        } else {
          // Handle redirection for regular user if needed
        }
      } else {
        console.error('Login failed: Response data is undefined');
      }
    } catch (error) {
      // Handle login failure
      console.error('Login failed:', error.response?.data || error.message);  
    }
  };

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
          <Link to='/'
            style={{
              textDecoration: "none",
              fontFamily: "Nunito, sans-serif",
              color: "black",
              fontWeight: "bold"
            }}>
            <div className="back-container">
              <box-icon name='arrow-back' size='md'></box-icon>
              <p className="back">BACK</p>
            </div>
          </Link>
          <div className="lgn-container">
            <img
              src={citlogo}
              alt="citlogo"
              style={{
                width: "150px",
                paddingTop: "50px",
                position: "absolute",
                top: '15%'
              }} />
            <p>Sign In</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => handleLogin(false)}>Login</button>
            <hr />
            <button onClick={() => handleLogin(true)}>Login as Admin</button>
            <div>
              <h3>Don't Have an Account yet?
                <Link to='/signup'><a href="#"> Signup</a></Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
