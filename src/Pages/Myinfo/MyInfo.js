// import '../src/styles/main.scss';
import './MyInfo.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

// import Header from './components/Header';
// import Sidebar from './components/Sidebar';

import Personaldetails from './Personaldetails';
import Contactdetails from './Contactdetails';
import Emergencycontacts from './Emergencycontacts';
import Dependents from './Dependents';
import Immigration from './Immigration';
import JobDetails from './JobDetails';
import Salary from './Salary';
import ReportTo from './ReportTo';
import Qualifications from './Qualifications';
import Memberships from './Memberships';





const MyInfo = () => {
    return (
      <div className="container">
        <div className="sidebar1">
          <NavLink to="/MyInfo/Personaldetails" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Personal Details</button> 
            </NavLink>
        
          <NavLink to="/MyInfo/Contactdetails" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button"> Contact Details</button>
            </NavLink>
         
          <NavLink to="/MyInfo/Emergencycontacts" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Emergency Contacts</button>
            </NavLink>
         
          <NavLink to="/MyInfo/Dependents" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Dependents </button>
            </NavLink>
         
          <NavLink to="/MyInfo/Immigration" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Immigration</button>
            </NavLink>
         
          <NavLink to="/MyInfo/JobDetails" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Job Details </button>
            </NavLink>
          
          <NavLink to="/MyInfo/Salary" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Salary</button>
            </NavLink>
       
          <NavLink to="/MyInfo/ReportTo" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Report-To</button>
            </NavLink>
          
          <NavLink to="/MyInfo/Qualifications" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Qualifications</button>
            </NavLink>
       
          <NavLink to="/MyInfo/Memberships" className={({ isActive }) => (isActive ? 'active' : '')}>
            <button className="nav-button">Memberships</button></NavLink>
          
        </div>
        <div className="content">
          <Routes>
            <Route path="Personaldetails" element={<Personaldetails />} />
            <Route path="Contactdetails" element={<Contactdetails />} />
            <Route path="Emergencycontacts" element={<Emergencycontacts />} />
            <Route path="Dependents" element={<Dependents />} />
            <Route path="Immigration" element={<Immigration />} />
            <Route path="JobDetails" element={<JobDetails />} />
            <Route path="Salary" element={<Salary />} />
            <Route path="ReportTo" element={<ReportTo />} />
            <Route path="Qualifications" element={<Qualifications />} />
            <Route path="Memberships" element={<Memberships />} />
          </Routes>
        </div>
      </div>
    );
  };

  export default MyInfo;