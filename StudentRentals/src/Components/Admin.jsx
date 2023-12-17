import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from "./Header"
import '../CSS/Admin.css'

function Admin() {
  const [adminLogin, setAdminLogin] = useState(true);

  return (
    <>
      <Header isAdminLoggedIn={adminLogin} isAdmin={true} />
      <div className="afdiv">
        <h1>PROPERTY</h1>
        <Link to='/addproperty'><button>Add a Property</button></Link>
        <Link to='/updateproperty'><button>Update a Property</button></Link>
        <Link to='/deleteproperty'><button>Delete a Property</button></Link>
        <Link to='/getproperty'><button>Display all Property</button></Link>
        <h1>STUDENT</h1>
        <Link to='/deletestudent'><button>Delete a Student</button></Link>
        <Link to='/getstudent'><button>Display all Student</button></Link>
      </div>
    </>
  );
}

export default Admin;