import { motion } from "framer-motion";

function Hero() {
  return (
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

        <h2>AI & ML Engineer</h2>

        <p>
          Building intelligent systems using Machine Learning,
  Deep Learning, and Generative AI to solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
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
        <img src={require("../assets/profile.jpg")} alt="Kaviya" className="profile-img"/>
      </motion.div>

    </section>
  );
}

export default Hero;