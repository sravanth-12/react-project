import React, { useState } from 'react';
import './EmployeeTimeSheet.css';

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
    if (currentDropdown !== 'timesheets') {
      setTimesheetsDropdownOpen(false);
    }
    if (currentDropdown !== 'attendance') {
      setAttendanceDropdownOpen(false);
    }
    if (currentDropdown !== 'reports') {
      setReportsDropdownOpen(false);
    }
    if (currentDropdown !== 'projects') {
      setProjectsDropdownOpen(false);
    }
  };

  const handlePreviousClick = () => {
    // Handle the previous period logic here
    console.log('Previous period clicked');
  };

  const handleNextClick = () => {
    // Handle the next period logic here
    console.log('Next period clicked');
  };

  const handleCalendarClick = () => {
    // Handle the calendar logic here
    console.log('Calendar clicked');
  };

  return (
    <div>
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
                  <a href="/EmployeeTimeSheet" role="menuitem" className="oxd-topbar-body-nav-tab-link">EmployeeTimeSheet</a>
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
                  {/* <a href="/ViewReports" role="menuitem" className="oxd-topbar-body-nav-tab-link">View Reports</a> */}
                  <a href="/ProjectReport1" role="menuitem" className="oxd-topbar-body-nav-tab-link">Project Reports</a>
                  <a href="/EmployeeReports" role="menuitem" className="oxd-topbar-body-nav-tab-link">EmployeeReports</a>
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
                <a href="/Customers1" role="menuitem" className="oxd-topbar-body-nav-tab-link">customer</a>
                  <a href="/ProjectInfo" role="menuitem" className="oxd-topbar-body-nav-tab-link">Projects info</a>
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
    </div>
  );
};

const SelectEmployee = ({ onEmployeeChange, onSearchClick }) => {
  return (
    <div className="select-employee">
      <h2>Select Employee</h2>
      <div className="form-group">
        <label htmlFor="employeeName">Employee Name*</label>
        <input
          type="text"
          id="employeeName"
          placeholder="Type for hints..."
          onChange={(e) => onEmployeeChange(e.target.value)}
          required
        />
      </div>
      <button onClick={onSearchClick} className="btn btn-primary">View</button>
    </div>
  );
};

const TimesheetsPendingAction = ({ timesheets, onViewClick }) => {
  return (
    <div className="timesheets-pending-action">
      <h2>Timesheets Pending Action</h2>
      <p>{timesheets.length} Records Found</p>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Timesheet Period</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {timesheets.map((timesheet, index) => (
            <tr key={index}>
              <td>{timesheet.employeeName}</td>
              <td>{timesheet.timesheetPeriod}</td>
              <td>
                <button onClick={() => onViewClick(timesheet.id)} className="btn btn-primary">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [timesheets, setTimesheets] = useState([
    { id: 1, employeeName: '1212 111312 admin', timesheetPeriod: '24-06-2024 - 30-06-2024' },
    { id: 2, employeeName: '1212 111312 admin', timesheetPeriod: '24-06-2024 - 30-06-2024' }
  ]);

  const handleEmployeeChange = (name) => {
    setEmployeeName(name);
  };

  const handleSearchClick = () => {
    // Implement search functionality here
    console.log(`Searching for employee: ${employeeName}`);
  };

  const handleViewClick = (id) => {
    // Implement view functionality here
    console.log(`Viewing timesheet with id: ${id}`);
  };

  return (
    <div className="app">
      <Topbar />
      <SelectEmployee onEmployeeChange={handleEmployeeChange} onSearchClick={handleSearchClick} />
      <TimesheetsPendingAction timesheets={timesheets} onViewClick={handleViewClick} />
    </div>
  );
};

export default App;
