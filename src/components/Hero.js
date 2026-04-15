import { motion } from "framer-motion";
import profile from "../assets/profile.jpg"; // ✅ FIXED
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <>
      <section className="hero">

        {/* LEFT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>
            Hi, I'm <span>Kaviya</span>
          </h1>

          <h2>
  <TypeAnimation
    sequence={[
      "AI Engineer",
      1500,
      "Building Intelligent Systems",
      1500,
      "Machine Learning & Deep Learning",
      1500,
      "Generative AI Developer",
      1500
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h2>

          <p>
            I design and develop intelligent applications using Machine Learning,
            Deep Learning, and Generative AI to solve real-world problems.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a href="/resume.pdf" className="btn-secondary" download>
              Download Resume
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={profile} alt="Kaviya" className="profile-img" />
        </motion.div>

      </section>

      {/* ✅ STATS MOVED OUTSIDE HERO */}
      <section className="stats">

        <div className="stat">
          <h3>92%</h3>
          <p>Model Accuracy</p>
        </div>

        <div className="stat">
          <h3>200+</h3>
          <p>Problems Solved</p>
        </div>

        <div className="stat">
          <h3>3+</h3>
          <p>Major Projects</p>
        </div>

      </section>
    </>
  );
}

export default Hero;