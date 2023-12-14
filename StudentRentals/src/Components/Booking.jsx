import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "../CSS/Booking.css";
import Header from "../Components/Header";

function Booking() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const { propId } = useParams();
  const [propertyData, setPropertyData] = useState({});
  const [loading, setLoading] = useState(true); 
  const location = useLocation();
  const { propertyData: locationPropertyData } = location.state || {};

 const validateForm = () => {
  if (!firstName.trim() || !lastName.trim() || !phoneNumber.trim()) {
    setFormErrors({
      firstName: 'Please fill out all fields.',
      lastName: 'Please fill out all fields.',
      phoneNumber: 'Please fill out all fields.',
    });
    return false;
  }
  return true;
};
  
  const handleBackClick = () => {
    navigate(-1);
  };

  const handleSaveClick = () => {
    const isFormValid = validateForm();
  
    if (isFormValid) {
      navigate(`/payment/${propId}`, { state: { propertyData } });
    } else {
      console.log('Form has errors. Please check the fields.');
    }
  };
   
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!propId) {
          console.error("Property ID is undefined");
          return;
        }
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

    if (locationPropertyData) {
      setPropertyData(locationPropertyData);
      setLoading(false);
    } else {
      fetchData();
    }
  }, [propId, locationPropertyData]);

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

      <div className="booking-container">
        <div className="bc-leftside">
          <h1>Student Information</h1>
          <p>Enter the necessary information for the student renting a dorm, apartment, or room, ensuring that the provided details precisely match the information.</p>
          <h3>Personal Information</h3>
          <input 
            type="text" 
            placeholder="First Name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />  
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <p className="error-message">
            {formErrors.firstName && <span>{formErrors.firstName}</span>}
            {formErrors.lastName && <span>{formErrors.lastName}</span>}
            {formErrors.phoneNumber && <span>{formErrors.phoneNumber}</span>}
          </p>




          <div className="bcls-button">
            <button onClick={handleSaveClick}>Save</button>
          </div>
        </div>

        <div className="bc-leftside-details">
          <div className="bc-leftside-details-one">
            <img
              src={`http://localhost:8080/property-images/${propertyData.propid}`}
              alt={propertyData.name}
            />
            <div className="bc-leftside-details-one-right">
              <p className="name">{propertyData.name}</p>
              <p>{propertyData.address}</p>
              <hr />
              <div className="bc-leftside-details-one-left">
                <p>{propertyData.numbeds} Bedroom/s</p>
                <p>0 Bathroom/s</p>
                <p>0 Parking/s</p>
              </div>
            </div>
          </div>
          <div className="price-details">
            <h1>Price Details</h1>
            <p><strong>Price: </strong>₱{propertyData.price}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Booking;
