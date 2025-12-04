import React, { useState } from "react";
import "../App.css";

const FormPage = () => {
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(`היעד החדש שלך: ${goal}! 💪`);
    setGoal("");
  };

  return (
    <div className="page">
      <h1>🎯 הגדרת יעד יומי</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="הכנס יעד (לדוגמה: 10,000 צעדים)"
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
        />
        <button type="submit">שמור יעד</button>
      </form>
      {message && <p className="success">{message}</p>}
    </div>
  );
};

export default FormPage;
