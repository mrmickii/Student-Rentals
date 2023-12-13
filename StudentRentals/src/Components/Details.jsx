import React from "react";
import { useParams } from "react-router-dom";
import "../CSS/Details.css"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import LandingPage from "./LandingPage";
import { useState, useEffect } from 'react'; 
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import StarIcon from '@mui/icons-material/Star';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Building from '../Images/pic1.jpg';
import Room from '../Images/pic2.jpg';
import Apartment from '../Images/apartment1.png';
import Bed from '../Images/apartment2.png';
import Sala from '../Images/apartment3.png';
import { Link } from 'react-router-dom';


    const Details = () => {

        const [comments, setComments] = useState([]);
        const [currentDate, setCurrentDate] = useState(new Date());
        const [newComment, setNewComment] = useState('');
        const [propertyData, setPropertyData] = useState([]);

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

        useEffect(() => {
            const intervalId = setInterval(() => {
              setCurrentDate(new Date());
            }, 60000);
        
            // Clear the interval on component unmount to prevent memory leaks
            return () => clearInterval(intervalId);
          }, []);


        const handleInputChange = (e) => {
            setNewComment(e.target.value);
        };

        const handleSubmit = async () => {
            // Add the new comment to the comments array
            try {
                const response = await axios.post('http://localhost:8080/feedback/insertFeedback', {
                  description: newComment,
                  timestamp: currentDate
                });
                console.log('Comment posted:', response.data);
                // Handle success, update UI, etc.
              } catch (error) {
                  alert("Feedback failed");
                console.error('Error posting comment:', error);
                // Handle error
              }
            setComments([...comments, newComment]);
            setNewComment(''); // Clear the input field after submission
        };

        

    return(
        
         <div>
         <Header /> 
         
        <section className="imageSection">
            
            
            <div className="imagesContainer">
                <div className="leftImageContainer">
                    <img src={Building} alt="Large" className="largeImage" />
                </div>
                <div className="rightImageGrid">
                    <img src={Room} alt="Small" className="smallImage" />
                    <img src={Apartment} alt="Small" className="smallImage" />
                    <img src={Bed} alt="Small" className="smallImage" />
                    <img src={Sala} alt="Small" className="smallImage" />
                </div>
                <div className="imageInfo">
                    <div className="title">
                        <h2 style={{fontFamily: 'Montserrat, sans-serif'}}>Well Furnished Apartment</h2>
                        
                    </div>
                    
                    <div className="icons">
                        <FavoriteBorderIcon fontSize="large"/>
                        <ShareIcon fontSize="large"/>
                    </div>
                    

                    <div className="description">
                        <h2 style={{fontFamily: 'Montserrat, sans-serif'}}>Apartment Description</h2>
                        <p style={{ textAlign: 'justify', fontFamily: 'Montserrat, sans-serif', fontSize: '16', lineHeight: '1.6' }}>The apartment consists of a large bright bedroom with a comfy king-sized bed, a modern fully-equipped kitchen and a sunlit living room with Apple TV and free Netflix account. 
                            It is the perfect place to stay for couples looking for a romantic location in the historic centre, within walking distance of some of the most beautiful sceneries you can 
                            find in the city and all famous landmarks. The sofa in the living room can also serve as an additional bed for a 3rd guest. 
                            Located in a side street between the ___ river bank and the leafy ___ hill park, the apartment is very quiet at night. 
                            Please note, my apartment is on the 3rd floor with no elevator. I am more than happy to help you with your luggage!</p> 
                    </div>

                    

                    <div className="reviews-container">
                        <div className="review-rate">
                            <h2 style={{ marginRight: '20px', fontFamily: 'Montserrat, sans-serif' }}>Reviews</h2>
                            <StarIcon style={{ marginRight: '20px' }}/>
                            <h2 style={{fontFamily: 'Montserrat, sans-serif', fontSize: '17px'}} >5.0</h2>
                        </div>

                        <div class="grid-container">
                            <div class="grid-item">Amenities</div>
                            <div class="grid-item">
                                <div className="rectangle1"></div>
                            </div>
                            <div class="grid-item">5.0</div>
                            <div class="grid-item">Hygiene</div>
                            <div class="grid-item">
                                <div className="rectangle1"></div>
                            </div>
                            <div class="grid-item">5.0</div>

                            <div class="grid-item">Communication</div>
                            <div class="grid-item">
                                <div className="rectangle1"></div>
                            </div>
                            <div class="grid-item">5.0</div>
                            <div class="grid-item">Location of Property</div>
                            <div class="grid-item">
                                <div className="rectangle1"></div>
                            </div>
                            <div class="grid-item">5.0</div>
                            <div class="grid-item">Value For Money</div>
                            <div class="grid-item">
                                <div className="rectangle1"></div>
                            </div>
                            <div class="grid-item">5.0</div>
                            
                        </div>

                        <div>
                            
                                <TextareaAutosize className="textarea-class"
                                sx={{fontFamily: 'Montserrat, sans-serif'}}
                                value={newComment}
                                onChange={handleInputChange}
                                placeholder="Write your comment here..."
                                style={{width: '500px', height: '80px'}}
                                />
                                <Button type="submit" variant="contained" onClick={handleSubmit}
                                sx={{ 
                                    backgroundColor: '#F28500', 
                                    '&:hover': {backgroundColor: '#FFA733'}}}
                                    style={{ height: '40px', margin: '20px auto', marginTop: '50px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px'}}>Post Comment</Button>
                           

                            <div>
                                <h2>Comments:</h2>
                            </div>
                        </div>
                        
                        <div class="grid-container-reviews">
                        {comments.map((comment, index) => (
                                <div key={index} className="grid-item item1">
                                <Avatar style={{ width: '70px', height: '70px' }}>A</Avatar>
                                <div className="grid-item item2">
                                    <div className="nested-grid">
                                    <div className="nested-item">
                                        <Typography variant="h6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
                                            Anonymous
                                        </Typography>
                                    </div>
                                    <div className="nested-item">{currentDate.toLocaleString()}</div>

                                    <div className="item3">
                                    <div className="content-reviews">
                                    <p style={{ fontFamily: 'Montserrat, sans-serif', textAlign: 'justify' }}>
                                        {comment}
                                    </p>
                                    </div>
                                    </div>

                                    </div>
                                    
                                </div>
                                
                                </div>
                            ))}
                            
                        </div> 
                        

                         
                    
                        
                          
                    </div>

                    
                    
                    
                </div> 

                <div className="parent-card-container">
                    <div className="card-container">
                        <Card className="custom-card" elevation={3}>
                            <CardContent>
                            {propertyData.map((property) => (
                            <Typography variant="h5" component="div" style={{ fontSize: '22px', marginLeft: '20px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold'}}>
                                {" "}{property.price}
                            </Typography>
                            ))}
                            <Divider style={{ width: '90%', margin: '10px auto' }} />
                            
                            <div style={{ marginBottom: '25px', marginTop: '25px' }}>
                                <Button Button variant="contained" component={Link} to="/insertBooking" 
                                sx={{ 
                                    backgroundColor: '#F28500', 
                                    '&:hover': {backgroundColor: '#FFA733'}}}
                                    style={{ height: '60px', borderRadius: '30px', width: '90%', margin: '20px auto', marginLeft: '20px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '20px'}}> {/* Add Button inside the Card */}
                                    Book Now
                                </Button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" style={{ width: '25px' }}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                                </svg>
                                {propertyData.map((property) => (
                                <p style={{ marginLeft: '8px', marginRight: '8px' }}>{" "}{property.address}</p>
                                ))}
                                <PhoneRoundedIcon />
                                <p style={{ marginLeft: '8px' }}>09063155892</p>
                            </div>

                            </CardContent>
                        </Card>
                    </div>
                    
                </div>

                

                
            </div>
            
        </section>
        </div>
    );
};


export default Details;