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

        {/* 🔥 Badge */}
        <span className="hero-badge">AI / ML Engineer</span>

        <h1>
          Building <span>Intelligent Systems</span><br />
          with AI & Machine Learning
        </h1>

        <p>
          I develop scalable AI solutions, combining Machine Learning,
          Deep Learning, and Generative AI to solve real-world problems.
        </p>

        {/* Buttons */}
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>

          <a href="/resume.pdf" className="btn-secondary" download>
            Download Resume
          </a>
        </div>

        {/* 🔥 Stats */}
        <div className="hero-stats">
          <div>
            <h3>3+</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>2</h3>
            <p>Internships</p>
          </div>
          <div>
            <h3>92%</h3>
            <p>Model Accuracy</p>
          </div>
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