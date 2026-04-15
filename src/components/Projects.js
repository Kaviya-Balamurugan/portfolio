function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* ✅ Project 1 */}
      <div className="project-card">
        <h3>🧠 Brain Tumor Classification</h3>
        <p>
          Developed a CNN-based deep learning model using MobileNetV2 achieving
          92% accuracy for MRI image classification. End-to-end deployed system
          with separate frontend (Streamlit) and backend (FastAPI on Render).
        </p>

        <p><b>Tech:</b> CNN, MobileNetV2, ONNX, FastAPI, Streamlit</p>

        <div className="project-links">
          <a href="https://brain-tumor-app-th2lex7glc6kubgupwet3q.streamlit.app/">Live Demo</a>
        </div>
      </div>

      {/* ✅ Project 2 */}
      <div className="project-card">
        <h3>🤖 GenAI Educational Assistant</h3>
        <p>
          Built a Retrieval-Augmented Generation (RAG) system using embeddings,
          vector database, and Spring Boot backend with real-time responses.
        </p>

        <p><b>Tech:</b> RAG, Embeddings, Spring Boot, PostgreSQL</p>

        <div className="project-links">
          <a href="https://github.com/Kaviya-Balamurugan/genai-tutor">GitHub</a>
        </div>
      </div>

      {/* ✅ Project 3 */}
      <div className="project-card">
        <h3>✈️ Trip Cost Predictor</h3>
        <p>
          Developed a machine learning regression model using Random Forest and
          Gradient Boosting to predict travel costs.
        </p>

        <p><b>Tech:</b> Machine Learning, Random Forest, Flask</p>

        <div className="project-links">
          <a href="https://trip-cost-api.onrender.com/">Live Demo</a>
        </div>
      </div>

    </section>
  );
}

export default Projects;