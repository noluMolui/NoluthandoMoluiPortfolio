import React from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


export default function App() {
return (
<div className="app">
<Hero />
<Skills />
<Projects />
<Experience />
<Contact />
<Footer />
</div>
);
}