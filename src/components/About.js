import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2>About Me</h2>

      <div className="timeline">
        <div className="timeline-item">
          <h3>🎓 Student</h3>
          <p>AI & ML specialization</p>
        </div>

        <div className="timeline-item">
          <h3>🧠 ML Developer</h3>
          <p>Built Brain Tumor Detection system</p>
        </div>

        <div className="timeline-item">
          <h3>🤖 GenAI Builder</h3>
          <p>Developed RAG-based assistant</p>
        </div>
      </div>
    </motion.section>
  );
}

export default About;