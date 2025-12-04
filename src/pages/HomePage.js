import "./HomePage.css";
import { FaRunning, FaDumbbell, FaAppleAlt, FaHeartbeat } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="home-container">
      
      {/* HEADER */}
      <header className="hero">
        <h1 className="hero-title">FitTrack 💪</h1>
        <p className="hero-subtitle">
          הדרך החכמה להתאמן, להתקדם ולהשיג תוצאות אמיתיות.
        </p>
        <button className="cta-btn">התחל את המסע שלך</button>
      </header>

      {/* TRAINING OPTIONS */}
      <section className="section-title">
        <h2>בחר אימון 💥</h2>
        <p>אימונים מדויקים שיעזרו לך להגיע ליעד שלך</p>
      </section>

      <div className="training-grid">

        <div className="training-card">
          <FaRunning className="icon" />
          <h3>ריצה</h3>
          <p>🔥 שורף 300 קלוריות</p>
        </div>

        <div className="training-card">
          <FaDumbbell className="icon" />
          <h3>אימון כוח</h3>
          <p>🔥 שורף 400 קלוריות</p>
        </div>

        <div className="training-card">
          <FaHeartbeat className="icon" />
          <h3>יוגה</h3>
          <p>🔥 שורף 150 קלוריות</p>
        </div>

        <div className="training-card">
          <FaAppleAlt className="icon" />
          <h3>חיטוב</h3>
          <p>🔥 שורף 350 קלוריות</p>
        </div>
      </div>

      {/* DAILY GOAL */}
      <section className="goal-section">
        <h2>הגדרת יעד יומי 🎯</h2>
        <p>קבע מטרה ותחזור בכל יום כדי לעמוד בה</p>

        <input
          type="number"
          placeholder="לדוגמה: 10,000 צעדים"
          className="goal-input"
        />
        <button className="goal-btn">שמור יעד</button>
      </section>

      {/* BENEFITS */}
      <section className="benefits-section">
        <h2>למה דווקא FitTrack?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">📊 סטטיסטיקות מתקדמות</div>
          <div className="benefit-card">🔥 ניתוח קלוריות בזמן אמת</div>
          <div className="benefit-card">🏆 אתגרי כושר שבועיים</div>
          <div className="benefit-card">📅 תכנון אימונים אישי</div>
        </div>
      </section>
    </div>
  );
}
