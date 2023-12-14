import React, { useState } from "react";
import "../CSS/EditProfile.css";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  // Step 1: Declare gender state and handleGenderChange function
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
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
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="text" placeholder="Phone Number" />
        <input type="text" placeholder="Username" />
        <input type="text" placeholder="Password" />

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

        <button>Save</button>
      </div>
    </>
  );
}

export default EditProfile;
