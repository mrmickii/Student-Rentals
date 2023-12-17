import React, { useState, useContext } from "react";
import axios from "axios";
import Header from "../Components/Header";
import ConfirmationDialog from "../Components/ConfirmationDialog"; 
import { useNavigate } from "react-router-dom";
import "../CSS/EditProfile.css";
import { AuthContext } from "../Components/AuthContext";
import { FiEye, FiEyeOff } from 'react-icons/fi';

function EditProfile() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [student, setStudent] = useState({
    student_id: user.studentId,
    first_name: "",
    last_name: "",
    phone_number: "",
    password: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isSaveDialogOpen, setSaveDialogOpen] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleGenderChange = (event) => {
    setStudent({ ...student, gender: event.target.value });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Check if any required field is empty
    if (!student.first_name || !student.last_name || !student.phone_number || !student.password) {
      setError("Please fill in all required fields.");
      return;
    }
  
    setConfirmationMessage("Are you sure you want to save the changes?");
    setSaveDialogOpen(true);
  };
  
  const handleSaveConfirm = async () => {
    setSaveDialogOpen(false);
  
    try {
      if (!student.first_name || !student.last_name || !student.phone_number || !student.password) {
        setError("Please fill in all required fields.");
        return;
      }
  
      const { username, ...updateData } = student;
      await axios.put(
        `http://localhost:8080/studentrentals/updateStudent/${updateData.student_id}`,
        updateData
      );
      console.log("Student information updated successfully! Logout to see changes.");
      setError("");
      setSuccessMessage("Profile updated successfully! Logout to see changes.");
  
      setStudent({
        student_id: user.studentId,
        first_name: "",
        last_name: "",
        phone_number: "",
        password: "",
        gender: "",
      });
    } catch (error) {
      console.error("Error updating student:", error);
      setError("Error updating student. Please try again.");
    }
  };
  

  const handleSaveCancel = () => {
    setSaveDialogOpen(false);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Header hideUl={true} />
      <div
        className="back-container"
        onClick={handleBackClick}
        style={{ cursor: "pointer" }}
      >
        <box-icon name="arrow-back" size="md"></box-icon>
        <p className="back">Back</p>
      </div>
      <div className="edit-profile-container">
        <h2>Edit Profile</h2>
        <h4>Personal Information</h4>
        <input
          type="text"
          placeholder="First Name"
          value={student.first_name}
          onChange={handleInputChange}
          name="first_name"
          className="first-name"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={student.last_name}
          onChange={handleInputChange}
          name="last_name"
          className="last-name"
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={student.phone_number}
          onChange={handleInputChange}
          name="phone_number"
          className="phone-number"
        />
        <div className="lgn-password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={student.password}
            onChange={handleInputChange}
            name="password"
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
        <div className="lgn-password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={student.confirmPassword}
            onChange={handleInputChange}
            name="confirmPassword"
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
                checked={student.gender === "Male"}
                onChange={handleGenderChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={student.gender === "Female"}
                onChange={handleGenderChange}
              />
              Female
            </label>
          </div>
        </div>
        <hr />
        <p className="note">
          <strong>Note: </strong>Changing your first name and last name will not
          affect your username.
        </p>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <button onClick={handleSaveClick}>Save</button>
      </div>

      <ConfirmationDialog
        isOpen={isSaveDialogOpen}
        onClose={handleSaveCancel}
        onConfirm={handleSaveConfirm}
        message={confirmationMessage}
      />
    </>
  );
}

export default EditProfile;