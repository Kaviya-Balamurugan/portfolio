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
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <img
  src={brainDet}
  alt="Brain Tumor Classification"
  className="project-img"
/>
          <h3>🧠 Brain Tumor Classification</h3>
          <p>CNN model achieving <b>92% accuracy</b> using MobileNetV2.</p>

          <div className="project-gallery">

  <img src={brainLogin} alt="Brain Login" />
  <img src={tumAnly} alt="Tumor Analysis" />
  <img src={tumDet} alt="Tumor Detection" />

</div>

          {/* ✅ TECH STACK */}
          <div className="tech-stack">
            <span>TensorFlow</span>
            <span>CNN</span>
            <span>MobileNetV2</span>
          </div>

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

        {/* Project 2 */}
        <div className="project-card">
          <img
  src={genAiTut}
  alt="GenAI Tutor"
  className="project-img"
/>
          <h3>🤖 GenAI Tutor</h3>
          <p>RAG-based assistant using embeddings and vector DB.</p>

          <div className="project-gallery">

  <img src={genQuiz} alt="Quiz" />
  <img src={genImg} alt="GenAI" />

</div>

          {/* ✅ TECH STACK */}
          <div className="tech-stack">
            <span>RAG</span>
            <span>Embeddings</span>
            <span>Spring Boot</span>
          </div>

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

        {/* Project 3 */}
        <div className="project-card">
          <img
  src={tripCost}
  alt="Trip Cost Predictor"
  className="project-img"
/>
          <h3>✈️ Trip Cost Predictor</h3>
          <p>ML regression model for predicting travel cost.</p>

          <div className="project-gallery">

  <img src={tripImg} alt="Trip Predictor" />

</div>

          {/* ✅ TECH STACK */}
          <div className="tech-stack">
  <span>Machine Learning</span>
  <span>Random Forest</span>
  <span>Flask</span>
  <span>Regression</span>
</div>

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
    </section>
  );
}

export default Projects;