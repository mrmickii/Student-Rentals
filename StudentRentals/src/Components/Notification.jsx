// Notification.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CSS/Notification.css'; // Import the CSS file
import Header from '../Components/Header'

function Notification() {
  const [paymentDetails, setPaymentDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8080/notification/notificationPayment');
        console.log('API Response:', response.data);
        setPaymentDetails(response.data);
      } catch (error) {
        console.error('Error fetching payment details:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header/>
    <div className="payment-container">
      <h2>All Payments</h2>
      {loading ? (
        <p className="loading-message">Loading payment details...</p>
      ) : paymentDetails.length > 0 ? (
        <ul className="payment-list">
          {paymentDetails.map((payment, index) => (
            
            <li key={index} className="payment-item">
              <h3>Payment Details: {payment.paymentid}</h3>
              <p>Payment Method: {payment.paymentmethod}</p>
              <p>Amount: {payment.amount}</p>
              <p>Status: {payment.status ? 'Successful' : 'Not Successful'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-payments">No payment details available.</p>
      )}
    </div>
    </div>
  );
}


export default Notification;
