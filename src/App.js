import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import WhatIDo from "./components/WhatIDo";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Education />
        <WhatIDo />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}

export default App;