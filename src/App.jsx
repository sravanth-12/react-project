import '../src/styles/main.scss';
import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import React, { useState } from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';

import Personaldetails from './Pages/Myinfo/Personaldetails';
import Contactdetails from './Pages/Myinfo/Contactdetails';
import Emergencycontacts from './Pages/Myinfo/Emergencycontacts';
import Dependents from './Pages/Myinfo/Dependents';
import Immigration from './Pages/Myinfo/Immigration';
import JobDetails from './Pages/Myinfo/JobDetails';
import Salary from './Pages/Myinfo/Salary';
import ReportTo from './Pages/Myinfo/ReportTo';
import Qualifications from './Pages/Myinfo/Qualifications';
import Memberships from './Pages/Myinfo/Memberships';

import Home from './Pages/Home/Home';
import Admin from './Pages/Admin/Admin';
import Buzz from './Pages/Buzz/Buzz';
import Leave from './Pages/Leave/Leave';
import Directory from './Pages/Directory/Directory';
import Dashboard from './Pages/Dashboard/Dashboard';
import Performance from './Pages/Performance/Time1';
import PIM from './Pages/PIM/PIM';
import Employeelist from './Pages/PIM/Employeelist';
import AddEmp from './Pages/PIM/AddEmp';



import Time from './Pages/Time/Time';
import MyAttendanceRecord from './Pages/Time/MyAttendanceRecord';
import MyTimeSheet from './Pages/Time/MyTimeSheet';
import MyTimeSheet1 from './Pages/Time/MyTimeSheet1';
import EmployeeTimeSheet from './Pages/Time/EmployeeTimeSheet';
import Punchin from './Pages/Time/Punchin';
import Punchout from './Pages/Time/Punchout';
import Reports from './Pages/Time/Reports';
import EmployeeReports from './Pages/Time/EmployeeReports';
import AttendanceTotalSummaryReport from './Pages/Time/AttendanceTotalSummaryReport';
import ProjectReport1 from './Pages/Time/ProjectReport1';
import Customers1 from './Pages/Time/Customers1';
import ProjectInfo from './Pages/Time/ProjectInfo';
import EmployeeAttendanceRecord from './Pages/Time/EmployeeAttendanceRecord';
import Configuration from './Pages/Time/Configuration';


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

const App = () => {
  const [showSidebar2, setShowSidebar2] = useState(false);

  const handleMenuItemClick = (menu) => {
    console.log(`Menu item clicked: ${menu}`);
    setShowSidebar2(menu === 'MyInfo');
  };

  return (
    <Router>
      <Header />
      <div className="App">
        <Sidebar onMenuItemClick={handleMenuItemClick} />
        <div className="content-container">
          {showSidebar2 && <MyInfo />}
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/Home" element={<Home />} />
            <Route path="/Admin" element={<Admin />}/>
            <Route path="/PIM" element={<PIM />}/>
            <Route path="/Employeelist" element={<Employeelist />}/>
            <Route path="/AddEmp" element={<AddEmp />}/>
            <Route path="/Time" element={<Time />} />
            <Route path="/Leave" element={<Leave />}/>
            <Route path="/MyInfo/*" element={<MyInfo />} />
            <Route path="/Performance" element={<Performance />}/>
            <Route path="/Dashboard" element={<Dashboard />}/>
            <Route path="/Directory" element={<Directory />} />
            <Route path="/Buzz" element={<Buzz />} />
            
            
            
            
            <Route path="/MyAttendanceRecord" element={<MyAttendanceRecord/>}/>
            <Route path="/MyTimeSheet" element={<MyTimeSheet/>}/>
            <Route path="/MyTimeSheet1" element={<MyTimeSheet1/>}/>
            <Route path="/EmployeeTimeSheet" element={<EmployeeTimeSheet/>}/>
            <Route path="/Punchin" element={<Punchin/>}/>
            <Route path="/Punchout" element={<Punchout/>}/>
            <Route path="/Reports" element={<Reports/>}/>
            <Route path="/EmployeeReports" element={<EmployeeReports/>}/>
            <Route path="/AttendanceTotalSummaryReport" element={<AttendanceTotalSummaryReport/>}/>
            <Route path="/Customers1" element={<Customers1/>}/>
            <Route path="/ProjectInfo" element={<ProjectInfo/>}/>

             <Route path="/ProjectReport1" element={<ProjectReport1/>}/>
             <Route path="/Configuration" element={<Configuration/>}/>
             <Route path="/EmployeeAttendanceRecord" element={<EmployeeAttendanceRecord/>}/> 

            {/*<Route path="/ViewReports" element={<ViewReports/>}/> */}
          </Routes> 
        </div>
      </div>
    </Router>
  );
};

export default App;
