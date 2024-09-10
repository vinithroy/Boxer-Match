// src/components/MatchBoxers.js
import React, { useState } from 'react';
import BoxerCard from './BoxerCard';
import { boxers } from '../data';

const MatchBoxers = () => {
  const [location, setLocation] = useState("");
  const [weightClass, setWeightClass] = useState("");

  const handleMatch = () => {
    return boxers.filter(
      (boxer) =>
        (!location || boxer.location.toLowerCase().includes(location.toLowerCase())) &&
        (!weightClass || boxer.weightClass === weightClass)
    );
  };

  return (
    <div>
      <h1>Find Your Match</h1>
      <input
        type="text"
        placeholder="Enter Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <select value={weightClass} onChange={(e) => setWeightClass(e.target.value)}>
        <option value="">All Weight Classes</option>
        <option value="Heavyweight">Heavyweight</option>
        <option value="Welterweight">Welterweight</option>
      </select>

      <div className="boxer-list">
        {handleMatch().map((boxer) => (
          <BoxerCard key={boxer.id} boxer={boxer} />
        ))}
      </div>
    </div>
  );
};

export default MatchBoxers;
