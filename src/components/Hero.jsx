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
<h2>Creative Frontend Developer & Designer</h2>
<p>
I build expressive, human-centered web experiences using React and JavaScript.
Curious about backend systems and AI-powered interfaces.
</p>
<div className="hero-tags">
<span>React</span>
<span>UI / UX</span>
<span>Learning Backend</span>
<span>AI Curious</span>
</div>
</div>
<div className="hero-image">
<img src="assets/Noluthando Molui.jpeg" alt="Noluthando Molui" />
</div>
</div>
</header>
);
}