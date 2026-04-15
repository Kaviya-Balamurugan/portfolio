function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project-card">
        <h3>🧠 Brain Tumor Classification</h3>

        <p>
          Developed a CNN-based deep learning model using MobileNetV2 achieving
          <b> 92% validation accuracy</b> for MRI image classification.
          Built a complete pipeline including preprocessing, class balancing,
          and deployed using ONNX with FastAPI backend and Streamlit frontend.
        </p>

        <p><b>Tech:</b> CNN, MobileNetV2, ONNX, FastAPI, Streamlit</p>

        <p><b>Key Features:</b></p>
        <ul>
          <li>✔ Transfer learning using MobileNetV2</li>
          <li>✔ Grad-CAM based explainability</li>
          <li>✔ Optimized deployment using ONNX Runtime</li>
        </ul>

        <div className="tags">
          <span>Deep Learning</span>
          <span>Healthcare AI</span>
        </div>

        <div className="project-links">
          <a
            href="https://brain-tumor-app-th2lex7glc6kubgupwet3q.streamlit.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h3>🤖 GenAI Educational Assistant</h3>

        <p>
          Built a Retrieval-Augmented Generation (RAG) system integrating
          embeddings, vector database (pgvector), and Spring Boot backend
          with real-time streaming responses.
        </p>

        <p><b>Tech:</b> RAG, Embeddings, Spring Boot, PostgreSQL</p>

        <p><b>Key Features:</b></p>
        <ul>
          <li>✔ Semantic search using embeddings</li>
          <li>✔ Chunking strategy </li>
          <li>✔ Ensured accurate and meaningful responses</li>
          
        </ul>

        <div className="tags">
          <span>Generative AI</span>
          <span>RAG</span>
        </div>

        <div className="project-links">
          <a
            href="https://github.com/Kaviya-Balamurugan/genai-tutor"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <h3>✈️ Trip Cost Predictor</h3>

        <p>
          Developed a machine learning regression system using Random Forest
          and Gradient Boosting to predict travel costs based on multiple
          real-world features including cost-of-living data.
        </p>

        <p><b>Tech:</b> Machine Learning, Random Forest, Flask</p>

        <p><b>Key Features:</b></p>
        <ul>
          <li>✔ Feature engineering using real datasets</li>
          <li>✔ Model comparison and optimization</li>
          <li>✔ REST API deployment using Flask</li>
        </ul>

        <div className="tags">
          <span>Machine Learning</span>
          <span>Regression</span>
        </div>

        <div className="project-links">
          <a
            href="https://trip-cost-api.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;