import React from "react";
import '../CSS/StudentAccount.css';
import Header from "./Header";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';

function StudentAccount() {
  const navigate = useNavigate();
  const { user } = useAuth();
  console.log('User Data:', user);
  

  console.log('User Data:', user); 

  const handleBackClick = () => {
    navigate(-1);
  };

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
            <p>Upload a photo</p>
            <p style={{ margin: '20px' }}>Identity Verification</p>
          </div>
        </div>
        <div className="uptwo">
          {user?.firstName && user?.lastName ? (
            <p>Hello, {user.firstName} {user.lastName}</p>
          ) : (
            <p>Hello, Guest</p>
          )}
          <Link to='/editprofile'>
            <button>Edit Profile</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default StudentAccount;
