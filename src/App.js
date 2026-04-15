import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Achievements from "./components/Achievements";
import WhatIDo from "./components/WhatIDo";
import Reveal from "./components/Reveal";
import Footer from "./components/Footer"; // ✅ use this
import "./App.css";

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
          <WhatIDo />
        </Reveal>

        <Reveal>
          <Experience />
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

      </main>

      {/* ✅ Footer OUTSIDE main */}
      <Footer />

    </>
  );
}

export default App;