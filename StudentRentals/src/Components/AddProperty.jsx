import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/AddProperty.css';
import Header from './Header';
import ConfirmationDialog from './ConfirmationDialog'; // Import the ConfirmationDialog component

function AddProperty() {
  const [updateMessage, setUpdateMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [propertyData, setPropertyData] = useState({
    name: '',
    address: '',
    price: '',
    type: '',
    size: '',
    numbeds: '',
  });

  // State for the confirmation dialog
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleFileChange = (e) => {
    const image = e.target.files[0];

    if (image && image.size <= 1048576) {
      setSelectedImage(image);
    } else {
      console.error('File size exceeds the limit.');
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

  // Function to open the confirmation dialog
  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  // Function to close the confirmation dialog
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSubmit = async () => {
    // Open the confirmation dialog before submitting
    handleOpenDialog();
  };

  // Function to handle the confirmation (after the user clicks "Confirm" in the dialog)
  const handleConfirmSubmit = async () => {
    setDialogOpen(false);

    const formData = new FormData();
    formData.append('image', selectedImage);
    formData.append('name', propertyData.name);
    formData.append('address', propertyData.address);
    formData.append('price', propertyData.price);
    formData.append('type', propertyData.type);
    formData.append('size', propertyData.size);
    formData.append('numbeds', propertyData.numbeds);

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
      setUpdateMessage('Property added successfully!');
      console.log('Property added successfully:', response.data);

      setPropertyData({
        name: '',
        address: '',
        price: '',
        type: '',
        size: '',
        numbeds: '',
      });
      setSelectedImage(null);
    } catch (error) {
      console.error('Error adding property:', error.response);
      console.error('Error details:', error.response.data);
    }
  };

  return (
    <>
      <Header hideUlAndButton={true} />
      <Link to='/admin' style={{ textDecoration: 'none', color: 'black' }}>
        <div className="back-container">
          <box-icon name='arrow-back' size='md'></box-icon>
          <p className="back">Back</p>
        </div>
      </Link>
      <div className="admin-container">
        <div className="lft-section">
          <h1>ADD A PROPERTY</h1>
          <div className="pic-container">
            {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Selected" />}
          </div>
          <div className="btn-container">
            <label htmlFor="fileInput">
              Add
              <input
                id="fileInput"
                type="file"
                name="image"
                accept="image/png, image/jpeg, image/jpg"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </label>
            <button onClick={handleRemoveImage}>Remove</button>
          </div>
        </div>

        <div className="rgt-section">
          <div className="add-container">
            <p>Property Information</p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={propertyData.name}
              onChange={handleInputChange}
            />
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
            <p className="update-message">{updateMessage}</p>
          </div>
          <div className="add-container">
            <p></p>
            <input
              type="text"
              placeholder="Type"
              name="type"
              value={propertyData.type}
              onChange={handleInputChange}
            />
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
              name="numbeds"
              value={propertyData.numbeds}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit} disabled={!selectedImage}>
              Submit
            </button>
          </div>
        </div>
      </div>

      {/* ConfirmationDialog component */}
      <ConfirmationDialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        onConfirm={handleConfirmSubmit}
        message="Are you sure you want to add this property?"
      />
    </>
  );
}

export default AddProperty;
