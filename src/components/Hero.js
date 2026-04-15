import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-pro">

      {/* LEFT */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>
          Hi, I'm <span>Kaviya</span>
        </h1>

        <h2>AI & ML Engineer</h2>

        <p>
          I build intelligent applications using Machine Learning,
          Deep Learning, and Generative AI.
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
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-image-large">
          <img src={require("../assets/profile.jpg")} alt="profile" />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;