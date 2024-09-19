import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import './PIM.css';

const PIM = () => {
  const [employeeData, setEmployeeData] = useState(null);
  const [activeButton, setActiveButton] = useState('');
  const [employee, setEmployee] = useState({
    emp_firstname: '',
    emp_middle_name: '',
    emp_lastname: '',
    employee_id:''
  });
  const [createLogin, setCreateLogin] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const fileInputRef = useRef(null);

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const handleAddEmployee = () => {
    setActiveButton('AddEmp');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving employee data:', { employee });

    // const formData = new FormData();
    // formData.append('emp_firstname', employee.emp_firstname);
    // formData.append('emp_middle_name', employee.emp_middle_name);
    // formData.append('emp_lastname', employee.emp_lastname);
    // formData.append('employee_id', employee.employee_id);

    axios.post('http://192.168.100.6:8081/PIM/Employee/add', employee)
      .then(response => {
        console.log('Employee data saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving employee data:', error);
      });
  };

  const handleCancel = () => {
    setEmployee({
      emp_firstname: '',
      emp_middle_name: '',
      emp_lastname: '',
      employee_id: ''
    });
    setCreateLogin(false);
    setProfilePicture(null);
    setActiveButton('EmployeeList');
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  const handleUploadPicture = () => {
    if (!profilePicture) return;

    const formData = new FormData();
    formData.append('profilePicture', profilePicture);

    axios.post('http://192.168.100.6:8081/PIM/Employee/uploadProfilePicture', formData)
      .then(response => {
        console.log('Profile picture uploaded successfully:', response.data);
      })
      .catch(error => {
        console.error('Error uploading profile picture:', error);
      });
  };

  return (
    <div className="pim-page">
      <div className="pim-header">
        <button className="header-button" onClick={() => handleButtonClick('Configuration')}>Configuration</button>
        <button className="header-button" onClick={() => handleButtonClick('EmployeeList')}>Employee List</button>
        <button className="header-button" onClick={handleAddEmployee}>Add Employee</button>
        <button className="header-button" onClick={() => handleButtonClick('Reports')}>Reports</button>
      </div>
      
      {activeButton === 'EmployeeList' && (
        <div className="employee-information">
          <h2>Employee Information</h2>
          <form className="employee-form">
            <div className="form-group">
              <label>Employee Name</label>
              <input type="text" placeholder="Type for hints..." />
            </div>
            <div className="form-group">
              <label>Employee ID</label>
              <input type="text" placeholder="Type for hints..." />
            </div>
            <div className="form-group">
              <label>Employment Status</label>
              <select>
                <option>-- Select --</option>
              </select>
            </div>
            <div className="form-group">
              <label>Include</label>
              <select>
                <option>Current Employees Only</option>
              </select>
            </div>
            <div className="form-group">
              <label>Supervisor Name</label>
              <input type="text" placeholder="Type for hints..." />
            </div>
            <div className="form-group">
              <label>Job Title</label>
              <select>
                <option>-- Select --</option>
              </select>
            </div>
            <div className="form-group">
              <label>Sub Unit</label>
              <select>
                <option>-- Select --</option>
              </select>
            </div>
            <div className="form-actions">
              <button className="add-button" onClick={handleAddEmployee}>Add</button>
              <button className="reset-button">Reset</button>
              <button className="search-button">Search</button>
            </div>
          </form>
        </div>
      )}
      
      {activeButton === 'AddEmp' && (
        <div className="add-employee-form">
          <h2>Add Employee</h2>
        
          <div className="form-group">
            <label>Employee Full Name</label>
            <div className="name-fields">
              <input type="text" name="emp_firstname" placeholder="First Name" value={employee.emp_firstname} onChange={handleChange} required />
              <input type="text" name="emp_middle_name" placeholder="Middle Name" value={employee.emp_middle_name} onChange={handleChange} />
              <input type="text" name="emp_lastname" placeholder="Last Name" value={employee.emp_lastname} onChange={handleChange} required />
            </div>
          </div>
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" name="employee_id" value={employee.employee_id} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Create Login Details</label>
            <label className="switch">
              <input type="checkbox" checked={createLogin} onChange={() => setCreateLogin(!createLogin)} />
              <span className="slider round"></span>
            </label>
          </div>
          <div className="form-buttons">
            <button className="save-btn" onClick={handleSave}>Save</button>
            <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>

          <div className="form-group">
            <label>Profile Picture</label>
            <div className="profile-picture-upload">
              <input type="file" ref={fileInputRef} onChange={handleProfilePictureChange} style={{ display: 'none' }} />
              <button onClick={() => fileInputRef.current.click()}>Choose File</button>
              {profilePicture && (
                <div className="profile-picture-preview">
                  <img src={URL.createObjectURL(profilePicture)} alt="Profile Preview" />
                  <button onClick={handleUploadPicture}>Upload Picture</button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {employeeData && activeButton === 'EmployeeList' && (
        <div className="employee-list">
          <h3>Employee List</h3>
          <ul>
            {employeeData.map(employee => (
              <li key={employee.id}>{employee.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PIM;
