import React from "react";

const WorkoutItem = ({ name, calories }) => {
  return (
    <div className="workout-card">
      <h3>{name}</h3>
      <p>🔥 {calories} קלוריות</p>
    </div>
  );
};

export default WorkoutItem;
