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

        <p className="hero-intro">Hello, I'm</p>

        <h1 className="hero-name">
          Kaviya
        </h1>

        <h2 className="hero-role">
          AI & ML Engineer
        </h2>

        <p className="hero-desc">
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

      {/* RIGHT */}
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