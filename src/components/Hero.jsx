import React from "react";


export default function Hero() {
return (
<header className="hero">
<div className="hero-inner">
<div className="hero-text">
<h1>Noluthando Molui</h1>
<div className="contact-links">
<a href="mailto:noluthandotinyiko@gmail.com" target="_blank">Email</a>
<a href="tel:+27750866829" target="_blank">+27 75 086 6829</a>
<a href="https://github.com/noluMolui" target="_blank">GitHub</a>
<a href="https://www.linkedin.com/in/msmolui-b718ab320/" target="_blank">LinkedIn</a>
</div>
<h2>Frontend Engineer | Associate Full-Stack Developer</h2>
<p>
I build high-performance, human-centered web applications that bridge the gap between 
sophisticated design and robust logic. With a strong foundation in React and UI/UX architecture, I have expanded my expertise into Full-Stack development, leveraging Node.js and MongoDB to create scalable, data-driven solutions . My workflow is AI-enabled, allowing me to solve complex architectural 
challenges with speed and precision while maintaining a focus on clean, maintainable code.
</p>
<div className="hero-tags">
<span>React</span>
<span>UI / UX</span>
<span>Node.js</span>
<span>AI-Enabled Dev</span>
</div>
</div>
<div className="hero-image">
<img src="assets/Noluthando-Molui.jpeg" alt="Noluthando Molui" />
</div>
</div>
</header>
);
}