import SkillCard from "./SkillCard";
import "./CSS/skills.css";

import { FaReact, FaPenNib, FaFigma, FaBrain, FaServer } from "react-icons/fa";
import { MdApi } from "react-icons/md";
import { SiJavascript, SiCanva } from "react-icons/si";

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="skills-header">
        <h3>Skills & Craft</h3>
        <p>
          I combine development, design, and curiosity.
          <span> Tap a card to explore how I use each skill.</span>
        </p>
      </div>

      <div className="skills-grid">
        <SkillCard
          icon={FaReact}
          title="React"
          hint="Tap to flip"
          description="I build component-driven UIs using React, managing state with useState, side effects with useEffect, and clean reusable patterns."
        />

        <SkillCard
          icon={SiJavascript}
          title="JavaScript"
          hint="Tap to flip"
          description="Strong fundamentals in JavaScript — working with arrays, objects, async logic, and data from APIs."
        />

        <SkillCard
          icon={MdApi}
          title="APIs"
          hint="Tap to flip"
          description="I consume REST APIs, handle loading and error states, and render dynamic, data-driven interfaces."
        />

        <SkillCard
          icon={FaPenNib}
          title="UI & Visual Design"
          hint="Tap to flip"
          description="I design thoughtful, expressive interfaces with strong hierarchy, spacing, and storytelling."
        />

        <SkillCard
          icon={FaFigma}
          title="Figma"
          hint="Tap to flip"
          description="I design layouts, components, and flows in Figma before development for clarity and intention."
        />

        <SkillCard
          icon={SiCanva}
          title="Canva"
          hint="Tap to flip"
          description="I create logos, posters, and branded visuals using Canva with a strong creative eye."
        />

        <SkillCard
          icon={FaBrain}
          title="AI Curiosity"
          hint="Tap to flip"
          description="I’m exploring how AI can be integrated into products to enhance interaction and user experience."
        />

        <SkillCard
          icon={FaServer}
          title="Backend (Learning)"
          hint="Tap to flip"
          description="Currently learning backend concepts to better understand full-stack systems and data flow."
        />
      </div>
    </section>
  );
}

