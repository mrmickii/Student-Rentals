import React, { useState, useEffect } from "react";
import { HashLink as Link } from 'react-router-hash-link';
import axios from 'axios';
import '../CSS/LandingPage.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Contact from './Contact';
import Service from '../Components/Service';
import AboutUs from "../Components/AboutUs";
import bglp from '../Images/firstpagebg.png';

function LandingPage(props) {
  const [propertyData, setPropertyData] = useState([]);
  const [loading, setLoading] = useState(true);  

  useEffect(() => {
    const fetchPropertyData = async () => {
      try {
        console.log('Fetching property data...');
        const response = await axios.get('http://localhost:8080/studentrentals/getAllProperty');
        setPropertyData(response.data);
        setLoading(false);
        console.log('Property data fetched successfully:', response.data);
      } catch (error) {
        console.error('Error fetching property data:', error.response);
        setLoading(false);
      }
    };
    fetchPropertyData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log('Rendering propertyData:', propertyData);

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
          <h1>OUR PROPERTIES</h1>
        </div>
        <div className="property-container">
          <div className="property-list">
            {propertyData.map((property) => (
              <Link
              to={{
                pathname: `/details/${property.propid}`,
                state: { propertyName: property.name },
              }}
                key={property.propid}
                style={{ color: 'inherit', textDecoration: 'inherit' }}
              >
                <div className="property-item">
                <img
                  src={`http://localhost:8080/images/${property.propid}`}
                  alt={property.name}
                  onError={(e) => {
                    console.error("Image loading error", e, e.nativeEvent);
                  }}
                />

                  <h2>{property.name}</h2>
                  <h4>
                    <box-icon name='location-plus' type='solid' size='sm'></box-icon>
                    {" "}{property.address}
                  </h4>
                  <p>
                    <box-icon name='money' ></box-icon>
                    {" "}{property.price} {"  /Mo"}
                  </p>
                  <p>
                    <box-icon type='solid' name='city'></box-icon>
                    {" "}{property.type}{" Type"}
                  </p>
                  <p>
                    <box-icon name='area' ></box-icon>
                    {" "}{property.size} {" Sqm"}
                  </p>
                  <p>
                    <box-icon name='bed'></box-icon>
                    {" "}{property.numbeds} {" Bed/s"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="section thirdsection" id="thirdsection">
        <AboutUs />   
      </div>

      <div className="section forthsection" id="forthsection"> 
        <div className="fsh-text">
          <h1>OUR FEATURES</h1>
          <h4>Why Choose Us?</h4>
        </div>
        <div className="feature-container">
          <Service 
            svg='award'
            title='Quality Accommodations'
            description='We take pride in offering high-quality, well-maintained apartments and dorms. Our properties are equipped with modern amenities to enhance your living experience, providing a comfortable and productive environment for your academic pursuits.'  
          />
          <Service 
            svg='money'
            title='Affordability'
            description="We believe that student living should be affordable without compromising on quality. Our rental options are competitively priced to fit within a student's budget, allowing you to focus on your studies rather than worrying about excessive living expenses."
          />
          <Service 
            svg='check-shield'
            title='Transparent and Reliable'
            description='We value transparency and reliability in all our dealings. From the initial inquiry to the move-in process, we aim to provide clear information and reliable services. Your satisfaction and peace of mind are our top priorities.'  
          />
          <Service 
            svg='bullseye'
            title='Community-Focused'
            description="We are not just about renting spaces; we're about building communities. Our housing options are designed to foster a sense of belonging and encourage social interactions among students."  
          />
        </div>
      </div>

      <div className="section fifthsection" id="fifthsection">
        <div className="ffsh-text">
          <h1>OUR TEAM</h1>
        </div>
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
