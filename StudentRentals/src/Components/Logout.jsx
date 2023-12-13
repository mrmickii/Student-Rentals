import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "./Header";
import { Link } from 'react-router-dom';
import "../CSS/Logout.css"

function Logout() {
  const [adminLogin, setAdminLogin] = useState(true);
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Header isAdminLoggedIn={adminLogin} hideUlAndButton={true} />
      <div className="lo-container">
        <h1>ARE YOU SURE YOU WANT TO LOG OUT?</h1>
        <Link to='/'>
          <button 
            style={{
              backgroundColor: "gainsboro",
              color: "#F28500",
              border: 'solid 1px #F28500'
            }}
          >
            Yes
          </button>
        </Link>
          <button style={{backgroundColor: '#3D1111'}} onClick={handleBackClick}>No</button>
      </div>
    </>
  );
}

export default Logout;
