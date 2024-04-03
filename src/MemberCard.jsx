import React from 'react';
import './MemberCard.css';

function MemberCard({ photo, name, title, description }) {
  return (
    <div className="member-card">
      <div className="member-photo">
        <img src={photo} alt={name} />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default MemberCard;