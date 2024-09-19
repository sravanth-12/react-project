import React, { useState } from 'react';
import './EmployeeAttendanceRecord.css';
import './Time.css';

const Topbar = () => {
  const [isTimesheetsDropdownOpen, setTimesheetsDropdownOpen] = useState(false);
  const [isAttendanceDropdownOpen, setAttendanceDropdownOpen] = useState(false);
  const [isReportsDropdownOpen, setReportsDropdownOpen] = useState(false);
  const [isProjectsDropdownOpen, setProjectsDropdownOpen] = useState(false);

  const toggleTimesheetsDropdown = () => {
    setTimesheetsDropdownOpen(!isTimesheetsDropdownOpen);
    closeOtherDropdowns('timesheets');
  };

  const toggleAttendanceDropdown = () => {
    setAttendanceDropdownOpen(!isAttendanceDropdownOpen);
    closeOtherDropdowns('attendance');
  };

  const toggleReportsDropdown = () => {
    setReportsDropdownOpen(!isReportsDropdownOpen);
    closeOtherDropdowns('reports');
  };

  const toggleProjectsDropdown = () => {
    setProjectsDropdownOpen(!isProjectsDropdownOpen);
    closeOtherDropdowns('projects');
  };

  const closeOtherDropdowns = (currentDropdown) => {
    if (currentDropdown !== 'timesheets') setTimesheetsDropdownOpen(false);
    if (currentDropdown !== 'attendance') setAttendanceDropdownOpen(false);
    if (currentDropdown !== 'reports') setReportsDropdownOpen(false);
    if (currentDropdown !== 'projects') setProjectsDropdownOpen(false);
  };

  return (
    <nav role="navigation" aria-label="Topbar Menu" className="oxd-topbar-body-nav">
      <ul>
        <li className={`oxd-topbar-body-nav-tab --parent ${isTimesheetsDropdownOpen ? '--active' : ''}`}>
          <span className="oxd-topbar-body-nav-tab-item" onClick={toggleTimesheetsDropdown}>
            Timesheets <i className="oxd-icon bi-chevron-down" />
          </span>
          {isTimesheetsDropdownOpen && (
            <ul className="oxd-dropdown-menu" role="menu">
              <li>
                <a href="/MyTimeSheet" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Timesheets</a>
                <a href="/EmployeeTimeSheet" role="menuitem" className="oxd-topbar-body-nav-tab-link">Employee TimeSheet</a>
              </li>
            </ul>
          )}
        </li>
        <li className={`oxd-topbar-body-nav-tab --parent ${isAttendanceDropdownOpen ? '--active' : ''}`}>
          <span className="oxd-topbar-body-nav-tab-item" onClick={toggleAttendanceDropdown}>
            Attendance <i className="oxd-icon bi-chevron-down" />
          </span>
          {isAttendanceDropdownOpen && (
            <ul className="oxd-dropdown-menu" role="menu">
              <li>
                  <a href="/MyAttendanceRecord" role="menuitem" className="oxd-topbar-body-nav-tab-link">My Records</a>
                  <a href="/PunchIn" role="menuitem" className="oxd-topbar-body-nav-tab-link">Punch In/Out</a>
                  <a href="/EmployeeAttendanceRecord" role="menuitem" className="oxd-topbar-body-nav-tab-link">EmployeeAttendanceRecord</a>
                  <a href="/Configuration" role="menuitem" className="oxd-topbar-body-nav-tab-link">Configuration</a>
                </li>
            </ul>
          )}
        </li>
        <li className={`oxd-topbar-body-nav-tab --parent ${isReportsDropdownOpen ? '--active' : ''}`}>
          <span className="oxd-topbar-body-nav-tab-item" onClick={toggleReportsDropdown}>
            Reports <i className="oxd-icon bi-chevron-down" />
          </span>
          {isReportsDropdownOpen && (
            <ul className="oxd-dropdown-menu" role="menu">
              <li>
                <a href="/Reports" role="menuitem" className="oxd-topbar-body-nav-tab-link">Generate Reports</a>
                <a href="/ProjectReport1" role="menuitem" className="oxd-topbar-body-nav-tab-link">Project Reports</a>
                <a href="/EmployeeReports" role="menuitem" className="oxd-topbar-body-nav-tab-link">Employee Reports</a>
                <a href="/AttendanceTotalSummaryReport" role="menuitem" className="oxd-topbar-body-nav-tab-link">Attendance Total Summary Report</a>
              </li>
            </ul>
          )}
        </li>
        <li className={`oxd-topbar-body-nav-tab --parent ${isProjectsDropdownOpen ? '--active' : ''}`}>
          <span className="oxd-topbar-body-nav-tab-item" onClick={toggleProjectsDropdown}>
            Projects <i className="oxd-icon bi-chevron-down" />
          </span>
          {isProjectsDropdownOpen && (
            <ul className="oxd-dropdown-menu" role="menu">
              <li>
                <a href="/Customers1" role="menuitem" className="oxd-topbar-body-nav-tab-link">Customer</a>
                <a href="/ProjectInfo" role="menuitem" className="oxd-topbar-body-nav-tab-link">Projects Info</a>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <div className="oxd-topbar-body-nav-slot">
        <button className="oxd-icon-button" type="button" title="Help">
          <i className="oxd-icon bi-question-lg"></i>
        </button>
      </div>
    </nav>
  );
};

const EmployeeAttendanceRecords = () => {
  const [date, setDate] = useState('2024-07-30');
  const [employeeName, setEmployeeName] = useState('');
  const [records, setRecords] = useState([
    { name: 'Deepak Maduru', duration: 0 },
    { name: 'Tarakeswargoud A', duration: 0 },
    { name: '1212 admin', duration: 0 },
    // ...more records
  ]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleNameChange = (e) => {
    setEmployeeName(e.target.value);
  };

  const handleView = (employee) => {
    // logic to view employee details
    console.log(`Viewing details for ${employee.name}`);
  };

  return (
    <div>
      <Topbar />
      <div className="attendance-form">
        <h2>Employee Attendance Records</h2>
        <div className="form-group">
          <label>Employee Name</label>
          <input
            type="text"
            placeholder="Type for hints..."
            value={employeeName}
            onChange={handleNameChange}
          />
        </div>
        <div className="form-group">
          <label>Date*</label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
        <button onClick={() => console.log('View button clicked')}>View</button>
      </div>

      <div className="records-list">
        <h2>{records.length} Records Found</h2>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Total Duration (Hours)</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {records.map((record, index) => (
              <tr key={index}>
                <td>{record.name}</td>
                <td>{record.duration.toFixed(2)}</td>
                <td>
                  <button onClick={() => handleView(record)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeAttendanceRecords;
