function Projects() {
  return (
    <section id="projects">
  <h2>Projects</h2>

  <div className="projects-grid">

    {/* Project 1 */}
    <div className="project-card">
      <h3>🧠 Brain Tumor Classification</h3>
      <p>CNN model achieving <b>92% accuracy</b> using MobileNetV2.</p>
      <div className="tags">
        <span>Deep Learning</span>
        <span>Healthcare AI</span>
      </div>
      <div className="project-links">
        <a href="https://brain-tumor-app-th2lex7glc6kubgupwet3q.streamlit.app/" target="_blank">Live Demo</a>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <h3>🤖 GenAI Tutor</h3>
      <p>RAG-based assistant using embeddings and vector DB.</p>
      <div className="tags">
        <span>RAG</span>
        <span>LLM</span>
      </div>
      <div className="project-links">
        <a href="https://github.com/Kaviya-Balamurugan/genai-tutor" target="_blank">GitHub</a>
      </div>
    </div>

    {/* Project 3 */}
    <div className="project-card">
      <h3>✈️ Trip Cost Predictor</h3>
      <p>ML regression model for predicting travel cost.</p>
      <div className="tags">
        <span>Machine Learning</span>
        <span>Regression</span>
      </div>
      <div className="project-links">
        <a href="https://trip-cost-api.onrender.com/" target="_blank">Live Demo</a>
      </div>
    </div>

  </div>
</section>
  );
}

export default Projects;