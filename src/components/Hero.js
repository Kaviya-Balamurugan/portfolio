import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="hero-new">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >

        {/* Profile */}
        <div className="hero-image">
          <img src={require("../assets/profile.jpg")} alt="profile" />
        </div>

        {/* Name */}
        <h1>
          Hi, I'm <span>Kaviya</span>
        </h1>

        {/* Role */}
        <h2>AI & ML Engineer</h2>

        {/* Description */}
        <p>
          I build intelligent applications using Machine Learning, Deep Learning,
          and Generative AI to solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/resume.pdf" className="btn-secondary" download>
            Download Resume
          </a>
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;