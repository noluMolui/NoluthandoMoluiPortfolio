import React from "react";
import ProjectCard from "./ProjectCard";




export default function Projects() {
  return (
    <section className="section" id="projects">
      <h3>Selected Work</h3>
      <p className="section-intro">
        A selection of projects that reflect my approach to design, development,
        and building a strong online presence.
      </p>
      <section class="projects">
  <div class="projects-grid">

    <div class="project-card">
      <img src="src/assets/noluforge.png" alt="NoluForge Business Website" />
      <h3>NoluForge — Business Website</h3>
      <p>
        aAn official business website showcasing full digital services, brand clarity,
        and a strong professional online presence.
      </p>
      <p class="stack">HTML • CSS • JavaScript</p>
      <a
        href="https://noluforge.co.za/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        Website link →
      </a>
    </div>

    <div class="project-card">
      <img src="src//assets/Edunity.png" alt="Edunity Education Platform" />
      <h3>Edunity — Education Platform</h3>
      <p>
        An education-focused web platform built to present structured learning content
        with clarity, responsiveness, and a modern user experience.
      </p>
      <p class="stack">HTML • CSS • JavaScript</p>
      <a href="https://edunity-decproject.netlify.app/" target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        Website link →
      </a>
    </div>

    <div class="project-card">
      <img src="src/assets/titelo.png" alt="Titelo Electrical Website" />
      <h3>Titelo Electrical</h3>
      <p>
        A clean, professional website built for an electrical company, focused on
        credibility, clarity, and ease of client contact.
      </p>
      <p class="stack">HTML • CSS • JavaScript</p>
      <a
        href="https://www.titelo.co.za/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        Website link →
      </a>
    </div>

    <div class="project-card">
      <img src="src/assets/weather.png" alt="Weather App" />
      <h3>Weather App</h3>
      <p>
        A weather application that consumes a public API to display real-time weather
        data through a simple, user-friendly interface.
      </p>
      <p class="stack">JavaScript • API • CSS</p>
      <a
        href="https://weatherappapipractice.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        Website link →
      </a>
    </div>

    <div class="project-card">
      <img src="src/assets/cafe.png" alt="Frontend Practice Café Website" />
      <h3>Frontend Practice Project</h3>
      <p>
        A responsive café website built to demonstrate layout structure, visual
        hierarchy, and frontend fundamentals. The project focuses on clean HTML
        semantics, modern CSS styling, and mobile-first responsiveness to ensure
        consistent performance across screen sizes.
      </p>
      <p class="stack">HTML • CSS • JavaScript</p>
      <a
        href="https://nolulove-s-cafe.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        class="project-link"
      >
        Website link →
      </a>
    </div>

  </div>
</section>

    </section>
  );
}
