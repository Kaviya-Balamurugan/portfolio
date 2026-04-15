import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import WhatIDo from "./components/WhatIDo";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </div>
  );
}

export default App;