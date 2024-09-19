import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './JobDetails.css';
import MyInfo from './MyInfo';

const JobDetailsForm = () => {
    const [includeContractDetails, setIncludeContractDetails] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [attachmentComment, setAttachmentComment] = useState('');
    const [formData, setFormData] = useState({
        emp_number: '',
        joined_date: '',
        job_title_code: '',
        eeo_cat_code: '',
        work_station: '',
        location: '',
        emp_status: '',
        
        contractStartDate: '',
        contractEndDate: '',
        contractFile: null,
    });

    const [jobtitles, setJobTitles] = useState([]);
    const [jobCategories, setJobCategories] = useState([]);
    const [subunits, setSubUnits] = useState([]);
    const [locations, setLocations] = useState([]);
    const [employmentStatuses, setStatuses] = useState([]);
 
    // const [employmentStatus, setStatus] = useState();
    // const [jobtitle, setJobTitle] = useState();
    // const [jobCategory, setJobCategory] = useState();
    // const [subunit, setSubUnit] = useState();
    // const [loc, setLoc] = useState();

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value,
        });
    };



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSubmit = new FormData();
            for (const key in formData) {
                formDataToSubmit.append(key, formData[key]);
            }
            if (selectedFile) {
                formDataToSubmit.append('attachment', selectedFile);
                formDataToSubmit.append('attachmentComment', attachmentComment);
            }
            await axios.put('http://192.168.100.6:8080/My-info/Employee/JobDetails', formData, {
                // headers: {
                //     'Content-Type': 'multipart/form-data'
                // }
            });
            // Display success message
            alert('Form data saved successfully!');
        } catch (error) {
            // Handle error here
            console.error('Error occurred:', error);
        }
    };

    const handleSaveAttachment = () => {
        // Logic to handle attachment saving can be placed here if needed
        console.log("File:", selectedFile);
        console.log("Comment:", attachmentComment);
    };

    const handleCancel = () => {
        // Logic to handle cancel action can be placed here if needed
        console.log("Cancelled");
    };

    useEffect(() => {
        // Fetch countries from the API
        axios.get('http://192.168.100.6:8082/Admin/JobTitle/getAll') // Replace with your actual API endpoint
          .then(response => {
            //console.log('Countries fetched:', response.data); // Add this log
            setJobTitles(response.data);
          })
          .catch(error => {
            console.error('Error fetching countries:', error);
          });
      }, []);

      useEffect(() => {
        // Fetch countries from the API
        axios.get('http://192.168.100.6:8082/Admin/Location/getAll') // Replace with your actual API endpoint
          .then(response => {
            //console.log('Countries fetched:', response.data); // Add this log
            setLocations(response.data);
          })
          .catch(error => {
            console.error('Error fetching countries:', error);
          });
      }, []);

      useEffect(() => {
        // Fetch countries from the API
        axios.get('http://192.168.100.6:8082/Admin/SubUnit/getAll') // Replace with your actual API endpoint
          .then(response => {
            //console.log('Countries fetched:', response.data); // Add this log
            setSubUnits(response.data);
          })
          .catch(error => {
            console.error('Error fetching countries:', error);
          });
      }, []);

      useEffect(() => {
        // Fetch countries from the API
        axios.get('http://192.168.100.6:8082/Admin/JobCategory/getAll') // Replace with your actual API endpoint
          .then(response => {
            //console.log('Countries fetched:', response.data); // Add this log
            setJobCategories(response.data);
          })
          .catch(error => {
            console.error('Error fetching countries:', error);
          });
      }, []);

      useEffect(() => {
        // Fetch countries from the API
        axios.get('http://192.168.100.6:8082/Admin/EmploymentStatus/getAll') // Replace with your actual API endpoint
          .then(response => {
            //console.log('Countries fetched:', response.data); // Add this log
            setStatuses(response.data);
          })
          .catch(error => {
            console.error('Error fetching countries:', error);
          });
      }, []);

    return (
        <div className="form-container">
    
            <h2>Job Details</h2><hr /><br />
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <label>Employee Number</label>
                    <input
                        type="number"
                        name="emp_number"
                        placeholder="Emp No"
                        value={formData.emp_number}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-row">
                    <label>Joined Date</label>
                    <input
                        type="date"
                        name="joined_date"
                        value={formData.joined_date}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-row">
                    <label>Job Title</label>
                    <select
                        name="job_title_code"
                        value={formData.job_title_code}
                        onChange={handleChange}
                    >
                        <option>-- Select --</option>
                        {jobtitles.map(jobtitle => (
                <option key={jobtitle} value={jobtitle}>
                  {jobtitle}
                  </option>
              ))}
                    </select>

                    
                </div>
                <div className="form-row">
                    <label>Job Specification</label>
                    <input type="text" placeholder="Not Defined" disabled />
                </div>
                <div className="form-row">
                    <label>Job Category</label>
                    <select
                        name="eeo_cat_code"
                        value={formData.eeo_cat_code}
                        onChange={handleChange}
                    >
                        <option>-- Select --</option>
                        {jobCategories.map(jobCategory => (
                <option key={jobCategory} value={jobCategory}>
                  {jobCategory}
                  </option>
              ))}
                    </select>
                </div>
                <div className="form-row">
                    <label>Sub Unit</label>
                    <select
                        name="work_station"
                        value={formData.work_station}
                        onChange={handleChange}
                    >
                       <option>-- Select --</option>
                        {subunits.map(subunit => (
                <option key={subunit.name} value={subunit.name}>
                  {subunit.name}
                  </option>
              ))}
                    </select>
                </div>

                <div className="form-row">
                    <label>Location</label>
                    <select
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                    >
                        <option>-- Select --</option>
                        
                        {Array.isArray(locations) && locations.map((loc, index) => (
                <option key={loc.name} value={loc.name}>
                  {loc.name}
                  </option>
              ))}
                    </select>
                </div>
                
                <div className="form-row">
                    <label>Employment Status</label>
                    <select
                        name="emp_status"
                        value={formData.emp_status}
                        onChange={handleChange}
                    >
                        <option>-- Select --</option>
                        {employmentStatuses.map(employmentStatus => (
                <option key={employmentStatus} value={employmentStatus}>
                  {employmentStatus}
                  </option>
              ))}
                    </select>
                </div>
                <div className="form-row">
                    <label>Include Employment Contract Details</label>
                    <input
                        type="checkbox"
                        checked={includeContractDetails}
                        onChange={() => setIncludeContractDetails(!includeContractDetails)}
                    />
                </div>

                <div className="buttonGroup">
                        <button type="button" className="cancelButton" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="saveButton" onClick={handleSubmit}>Save</button>
                    </div>
                {includeContractDetails && (
                    <>
                        <div className="form-row">
                            <label>Contract Start Date</label>
                            <input
                                type="date"
                                name="contractStartDate"
                                value={formData.contractStartDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <label>Contract End Date</label>
                            <input
                                type="date"
                                name="contractEndDate"
                                value={formData.contractEndDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <label>Contract Details</label>
                            <input
                                type="file"
                                name="contractFile"
                                onChange={handleChange}
                            />
                        </div>
                    </>
                )}
                <div className="section">
                    <h3 className="subheader">Add Attachment</h3>
                    <div className="formGroup">
                        <label className="label" htmlFor="fileInput">Select File*</label>
                        <input
                            type="file"
                            id="fileInput"
                            className="fileInput"
                            onChange={(e) => setSelectedFile(e.target.files[0])}
                            required
                        /><br />
                        <small>Accepts up to 1 MB</small>
                    </div>
                    <div className="formGroup">
                        <label className="label" htmlFor="attachmentComment">Comment</label>
                        <textarea
                            id="attachmentComment"
                            className="textarea"
                            value={attachmentComment}
                            onChange={(e) => setAttachmentComment(e.target.value)}
                            placeholder="Type comment here"
                        ></textarea>
                    </div>
                    <div className="buttonGroup">
                        <button type="button" className="cancelButton" onClick={handleCancel}>Cancel</button>
                        <button type="submit" className="saveButton" onClick={handleSaveAttachment}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default JobDetailsForm;
