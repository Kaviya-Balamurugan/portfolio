import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-pro">

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
          I design and build intelligent applications using Machine Learning,
          Deep Learning, and Generative AI to solve real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="circle">
          <img src={require("../assets/profile.jpg")} alt="profile" />
        </div>
      </motion.div>

    </section>
  );
}

export default Hero;