import React, { useState } from 'react';
import axios from 'axios';
import './Directory.css';

const Directory = () => {
  const [formData, setFormData] = useState({
    emp_name: '',
    job_title: '',
    location: '',
  });

  const [errors, setErrors] = useState({
    emp_name: '',
    job_title: '',
    location: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Add simple validation
    if (value.trim() === '') {
      error = `${name} is required`;
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === '') {
        newErrors[key] = `${key} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      alert('Please fix the errors before submitting the form');
      return;
    }

    // Save form data to local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    try {
      // Post form data to the server
      await axios.post('http://192.168.2.55:8081/Directory/add', formData);
      // Display success message
      alert('Form data saved successfully!');
    } catch (error) {
      // Handle error here
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="form-container">
      <h3>Directory</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Employee Name</label>
          <input
            type="text"
            name="emp_name"
            placeholder="Employee Name"
            value={formData.emp_name}
            onChange={handleChange}
          />
          {errors.emp_name && <span className="error">{errors.emp_name}</span>}

          <label>Job Title</label>
          <select name="job_title" value={formData.job_title} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="Associate Cloud Trainee"> Associate Cloud Trainee</option>
            <option value="Associate Cloud Engineer"> Associate Cloud Engineer</option>
            <option value="IT Admin"> IT Admin</option>
           
          </select>
          {errors.job_title && <span className="error">{errors.job_title}</span>}

          <label>Location</label>
          <select name="location" value={formData.location} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="India"> India </option>
            <option value="US"> US </option>
            <option value="Canada"> Canada </option>

            
          </select>
          {errors.location && <span className="error">{errors.location}</span>}
        </div>

        <div className="form-save-row">
          <button type="submit" className="save-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default Directory;
