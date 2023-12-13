import React, { useState } from "react";
import Header from "./Header";
import { Link } from 'react-router-dom';
import "../CSS/Logout.css"

function Logout() {
  const [adminLogin, setAdminLogin] = useState(true);
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
        <Link to='/admin'>
          <button style={{backgroundColor: '#3D1111'}}>No</button>
        </Link>
      </div>
    </>
  );
}

export default Logout;
