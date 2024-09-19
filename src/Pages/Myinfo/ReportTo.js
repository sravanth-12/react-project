import React, { useState } from 'react';
import axios from 'axios';
import './ReportTo.css';

const ReportTo = () => {
  const [formData, setFormData] = useState({
    emp_number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://192.168.2.51:8080/My-info/ReportTo/add', formData);
      // Display success message
      alert('Form data saved successfully!');
    } catch (error) {
      // Handle error here
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="form-container">
      <h3>Report To</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Employee Number</label>
          <input
            type="number"
            name="emp_number"
            placeholder="Emp No"
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Assigned Supervisors</label>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Reporting Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">No Records Found</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="form-row">
          <label>Assigned Subordinates</label>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Reporting Method</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="2">No Records Found</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="form-row">
          <label>Attachments</label>
          {/* <button type="button" className="add-button">+ Add</button> */}
        </div>
        <div className="form-row">
          <table>
            <thead>
              <tr>
                <th>File Name</th>
                <th>Description</th>
                <th>Size</th>
                <th>Type</th>
                <th>Date Added</th>
                <th>Added By</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="7">No Records Found</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="form-row">
          <button type="submit" className="save-button">Save</button>
        </div> */}
      </form>
    </div>
  );
};

export default ReportTo;

