import React from 'react';
import '../styles/PartnerItem.css';  

const PartnerItem = ({ partner }) => {
  return (
    <div className="partner-item">
      <img src={partner.image} alt={partner.name} className="partner-image" />
      <h3>{partner.name}</h3>
      <p>{partner.description}</p>
      {partner.types && (
        <ul>
          {partner.types.map((type, index) => (
            <li key={index}>{type}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PartnerItem;
