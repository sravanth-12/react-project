import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="row">
        <div className="section time-at-work">
          <h2>Time at Work</h2>
          <hr className="big-hr" />
          <div className="content">
          
            {/* <div className='person-icon'>
            <img src="/Images/employee.png" alt="Icon" className="person-icon" />
            </div> */}
            <img src="/Images/employee.png" alt="Icon" className="person-icon" />
            <div className="status">
              <p>Punched Out</p>
              <p>Punched Out: Jun 17th at 02:49 PM (GMT 5.5)</p>
              
            </div>
            {/* <img src="/Images/employee.png" alt="Icon" className="person-icon" /> */}
            <div className="today-time">
              <div className="time-bar">
                <p>0h0mToday</p>
                <img src="/Images/icons8-clock-80.png" alt="Clock Icon" className="clock-icon" />
              </div>
            </div>
            <hr className="big-hr" />
            <div className="week-summary">
              <p className="week-title">This Week</p><br></br>
              <p>Jun 17-Jun 23</p>
              <div className="week-time-bar">
                <img src="/Images/icons8-clock-100.png" alt="Clock Icon" className="clock-icon1" />
                <p>14h 49m</p>
              </div>
            </div>
            <div className="week">
              <div className="days">
                <div className="day">
                  <div className="bar"></div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                </div>
                <div className="day">
                  <div className="bar"></div>
                </div>
              </div>
              <hr />
              <div className="day-names">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>
          </div>
        </div>

        <div className="section my-actions">
          <h2>My Actions</h2>
          <hr className="big-hr" />
          <br></br><br></br>
          <div className="content">
          <img src="/Images/notepad.png" alt="Icon" className=".quick-launch .icon" />
            {/* <div className="my-actions .content .clipboard"></div>
            <img src="/Images/img.icons8.png" alt="Clipboard Icon" className="my-actions .content .clipboard" /> */}
           {/* <div className="clipboard-icon"></div> */}
            <br></br><br></br>
            <p>No Pending Actions to Perform</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="section quick-launch">
          <h2>Quick Launch</h2>
          <hr className="big-hr" />
          <br></br><br></br>
          <div className="content">
          <img src="/Images/notepad.png" alt="Icon" className=".quick-launch .icon" />
            {/* <div className="quick-launch .icon"></div>
            <img src="/Images/img.icons8.png" alt="Icon" className="quick-launch .icon" /> */}
            <div className="icon"></div>
            <p>My Timesheet</p>
          </div>
        </div>

        <div className="section buzz-latest-posts">
          <h2>Buzz Latest Posts</h2>
          <hr className="big-hr" />
          <br></br><br></br>
          <div className="content">
          <img src="/Images/notepad.png" alt="Icon" className=".buzz-latest-posts  .icon" />
            {/* <div className="buzz-latest-posts .icon"></div>
            <img src="/Images/img.icons8.png" alt="Icon" className="buzz-latest-posts .icon" /> */}
            <div className="icon"></div>
            <p>No Posts Added</p>
          </div>
        </div>
      </div>

      <div className="section employees-on-leave">
        <h2>Employees on Leave Today</h2>
        <hr className="big-hr" />
          <br></br><br></br>
        <div className="content">
          {/* <div className="employees-on-leave .icon"></div> */}
          <img src="/Images/notepad.png" alt="Icon" className="employees-on-leave .icon" />
          <div className="icon">
          {/* <img src="/Images/img.icons8.png" alt="Icon" className="employees-on-leave .icon" /> */}
          </div>
          <p>Leave Period Not Defined</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
