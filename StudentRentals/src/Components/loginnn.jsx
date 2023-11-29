import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import lfbg from '../Images/bg-login.jpg';
import lflogo from '../Images/logo.png';
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
      <div className="lgn-container">
        <div className="lf-side">
          <img 
            src={lfbg} 
            alt="lfbg" 
            style={{
              filter: "blur(8px)",
              width: "100%",
              height: "100vh"
            }}/>
          <img 
            src={lflogo} 
            alt="lflogo" 
            style={{
              position: "absolute",
              width: "600px",
              left: "10%",
              top: "15%"
            }}/>
          <h1>STUDENT RENTALS:</h1>
          <h2>MADE4EASY</h2>
        </div>

        <div className="rgt-side">
          <Link to='/'>
            <div className="rgt-side-back">
              <box-icon name='arrow-back' size='md' style={{ margin: '20px' }}></box-icon><p>BACK</p>
            </div>
          </Link>
          <div className="rgt-form-container">
            <img src={citlogo} alt="citlogo" />
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
            <h3>Don’t have an account?</h3>
            <Link to='/signup' style={{
              color: 'black',
              textDecoration: 'underline',
              fontSize: '18px'
            }}>Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
