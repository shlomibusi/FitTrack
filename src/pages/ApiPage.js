import React, { useEffect, useState } from "react";
import "./ApiPage.css";

const ApiPage = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=salad")
      .then((res) => res.json())
      .then((data) => {
        setMeals(data.meals || []);
        setLoading(false);
      });
  }, []);

  return (
    <div className="api-container">
      <h1 className="api-title">🌍 מתכונים בריאים מה–API</h1>
      <p className="api-subtitle">תוצאות מאתר ThemealDB — מתכונים אמיתיים!</p>

      {loading ? (
        <p className="loading-text">⏳ טוען נתונים...</p>
      ) : (
        <div className="meals-grid">
          {meals.map((meal) => (
            <div key={meal.idMeal} className="meal-card">
              <img src={meal.strMealThumb} alt="meal" className="meal-img" />
              <h3 className="meal-title">{meal.strMeal}</h3>

              <div className="meal-info">
                <p><strong>🍽 קטגוריה:</strong> {meal.strCategory}</p>
                <p><strong>🌎 אזור:</strong> {meal.strArea}</p>
              </div>

              <a
                className="meal-btn"
                href={meal.strYoutube}
                target="_blank"
                rel="noreferrer"
              >
                ▶ צפייה במתכון
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ApiPage;
