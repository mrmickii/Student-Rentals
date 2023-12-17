import React, { useState, useEffect } from "react";
import axios from "axios";
import "../CSS/GetStudent.css"
import Header from "../Components/Header";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";

function GetStudent() {
  const [studentData, setStudentData] = useState([]);

  const fetchStudentData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/studentrentals/getAllStudents"
      );
      setStudentData(response.data);
    } catch (error) {
      console.error("Error fetching student data:", error.response);
    }
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  const exportToPDF = () => {
    const pdf = new jsPDF();
    pdf.text("All Student Data", 20, 10);

    const columns = [
      "ID",
      "First Name",
      "Last Name",
      "Gender",
      "Phone Number",
      "Username",
      "Password",
    ];

    const rows = studentData.map((student) => [
      student.student_id,
      student.first_name,
      student.last_name,
      student.gender,
      student.phone_number,
      student.username,
      student.password,
    ]);

    pdf.autoTable({
      head: [columns],
      body: rows,
    });

    pdf.save("student_data.pdf");
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
      <div className="get-student-container">
        <div className="get-student">
          <h1>ALL STUDENTS</h1>
          <div className="table-container">
            <table className="student-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Gender</th>
                  <th>Phone Number</th>
                  <th>Username</th>
                  <th>Password</th>
                </tr>
              </thead>
              <tbody>
                {studentData.map((student) => (
                  <tr key={student.student_id}>
                    <td>{student.student_id}</td>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.gender}</td>
                    <td>{student.phone_number}</td>
                    <td>{student.username}</td>
                    <td>{student.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className="export" onClick={exportToPDF}>
            Export to PDF
          </button>
        </div>
      </div>
    </>
  );
}

export default GetStudent;
