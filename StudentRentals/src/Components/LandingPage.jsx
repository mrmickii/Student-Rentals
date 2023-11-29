import React from "react";
import '../CSS/LandingPage.css'
import Header from '../Components/Header'
import bglp from '../Images/firstpagebg.png'


function LandingPage(){
  return(
    <>
    <Header />
    <div className="section firstsection">
      <img 
        src={bglp} 
        alt="background"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100vh"
        }} />
    </div>

    <div className="section secondsection">
      <div className="ssh-text">
        <h3>Our Properties</h3>
        <h2>Our Featured Properties</h2>
      </div>
    </div>

    <div className="section thirdsection">
      <p className="tdh-text">More Choices For You</p>
    </div>

    <div className="section forthsection">
      <div className="fsh-text">
        <h3>Our Features</h3>
        <h2>Why Choose Us?</h2>
      </div>
    </div>

    <div className="section fifthsection"></div>
    </>
  )
}

export default LandingPage