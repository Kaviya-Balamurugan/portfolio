import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import WhatIDo from "./components/WhatIDo";
import Education from "./components/Education";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <WhatIDo />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}

export default App;