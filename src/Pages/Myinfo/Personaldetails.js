import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Personaldetails.css';

const PersonalDetails = () => {
  const [nationalities, setNationalities] = useState([]);
  const [nationality, setNationality] = useState([]);

  const [formData, setFormData] = useState({
    emp_number: '',
    emp_firstname: '',
    emp_middle_name: '',
    emp_lastname: '',
    pan_number: '',
    aadhar_number: '',
    nation_code: '',
    //name:'',
    emp_marital_status: '',
    emp_birthday: '',
    emp_gender: '',
    ssn_number: ''
  });

  const [errors, setErrors] = useState({});
  const [showAttachmentForm, setShowAttachmentForm] = useState(false);
  const [attachmentFile, setAttachmentFile] = useState(null);
  const [attachmentComment, setAttachmentComment] = useState('');
 // const [countries, setCountries] = useState([]);

  // useEffect(() => {
  //   // Fetch country data from an API or static source
  //   const fetchNationalities = async () => {
  //     try {
  //       const response = await axios.get('API_URL_TO_FETCH_COUNTRIES');
  //       setNationalities(response.data);
  //     } catch (error) {
  //       console.error('Error fetching countries:', error);
  //     }
  //   };

  //   fetchNationalities();
  // }, []);

  useEffect(() => {
    // Fetch countries from the API
    axios.get('http://192.168.100.6:8082/Admin/Nationality/getAll') // Replace with your actual API endpoint
      .then(response => {
        console.log('Nationality fetched:', response.data); // Add this log
        setNationalities(response.data);
      })
      .catch(error => {
        console.error('Error fetching countries:', error);
      });
  }, []);


  const validateField = (name, value) => {
    let error = '';

    const nameRegex = /^[a-zA-Z\s]*$/;
    const idRegex = /^[a-zA-Z0-9]*$/;
    const aadharRegex = /^\d{12}$/;
    const panRegex = /^[A-Z0-9]{10}$/;
    const ssnRegex = /^\d{9}$/;

    if (['emp_firstname', 'emp_middle_name', 'emp_lastname'].includes(name) && !nameRegex.test(value)) {
      error = 'Name should contain only alphabets and spaces';
    }

    if (name === 'emp_number' && !idRegex.test(value)) {
      error = 'Employee ID must contain only alphabets and numbers';
    }

    if (name === 'aadhar_number' && !aadharRegex.test(value)) {
      error = 'Aadhar number must be exactly 12 digits';
    }

    if (name === 'pan_number' && !panRegex.test(value)) {
      error = 'PAN number must be exactly 10 characters long and contain only uppercase letters and numbers';
    }

    if (name === 'ssn_number' && !ssnRegex.test(value)) {
      error = 'SSN number must be exactly 9 digits';
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    validateField(name, value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { files } = e.target;
    setAttachmentFile(files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(errors).some(error => error)) {
      alert('Please fix the errors before submitting the form');
      return;
    }

    const requiredFields = [
      'emp_firstname',
      'emp_lastname',
      'emp_number',
      'nation_code',
      'emp_marital_status',
      'emp_birthday',
      'emp_gender'
    ];

    const emptyFields = requiredFields.filter(field => !formData[field]);

    if (emptyFields.length > 0) {
      alert('Please fill in all required fields before submitting the form');
      return;
    }

    localStorage.setItem('formData', JSON.stringify(formData));

    try {
      alert('Form data saved successfully!');
      await axios.put('http://192.168.100.6:8080/My-info/Employee/PersonalDetails', formData);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  
    try {
      alert('Form data saved successfully!');
      await axios.post('http://192.168.100.6:8080/My-info/AmericanDetails/add', formData);
    } catch (error) {
      console.error('Error occurred:', error);
    }

    try {
      alert('Form data saved successfully!');
      await axios.post('http://192.168.100.6:8080/My-info/IndianDetails/add', formData);
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };
  const handleAddAttachmentClick = () => {
    setShowAttachmentForm(true);
  };

  return (
    <div className="form-container">
      <h3>Personal Details</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <label>Employee Full Name</label>
          <input
            type="text"
            name="emp_firstname"
            placeholder="First Name"
            value={formData.emp_firstname}
            onChange={handleInputChange}
          />
          {errors.emp_firstname && <small style={{ color: 'red' }}>{errors.emp_firstname}</small>}
          <input
            type="text"
            name="emp_middle_name"
            placeholder="Middle Name"
            value={formData.emp_middle_name}
            onChange={handleInputChange}
          />
          {errors.emp_middle_name && <small style={{ color: 'red' }}>{errors.emp_middle_name}</small>}
          <input
            type="text"
            name="emp_lastname"
            placeholder="Last Name"
            value={formData.emp_lastname}
            onChange={handleInputChange}
          />
          {errors.emp_lastname && <small style={{ color: 'red' }}>{errors.emp_lastname}</small>}
        </div>
        <div className="form-row">
          <label>Employee Id</label>
          <input
            type="text"
            name="emp_number"
            placeholder="Emp No"
            value={formData.emp_number}
            onChange={handleInputChange}
          />
          {errors.emp_number && <small style={{ color: 'red' }}>{errors.emp_number}</small>}
        </div>
        <div className="form-row">
          <label>Nationality</label>
          <select 
        name="nation_code"
        value={nationality} // Ensure this is the correct state variable
         onChange={handleInputChange}
        >
      <option value="">Select a Nation code</option>
        {nationalities.map(nation => (
       <option key={nation} value={nation}>
        {nation}
         </option>
        ))}
        </select>
 {/* <select 
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          >
            <option value="">Select a Nation code</option>
            {nationality.length > 0 ? (
              nationality.map((nationality, index) => (
                <option key={index} value={nationality.name}>
                  {nationality.name}
                </option>
              ))
            ) : (
              <option disabled>Loading nation codes...</option>
            )}
          </select> */}
            {/* <label>Nationality</label>
          <input
            type="text"
            name="nation_code"
            placeholder="Country"
            value={formData.nation_code}
            onChange={handleInputChange}
          />
          {errors.nation_code && <small style={{ color: 'red' }}>{errors.nation_code}</small>}
          </div> */}
        </div>
        
        
        {formData.nation_code === 'Indian' && (
          <>
            <div className="form-row">
              <label>PAN Number</label>
              <input
                type="text"
                name="pan_number"
                placeholder="Enter PAN Number"
                value={formData.pan_number}
                onChange={handleInputChange}
              />
              {errors.pan_number && <small style={{ color: 'red' }}>{errors.pan_number}</small>}
            </div>
            <div className="form-row">
              <label>Aadhar Number</label>
              <input
                type="text"
                name="aadhar_number"
                placeholder="Enter Aadhar Number"
                value={formData.aadhar_number}
                onChange={handleInputChange}
              />
              {errors.aadhar_number && <small style={{ color: 'red' }}>{errors.aadhar_number}</small>}
            </div>
          </>
        )}
        {formData.nation_code === 'American' && (
          <div className="form-row">
            <label>SSN Number</label>
            <input
              type="text"
              name="ssn_number"
              placeholder="Enter SSN Number"
              value={formData.ssn_number}
              onChange={handleInputChange}
            />
            {errors.ssn_number && <small style={{ color: 'red' }}>{errors.ssn_number}</small>}
          </div>
        )}
        <div className="form-row">
          <label>Marital Status</label>
          <select
            name="emp_marital_status"
            value={formData.emp_marital_status}
            onChange={handleInputChange}
          >
            <option value="">-- Select --</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-row">
          <label>Date of Birth</label>
          <input
            type="date"
            name="emp_birthday"
            value={formData.emp_birthday}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <label>Gender</label>
          <select
            name="emp_gender"
            value={formData.emp_gender}
            onChange={handleInputChange}
          >
            <option value="">-- Select --</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="form-row">
          <button type="submit" className="save-button">Save</button>
        </div>
        <hr />
        </form>
        <form>
        <div className="form-row">
          
          <label>Attachments</label>
          {!showAttachmentForm && (
            <button type="button" className="add-button" onClick={handleAddAttachmentClick}>+ Add</button>
          )}
        </div>
        
        {showAttachmentForm && (
          <div className="attachment-form">
            <div className="form-row">
              <label>Select File*</label>
              <input
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-row">
              <label>Comment</label>
              <textarea
                placeholder="Type comment here"
                value={attachmentComment}
                onChange={(e) => setAttachmentComment(e.target.value)}
              ></textarea>
            </div>
            <div className="form-row">
              <button type="button" className="cancel-button" onClick={() => setShowAttachmentForm(false)}>Cancel</button>
              <button type="button" className="save-button" onClick={handleSubmit}>Save</button>
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
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Add dynamic row generation here */}
            </tbody>
          </table>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetails;
