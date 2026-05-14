import { useEffect, useState } from "react";

function Navbar() {

  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {

    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }

        });

      },

      {
        threshold: 0.4,
      }

    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();

  }, []);

  return (

    <nav className="navbar-pro">

      <div className="nav-links">

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
        >
          About
        </a>

        <a
          href="#education"
          className={activeSection === "education" ? "active" : ""}
        >
          Education
        </a>

        <a
          href="#whatido"
          className={activeSection === "whatido" ? "active" : ""}
        >
          What I Do
        </a>

        <a
          href="#experience"
          className={activeSection === "experience" ? "active" : ""}
        >
          Experience
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
        >
          Skills
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
        >
          Projects
        </a>

        <a
          href="#achievements"
          className={activeSection === "achievements" ? "active" : ""}
        >
          Achievements
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
        >
          Contact
        </a>

      </div>

    </nav>
  );
}

export default Navbar;