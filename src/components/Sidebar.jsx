import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Home from "../Images/Home.svg";
import Admin from "../Images/Admin.svg";
import PIM from "../Images/PIM.svg";
import Time from "../Images/Time.svg";
import Leave from "../Images/Leave.svg";
import Info from "../Images/Info.svg";
import Performance from "../Images/Performance.svg";
import Dashboard from "../Images/Dashboard.svg";
import Directory from "../Images/Directory.svg";
import Buzz from "../Images/Buzz.svg";



import './Sidebar.css';

const Sidebar = ({ onMenuItemClick }) => {
  const [closeMenu, setCloseMenu] = useState(false);
  const handleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  return (
    <div className={closeMenu ? "sidebar active" : "sidebar"}>
      <div className="logoContainer">
        <h2 className="title">ONE SRR</h2>
      </div>
      <div
        className={
                closeMenu === false
                  ? "burgerContainer"
                  : "burgerContainer active" 
        }
        >
          <div
            className="burgerTrigger"
            onClick={() => {
              handleCloseMenu();
            }}  
            ></div>
           
        </div>
      <div className="contentsContainer">
        <ul>
          <li>
            <img src={Home} alt="Home" />
            <NavLink
            to="/Home"
            className={({ isActive}) => isActive ? "active" : ""}
            onClick={() => onMenuItemClick('Home')}
            >Home</NavLink>
          </li>
          <li>
            <img src={Admin} alt="Admin" />
            <NavLink
            to="/Admin"
            className={({ isActive}) => isActive ? "active" : ""}
            onClick={() => onMenuItemClick('Admin')}
            >Admin</NavLink>
          </li>
          <li>
            <img src={PIM} alt="PIM" />
            <NavLink
            to="/PIM"
            className={({ isActive}) => isActive ? "active" : ""}
            onClick={() => onMenuItemClick('PIM')}
            >PIM</NavLink>
          </li>
          <li>
            <img src={Leave} alt="Leave" />
            <NavLink 
              to="/Leave" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => onMenuItemClick('Leave')}
            >Leave</NavLink>
          </li>
          <li>
            <img src={Time} alt="Time" />
            <NavLink 
              to="/Time" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => onMenuItemClick('Time')}
            >Time</NavLink>
          </li>
          <li>
            <img src={Info} alt="Myinfo" />
            <NavLink 
              to="/Myinfo" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => onMenuItemClick('Info')}
            >My Info</NavLink>
          </li>
          <li>
            <img src={Performance} alt="Performance" />
            <NavLink 
              to="/Performance" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => onMenuItemClick('Performance')}
            >Performance</NavLink>
          </li>
          <li>
            <img src={Dashboard} alt="Dashboard" />
            <NavLink 
              to="/Dashboard" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => onMenuItemClick('Dashboard')}
            >Dashboard</NavLink>
          </li>
          <li>
            <img src={Directory} alt="Directory" />
            <NavLink 
              to="/Directory" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => onMenuItemClick('Directory')}
            >Directory</NavLink>
          </li>
          <li>
            <img src={Buzz} alt="Buzz" />
            <NavLink 
              to="/Buzz" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => onMenuItemClick('Buzz')}
            >Buzz</NavLink>
          </li>
          
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
