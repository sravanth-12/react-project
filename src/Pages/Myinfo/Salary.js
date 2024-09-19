import React, { useState } from 'react';
import axios from 'axios';
import './Salary.css';

const Salary = () => {
  const [formData, setFormData] = useState({
    emp_number: '',
    attachment: null,
    attachment_description: ''
  });
  const [showAttachmentForm, setShowAttachmentForm] = useState(false);

  const handleAddAttachmentClick = () => {
    setShowAttachmentForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });

    try {
      await axios.post('http://192.168.2.51:8080/My-info/BasicSalary/add', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      // Display success message
      alert('Form data saved successfully!');
    } catch (error) {
      // Handle error here
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="form-container">
      <h3>Salary Information</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Employee Number</label>
          <input type="number" name="emp_number" placeholder="Emp Number" value={formData.emp_number} onChange={handleChange} required />
        </div>
        <div className="form-row">
          <label>Assigned Salary Components</label>
          <table>
            <thead>
              <tr>
                <th>Salary Component</th>
                <th>Amount</th>
                <th>Currency</th>
                <th>Pay Frequency</th>
                <th>Direct Deposit Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5">No Records Found</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="form-row">
          <label>Attachments</label>
          <button type="button" className="add-button" onClick={handleAddAttachmentClick}>+ Add</button>
        </div>
        {showAttachmentForm && (
          <div className="attachment-form">
            <div className="form-row">
              <label>Select File*</label>
              <input type="file" name="attachment" onChange={handleFileChange} required />
            </div>
            <div className="form-row">
              <label>Comment</label>
              <textarea name="attachment_description" placeholder="Type comment here" value={formData.attachment_description} onChange={handleChange}></textarea>
            </div>
            <div className="form-save-row">
              <button type="button" onClick={() => setShowAttachmentForm(false)}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </div>
        )}
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
        <div className="form-row">
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Salary;

