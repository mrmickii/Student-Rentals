import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import ConfirmationDialog from "../Components/ConfirmationDialog";
import "../CSS/PaymentPage.css";
import gcash from '../Images/icons8-gcash-100.png'
import walkin from "../Images/walk-in.png";

function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const propertyData = location.state ? location.state.propertyData : null;

  if (!propertyData) {
    navigate("/");
    return null;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  const [selectedPaymentOption, setSelectedPaymentOption] = useState(null);
  const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false);

  const handleConfirmClick = () => {
    setConfirmationDialogOpen(true);
  };

  const handleDialogConfirm = () => {
    setConfirmationDialogOpen(false);
    // Redirect to the confirmation page
    navigate("/confirmation");
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
              value="walk-in"
              checked={selectedPaymentOption === "walk-in"}
              onChange={() => setSelectedPaymentOption("walk-in")}
            />
            Walk-in Payment
          </label>
          <label>
            <input
              type="radio"
              value="online"
              checked={selectedPaymentOption === "online"}
              onChange={() => setSelectedPaymentOption("online")}
            />
            Online Payment
          </label>
          {selectedPaymentOption === "online" && (
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
          {selectedPaymentOption === "walk-in" && (
            <div className="walk-in">
              <h3>Walk-in Payment Details</h3>
              <p>Visit our office for walk-in payment.</p>
              <img src={walkin} alt="walk-in" style={{ width: '200px', height: '200px' }} />
            </div>
          )}
          {selectedPaymentOption === "online" && (
            <div className="online">
              <div>
                <h1>PRICE DETAILS</h1>
                <p>
                  Price:
                  <span> ₱{propertyData.price}</span>
                </p>
                <hr />
                <p>
                  Total Amount:
                  <span> ₱{propertyData.price}</span>
                </p>
                <button onClick={handleConfirmClick}>
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
      />
    </>
  );
}

export default PaymentPage;
