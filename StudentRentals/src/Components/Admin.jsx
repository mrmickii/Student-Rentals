import React, { useState } from 'react';
import '../CSS/Admin.css';
import Header from './Header';

function Admin() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Header />
      <div className='admin-container'>
        <div className='lft-section'>
          <h1>Add a Property</h1>
          <div className='pic-container'>
            {selectedImage && <img src={selectedImage} alt="Selected" />}
          </div>
          <div className='btn-container'>
            <label htmlFor="fileInput">
              Add Picture
              <input
                id="fileInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleFileChange}
              />
            </label>
            <button onClick={handleRemoveImage}>Remove</button>
          </div>
        </div>

        <div className='rgt-section'>
          <div className='add-container'>
            <p>Add facilities available at your place</p>
            <input type="text" placeholder='Address' />
            <input type="text" placeholder='Price' />
            <input type="text" placeholder='Type' />
          </div>
          <div className='add-container'>
            <p>Add amenities available at your place</p>
            <input type="text" placeholder='Size' />
            <input type="text" placeholder='Number of beds' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
