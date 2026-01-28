import { useState } from "react";
import { FaUndoAlt } from "react-icons/fa";

export default function SkillCard({ icon: Icon, title, description, hint }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`skill-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="skill-inner">
        {/* FRONT */}
        <div className="skill-front">
          <Icon className="skill-icon" />
          <h4>{title}</h4>
          <span className="skill-hint">{hint}</span>
        </div>

        {/* BACK */}
        <div className="skill-back">
          <p>{description}</p>
          <div className="flip-back">
            <FaUndoAlt /> back
          </div>
        </div>
      </div>
    </div>
  );
}
