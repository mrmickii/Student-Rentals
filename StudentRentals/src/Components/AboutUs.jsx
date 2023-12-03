import React from "react";
import '../CSS/AboutUs.css'
import aubg from '../Images/bg-login.jpg'

function AboutUs(){
  return(
    <>
    <div className="au-container">
      
      <div className="au-left">
        <p className="au-title">STUDENT RENTALS</p>
        <p className="au-description">Your trusted partner in student housing solutions! We understand that finding the perfect living space during your academic journey is crucial, and that's why we're here to make the process seamless, stress-free, and enjoyable.</p>
        <h1 className="au-mission">Our Mission</h1>
        <p className="au-mission-des">Our mission is to redefine the student living experience by providing comfortable, affordable, and convenient housing solutions. We believe that where you live significantly influences your academic success, and our goal is to offer a diverse range of student apartments and dorms tailored to meet the unique needs of each individual.</p>
      </div>

      <div className="au-right"> 
        <img className="aubg-image" src={aubg} alt="" />
        <img className="aubg-image over" src={aubg} alt="" />
      </div>

    </div>
    </>
  )
}

export default AboutUs