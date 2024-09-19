import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Employeelist.css';

const EmployeeList = () => {
  const [employeeData, setEmployeeData] = useState(null);

  useEffect(() => {
    axios.get('http://192.168.2.51:8082/Admin/PIM/getAll')
      .then(response => {
        setEmployeeData(response.data);
      })
      .catch(error => {
        console.error('Error fetching the employee data:', error);
      });
  }, []);

  return (
    <div className="main-page">
      <div className="employee-list">
        <h3>Employee List</h3>
        <ul>
          {employeeData ? (
            employeeData.map(employee => (
              <li key={employee.id}>{employee.name}</li>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default EmployeeList;
