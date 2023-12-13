import React from "react";
import "../CSS/confirmpage.css"
import { useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { Button, FormControlLabel, Radio, RadioGroup, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material';
//import { ReactComponent as Visa } from "./Components/images/visa.svg";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, Dialog, DialogTitle, DialogContent, Button } from '@mui/material';

import TextField from '@mui/material/TextField';
import Visa from '../Images/visa.svg';
import Mastercard from '../Images/mastercard.svg';

export function ConfirmPage(props) {

        const [selectedValue, setSelectedValue] = React.useState('option1'); // State to hold the selected value
        const [open, setOpen] = useState(false);
        const [amount, setAmount] = useState('');

        const handleChangeAmount = (event) => {
            setAmount(event.target.value);
          };

        const handleConfirm = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        const handleChange = (event) => {
          setSelectedValue(event.target.value);
        };


        const handleSubmit = async () => {
            try {
              await axios.post('http://localhost:8080/payment/insertPayment', {
                amount : amount
              });
              alert("Payment successful");
            } catch (error) {
              alert("Payment failed");
            }
          };


    return (
        <section className="main-div">
            
            <div className="arrowcontainer">
                <a href="/reservation">
                    <ArrowBackIcon />
                </a>
                <a href="/reservation" style={{textDecoration: 'none'}}>
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
                            onChange={handleChange}
                        >
                            <div className="radio-div">
                                <FormControlLabel value="option1" control={<Radio />} 
                                label={
                                    <Typography style={{ fontFamily: 'Poppins, sans-serif', marginLeft: '10px', fontSize: '14px' }}>
                                        Walk-in Payment
                                    </Typography>
                                }/>
                            </div>
                                    
                            <div className="radio-div2">
                                    <FormControlLabel value="option2" control={<Radio />} 
                                    label={
                                        <Typography style={{ fontFamily: 'Poppins, sans-serif', marginLeft: '10px', fontSize: '14px' }}>
                                            Net Banking
                                        </Typography>
                                    }/>
                                    {/* <div>
                                        
                                        <TextField id="filled-basic" label="Enter amount" variant="outlined" className="custom-text-field" value={amount} onChange={handleChangeAmount} style={{width: '640px', marginTop: '20px'}}/>
                                    </div> */}

                                    <div>
                                        <TextField placeholder="Card Number" style={{ fontFamily: 'Poppins, sans-serif', width: '550px', marginLeft: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '10px' }}></TextField>
                                        <TextField placeholder="Name on Card" style={{ fontFamily: 'Poppins, sans-serif', width: '550px', marginLeft: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '10px' }}></TextField>
                                        <TextField placeholder="CVV" style={{ fontFamily: 'Poppins, sans-serif', width: '550px', marginLeft: '10px', fontSize: '14px', marginTop: '10px' }}></TextField>
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
                                    
                                    <div>
                                        <TextField placeholder="Card Number" style={{ fontFamily: 'Poppins, sans-serif', width: '550px', marginLeft: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '10px' }}></TextField>
                                        <TextField placeholder="Name on Card" style={{ fontFamily: 'Poppins, sans-serif', width: '550px', marginLeft: '10px', fontSize: '14px', marginTop: '10px', marginBottom: '10px' }}></TextField>
                                        <TextField placeholder="CVV" style={{ fontFamily: 'Poppins, sans-serif', width: '550px', marginLeft: '10px', fontSize: '14px', marginTop: '10px' }}></TextField>
                                    </div>
                                    
                               
                            </div>
                           
                            
                        </RadioGroup>
                        </FormControl>
                        
                        <Button
                                variant="contained"
                                onClick={handleConfirm}
                                sx={{ 
                                    backgroundColor: '#F28500', 
                                    '&:hover': {backgroundColor: '#FFA733'}}}
                                    style={{ height: '40px', width: '600px', margin: '20px auto', marginTop: '50px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold', fontSize: '16px'}}>
                                Confirm
                        </Button>

                        <Dialog open={open} onClose={handleClose} sx={{width: 'auto'}}>
                            <DialogTitle style={{fontSize: '28px', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif'}}>PRICE DETAILS</DialogTitle>
                            <DialogContent>
                                <Typography style={{fontSize: '20px', fontFamily: 'Montserrat, sans-serif'}}>
                                    Downpayment: 
                                </Typography>
                                <hr/>
                                <Typography style={{fontSize: '20px', fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold'}}>
                                    Total Amount
                                </Typography>
                            </DialogContent>
                    </Dialog>
                   
            </div>
            

        </section>
    );
}