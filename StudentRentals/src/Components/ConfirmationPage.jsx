import React from "react";
import "../CSS/ConfirmationPage.css"
import Header from "../Components/Header"
import cfp from "../Images/cfp.png"
import { Link } from "react-router-dom";

function ConfirmationPage(){
  return(
    <>
      <Header hideUl={true} />
      <div className="confirm-page">
        <h1>CONFIRMED
        <box-icon type='solid' name='badge-check' size='lg' color='#f28500'></box-icon>
        </h1>
        <p>THANK YOU FOR RESERVING!</p>
        <img src={cfp} alt="cfp" />
        <Link to='/'>
          <button>
            <div className="button">
            Back Home
            <box-icon name='right-arrow-alt' color='white'></box-icon>
            </div>
          </button>
        </Link>
      </div>
    </>
  )
}

export default ConfirmationPage