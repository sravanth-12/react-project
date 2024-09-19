
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Qualifications.css';
 
const Qualifications = () => {
const [workExperiences, setWorkExperiences] = useState([]);
const [workActive,setworkActive]=useState(false)
const [eactive,setEactive]=useState(false)
const [skillsactive, setSkillsActive]=useState(false)
const [LanguagesActive, setLanguagesActive]=useState(false)
const [AttachmentsActive, setAttachmentsActive]=useState(false)
const [empLanguages,setEmpLanguages] = useState([]); 
const [empLanguage,setEmpLanguage] = useState(); 

 
 
const [workExperience,setworkExperience]=useState({
  emp_number:'',
  eexp_employer:"",
  eexp_jobtit:"",
  eexp_from_date:"",
  eexp_to_date:"",
  eexp_comments:"",
  eexp_internal:""

})
 
const[educationData, seteducationData ]=useState(
  {
    emp_number:'',
    education:'',
    institute:"",
    major:"",
    year:"",
    score:"",
    start_date:"",
    end_date:""
 

    // level:"",
    
  }
)
 
const[skillsData , setskillsData]=useState(
  {
    emp_number:'',
    skill_id:"",
    years_of_exp:"",
    comments:""
  }
)
 
 
const[LanguagesData , setLanguagesData]=useState(
  {
    emp_number:'',
    lang_id:"",
    fluency:"",
    competency:"",
    comments:""
 
   
  }
)
useEffect(() => {
  // Fetch countries from the API
  axios.get('http://192.168.100.6:8082/Admin/Language/getAll') // Replace with your actual API endpoint
    .then(response => {
      //console.log('Countries fetched:', response.data); // Add this log
      setEmpLanguages(response.data);
    })
    .catch(error => {
      console.error('Error fetching countries:', error);
    });
}, []);
 
const[AttachmentsData , setAttachmentsData]=useState(
  {
    File:"",
    description:""
   
  }
)
 
const handleworkExperienceChange = (e) => {
  const { name, value } = e.target;
  setworkExperience({
    ...workExperience,
    [name]: value
  });
};

 
const handleEducationChange = (e) => {
  const { name, value } = e.target;
  seteducationData({
    ...educationData,
    [name]: value
  });
};
 
const handleSkillsChange = (e) => {
  const { name, value } = e.target;
  setskillsData({
    ...skillsData,
    [name]: value
  });
};
 
 
const handleLanguagesChange = (e) => {
 
  const { name, value } = e.target;
  setLanguagesData({
    ...LanguagesData,
    [name]: value
  });
 
 
};
 
const handleAttachmentsChange = (e) => {
  const { name, value } = e.target;
  setAttachmentsData({
    ...AttachmentsData,
    [name]: value
  });
};
 
const handleEducationsave=async (e)=>{
  // e.preventDefault();
  console.log(educationData); // Handle form submission, e.g., send data to an API
 
  localStorage.setItem("education", JSON.stringify(educationData));
  try{
        // Display success message
      alert('Form data saved successfully!');
     
        await axios.post('http://192.168.2.51:8080/My-info/EmployeeEducation/add', educationData);
 
      }
      catch(error){
      console.error('Error occurred:', error);
      }
  
  setEactive(false)
  seteducationData({
    // level:"",
    // institute:"",
    // major:"",
    // year:"",
    // score:"",
    // start_date:"",
    // end_date:""
    emp_number:'',
    education:'',
    institute:"",
    major:"",
    year:"",
    score:"",
    start_date:"",
    end_date:""
 
  })
 
}

const handleworkExperienceSave=async (e)=>{
  // e.preventDefault();
  console.log(workExperience); // Handle form submission, e.g., send data to an API
 
  localStorage.setItem("workExperience", JSON.stringify(workExperience));
  try{
   
    await axios.post('http://192.168.100.6:8080/My-info/WorkExperience/add', workExperience);
     // Display success message
    alert('Form data saved successfully!');

  }
  catch(error){
  console.error('Error occurred:', error); 
  }
  // alert("data saved succesfully...")
  setworkActive(false)
 
  setworkExperience({
    emp_number:'',
    eexp_employer:"",
    eexp_jobtit:"",
    eexp_from_date:"",
    eexp_to_date:"",
    eexp_comments:"",
    eexp_internal:""
  
  })
};
 
 
const handleskillssave=async (e)=>{
  // e.preventDefault();
  console.log(skillsData); // Handle form submission, e.g., send data to an API
  localStorage.setItem("skills", JSON.stringify(skillsData));
  try{
        // Display success message
      alert('Form data saved successfully!');
     
      await axios.post('http://192.168.2.51:8080/My-info/EmployeeSkills/add', skillsData);
 
      }
      catch(error){
      console.error('Error occurred:', error); 
      }
      setEactive(false)
      setskillsData({
 
  
    emp_number:'',
    skill_id:"",
    years_of_exp:"",
    comments:""
  })
};
 
 
 
const handleLanguagesSave=async (e)=>{
 console.log("its is language save function...");
  console.log(LanguagesData); // Handle form submission, e.g., send data to an API
 
  localStorage.setItem("Languages", JSON.stringify(LanguagesData) );
  try{
    // Display success message
  alert('Form data saved successfully!');
 
    await axios.post('http://192.168.100.6:8080/My-info/EmployeeLanguage/add', LanguagesData);

  }
  catch(error){
  console.error('Error occurred:', error); 
  }
  alert("data saved succesfully...")
  setLanguagesActive(false)
 
  setLanguagesData({
    emp_number:'',
    lang_id:"",
    fluency:"",
    competency:"",
    comments:""
 
 
  })
};
 
 
 
 
const handleAttachmentsSave = () => {
  // e.preventDefault();
  console.log(AttachmentsData); // Handle form submission, e.g., send data to an API
 
  localStorage.setItem("Attachments", JSON.stringify(AttachmentsData));
  alert("data saved succesfully...")
  setAttachmentsActive(false)
 
  setAttachmentsData({
  File:"",
 description:""
 
  })
};
 
 
 
 
  // const [workExperiences, setWorkExperiences] = useState([]);
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [attachments, setAttachments] = useState([]);
 
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const workExpResponse = await axios.get('http://192.168.2.51:8081/My-info/Qualifications/add');
  //       const educationResponse = await axios.get('/api/education');
  //       const skillsResponse = await axios.get('/api/skills');
  //       const languagesResponse = await axios.get('/api/languages');
  //       const attachmentsResponse = await axios.get('/api/attachments');
 
  //       setWorkExperiences(workExpResponse.data);
  //       setEducation(educationResponse.data);
  //       setSkills(skillsResponse.data);
  //       setLanguages(languagesResponse.data);
  //       setAttachments(attachmentsResponse.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };
 
  //   fetchData();
  // }, []);
 
  const addWorkExperience = () => {
    setworkActive(true)
    setWorkExperiences([...workExperiences, { 
      emp_number:"",
      eexp_employer:"",
      eexp_jobtit:"",
      eexp_from_date:"",
      eexp_to_date:"",
      eexp_comments:"",
      eexp_internal:""
    
    }]);
  };
 
  // const handleWorkExperienceChange = (index, field, value) => {
  //   const newWorkExperiences = [...workExperiences];
  //   newWorkExperiences[index][field] = value;
  //   setWorkExperiences(newWorkExperiences);
  // };
 
  const addEducation = () => {
    setEactive(true)
    setEducation([...education, {   
    emp_number:'',
    education:'',
    institute:"",
    major:"",
    year:"",
    score:"",
    start_date:"",
    end_date:""
  }]);
  };
 
  // const handleEducationChange = (index, field, value) => {
  //   const newEducation = [...education];
  //   newEducation[index][field] = value;
  //   setEducation(newEducation);
  // };
 
  const addSkill = () => {
    setSkillsActive(true)
    setSkills([...skills, { 
      emp_number:'',
      skill_id:"",
      years_of_exp:"",
      comments:""
    }]);
  };
 
  // const handleSkillChange = (index, field, value) => {
  //   const newSkills = [...skills];
  //   newSkills[index][field] = value;
  //   setSkills(newSkills);
  // };
 
  const addLanguage = () => {
    setLanguagesActive(true)
    setLanguages([...languages, { 
      emp_number:'',
      lang_id:"",
      fluency:"",
      competency:"",
      comments:""
   
     }]);
  };
 
  // const handleLanguageChange = (index, field, value) => {
  //   const newLanguages = [...languages];
  //   newLanguages[index][field] = value;
  //   setLanguages(newLanguages);
  // };
 
  const addAttachment = () => {
    setAttachmentsActive(true)
    setAttachments([...attachments, { file: null, comment: '' }]);
  };
 
  // const handleAttachmentChange = (index, field, value) => {
  //   const newAttachments = [...attachments];
  //   if (field === 'file') {
  //     newAttachments[index][field] = value.target.files[0];
  //   } else {
  //     newAttachments[index][field] = value;
  //   }
  //   setAttachments(newAttachments);
  // };
 
  // const handleSave = async (section, index) => {
 
  //   try {
  //     // const sectionData = { workExperiences, education, skills, languages, attachments };
  //     // const data = sectionData[section][index];
  //     // const response = await axios.post(`/api/${section}`, data);
  //     // console.log(`Saved ${section}:`, response.data);
  //   } catch (error) {
  //     console.error(`Error saving ${section}:`, error);
  //   }
  // };
 
  const handleCancel = () => {

    console.log("its working");
    setworkActive(false)
    setEactive(false)
    setSkillsActive(false)
    setLanguagesActive(false)
    setAttachmentsActive(false)
    // const sectionData = {
    //   workExperiences: [...workExperiences],
    //   education: [...education],
    //   skills: [...skills],
    //   languages: [...languages],
    //   attachments: [...attachments],
    // };
    // sectionData[section].splice(index, 1);
    // setWorkExperiences(sectionData.workExperiences);
    // setEducation(sectionData.education);
    // setSkills(sectionData.skills);
    // setLanguages(sectionData.languages);
    // setAttachments(sectionData.attachments);
  };
 
  return (
    <div className="form-container">
      <h2 className="header">Qualifications</h2>
     
      {/* Work Experience Section */}
      {/* {workExperiences.map((exp, index) => ( */}
<>
 
 
        <div
        // key={index}
         className={`form ${workActive ?" ":"active"}`} >
               
 
          <h3 className="subheader">Add Work Experience</h3>
          <div className="formGroup">
          <label className="label"
            // htmlFor={`institute-${index}`}
            >Employee Number*</label>
            <input
              type="text"
              name='emp_number'
              // id={`institute-${index}`}
              className="input"
              // value={edu.institute}
              // onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
              value={workExperience.emp_number}
              onChange={handleworkExperienceChange}
              required
            />
        <label className="label" htmlFor="eexp_employer">Company*</label>
        <input
          type="text"
          id="eexp_employer"
          name="eexp_employer"
          className="input"
          value={workExperience.eexp_employer}
          onChange={handleworkExperienceChange}
          required
        />
        <label className="label" htmlFor="eexp_jobtit">Job Title*</label>
        <input
          type="text"
          id="eexp_jobtit"
          name="eexp_jobtit"
          className="input"
          value={workExperience.eexp_jobtit}
          onChange={handleworkExperienceChange}
          required
        />
      </div>
      <div className="formGroup">
        <label className="label" htmlFor="eexp_from_date">From</label>
        <input
          type="date"
          id="eexp_from_date"
          name="eexp_from_date"
          className="input"
          placeholder="dd-mm-yyyy"
          value={workExperience.eexp_from_date}
          onChange={handleworkExperienceChange}
          required
        />
        <label className="label" htmlFor="eexp_to_date">To</label>
        <input
          type="date"
          id="eexp_to_date"
          name="eexp_to_date"
          required
          className="input"
          placeholder="dd-mm-yyyy"
          value={workExperience.eexp_to_date}
          onChange={handleworkExperienceChange}
        />
      </div>
      <div className="formGroup">
        <label className="label" htmlFor="eexp_comments">Comment</label>
        <textarea
          type="text"
          id="eexp_comments"
          name="eexp_comments"
          className="input"
          value={workExperience.eexp_comments}
          onChange={handleworkExperienceChange}
        />
        <label className="label" htmlFor="eexp_internal">Internal</label>
        <textarea
          type="number"
          id="eexp_internal"
          name="eexp_internal"
          className="input"
          value={workExperience.eexp_internal}
          onChange={handleworkExperienceChange}
        />
        <h4 className="header">*Required</h4>
      </div>
 
 
 
          <div className="formActions">
            <button type="button" className="cancelButton" onClick={() =>handleCancel ()}>Cancel</button>
            <button type="submit" className="saveButton" onClick={() =>{ handleworkExperienceSave() } }>Save</button>
          </div>
        </div></>
 
      <div className="sectionFooter">
        <h3 className="subheader">Work Experience</h3>
        <button className="addButton" onClick={addWorkExperience}>+ Add</button>
      </div>
      <hr /><br /><div className="no-records">No Records Found</div><br />
 
      <div className="languageTableContainer">
        <table className="languageTable">
          <thead>
            <tr>
              <th className="languageHeader">
                <input type="checkbox" className="checkbox" />
                Company
              </th>
              <th>Job Title</th>
              <th>From</th>
              <th>To</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Here you would map over your language data to create table rows */}
          </tbody>
        </table>
      </div>
 
      {/* Education Section */}

      {/* {education.map((edu, index) => ( */}
        <div
       className={`form ${eactive ? " ":"active"}`}>
          <h3 className="subheader">Add Education</h3>
          <div className="formGroup">
            {/* <label className="label"
            //  htmlFor={`level-${index}`
            //  }
             >Level*</label>
            <select
              // id={`level-${index}`}
              className="input"
              name='level'
              // value={edu.level}
              // onChange={(e) => handleEducationChange(index, 'level', e.target.value)}
              value={educationData.level}
              onChange={handleEducationChange}
              required
            > */}
              {/* <option value="">-- Select --</option>
              <option value="High School">High School</option>
              <option value="Associate Degree">Associate Degree</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="Doctorate">Doctorate</option> */}
            {/* </select> */}
            <label className="label"
            // htmlFor={`institute-${index}`}
            >Employee Number*</label>
            <input
              type="text"
              name='emp_number'
              // id={`institute-${index}`}
              className="input"
              // value={edu.institute}
              // onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
              value={educationData.emp_number}
              onChange={handleEducationChange}
              required
            />
            <label className="label"
            // htmlFor={`institute-${index}`}
            >Education Id*</label>
            <input
              type="text"
              name='education'
              // id={`institute-${index}`}
              className="input"
              // value={edu.institute}
              // onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
              value={educationData.education}
              onChange={handleEducationChange}
              required
            />
           
            <label className="label"
            // htmlFor={`institute-${index}`}
            >Institute*</label>
            <input
              type="text"
              name='institute'
              // id={`institute-${index}`}
              className="input"
              // value={edu.institute}
              // onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
              value={educationData.institute}
              onChange={handleEducationChange}
              required
            />
            <label className="label"
            //  htmlFor={`major-${index}`}
             >Major*</label>
            <input
              type="text"
              // id={`major-${index}`}
              className="input"
              name='major'
              // value={edu.major}
              // onChange={(e) => handleEducationChange(index, 'major', e.target.value)}
              value={educationData.major}
              onChange={handleEducationChange}
              required
            />
            <label className="label"
            //  htmlFor={`year-${index}`}
             
             >Year</label>
            <input
              type="text"
              // id={`year-${index}`}
              className="input"
              name='year'
              // value={edu.year}
              // onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
              value={educationData.year}
              onChange={handleEducationChange}
            />
            <label className="label"
            //  htmlFor={`score-${index}`}
             >score</label>
            <input
              type="text"
              name='score'
              // id={`score-${index}`}
              className="input"
              // value={edu.score}
              // onChange={(e) => handleEducationChange(index, 'score', e.target.value)}
              value={educationData.score}
              onChange={handleEducationChange}
            />
          </div>
          <div className="formGroup">
            <label className="label"
            // htmlFor={`start_date-${index}`}
           
            >Start Date</label>
            <input
               name='start_date'
 
              type="date"
              // id={`start_date-${index}`}
              className="input"
              placeholder="dd-mm-yyyy"
              // value={edu.start_date}
              // onChange={(e) => handleEducationChange(index, 'start_date', e.target.value)}
              value={educationData.start_date}
              onChange={handleEducationChange}
            />
            <label className="label"
            // htmlFor={`end_date-${index}`}
            >End Date</label>
            <input
              type="date"
              name='end_date'
              // id={`end_date-${index}`}
              className="input"
              placeholder="dd-mm-yyyy"
              // value={edu.end_date}
              // onChange={(e) => handleEducationChange(index, 'end_date', e.target.value)}
              value={educationData.end_date}
              onChange={handleEducationChange}
            />
          </div>
          <div className="formActions">
            <button type="button" className="cancelButton"  onClick={() => handleCancel('education', 1)}>Cancel</button>
            <button type="button" className="saveButton" onClick={() => handleEducationsave()}>Save</button>
          </div>
        </div>
      {/* // ))} */}
      <div className="sectionFooter">
        <h3 className="subheader">Education</h3>
        <button className="addButton" onClick={addEducation}>+ Add</button>
      </div>
      <hr /><br /><div className="no-records">No Records Found</div><br />
 
      <div className="languageTableContainer">
        <table className="languageTable">
          <thead>
            <tr>
              <th className="languageHeader">
                <input type="checkbox" className="checkbox" />
                Level
              </th>
              <th>Institute</th>
              <th>Major/major</th>
              <th>Year</th>
              <th>score</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Here you would map over your language data to create table rows */}
          </tbody>
        </table>
      </div>
 
      {/* Skills Section */}
      {/* {skills.map((skill, index) => ( */}
        <div
         className={`form ${skillsactive ? " ":"active"}`}>
          <h3 className="subheader">Add Skill</h3>
          <div className="formGroup">
          <label className="label"
            // htmlFor={`skill-${index}`}
            >Employee Number</label>
            <input
              type="text"
              name='emp_number'
              // id={`skill-${index}`}
              className="input"
              // value={skill.skill}
              // onChange={(e) => handleSkillChange(index, 'skill', e.target.value)}
              value={skillsData.skill}
              onChange={handleSkillsChange}
              required
            />
            <label className="label"
            // htmlFor={`skill-${index}`}
            >Skill*</label>
            <input
              type="text"
              name='skill_id'
              // id={`skill-${index}`}
              className="input"
              // value={skill.skill}
              // onChange={(e) => handleSkillChange(index, 'skill', e.target.value)}
              value={skillsData.skill_id}
              onChange={handleSkillsChange}
              required
            />
            <label className="label"
            // htmlFor={`yearsExperience-${index}`}
            >Years of Experience</label>
            <input
              type="text"
              name='years_of_exp'
              // id={`yearsExperience-${index}`}
              className="input"
              // value={skill.yearsExperience}
              // onChange={(e) => handleSkillChange(index, 'yearsExperience', e.target.value)}
              value={skillsData.years_of_exp}
              onChange={handleSkillsChange}
            />
            <label className="label"
            // htmlFor={`comments-${index}`}
            >Comments</label>
            <textarea
              type="text"
              // id={`comments-${index}`}
              className="input"
              name='comments'
              //value={skill.comments}
              // onChange={(e) => handleSkillChange(index, 'comments', e.target.value)}
              value={skillsData.comments}
              onChange={handleSkillsChange}
            />
            <h4 className="header">*Required</h4>
          </div>
          <div className="formActions">
            <button type="button" className="cancelButton" onClick={() => handleCancel('skills', 1)}>Cancel</button>
            <button type="button" className="saveButton" onClick={() => handleskillssave()}>Save</button>
          </div>
        </div>
      {/* ))} */}
      <div className="sectionFooter">
        <h3 className="subheader">Skills</h3>
        <button className="addButton" onClick={addSkill}>+ Add</button>
      </div>
      <hr /><br /><div className="no-records">No Records Found</div><br />
 
      <div className="languageTableContainer">
        <table className="languageTable">
          <thead>
            <tr>
              <th className="languageHeader">
                <input type="checkbox" className="checkbox" />
                Skill
              </th>
              <th>Years of Experience</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Here you would map over your language data to create table rows */}
          </tbody>
        </table>
      </div>
 
      {/* Languages Section */}
      {/* {languages.map((lang, index) => ( */}
      <div className={`form ${LanguagesActive ? " " : "active"}`}>
      <h3 className="subheader">Add Language</h3>
      <div className="formGroup">
      <label className="label"
            // htmlFor={`institute-${index}`}
            >Employee Number*</label>
            <input
              type="number"
              name='emp_number'
              // id={`institute-${index}`}
              className="input"
              // value={edu.institute}
              // onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
              value={LanguagesData.emp_number}
              onChange={handleLanguagesChange}
              required
            />
        <label >Language*</label>
                    <select
                        name="lang_id"
                        value={LanguagesData.lang_id}
                        onChange={handleLanguagesChange}
                    >
                       <option>-- Select --</option>
                        {empLanguages.map(empLanguage => (
                <option key={empLanguage} value={empLanguage}>
                  {empLanguage}
                  </option>
              ))}
                    </select>
        
        <label className="label">Fluency Level</label>
        <select
                name="fluency" value={LanguagesData.fluency} onChange={handleLanguagesChange}>
                <option value="">-- Select --</option>
                <option value="Basic">Basic</option>
                <option value="Conversational">Conversational</option>
                <option value="Fluent">Fluent</option>
                <option value="Native">Native</option> 
              </select>
        
        
          
        
        <label className="label">Competency Level</label>
        <select
                name="competency" value={LanguagesData.competency} onChange={handleLanguagesChange}>
                 <option value="">-- Select --</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
                </select>
        
         
        
        <label className="label">Comments</label>
        <textarea
          type="text"
          name="comments"
          className="input"
          value={LanguagesData.comments}
          onChange={handleLanguagesChange}
        />
        <h4 className="header">*Required</h4>
      </div>
      <div className="formActions">
        <button type="button" className="cancelButton" onClick={() => handleCancel('languages', 1)}>Cancel</button>
        <button type="button" className="saveButton" onClick={()=>handleLanguagesSave()}>Save</button>
      </div>
    </div>
 
      {/* ))} */}
      <div className="sectionFooter">
        <h3 className="subheader">Languages</h3>
        <button className="addButton" onClick={addLanguage}>+ Add</button>
      </div>
      <hr /><br /><div className="no-records">No Records Found</div><br />
 
      <div className="languageTableContainer">
        <table className="languageTable">
          <thead>
            <tr>
              <th className="languageHeader">
                <input type="checkbox" className="checkbox" />
                Language
              </th>
              <th>Fluency Level</th>
              <th>Competency Level</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Here you would map over your language data to create table rows */}
          </tbody>
        </table>
      </div>
 
      {/* Attachments Section */}
      {/* {attachments.map((attach, index) => ( */}
        <div
        // key={index}
        className={`form ${AttachmentsActive ?" ":"active"}`} >
          <h3 className="subheader">Add Attachment</h3>
          <div className="formGroup">
            <label className="label"
            // htmlFor={`file-${index}`}
            >File*</label>
            <input
              type="file"
              name='File'
              // id={`file-${index}`}
              className="input"
              // onChange={(e) => handleAttachmentChange(index, 'file', e.target.files[0])}
              value={AttachmentsData.File}
              onChange={handleAttachmentsChange}
              required
            />
            <label className="label"
            //  htmlFor={`description-${index}`}
             >Description</label>
            <textarea
              // id={`description-${index}`}
              className="input"
              name='description'
              // value={attach.description}
              // onChange={(e) => handleAttachmentChange(index, 'description', e.target.value)}
              value = {AttachmentsData.description}
              onChange={handleAttachmentsChange}
            />
            <h4 className="header">*Required</h4>
          </div>
          <div className="formActions">
            <button type="button" className="cancelButton" onClick={() => handleCancel('attachments', 1)}>Cancel</button>
            <button type="button" className="saveButton" onClick={() => handleAttachmentsSave()}>Save</button>
          </div>
        </div>
      {/* ))} */}
      <div className="sectionFooter">
        <h3 className="subheader">Attachments</h3>
        <button className="addButton" onClick={addAttachment}>+ Add</button>
      </div>
      <hr /><br /><div className="no-records">No Records Found</div><br />
 
      <div className="languageTableContainer">
        <table className="languageTable">
          <thead>
            <tr>
              <th className="languageHeader">
                <input type="checkbox" className="checkbox" />
                File
              </th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Here you would map over your language data to create table rows */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
 
export default Qualifications;
 
 
 