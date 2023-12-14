import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../Components/Header";
import Footer from "../Components/Footer"
import { useAuth } from "../Components/AuthContext";
import "../CSS/Details.css"

function Details() {
  const number = "09456142552";
  const { isLoggedIn } = useAuth(); 
  const navigate = useNavigate();
  const { propId } = useParams();
  const [propertyData, setPropertyData] = useState({});
  const [loading, setLoading] = useState(true);

  const handleBackClick = () => {
    navigate(-1);
  };
  
  const handleReserveClick = () => {
    if (isLoggedIn) {
      navigate(`/booking/${propId}`);
    } else {
      navigate("/login");
      alert("To reserve a property, you must first log in.");
    }
  };

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        console.log("Fetching property details...");
        const response = await axios.get(`http://localhost:8080/studentrentals/getProperty/${propId}`);
        setPropertyData(response.data);
        setLoading(false);
        console.log("Property details fetched successfully:", response.data);
      } catch (error) {
        console.error("Error fetching property details:", error.response);
        setLoading(false);
      }
    };
    fetchPropertyDetails();
  }, [propId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header hideUl={true} />
      <div className="back-container" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        <box-icon name='arrow-back' size='md'></box-icon>
        <p className="back">Back</p>
      </div>

      <div className="details-body">
        <div className="details-container">
          <img
            src={`http://localhost:8080/property-images/${propertyData.propid}`}
            alt={propertyData.name}
          />

          <h1>{propertyData.name}</h1>
          <p>{propertyData.address}</p>
          <div className="dcbox-container">
            <div className="dcbox">
              <box-icon name='bed' size='md' color='black'></box-icon>
              <p>{propertyData.numbeds} Bedroom/s</p>
            </div>
            <div className="dcbox">
              <box-icon name='bath' size='md' color='black'></box-icon>
              <p>1 Bathroom/s</p>
            </div>
            <div className="dcbox">
              <box-icon name='car' size='md' color='black'></box-icon>
              <p>0 Parking/s</p>
            </div>
            <div className="dcbox">
              <box-icon name='dog' type='solid' size='md' ></box-icon>
              <p>0 Pet/s</p>
            </div>
          </div>   
          <h1>Apartment Description</h1>    
          <p>
          The apartment consists of a large bright bedroom with a comfy king-sized bed, a modern fully-equipped kitchen and a sunlit living room with Apple TV and free Netflix account. It is the perfect place to stay for couples looking for a romantic location in the historic centre, within walking distance of some of the most beautiful sceneries you can find in the city and all famous landmarks. The sofa in the living room can also serve as an additional bed for a 3rd guest. Located in a side street between the ___ river bank and the leafy ___ hill park, the apartment is very quiet at night. Please note, my apartment is on the 3rd floor with no elevator. I am more than happy to help you with your luggage!  
          </p>  
        </div>

        <div className="details-body-side">
          <div className="dbs-form">
            <p>₱ {propertyData.price}</p>
            <hr style={{margin: '30px 0px 50px 0px' }}/>
            <h6><strong>Type: </strong> {propertyData.type}</h6>
            <h6><strong>Size: </strong> {propertyData.size}</h6>
            <h6><strong>Number of beds: </strong> {propertyData.numbeds}</h6>
            <button onClick={handleReserveClick}>Reserve Now</button>
            <div>
              <h5 style={{
                marginTop: '30px', 
                color: 'gray', 
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '15px'}}>Property Contact: 
              </h5>
              <div style={{
                display: 'flex', 
                justifyContent:'center', 
                alignItems:'center',
                color:'gray',
                }}>
              <box-icon name='phone' size='sm' color='gray'></box-icon>
              <h5 style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '15px',
                marginTop: '10px'
              }}>{number}</h5>
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Details;
