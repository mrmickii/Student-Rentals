import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../CSS/UpdateProperty.css';
import Header from './Header';
import ConfirmationDialog from './ConfirmationDialog'; // Import the ConfirmationDialog component

function UpdateProperty() {
  const [updateMessage, setUpdateMessage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [propertyData, setPropertyData] = useState({
    propid: '',
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

    const requestData = {
      propid: propertyData.propid,
      name: propertyData.name,
      address: propertyData.address,
      price: propertyData.price,
      type: propertyData.type,
      size: propertyData.size,
      numbeds: propertyData.numbeds,
    };

    try {
      const response = await axios.put(
        `http://localhost:8080/studentrentals/updateProperty/${propertyData.propid}`,
        requestData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setUpdateMessage('Property updated successfully!');
      console.log('Property updated successfully:', response.data);

      setPropertyData({
        propid: '',
        name: '',
        address: '',
        price: '',
        type: '',
        size: '',
        numbeds: '',
      });
      setSelectedImage(null);
    } catch (error) {
      console.error('Error updating property:', error.response);
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
          <h1>UPDATE A PROPERTY</h1>
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
              placeholder="Property ID"
              name="propid"
              value={propertyData.propid}
              onChange={handleInputChange}
            />
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
        message="Are you sure you want to update this property?"
      />
    </>
  );
}

export default UpdateProperty;
