import { useState } from "react";

import brainDet from "../assets/brain_det.png";
import brainLogin from "../assets/brain_login.png";
import genQuiz from "../assets/gen-quiz.png";
import genAiTut from "../assets/genai-tut.png";
import genImg from "../assets/gen.png";
import tripCost from "../assets/trip_cost.png";
import tripImg from "../assets/trip.png";
import tumAnly from "../assets/tum_analy.png";
import tumDet from "../assets/Tum_det.png";

function Projects() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="projects">

      <h2>Projects</h2>

      <div className="projects-grid">

        {/* ===== PROJECT 1 ===== */}
        <div className="project-card">

          <img
            src={brainDet}
            alt="Brain Tumor Classification"
            className="project-img"
          />

          <div className="featured-tag">
  Featured Project
</div>

          <h3>🧠 Brain Tumor Classification</h3>

          <p>
            Developed a deep learning-based brain tumor classification system
            using MobileNetV2 achieving <b>92% validation accuracy</b>.
            Integrated Grad-CAM explainability and optimized deployment
            using ONNX Runtime with FastAPI and Streamlit.
          </p>

          {/* Gallery */}
          <div className="project-gallery">

            <img
              src={brainLogin}
              alt="Brain Login"
              onClick={() => setSelectedImage(brainLogin)}
            />

            <img
              src={tumAnly}
              alt="Tumor Analysis"
              onClick={() => setSelectedImage(tumAnly)}
            />

            <img
              src={tumDet}
              alt="Tumor Detection"
              onClick={() => setSelectedImage(tumDet)}
            />

          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <span>TensorFlow</span>
            <span>CNN</span>
            <span>MobileNetV2</span>
            <span>FastAPI</span>
            <span>ONNX</span>
          </div>

          {/* Links */}
          <div className="project-links">

            <a
              href="https://brain-tumor-app-th2lex7glc6kubgupwet3q.streamlit.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo
            </a>

          </div>

        </div>

        {/* ===== PROJECT 2 ===== */}
        <div className="project-card">

          <img
            src={genAiTut}
            alt="GenAI Tutor"
            className="project-img"
          />

          <h3>🤖 GenAI Tutor</h3>

          <p>
            Built a Retrieval-Augmented Generation (RAG) educational assistant
            integrating embeddings, semantic search, vector databases,
            and Spring Boot backend with real-time contextual responses.
          </p>

          {/* Gallery */}
          <div className="project-gallery">

            <img
              src={genQuiz}
              alt="Quiz"
              onClick={() => setSelectedImage(genQuiz)}
            />

            <img
              src={genImg}
              alt="GenAI"
              onClick={() => setSelectedImage(genImg)}
            />

          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <span>RAG</span>
            <span>Embeddings</span>
            <span>Spring Boot</span>
            <span>PostgreSQL</span>
            <span>pgvector</span>
          </div>

          {/* Links */}
          <div className="project-links">

            <a
              href="https://github.com/Kaviya-Balamurugan/genai-tutor"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              GitHub
            </a>

          </div>

        </div>

        {/* ===== PROJECT 3 ===== */}
        <div className="project-card">

          <img
            src={tripCost}
            alt="Trip Cost Predictor"
            className="project-img"
          />

          <h3>✈️ Trip Cost Predictor</h3>

          <p>
            Developed a machine learning regression system using Random Forest
            to predict travel expenses using real-world datasets and optimized
            feature engineering techniques with Flask API deployment.
          </p>

          {/* Gallery */}
          <div className="project-gallery">

            <img
              src={tripImg}
              alt="Trip Predictor"
              onClick={() => setSelectedImage(tripImg)}
            />

          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <span>Machine Learning</span>
            <span>Random Forest</span>
            <span>Flask</span>
            <span>Regression</span>
          </div>

          {/* Links */}
          <div className="project-links">

            <a
              href="https://trip-cost-api.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Live Demo
            </a>

          </div>

        </div>

      </div>

      {/* ===== IMAGE MODAL ===== */}
      {selectedImage && (
        <div
          className="image-modal"
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Preview"
            className="modal-image"
          />

        </div>
      )}

    </section>
  );
}

export default Projects;