import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import '../CSS/DeleteStudent.css';

function DeleteStudent() {
  const [studentId, setStudentId] = useState('');
  const [deleteMessage, setDeleteMessage] = useState('');
  const [studentData, setStudentData] = useState([]);

  const handleInputChange = (e) => {
    setStudentId(e.target.value);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:8080/studentrentals/deleteStudent/${studentId}`);
      console.log('Student deleted successfully:', response.data);
      setDeleteMessage('Student deleted successfully!');
      setStudentId('');
      fetchStudentData();
    } catch (error) {
      console.error('Error deleting student:', error.response);
      console.error('Error details:', error.response.data);
      setDeleteMessage('Error deleting student. Please try again.');
    }
  };

  const fetchStudentData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/studentrentals/getAllStudents');
      setStudentData(response.data);
    } catch (error) {
      console.error('Error fetching student data:', error.response);
    }
  };

  useEffect(() => {
    fetchStudentData();
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
        <h1>DELETE A STUDENT</h1>
        <div className="dcform">
          <input
            type="text"
            placeholder="Student ID"
            value={studentId}
            onChange={handleInputChange}
          />
          <button onClick={handleDelete} disabled={!studentId}>
            Delete
          </button>
        </div>
        {deleteMessage && <p className="delete-message">{deleteMessage}</p>}
        <h2>Student Data</h2>
        <div className="table-container">
          <table className="student-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Gender</th>
                <th>Phone Number</th>
                <th>Password</th>
                <th>Username</th>
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
                  <td>{student.password}</td>
                  <td>{student.username}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default DeleteStudent;
