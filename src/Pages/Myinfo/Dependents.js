import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dependents.css';
import MyInfo from './MyInfo';

const Dependents = () => {
  const [formData, setFormData] = useState({
    ed_name: '',
    ed_relationship: '',
    ed_relationship_type: '',
    ed_date_of_birth: '',
    emp_number: '',
    // ed_seqno: ''
  });
  const [dependentForms, setDependentForms] = useState([]);
  const [attachmentForms, setAttachmentForms] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [dependents, setDependents] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get(`http://192.168.100.6:8080/My-info/Dependents/getAll`)
      .then(response => {
        setDependents(response.data);
      })
      .catch(error => {
        console.error('Error fetching the contacts data:', error);
      });
  }, []);

  const handleAddDependentClick = () => {
    const newDependentForm = {
      ed_name: '',
      ed_relationship: '',
      ed_relationship_type: '',
      ed_date_of_birth: '',
      emp_number: '',
      // ed_seqno: ''
    };
    setDependentForms([...dependentForms, newDependentForm]);
  };

  const handleAddAttachmentClick = () => {
    const newAttachmentForm = {
      file: null,
      comment: ''
    };
    setAttachmentForms([...attachmentForms, newAttachmentForm]);
  };

  const handleChange = (index, e, formType) => {
    const { name, value, files } = e.target;
    if (formType === 'dependent') {
      const newDependentForms = [...dependentForms];
      newDependentForms[index] = { ...newDependentForms[index], [name]: value };
      setDependentForms(newDependentForms);
    } else if (formType === 'attachment') {
      const newAttachmentForms = [...attachmentForms];
      newAttachmentForms[index] = { ...newAttachmentForms[index], [name]: files ? files[0] : value };
      setAttachmentForms(newAttachmentForms);
    }
  };
  
  const handleSubmit = async (index, e, formType) => {
    e.preventDefault();

    let formDataToSubmit = {};
    if (formType === 'dependent') {
      formDataToSubmit = dependentForms[index];
    } else if (formType === 'attachment') {
      formDataToSubmit = attachmentForms[index];
    }

    try {
      // Validate form data before submission
      const isFormDataValid = validateFormData(formDataToSubmit);

      if (isFormDataValid) {
        // Perform axios post request
        await axios.post('http://192.168.100.6:8080/My-info/Dependents/add', formDataToSubmit);
        
        // Handle success message
        setSuccessMessage('Form data saved successfully!');
        setShowSuccessPopup(true);

        // Reset form data after successful submission
        resetFormData(index, formType);

        // Hide success message after 3 seconds
        setTimeout(() => {
          setShowSuccessPopup(false);
        }, 3000);
      } else {
        alert('Please fill out all required fields.');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const validateFormData = (formData) => {
    const errors = {};
    // Example validation logic, adjust as per your requirements
    if (formData.ed_name.trim() === '') {
      errors.ed_name = 'Name is required';
    }
    if (formData.ed_relationship.trim() === '') {
      errors.ed_relationship = 'Relationship is required';
    }
    if (formData.ed_date_of_birth.trim() === '') {
      errors.ed_date_of_birth = 'Date of Birth is required';
    }
    if (formData.emp_number.trim() === '') {
      errors.emp_number = 'Employee Number is required';
    }
    // if (formData.ed_seqno.trim() === '') {
    //   errors.ed_seqno = 'Emp Sequence No is required';
    // }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const resetFormData = (index, formType) => {
    if (formType === 'dependent') {
      const newDependentForms = [...dependentForms];
      newDependentForms.splice(index, 1);
      setDependentForms(newDependentForms);
    } else if (formType === 'attachment') {
      const newAttachmentForms = [...attachmentForms];
      newAttachmentForms.splice(index, 1);
      setAttachmentForms(newAttachmentForms);
    }
  };

  return (
    <div className="form-container">
      <MyInfo/>
      
      {showSuccessPopup && (
        <div className="success-popup">{successMessage}</div>
      )}
      
      <div className="form-row">
        <label>Assigned Dependents</label>
        <button type="button" className="add-button" onClick={handleAddDependentClick}>+ Add</button>
      </div>
      {dependentForms.map((form, index) => (
        <div key={index}>
          <h3>Add Dependent</h3>
          <form onSubmit={(e) => handleSubmit(index, e, 'dependent')}>
            <div className="form-row">
              <label>Employee Number</label>
              <input type="text" name="emp_number" value={form.emp_number} onChange={(e) => handleChange(index, e, 'dependent')} />
              {formErrors.emp_number && <span className="error-message">{formErrors.emp_number}</span>}
            </div>
            {/* <div className="form-row">
              <label>Emp Sequence No</label>
              <input type="number" name="ed_seqno" value={form.ed_seqno} onChange={(e) => handleChange(index, e, 'dependent')} />
              {formErrors.ed_seqno && <span className="error-message">{formErrors.ed_seqno}</span>}
            </div> */}
            <div className="form-row">
              <label>Name*</label>
              <input type="text" name="ed_name" value={form.ed_name} onChange={(e) => handleChange(index, e, 'dependent')} required />
              {formErrors.ed_name && <span className="error-message">{formErrors.ed_name}</span>}
            </div>
            <div className="form-row">
              <label>Relationship type</label>
              <select name="ed_relationship_type" value={form.ed_relationship_type} onChange={(e) => handleChange(index, e, 'dependent')}>
                <option value="">-- Select --</option>
                <option value="child">child</option>
                <option value="Other">other</option>
              </select>
              
            </div>
            <div className="form-row">
              <label>Relationship</label>
              <input type="text" name="ed_relationship" value={form.ed_relationship} onChange={(e) => handleChange(index, e, 'dependent')} />
              {formErrors.ed_relationship && <span className="error-message">{formErrors.ed_relationship}</span>}
            </div>
            <div className="form-row">
              <label>Date of Birth</label>
              <input type="date" name="ed_date_of_birth" value={form.ed_date_of_birth} onChange={(e) => handleChange(index, e, 'dependent')} />
              {formErrors.ed_date_of_birth && <span className="error-message">{formErrors.ed_date_of_birth}</span>}
            </div>
            <div className="form-save-row">
              <button type="submit">Save</button>
              <button type="button" onClick={() => {
                const newDependentForms = [...dependentForms];
                newDependentForms.splice(index, 1);
                setDependentForms(newDependentForms);
              }}>Cancel</button>
            </div>
          </form>
        </div>
      ))}
      <div className="form-row">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>Name</th>
              <th>Relationship</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {dependents.length > 0 ? (
              dependents.map((dependent) => (
                <tr key={dependent.id}>
                  <td><input type="checkbox" /></td>
                  <td>{dependent.ed_name}</td>
                  <td>{dependent.ed_relationship}</td>
                  <td>{dependent.ed_date_of_birth}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="form-row">
        <label>Attachments</label>
        <button type="button" className="add-button" onClick={handleAddAttachmentClick}>+ Add</button>
      </div>
      {attachmentForms.map((form, index) => (
        <div key={index} className="attachment-form">
          <h3>Add Attachment</h3>
          <form onSubmit={(e) => handleSubmit(index, e, 'attachment')}>
            <div className="form-row">
              <label>Select File*</label>
              <input type="file" onChange={(e) => handleChange(index, e, 'attachment')} required />
            </div>
            <div className="form-row">
              <label>Comment</label>
              <textarea name="comment" onChange={(e) => handleChange(index, e, 'attachment')} placeholder="Type comment here"></textarea>
            </div>
            <div className="form-save-row">
              <button type="button" onClick={() => {
                const newAttachmentForms = [...attachmentForms];
                newAttachmentForms.splice(index, 1);
                setAttachmentForms(newAttachmentForms);
              }}>Cancel</button>
              <button type="submit">Save</button>
            </div>
          </form>
        </div>
      ))}
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

export default Dependents;
