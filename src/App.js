import { useEffect, useState } from "react";

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
import Footer from "./components/Footer";
import FeaturedProject from "./components/FeaturedProject";
import CursorGlow from "./components/CursorGlow";

import "./App.css";

function App() {

  /* ===== PREMIUM LOADER ===== */
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);

  }, []);

  /* ===== LOADER SCREEN ===== */
  if (loading) {

    return (

      <div className="loader">

        <div className="loader-circle"></div>

        <h2>Loading Portfolio...</h2>

      </div>

    );
  }

  /* ===== MAIN APP ===== */
  return (

    <>

      {/* PREMIUM CURSOR GLOW */}
      <CursorGlow />

      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main>

        {/* HERO */}
        <Hero />

        {/* FEATURED SHOWCASE */}
        <Reveal>
          <FeaturedProject />
        </Reveal>

        {/* ABOUT */}
        <Reveal>
          <About />
        </Reveal>

        {/* EDUCATION */}
        <Reveal>
          <Education />
        </Reveal>

        {/* WHAT I DO */}
        <Reveal>
          <WhatIDo />
        </Reveal>

        {/* EXPERIENCE */}
        <Reveal>
          <Experience />
        </Reveal>

        {/* SKILLS */}
        <Reveal>
          <Skills />
        </Reveal>

        {/* PROJECTS */}
        <Reveal>
          <Projects />
        </Reveal>

        {/* ACHIEVEMENTS */}
        <Reveal>
          <Achievements />
        </Reveal>

        {/* CONTACT */}
        <Reveal>
          <Contact />
        </Reveal>

      </main>

      {/* FOOTER */}
      <Footer />

    </>
  );
}

export default App;