import React from "react";

const ChallengeCard = ({ name, description }) => {
  return (
    <div className="challenge-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ChallengeCard;
