// src/components/BoxerCard.js
import React from 'react';
import './BoxerCard.css';

const BoxerCard = ({ boxer }) => {
  return (
    <div className="boxer-card">
      <h2>{boxer.name}</h2>
      <p>Location: {boxer.location}</p>
      <p>Weight Class: {boxer.weightClass}</p>
    </div>
  );
};

export default BoxerCard;
