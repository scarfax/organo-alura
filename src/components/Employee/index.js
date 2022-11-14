import React from 'react';
import './Employee.css';

const Employee = ({ name, image, role, backColor }) => {
  return (
    <div className="employee">
      <div className="header" style={{ backgroundColor: backColor }}>
        <img src={image} alt={name} />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
};

export default Employee;
