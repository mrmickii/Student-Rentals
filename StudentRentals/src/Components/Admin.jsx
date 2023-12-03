import React, { useState } from 'react';
import axios from 'axios';
import '../CSS/Admin.css';
import Header from './Header';

function Admin() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [propertyData, setPropertyData] = useState({
    address: '',
    price: '',
    type: '',
    size: '',
    numBeds: '',
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = function () {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleInputChange = (e) => {
    setPropertyData({
      ...propertyData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('address', propertyData.address);
    formData.append('price', propertyData.price);
    formData.append('type', propertyData.type);
    formData.append('size', propertyData.size);
    formData.append('numbeds', propertyData.numBeds);

    try {
      const response = await axios.post(
        'http://localhost:8080/studentrentals/insertProperty',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
  
      console.log('Property added successfully:', response.data);
  
      setPropertyData({
        address: '',
        price: '',
        type: '',
        size: '',
        numBeds: '',
      });
      setSelectedImage(null);
    } catch (error) {
      console.error('Error adding property:', error.response);
      console.error('Error details:', error.response.data);
    }
  };

  return (
    <>
      <Header />
      <div className="admin-container">
        <div className="lft-section">
          <h1>Add a Property</h1>
          <div className="pic-container">
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>
          <div className="btn-container">
            <label htmlFor="fileInput">
              Add Picture
              <input
                id="fileInput"
                type="file"
                name="file"
                accept="image/png, image/jpeg, image/jpg"
                style={{ display: 'none'}}
                onChange={handleFileChange}
              />
            </label>
            <button onClick={handleRemoveImage}>Remove</button>
          </div>
        </div>

        <div className="rgt-section">
          <div className="add-container">
            <p>Add facilities available at your place</p>
            <input
              type="text"
              placeholder="Address"
              name="address"
              value={propertyData.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Price"
              name="price"
              value={propertyData.price}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Type"
              name="type"
              value={propertyData.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="add-container">
            <p>Add amenities available at your place</p>
            <input
              type="text"
              placeholder="Size"
              name="size"
              value={propertyData.size}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Number of beds"
              name="numBeds"
              value={propertyData.numBeds}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit} disabled={!selectedImage}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;