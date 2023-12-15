import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import "../CSS/Signup.css";
import { useAuth } from '../Components/AuthContext'; 
import bg from "../Images/bg-login.jpg";
import logo from "../Images/logo.png";
import citlogo from "../Images/citlogo.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import axios from "axios";

function Signup() {
  const { login } = useAuth(); 
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleSignup = async () => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!password.match(passwordRegex)) {
      setPasswordError("At least 8 characters long, at least one lowercase letter, at least one uppercase letter, at least one special character from the set !@#$%^&*");
      return;
    } else if (password !== confirmPassword) {
      setPasswordError("Invalid password, confirm your password again.")
      return;
    }
    const signupData = {
      first_name: firstName,
      last_name: lastName,
      phone_number: phoneNumber,
      gender: gender,
      password: password
    };
  
    try {
      const response = await axios.post("http://localhost:8080/studentrentals/insertStudent", signupData);
      console.log(response.data);
  
      const userData = response.data || {};
      login({
        studentId: userData.student_id || null,
        firstName: userData.first_name || "",
        lastName: userData.last_name || "",
        username: userData.username || "",
        phone_number: userData.phone_number || "",
        gender: userData.gender || "",
      });
  
      navigate('/studentaccount', {
        state: {
          studentId: userData.student_id || null,
          firstName: userData.first_name || "",
          lastName: userData.last_name || "",
          username: userData.username || "",
          phone_number: userData.phone_number || "",
          gender: userData.gender || "",
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <div className="lgn-components">
        <div className="lgn-leftside">
          <img
            src={bg}
            alt="lgb-bg"
            style={{
              filter: "blur(8px)",
              width: "100%",
              height: "100vh",
            }}
          />
          <img
            src={logo}
            alt="company-logo"
            style={{
              position: "absolute",
              width: "600px",
              left: "6%",
              top: "15%",
            }}
          />
          <h1 className="lgn-title">STUDENT RENTALS</h1>
          <h2 className="lgn-title">MADE4EASY</h2>
        </div>

        <div className="lgn-rightside">
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              fontFamily: "Nunito, sans-serif",
              color: "black",
              fontWeight: "bold",
            }}
          >
            <div className="back-container">
              <box-icon name="arrow-back" size="md"></box-icon>
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
                top: "5%",
              }}
            />
            <p>Create Account</p>
            <div className="input-container">
              <input
                type="text"
                placeholder="First Name"
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
              />
              <input
                type="text"
                placeholder="Last Name"
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FiEyeOff
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <FiEye
                  className="password-toggle-icon"
                  onClick={togglePasswordVisibility}
                />
              )}
            </div>
            <div className="password-container">
              <input
                type={showConfirmPassword ? "text" : "password"}
               
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {showConfirmPassword ? (
                <FiEyeOff
                  className="password-toggle-icon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              ) : (
                <FiEye
                  className="password-toggle-icon"
                  onClick={toggleConfirmPasswordVisibility}
                />
              )}
            </div>

            <div className="gender-container">
              <label htmlFor="gender">Gender:</label>
              <div className="gender-options">
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={gender === "Male"}
                    onChange={handleGenderChange}
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={gender === "Female"}
                    onChange={handleGenderChange}
                  />
                  Female
                </label>
              </div>
            </div>

            {passwordError && (
              <div style={{ color: "red" }}>{passwordError}</div>
            )}

            <button onClick={handleSignup}>Continue</button>
            <div style={{marginTop: '0'}}>
              <h3>
                Already have an account? <Link to='/login'>Login</Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;