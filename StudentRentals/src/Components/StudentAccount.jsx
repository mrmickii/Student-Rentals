import React from "react";
import '../CSS/StudentAccount.css';
import Header from "./Header";
import { useNavigate, useLocation } from 'react-router-dom'; 
import { Link } from 'react-router-dom';

function StudentAccount() {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstName, lastName, username, phone_number, gender } = location.state || {};

  const handleBackClick = () => {
    navigate(-1);
  };
  console.log('First Name:', firstName, 'Last Name:', lastName, 'Username:', username);

  return (
    <>
      <Header hideUl={true} />
      <div className="back-container" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        <box-icon name='arrow-back' size='md'></box-icon>
        <p className="back">Back</p>
      </div>
      <div className="userprofile">
        <div className="upone">
          <div className="upone-container">
            <img src="" alt="" />
            <h2>Upload a photo</h2>
            <h1 style={{ margin: '50px 0px 80px 0px' }}>Identity Verification</h1>
            <p><box-icon name='user-check' ></box-icon>{firstName} {lastName}</p>
            <p><box-icon name='male-female' ></box-icon>{gender}</p>
            <p><box-icon name='phone' ></box-icon>{phone_number}</p>
            <p><box-icon name='check-shield' ></box-icon>{username}</p>
          </div>
        </div>
        <div className="uptwo">
          <p>Hello, {firstName} {lastName}</p>
          <Link to='/editprofile'>
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StudentAccount;
