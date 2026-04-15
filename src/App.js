import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";     // ✅ add
import Achievements from "./components/Achievements"; // ✅ add
import WhatIDo from "./components/WhatIDo";           // ✅ add
import Reveal from "./components/Reveal";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Education />
        </Reveal>

        <Reveal>
          <WhatIDo />   {/* ✅ added */}
        </Reveal>

        <Reveal>
          <Experience /> {/* ✅ added */}
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Achievements /> 
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>
        
        <Reveal>
          <Contact />
        </Reveal>

      </main>
    </>
  );
}

export default App;