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
          description="Building data-driven user interfaces using React’s component-based architecture."/>

        <SkillCard
          icon={SiJavascript}
          title="JavaScript"
          hint="Tap to flip"
          description="Mastering JavaScript fundamentals, including async logic, data manipulation, and seamless integration."/>

        <SkillCard
          icon={MdApi}
          title="APIs"
          hint="Tap to flip"
          description="Building dynamic interfaces by handling real-time data fetching and state management" />

        <SkillCard
          icon={FaPenNib}
          title="UI & Visual Design"
          hint="Tap to flip"
          description="I design thoughtful, expressive interfaces with strong hierarchy, spacing,& storytelling."
        />

        <SkillCard
          icon={FaFigma}
          title="Figma"
          hint="Tap to flip"
          description="I design layouts, components, and flows in Figma  for clarity and intention."
        />

        <SkillCard
          icon={SiCanva}
          title="Canva"
          hint="Tap to flip"
          description="Crafting professional logos and branded visuals for a consistent digital presence"/>

       <SkillCard
  icon={FaBrain}
  title="AI-Enabled Development"
  hint="Tap to flip"
  description="Use AI to speed up development cycles and build intelligent, user-focused interfaces"/>

        <SkillCard
  icon={FaServer}
  title="Server-Side Development"
  hint="Tap to flip"
  description="Building scalable server-side logic, managing data with Node.js & MongoDB."/>
      </div>
    </section>
  );
}

