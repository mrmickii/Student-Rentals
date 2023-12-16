import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import ConfirmationDialog from "../Components/ConfirmationDialog";
import axios from "axios"; 
import "../CSS/PaymentPage.css";
import gcash from '../Images/icons8-gcash-100.png';
import walkin from "../Images/walk-in.png";

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const propertyDataFromBooking = location.state ? location.state.propertyData : null;
  const { dataFromBooking } = location.state || {};

  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);
  const [propertyName, setPropertyName] = useState("");

  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (propertyDataFromBooking) {
      setPropertyName(propertyDataFromBooking.name);
    }
  }, [propertyDataFromBooking]);

  const handleDialogConfirm = () => {
    setConfirmationDialogOpen(false);
  
    const paymentData = {
      selectedPaymentOption: selectedPaymentOption,
      price: propertyDataFromBooking.price,
    };
  
    axios
      .post("http://localhost:8080/studentrentals/insertPayment", paymentData)
      .then((paymentResponse) => {
        console.log("Payment data sent successfully:", paymentResponse.data);
  
        const bookingData = {
          firstName: dataFromBooking.firstName,
          lastName: dataFromBooking.lastName,
          number: dataFromBooking.phoneNumber,
          school: dataFromBooking.schoolName,
          propertyName: propertyDataFromBooking.name,
        };
  
        return axios.post("http://localhost:8080/studentrentals/insertBooking", bookingData);
      })
      .then((bookingResponse) => {
        console.log("Booking data sent successfully:", bookingResponse.data);
        navigate("/confirmation", {
          state: {
            selectedPaymentOption,
            price: propertyDataFromBooking.price,
            propertyName,
          },
        });
      })
      .catch((error) => {
        console.error("Error sending payment/booking data:", error);
      });
  };

  const handleConfirmButtonClick = () => {
    setConfirmationDialogOpen(true);
  };

  const handleDialogClose = () => {
    setConfirmationDialogOpen(false);
  };

  return (
    <>
      <Header hideUl={true} />
      <div className="back-container" onClick={handleBackClick} style={{ cursor: 'pointer' }}>
        <box-icon name='arrow-back' size='md'></box-icon>
        <p className="back">Back</p>
      </div>
      <div className="payment-body">
        <div className="payment-body-left">
          <p>SELECT PAYMENT OPTION</p>
          <label>
            <input
              type="radio"
              value="Walk-in"
              checked={selectedPaymentOption === "Walk-in"}
              onChange={() => setSelectedPaymentOption("Walk-in")}
            />
            Walk-in Payment
          </label>
          <label>
            <input
              type="radio"
              value="Online"
              checked={selectedPaymentOption === "Online"}
              onChange={() => setSelectedPaymentOption("Online")}
            />
            Online Payment
          </label>
          {selectedPaymentOption === "Online" && (
            <label className="gcash-info">
              <p>Enter Gcash Information</p>
              <input type="text" placeholder="Gcash Number" />
              <input type="text" placeholder="Gcash Name" />
              <img src={gcash} alt="gcash-logo" style={{
                width: '100px',
                alignSelf: 'center'
              }}/>
            </label>
          )}
        </div>

        <div className="payment-body-right">
          {selectedPaymentOption === "Walk-in" && (
            <div className="walk-in">
              <h3>Walk-in Payment Details</h3>
              <p>Visit our office for walk-in payment.</p>
              <img src={walkin} alt="walk-in" style={{ width: '200px', height: '200px' }} />
            </div>
          )}
          {selectedPaymentOption === "Online" && (
            <div className="online">
            <div>
              <h1>PRICE DETAILS</h1>
              <p><strong>Price:</strong> ₱{propertyDataFromBooking.price}</p>
              <hr />
              <p><strong>Total Amount:</strong> ₱{propertyDataFromBooking.price}</p>
              <button onClick={handleConfirmButtonClick}>
                  Confirm
                  <box-icon name='right-arrow-alt' color='white'></box-icon>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <ConfirmationDialog
        isOpen={isConfirmationDialogOpen}
        onClose={handleDialogClose}
        onConfirm={handleDialogConfirm}
        message={`Are you sure you want to confirm the payment for ${propertyName}?`}
      />
    </>
  );
}

export default PaymentPage;
