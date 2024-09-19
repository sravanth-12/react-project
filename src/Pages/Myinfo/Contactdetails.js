import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Contactdetails.css';
import MyInfo from './MyInfo';

const ContactDetails = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);
  const [formData, setFormData] = useState({
    emp_number: '',
    // id: '',
    coun_code: '',
    provin_code: '',
    city_code: '',
    emp_street1: '',
    emp_street2: '',
    emp_zipcode: '',
    emp_hm_telephone: '',
    emp_mobile: '',
    emp_work_telephone: '',
    emp_work_email: '',
    emp_oth_email: '',
    // fax: '',
    // notes: ''
  });

  const [showAttachmentForm, setShowAttachmentForm] = useState(false);
  const [errors, setErrors] = useState({
    emp_street1: '',
    emp_street2: '',
    city_code: '',
    provin_code: '',
    emp_hm_telephone: '',
    emp_mobile: '',
    emp_work_telephone: '',
    emp_work_email: '',
    emp_oth_email: ''
  });

  useEffect(() => {
    // Fetch countries from the API
    axios.get('http://192.168.100.6:8082/Admin/Country/getAll') // Replace with your actual API endpoint
      .then(response => {
        //console.log('Countries fetched:', response.data); // Add this log
        setCountries(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    // Validate text fields to ensure they contain only letters
    if (['emp_street1', 'emp_street2', 'city_code', 'provin_code'].includes(name)) {
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        error = 'This field can only contain letters';
      } else {
        error = '';
      }
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

  const handleAddAttachmentClick = () => {
    setShowAttachmentForm(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for any validation errors before submitting
    const hasErrors = Object.values(errors).some(error => error !== '');
    if (hasErrors) {
      alert('Please fix the errors before submitting the form');
      return;
    }

    try {
      // Display success message
      alert('Form data saved successfully!');
      await axios.put('http://192.168.100.6:8080/My-info/Employee/ContactDetails', formData);
    } catch (error) {
      console.error('Error submitting post:', error);
    }
  };

  return (
    
    <div className="form-container">
      <MyInfo/>
      <h3>Contact Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Employee Number</label>
          <input
            type="number"
            name="emp_number"
            placeholder="Emp Number"
            value={formData.emp_number}
            onChange={handleChange}
          />
        </div>
        <div className="form-row">
          <label>Address</label>
          <input
            type="text"
            name="emp_street1"
            placeholder="Street1"
            value={formData.emp_street1}
            onChange={handleChange}
          />
          {errors.emp_street1 && <small style={{ color: 'red' }}>{errors.emp_street1}</small>}
          <input
            type="text"
            name="emp_street2"
            placeholder="Street2"
            value={formData.emp_street2}
            onChange={handleChange}
          />
          {errors.emp_street2 && <small style={{ color: 'red' }}>{errors.emp_street2}</small>}
          <input
            type="text"
            name="city_code"
            placeholder="city_code"
            value={formData.city_code}
            onChange={handleChange}
          />
          {errors.city_code && <small style={{ color: 'red' }}>{errors.city_code}</small>}
        </div>
        <div className="form-row">
          <label>State</label>
          <input
            type="text"
            name="provin_code"
            placeholder="State"
            value={formData.provin_code}
            onChange={handleChange}
          />
          {errors.provin_code && <small style={{ color: 'red' }}>{errors.provin_code}</small>}
          <label>Zip/Postal Code</label>
          <input
            type="number"
            name="emp_zipcode"
            placeholder="Zip Code"
            value={formData.emp_zipcode}
            onChange={handleChange}
          />
          <div className="form-row">
          {/* <label>Country</label>
          <input
            type="text"
            name="coun_code"
            placeholder="Country"
            value={formData.coun_code}
            onChange={handleChange}
          />
          {errors.coun_code && <small style={{ color: 'red' }}>{errors.coun_code}</small>}
          </div> */}
          <label>Country</label>
          <select 
            name="coun_code"
            value={country}
            onChange={handleChange}
          >
            <option value="">Select a country</option>
               {countries.map(country => (
                <option key={country} value={country}>
                  {country}
                  </option>
              ))}
          </select>
        </div>
        </div>

        <h3>Telephone</h3>
        <div className="form-row">
          <label>Home</label>
          <input
            type="number"
            name="emp_hm_telephone"
            value={formData.emp_hm_telephone}
            onChange={handleChange}
          />
          {errors.emp_hm_telephone && <small style={{ color: 'red' }}>{errors.emp_hm_telephone}</small>}
          <label>Mobile</label>
          <input
            type="number"
            name="emp_mobile"
            value={formData.emp_mobile}
            onChange={handleChange}
          />
          {errors.emp_mobile && <small style={{ color: 'red' }}>{errors.emp_mobile}</small>}
          <label>Work</label>
          <input
            type="number"
            name="emp_work_telephone"
            value={formData.emp_work_telephone}
            onChange={handleChange}
          />
          {errors.emp_work_telephone && <small style={{ color: 'red' }}>{errors.emp_work_telephone}</small>}
        </div>
        <h3>Email</h3>
        <div className="form-row">
          <label>Work Email</label>
          <input
            type="text"
            name="emp_work_email"
            value={formData.emp_work_email}
            onChange={handleChange}
          />
          {errors.emp_work_email && <small style={{ color: 'red' }}>{errors.emp_work_email}</small>}
          <label>Other Email</label>
          <input
            type="text"
            name="emp_oth_email"
            value={formData.emp_oth_email}
            onChange={handleChange}
          />
          {errors.emp_oth_email && <small style={{ color: 'red' }}>{errors.emp_oth_email}</small>}
        </div>
        <div className="form-save-row">
          <button type="submit" className="save-button">Save</button>
        </div>
        <h3>Attachments</h3>
        <button type="button" onClick={handleAddAttachmentClick} className="add-button">+ Add</button>
        <br />
        {showAttachmentForm && (
          <div className="attachment-form">
            <div className="form-row">
              <label>Select File*</label>
              <input type="file" />
            </div>
            <div className="form-row">
              <label>Comment</label>
              <textarea placeholder="Type comment here"></textarea>
            </div>
            <div className="form-row">
              <button type="button" onClick={() => setShowAttachmentForm(false)}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </div>
        )}
      </form>
      <div className="form-row">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
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
              <td colSpan="8">No Records Found</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactDetails;
