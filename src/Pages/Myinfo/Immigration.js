import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Immigration.css';

const Immigration = () => {
  const [formData, setFormData] = useState({
    ei_seqno:'',
    ei_issued_date: '',
    ei_expiry_date: '',
    ei_i9_status: '',
    emp_number: '',
    ei_i9_review_date: '',
    ei_document_num:'',
    ei_cou_code:'',
    ei_type:'',
    ei_comments: ''
  });
  const [showImmigrationForm, setShowImmigrationForm] = useState(false);
  const [showAttachmentForm, setShowAttachmentForm] = useState(false);

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);

  const handleAddImmigrationClick = () => {
    setShowImmigrationForm(true);
  };

  const handleAddAttachmentClick = () => {
    setShowAttachmentForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const [immigrations, setImmigrations] = useState([]);
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

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get(`http://192.168.100.6:8080/My-info/Immigration/getAll`)
      .then(response => {
        setImmigrations(response.data);
      })
      .catch(error => {
        console.error('Error fetching the contacts data:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://192.168.100.6:8080/My-info/Immigration/add', formData);
      alert('Form data saved successfully!');
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-row">
        <label>Assigned Immigration</label>
        <button type="button" className="add-button" onClick={handleAddImmigrationClick}>+ Add</button>
      </div>
      {showImmigrationForm && (
        <div>
          <h3>Add Immigration</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
            <label>Employee Number</label>
              <input type="number" name="emp_number" value={formData.emp_number} onChange={handleChange} />
              
              {/* <label>Emp Sequence No</label>
              <input type="number" name="ei_seqno" value={formData.ei_seqno} onChange={handleChange} /> */}
              {/* <label>Emp Doc No</label>
              <input type="number" name="ei_document_num" value={formData.ei_document_num} onChange={handleChange} /> */}
              {/* <label>Country Code</label>
              <input type="text" name="ei_cou_code" value={formData.ei_cou_code} onChange={handleChange} /> */}
              <label>Type</label>
          <select name="ei_type" value={formData.ei_type} onChange={handleChange}>
            <option value="">-- Select --</option>
            <option value="passport">Passport</option>
            <option value="visa">VISA</option>
          </select>

            <label>Number*</label>
              <input type="text" name="ei_document_num" value={formData.ei_document_num} onChange={handleChange} />
              <label>Issued Date*</label>
              <input type="datetime-local" name="ei_issued_date" value={formData.ei_issued_date} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Expiry Date*</label>
              <input type="datetime-local" name="ei_expiry_date" value={formData.ei_expiry_date} onChange={handleChange} />
              <label>Eligibility Status*</label>
              <input type="text" name="ei_i9_status" value={formData.ei_i9_status} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Issued By*</label>
              <select 
                name="ei_cou_code"
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
              {/* <input type="text" name="ei_cou_code" value={formData.ei_cou_code} onChange={handleChange} /> */}
              <label>Eligibility Review Date</label>
              <input type="date" name="ei_i9_review_date" value={formData.ei_i9_review_date} onChange={handleChange} />
            </div>
            <div className="form-row">
              <label>Comments</label>
              <textarea name="ei_comments" value={formData.ei_comments} onChange={handleChange}></textarea>
            </div>
            <div className="form-save-row">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowImmigrationForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      <div className="form-row">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Document</th>
              <th>Number</th>
              <th>Issued By</th>
              <th>Issued Date</th>
              <th>Expiry Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {immigrations.length > 0 ? (
              immigrations.map((immigration) => (
                <tr key={immigration.id}>
                  <td><input type="checkbox" /></td>
                  <td>{immigration.ei_type}</td>
                  <td>{immigration.ei_document_num}</td>
                  <td>{immigration.ei_cou_code.name}</td>
                  <td>{immigration.ei_issued_date}</td>
                  <td>{immigration.ei_expiry_date}</td>
                  
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No Records Found</td>
              </tr>
            )}
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
            <input type="file" />
          </div>
          <div className="form-row">
            <label>Comment</label>
            <textarea placeholder="Type comment here"></textarea>
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

export default Immigration;