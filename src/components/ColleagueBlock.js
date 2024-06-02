import React from 'react';
import '../styles/ColleagueBlock.css';

const ColleagueBlock = ({ name, age, position, schedule, image }) => {
  return (
    <div className="colleague-block">
      <img src={image} alt={name} className="colleague-image" />
      <div className="colleague-info">
        <h3>{name}</h3>
        <p><strong>Возраст:</strong> {age}</p>
        <p><strong>Должность:</strong> {position}</p>
        <p><strong>График работы:</strong> {schedule}</p>
      </div>
    </div>
  );
}

export default ColleagueBlock;
