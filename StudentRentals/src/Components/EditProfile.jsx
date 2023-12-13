import React, { useEffect } from "react";
import '../CSS/EditProfile.css';
import Header from "../Components/Header";
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';

function EditProfile() {
  const { user } = useAuth();

  useEffect(() => {
    console.log('User object:', user);
  }, [user]);

  return (
    <>
      <Header hideUl={true} />
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <div className="back-container">
          <box-icon name='arrow-back' size='md'></box-icon>
          <p className="back">Back</p>
        </div>
      </Link>
      <div className="userprofile">
        <div className="upone">
          <div className="upone-container">
            {user && (
              <>
                <img src="" alt="" />
                <p>Upload a photo</p>
                <p style={{ margin: '20px' }}>Identity Verification</p>
                <p>{user.firstName} {user.lastName}</p>
              </>
            )}
          </div>
        </div>
        <div className="uptwo"></div>
      </div>
    </>
  );
}

export default EditProfile;
