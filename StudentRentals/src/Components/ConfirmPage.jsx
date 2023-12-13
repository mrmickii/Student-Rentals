import React from "react";
import "../CSS/confirmpage.css"
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, Button } from '@mui/material';
import axios from "axios";
import TextField from '@mui/material/TextField';
import Visa from '../Images/visa.svg';
import Mastercard from '../Images/mastercard.svg';
import Header from "./Header";

export function ConfirmPage() {

        const [selectedValue, setSelectedValue] = React.useState('option1');
        const [amount, setAmount] = useState([]);
        const [newAmount, setNewAmount] = useState('');


        const handleClose = () => {
            setOpen(false);
        };

        const handleChange = (event) => {
          setSelectedValue(event.target.value);
        };

        const handleInputChange = (e) => {
            setNewAmount(e.target.value);
        };

        const handleSubmit = async () => {
            try {
                const response = await axios.post('http://localhost:8080/payment/insertPayment', {
                    amount: newAmount
                });
                alert("Payment successful");
                console.log('Payment posted:', response.data);
                setAmount([...amount, newAmount]); 
            } catch (error) {
                alert("Payment failed");
                console.error('Error posting payment:', error);
                
            }
            setNewAmount(''); 
        };



    return (
        <div>
        <Header />
        <section className="main-div">
            
            <div className="arrowcontainer">
                <a href="/booking">
                    <ArrowBackIcon />
                </a>
                <a href="/booking" style={{textDecoration: 'none'}}>
                    <p>Back</p>
                </a>    
            </div>

            <div className="parent-left-div">
                <h2>SELECT PAYMENT OPTION</h2>
                
                        <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="radio-options"
                            name="radio-options"
                            value={selectedValue}
                            onChange={handleChange}>
                                    
                            <div className="radio-div2">
                                    <FormControlLabel value="option2" control={<Radio />} 
                                    label={
                                        <Typography style={{ fontFamily: 'Poppins, sans-serif', marginLeft: '10px', fontSize: '14px' }}>
                                            Net Banking
                                        </Typography>
                                    }/>

                                    <div>
                                        <TextField 
                                            placeholder="Enter amount" 
                                            variant="outlined" 
                                            value={newAmount} 
                                            onChange={handleInputChange} 
                                            style={{ fontFamily: 'Poppins, sans-serif', 
                                                width: '400px', marginLeft: '10px', 
                                                fontSize: '14px', marginTop: '10px', 
                                                marginBottom: '10px' 
                                            }}>
                                        </TextField>
                                    </div> 
                            </div>

                            <div className="radio-div3">
                                    <FormControlLabel value="option3" control={<Radio />}
                                    label={
                                        <Typography style={{ fontFamily: 'Poppins, sans-serif', marginLeft: '10px', fontSize: '14px' }}>
                                            Credit/Debit Card
                                        </Typography>
                                    }/>               
                                    <img src= {Visa} alt="visa logo" style={{padding:'0', marginLeft:'250px', width: '50px', height: '50px'}}/>
                                    <img src= {Mastercard} alt="mastercard" style={{padding:'0', marginLeft:'20px', width: '50px', height: '50px'}}/>
                            </div> 
                        </RadioGroup>
                        </FormControl>
                        
                        <Button
                                variant="contained"
                                onClick={handleSubmit}
                                sx={{ 
                                    backgroundColor: '#F28500', 
                                    '&:hover': {backgroundColor: '#FFA733'}}}
                                    style={{ height: '40px', width: '600px', margin: '20px auto', marginTop: '50px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px'}}>
                                SUBMIT
                        </Button>


                        <div>
                            {amount.length > 0 ? (
                                amount.map((amountInput, index) => (
                                    <div key={index}>
                                        <Typography style={{ fontSize: '20px', fontFamily: 'Montserrat, sans-serif' }}>
                                            Downpayment: {amountInput}
                                        </Typography>
                                        <hr />
                                    </div>
                                ))
                            )
                            : (
                                <Typography style={{ fontSize: '20px', fontFamily: 'Montserrat, sans-serif' }}>
                                    No downpayments made yet.
                                </Typography>
                                )}
                                <Typography style={{ fontSize: '20px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
                                    Total Amount: {amount.reduce((acc, curr) => acc + parseFloat(curr), 0)}
                                </Typography>
                        </div>      
            </div>
        </section>
    </div>
    );
}