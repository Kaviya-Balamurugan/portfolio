import { motion } from "framer-motion";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* 🧠 Brain Tumor */}
      <motion.div
  className="project-card"
  whileHover={{ scale: 1.05 }}
>
  <h3>🧠 Brain Tumor Classification</h3>

  <p>
    Developed a CNN-based deep learning model using MobileNetV2
    achieving 92% accuracy for MRI image classification.
    End-to-end deployed system with separate frontend (Streamlit) and backend (FastAPI on Render).

  </p>

  <p><b>Tech:</b> CNN, MobileNetV2, ONNX, FastAPI, Streamlit</p>

  <span className="badge">Deep Learning</span>

  <div className="project-links">
    <a
      href="https://brain-tumor-app-th2lex7glc6kubgupwet3q.streamlit.app/"
      target="_blank"
      rel="noreferrer"
    >
      Live Demo
    </a>

    <a
      href="https://brain-tumor-app-1-hmhx.onrender.com"
      target="_blank"
      rel="noreferrer"
    >
      Backend API
    </a>

  </div>
</motion.div>

      {/* 🤖 GenAI */}
      <motion.div
        className="project-card"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3>🤖 GenAI Educational Assistant</h3>
        <p>
          Built a Retrieval-Augmented Generation (RAG) system using embeddings,
          vector database, and Spring Boot backend with real-time responses.
        </p>
        <span className="badge">Generative AI</span>
        <br />
        <a href="https://github.com/Kaviya-Balamurugan/genai-tutor">
          GitHub
        </a>
      </motion.div>

      {/* ✈️ Trip Cost */}
      <motion.div
        className="project-card"
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h3>✈️ Trip Cost Predictor</h3>
        <p>
          Developed a machine learning regression model using Random Forest
          and Gradient Boosting to predict travel costs based on multiple features.
        </p>
        <span className="badge">Machine Learning</span>
        <br />
        <a href="https://trip-cost-api.onrender.com">
          Live Demo
        </a>
      </motion.div>

    </section>
  );
}

export default Projects;