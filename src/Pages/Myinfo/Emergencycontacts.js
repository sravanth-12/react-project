import React, { useEffect, useState } from 'react';

import axios from 'axios';
import './Emergencycontacts.css';
import MyInfo from './MyInfo';
const EmergencyContacts = () => {
  const initialFormState = {
    emp_number: '',
    eec_name: '',
    eec_relationship: '',
    eec_home_no: '',
    eec_mobile_no: '',
    eec_office_no: '',
  };
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get(`http://192.168.100.6:8080/My-info/EmergencyContacts/getAll`)
      .then(response => {
        setContacts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the contacts data:', error);
      });
  }, []);


  const [formDataList, setFormDataList] = useState([initialFormState]);
  const [attachmentData, setAttachmentData] = useState({
    file: null,
    comment: ''
  });

  const [showAttachmentForm, setShowAttachmentForm] = useState(false);
  const [showEmergencyContactForm, setShowEmergencyContactForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState([]);

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]*$/;
    return regex.test(name);
  };

  const validateMobile = (mobile) => {
    const regex = /^(\+?\d{1,3}-)?\d{7,14}$/;
    return regex.test(mobile);
  };

  const handleAddEmergencycontactsClick = () => {
    setShowEmergencyContactForm(true);
  };

  const handleAddAttachmentClick = () => {
    setShowAttachmentForm(true);
  };

  

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFormDataList = [...formDataList];
    const newErrors = [...errors];

    if (!newErrors[index]) {
      newErrors[index] = {};
    }

    if (name === 'eec_name' && !validateName(value)) {
      newErrors[index][name] = 'Only alphabets and spaces are allowed.';
    } else {
      newErrors[index][name] = '';
    }

    if ((name === 'eec_mobile_no' || name === 'eec_office_no' || name === 'eec_home_no') && !validateMobile(value)) {
      newErrors[index][name] = 'Only numbers and a leading "+" followed by "-" for country code are allowed.';
    } else {
      newErrors[index][name] = '';
    }

    newFormDataList[index][name] = value;

    setFormDataList(newFormDataList);
    setErrors(newErrors);
  };

  const handleAttachmentChange = (e) => {
    const { name, value, files } = e.target;
    setAttachmentData((prevAttachmentData) => ({
      ...prevAttachmentData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (index, e) => {
    e.preventDefault();
    try {
      console.log('Submitting data:', formDataList[index]);
      const response = await axios.post('http://192.168.100.6:8080/My-info/EmergencyContacts/add', formDataList[index]);
      console.log('Response:', response);
      setSuccessMessage('Emergency contact saved successfully!');
      setFormDataList([initialFormState]);
      setShowEmergencyContactForm(false);
    } catch (error) {
      console.error('Error occurred:', error);
      // setSuccessMessage('Error occurred while saving emergency contact.');
    }
  };

  const handleAttachmentSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', attachmentData.file);
    formData.append('comment', attachmentData.comment);

    try {
      console.log('Submitting attachment:', attachmentData);
      const response = await axios.post('http://192.168.100.6:8081/My-info/EmployeeAttachment/add', formData);
      console.log('Response:', response);
      setSuccessMessage('Attachment saved successfully!');
      setAttachmentData({
        file: '',
        comment: ''
      });
      setShowAttachmentForm(false);
    } catch (error) {
      console.error('Error occurred:', error);
      setSuccessMessage('Error occurred while saving attachment.');
    }
  };

  return (
    <div className="form-container">
      <MyInfo/>
      {successMessage && <div className="success-popup">{successMessage}</div>}

      {showEmergencyContactForm && formDataList.map((formData, index) => (
        <div key={index}>
          <h3>Save Emergency Contact</h3>
          <form onSubmit={(e) => handleSubmit(index, e)}>
            <div className="form-field">
              <label>Employee Number</label>
              <input type="text" name="emp_number" value={formData.emp_number} onChange={(e) => handleChange(index, e)} required />
            </div>
            <div className="form-field">
              <label>Contact Name</label>
              <input
                type="text"
                name="eec_name"
                value={formData.eec_name}
                onChange={(e) => handleChange(index, e)}
                required
              />
              {errors[index] && errors[index].eec_name && <p style={{ color: 'red' }}>{errors[index].eec_name}</p>}
            </div>
            <div className="form-field">
              <label>Relationship</label>
              <input type="text" name="eec_relationship" value={formData.eec_relationship} onChange={(e) => handleChange(index, e)} required />
            </div>
            <div className="form-field">
              <label>Home Number</label>
              <input type="text" name="eec_home_no" value={formData.eec_home_no} onChange={(e) => handleChange(index, e)} required />
              {errors[index] && errors[index].eec_home_no && <p style={{ color: 'red' }}>{errors[index].eec_home_no}</p>}
            </div>
            <div className="form-field">
              <label>Mobile Number</label>
              <input type="text" name="eec_mobile_no" value={formData.eec_mobile_no} onChange={(e) => handleChange(index, e)} required />
              {errors[index] && errors[index].eec_mobile_no && <p style={{ color: 'red' }}>{errors[index].eec_mobile_no}</p>}
            </div>
            <div className="form-field">
              <label>Office Number</label>
              <input type="text" name="eec_office_no" value={formData.eec_office_no} onChange={(e) => handleChange(index, e)} required />
              {errors[index] && errors[index].eec_office_no && <p style={{ color: 'red' }}>{errors[index].eec_office_no}</p>}
            </div>
            <div className="save-button">
              <button type="submit">Save</button>
              <button type="button" onClick={() => {
                setFormDataList([initialFormState]);
                setShowEmergencyContactForm(false);
              }}>Cancel</button>
            </div>
          </form>
        </div>
      ))}

      {!showEmergencyContactForm && (
        <div className="form-row">
          <label>Assigned Emergency Contacts</label>
          <button type="button" className="button" onClick={handleAddEmergencycontactsClick}>+ Add</button>
        </div>
      )}

      <div className="form-row">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name</th>
              <th>Relationship</th>
              <th>Home Telephone</th>
              <th>Mobile</th>
              <th>Work Telephone</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id}>
                  <td><input type="checkbox" /></td>
                  <td>{contact.eec_name}</td>
                  <td>{contact.eec_relationship}</td>
                  <td>{contact.eec_home_no}</td>
                  <td>{contact.eec_mobile_no}</td>
                  <td>{contact.eec_office_no}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7">No Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="button-container">
        <label>Attachments</label>
        <button type="button" className="button" onClick={handleAddAttachmentClick}>+ Add</button>
      </div>

      {showAttachmentForm && (
        <div className="attachment-form">
          <h3>Add Attachment</h3>
          <form onSubmit={handleAttachmentSubmit}>
            <div className="form-field">
              <label>Select File*</label>
              <input type="file" name="file" onChange={handleAttachmentChange} required />
            </div>
            <div className="form-field">
              <label>Comment</label>
              <textarea name="comment" value={attachmentData.comment} onChange={handleAttachmentChange} placeholder="Type comment here" required></textarea>
            </div>
            <div className="save-button">
              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowAttachmentForm(false)}>Cancel</button>
            </div>
          </form>
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

export default EmergencyContacts;
