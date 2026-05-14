import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <section className="hero">

        {/* LEFT */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          {/* Badge */}
          <div className="hero-badge">
            Open to AI/ML Internship Opportunities
          </div>

          {/* Heading */}
          <h1>
            Building <span>Intelligent AI Systems</span>
            <br />
            for Real-World Impact
          </h1>

          {/* Animated Role */}
          <h2>
            <TypeAnimation
              sequence={[
                "AI Engineer",
                1500,
                "Machine Learning Developer",
                1500,
                "Generative AI Enthusiast",
                1500,
                "Deep Learning Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          {/* Description */}
          <p>
            Passionate about building scalable AI-powered applications using
            Machine Learning, Deep Learning, and Generative AI technologies.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">

            <a href="#projects" className="btn-primary">
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="btn-secondary"
              download
            >
              Download Resume
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="image-wrapper">
            <img
              src={profile}
              alt="Kaviya"
              className="profile-img"
            />
          </div>
        </motion.div>

      </section>

      {/* STATS */}
      <section className="stats">

        <div className="stat">
          <h3>92%</h3>
          <p>Model Accuracy</p>
        </div>

        <div className="stat">
          <h3>200+</h3>
          <p>DSA Problems</p>
        </div>

        <div className="stat">
          <h3>3+</h3>
          <p>AI Projects</p>
        </div>

        <div className="stat">
          <h3>2</h3>
          <p>Internships</p>
        </div>

      </section>
    </>
  );
}

export default Hero;