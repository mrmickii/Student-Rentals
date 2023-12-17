import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/GetProperty.css"
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

function GetProperty() {
  const [propertyData, setPropertyData] = useState([]);

  const fetchPropertyData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/studentrentals/getAllProperty"
      );
      setPropertyData(response.data);
    } catch (error) {
      console.error("Error fetching property data:", error.response);
    }
  };

  useEffect(() => {
    fetchPropertyData();
  }, []);

  const exportToPDF = () => {
    const pdf = new jsPDF();
    pdf.text("All Property Data", 20, 10);

    const columns = [
      "ID",
      "Name",
      "Address",
      "Price",
      "Type",
      "Size",
      "Number of Beds",
    ];

    const rows = propertyData.map((property) => [
      property.propid,
      property.name,
      property.address,
      property.price,
      property.type,
      `${property.size} Sqm`,
      `${property.numbeds} Bed/s`,
    ]);

    pdf.autoTable({
      head: [columns],
      body: rows,
    });

    pdf.save("property_data.pdf");
  };

  return (
    <>
      <Header hideUlAndButton={true} />
      <Link to="/admin" style={{ textDecoration: "none", color: "black" }}>
        <div className="back-container">
          <box-icon name="arrow-back" size="md"></box-icon>
          <p className="back">Back</p>
        </div>
      </Link>
      <div className="get-property-container">
        <div className="get-property">
          <h1>ALL PROPERTY</h1>
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
        <button className="export" onClick={exportToPDF}>
          Export All Property
        </button>
      </div>
    </>
  );
}

export default GetProperty;
