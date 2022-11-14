import React from 'react';
import Employee from '../Employee';
import './Team.css';

const Team = (props) => {
  const background = { backgroundColor: props.secondaryColor };
  const border = { borderColor: props.primaryColor };

  return (
    props.employees.length > 0 && (
      <section className="team" style={background}>
        <h3 style={border}>{props.name}</h3>
        <div className="employees">
          {props.employees.map((employee) => (
            <Employee
              backColor={props.primaryColor}
              key={employee.name}
              name={employee.name}
              role={employee.role}
              image={employee.image}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Team;
