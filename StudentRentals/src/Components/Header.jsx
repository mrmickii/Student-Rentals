import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useAuth } from '../Components/AuthContext';
import { useNavigate } from 'react-router-dom';
import ConfirmationDialog from '../Components/ConfirmationDialog';
import '../CSS/Header.css';
import logo from '../Images/logo.png';
import profile from '../Images/citlogo.png';

const Header = ({ isAdmin, hideUlAndButton, hideUl }) => {
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();
  const [isLogoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleProfileClick = () => {
    if (isLoggedIn && user) {
      const { studentId, username, firstName, lastName, phone_number, gender } = user;
      console.log('Clicked on profile. Username:', username);
      console.log('Student ID:', studentId); 
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Number:', phone_number);
      console.log('Gender:', gender);
  
      navigate('/studentaccount', {
        state: {
          studentId,
          username,
          firstName,
          lastName,
          phone_number,
          gender,
        },
      });
    }
  };  

  const handleLogout = () => {
    setLogoutDialogOpen(true);
  };

  const handleDialogConfirm = () => {
    logout();
    setLogoutDialogOpen(false);
  };

  const handleDialogClose = () => {
    setLogoutDialogOpen(false);
  };

  return (
    <header>
      <Link to="/">
        <div className="logo-container">
          <img
            src={logo}
            alt="company-logo"
            style={{
              width: "80px",
              margin: "20px"
            }}
          />
        </div>
      </Link>

      <div className="nh container">
        {!hideUl && !hideUlAndButton && !isAdmin && (
          <ul>
            <Link smooth to='#firstsection' style={{ textDecoration: 'none' }}>
              <li className="nh">Home</li>
            </Link>
            <Link smooth to='#thirdsection' style={{ textDecoration: 'none' }}>
              <li className="nh">About</li>
            </Link>
            <Link smooth to='#forthsection' style={{ textDecoration: 'none' }}>
              <li className="nh">Service</li>
            </Link>
            <Link smooth to='#fifthsection' style={{ textDecoration: 'none' }}>
              <li className="nh">Contact</li>
            </Link>
          </ul>
        )}
      </div>

      <div className="nh-side">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          isAdmin ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            !hideUlAndButton && (
              <Link to='/login'>
                <button>Login</button>
              </Link>
            )
          )
        )}
        {isLoggedIn && !isAdmin && (
          <>
          <Link to='/notifications'>
            <box-icon type='solid' name='bell' color='white' animation='tada-hover'></box-icon>
          </Link>
            <div className="profile-container" onClick={handleProfileClick}>
              <img
                src={profile}
                alt="profile"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '20px',
                  display: 'inline-block',
                }}
              />
            </div>
          </>
        )}
      </div>
      
      <ConfirmationDialog
        isOpen={isLogoutDialogOpen}
        onClose={handleDialogClose}
        onConfirm={handleDialogConfirm}
        message="Are you sure you want to logout?"
      />
    </header>
  );
}

export default Header;
