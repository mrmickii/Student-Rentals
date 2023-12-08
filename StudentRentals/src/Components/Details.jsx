import React from "react";
import { useParams } from "react-router-dom";
import "../CSS/Details.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import LandingPage from "./LandingPage";

function Details(){
  
  return (
    <>
      <Header />
      <div className="details-container">
        <div className="dc-one">
          <div className="dc-inside">
            <div className="dci pic">
            
            </div>
          </div>
          <div className="dc-inside">
            <div className="dci border">

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
