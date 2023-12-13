import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '../CSS/DeleteProperty.css';

function DeleteProperty() {
  const [propertyId, setPropertyId] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [propertyData, setPropertyData] = useState([]);

  const handleInputChange = (e) => {
    setPropertyId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/studentrentals/deleteProperty/${propertyId}`);
      console.log('Property deleted successfully:', response.data);
      setDeleteMessage('Property deleted successfully!');
      setPropertyId('');
      fetchPropertyData();
    } catch (error) {
      console.error('Error deleting property:', error.response);
      console.error('Error details:', error.response.data);
      setDeleteMessage('Error deleting property. Please try again.');
    }
  };

  const fetchPropertyData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/studentrentals/getAllProperty');
      setPropertyData(response.data);
    } catch (error) {
      console.error('Error fetching property data:', error.response);
    }
  };

  useEffect(() => {
    // Fetch property data when the component mounts
    fetchPropertyData();
  }, []);

  return (
    <>
      <Header hideUlAndButton={true} />
      <Link to='/admin' style={{ textDecoration: 'none', color: 'black' }}>
        <div className="back-container">
          <box-icon name='arrow-back' size='md'></box-icon>
          <p className="back">Back</p>
        </div>
      </Link>
      <div className="deleteContainer">
        <h1>DELETE A PROPERTY</h1>
        <div className="dcform">
          <input
            type="text"
            placeholder="Property ID"
            value={propertyId}
            onChange={handleInputChange}
          />
          <button onClick={handleDelete} disabled={!propertyId}>
            Delete
          </button>
        </div>
        {deleteMessage && <p className="delete-message">{deleteMessage}</p>}
        <h2>Property Data</h2>
        <div className="table-container">
          <table className="property-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Price</th>
                <th>Type</th>
                <th>Size</th>
                <th>Number of Beds</th>
              </tr>
            </thead>
            <tbody>
              {propertyData.map((property) => (
                <tr key={property.id}>
                  <td>{property.propid}</td>
                  <td>{property.name}</td>
                  <td>{property.address}</td>
                  <td>{property.price}</td>
                  <td>{property.type}</td>
                  <td>{property.size} Sqm</td>
                  <td>{property.numbeds} Bed/s</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DeleteProperty;
