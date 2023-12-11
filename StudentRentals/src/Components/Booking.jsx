// Import React and useState

// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState } from 'react';
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../CSS/Booking.css"
import reservationImage from '../Images/reservation.png';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Header from '../Components/Header'
 
import { Link } from 'react-router-dom';

const Booking = () => {
    const [firstname, setFirstName] = useState(''); // Use the useState hook here
    const [middlename, setMiddleName] = useState('');
    const [lastname, setLastName] = useState('');
    const [suffix, setSuffix] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhoneNumber] = useState('');
    const [schoolname, setSchoolName] = useState('');
 
  const handleChangeFirstName = (event) => {
    setFirstName(event.target.value);
  };
 
  const handleChangeMiddleName = (event) => {
    setMiddleName(event.target.value);
  }
 
  const handleChangeLastName = (event) => {
    setLastName(event.target.value);
  }
 
  const handleChangeSuffix = (event) => {
    setSuffix(event.target.value);
  }
 
  const handleChangeBirthdate = (event) => {
    setBirthdate(event.target.value);
  }
 
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  }
 
  const handleChangePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  }
 
  const handleChangeSchoolName = (event) => {
    setSchoolName(event.target.value);
  }
  const handleSubmit = async () => {
    try {
      await axios.post('http://localhost:8080/booking/insertBooking', {
        firstName: firstname,
        middleName: middlename,
        lastName: lastname,
        suffix: suffix,
        birthDate: birthdate,
        email: email,
        phoneNumber: phonenumber,
        school: schoolname
      });
      alert("Booking successful");
    } catch (error) {
      alert("Booking failed");
    }
  };
    return(
       <div>
        <Header/>
        <section className="main-container">
          
            <div className="arrow-container">
                <a href="/details">
                    <ArrowBackIcon />
                </a>
                <a href="/details" style={{textDecoration: 'none'}}><p>Back</p></a>
                
                
            </div>
           
            <div className="student-information">
                <div>
                    <h2>Student Information</h2>
                    <p>Enter the required information for each student
                        presented at the airport.</p>
                    <div style={{marginTop: '50px'}}>
                        <h3 style={{fontFamily: 'Montserrat, sans-serif'}}>Personal Information</h3>
 
                        <TextField id="outlined-basic" label="First Name*" variant="outlined" className="custom-text-field" style={{marginRight: "20px"}}
                            value={firstname} onChange={handleChangeFirstName}/>
                        <TextField id="filled-basic" label="Middle Name*" variant="outlined" className="custom-text-field" value= {middlename} style={{marginRight: "20px"}}
                            onChange={handleChangeMiddleName} />
                        <TextField id="standard-basic" label="Last Name*" variant="outlined" className="custom-text-field" value={lastname} onChange={handleChangeLastName}/>
                        <TextField id="outlined-basic" label="Suffix*" variant="outlined" className="custom-text-field" value={suffix} onChange={handleChangeSuffix}style={{marginRight: "20px", marginTop: '20px'}}/>
                        <TextField id="filled-basic" label="Birthdate (mm/dd/yy)*" variant="outlined" className="custom-text-field" value={birthdate} onChange={handleChangeBirthdate} style={{marginRight: "20px", marginTop: '20px'}}/>
                        <TextField id="outlined-basic" label="Email Address*" variant="outlined" onChange={handleChangeEmail} value={email} style={{marginRight: "20px", marginTop: '20px', width: '300px'}}/>
                        <TextField id="filled-basic" label="Phone Number*" variant="outlined" className="custom-text-field" value={phonenumber} onChange={handleChangePhoneNumber} style={{width: '320px', marginTop: '20px'}}/>
                        <TextField id="filled-basic" label="Name of School*" variant="outlined" className="custom-text-field" value={schoolname} onChange={handleChangeSchoolName} style={{width: '640px', marginTop: '20px'}}/>
                        
                        <Button variant="contained" component={Link} to="/confirm" onClick={handleSubmit}
                                sx={{
                                    backgroundColor: '#F28500',
                                    '&:hover': {backgroundColor: '#FFA733'}}}
                                    style={{ height: '40px', margin: '20px auto', marginTop: '50px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px'}}> {/* Add Button inside the Card */}
                                    Save and Pay Now
                                </Button>
                    </div>
 
                       
                </div>
                
            </div>
            <div className="description-reservation">
                <div className="image-reservation">
                    <img src={reservationImage} alt="Large" className="pic-reservation" />
                    <div className="price-details">
                        <h3>Price Details</h3>
                        <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '15px', marginBottom: '10px'}}>
                            Short Period: $ 1000
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '15px', marginBottom: '10px'}}>
                            Medium Period: $ 2000
                        </Typography>   
                        <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '15px'}}>
                            Long Period: $ 2000
                        </Typography>
                    </div>
                </div>
                <div className="image-description">
                    <h4>Fully Furnished Apartment</h4>
                    <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '13px'}}>
                        100 Smart Street, LA, USA
                    </Typography>
                    <hr />
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                        <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '11px', marginRight: '8px', fontWeight: 'bold'}}>
                            1 Bedroom
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '11px', marginRight: '8px', fontWeight: 'bold'}}>
                            1 Bathroom
                        </Typography>
                        <Typography variant="body2" style={{fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 'bold'}}>
                            1 Parking
                        </Typography>
                    </div>
                </div>
 
                
            </div>
            
        </section>

        </div>
    );
}
 
export default Booking;