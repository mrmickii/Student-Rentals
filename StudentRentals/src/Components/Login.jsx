import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import bg from '../Images/bg-login.jpg';
import logo from '../Images/logo.png';
import citlogo from '../Images/citlogo.png';
import '../CSS/Login.css';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useAuth } from '../Components/AuthContext'

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    try {
      const endpoint = 'http://localhost:8080/studentrentals/login';
  
      const response = await axios.post(endpoint, null, {
        params: { username, password }
      });
  
      if (response.data) {
        console.log('Login successful:', response.data);
        const { first_name, last_name, /* other user properties */ } = response.data;
        login({ first_name, last_name, /* other user properties */ });
        navigate('/');
      } else {
        setErrorMessage("Invalid username or password");
        console.error('Login failed: Invalid username or password');
      }
      console.log('Server response:', response.data); // Log the response data

    } catch (error) {
      setErrorMessage("Invalid username or password");
      console.error('Login failed:', error.response?.data || error.message);
    }
  };
  
  const handleAdminLogin = async () => { 
    try {
      const endpoint = 'http://localhost:8080/studentrentals/admin';
      const response = await axios.post(endpoint, { username, password });
  
      if (response.data) {
        console.log('Admin Login successful:', response.data);
        navigate('/admin');
      } else {
        setErrorMessage("Admin login failed: Invalid username or password");
        console.error('Admin Login failed: Response data is undefined');
      }
    } catch (error) {
      setErrorMessage("Invalid username or password");
      console.error('Admin Login failed:', error.response?.data || error.message);
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
            left: "6%",
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
              fontWeight: "bold",
            }}>
            <div className="back-container">
              <box-icon name='arrow-back' size='md'></box-icon>
              <p className="back">Back</p>
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
                top: '1%'
              }}
            />
            <p>Sign In</p>
            <p className="error-message">{errorMessage}</p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="password-toggle" onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </span>
            <p className="error-message"></p>
            <button onClick={handleLogin}>Login</button> 
            <button onClick={handleAdminLogin}>Login as Admin</button> {/* Updated line */}
            <div>
              <h3>
                Don't Have an Account yet? 
                <Link to='/signup'>Signup</Link>
              </h3>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Login;