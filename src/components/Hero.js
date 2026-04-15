import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero">

      {/* LEFT CONTENT */}
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Hi, I'm <span>Kaviya</span>
        </h1>

        <h2>AI & ML Engineer</h2>

        <p>
          I build intelligent applications using Machine Learning,
          Deep Learning, and Generative AI to solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>

          <a href="/resume.pdf" className="btn-secondary" download>
            Download Resume
          </a>
        </div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 60, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="image-wrapper">
          <img src={require("../assets/profile.jpg")} alt="profile" />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;