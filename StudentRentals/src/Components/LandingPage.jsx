import React, { useRef } from "react";
import '../CSS/LandingPage.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import AboutUs  from '../Components/AboutUs'
import bglp from '../Images/firstpagebg.png';
import { Link } from 'react-scroll'

function LandingPage() {

  return (
    <>
      <Header />
      <div className="section firstsection" id="firstsection">
        <img 
          src={bglp} 
          alt="background"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100vh"
          }} />
      </div>

      <div className="section secondsection" id="secondsection">
        <div className="ssh-text">
          <h3>Our Properties</h3>
          <h2>Our Featured Properties</h2>
        </div>
      </div>

      <div className="section thirdsection" id="thirdsection">
        <p className="tdh-text">More Choices For You</p>
      </div>

      <div className="section forthsection" id="forthsection"> 
        <div className="fsh-text">
          <h3>Our Features</h3>
          <h2>Why Choose Us?</h2>
        </div>
      </div>

      <div className="section fifthsection" id="fifthsection">
        <div className="ffsh-text">
            <h3>Expertise Is Here</h3>
            <h2>Our Developers</h2>
          </div>
          <AboutUs />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
