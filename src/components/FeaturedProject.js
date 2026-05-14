import brainDet from "../assets/brain_det.png";

function FeaturedProject() {
  return (
    <section className="featured-project">

      {/* LEFT */}
      <div className="featured-left">

        <div className="featured-label">
          Featured AI Project
        </div>

        <h2>
          Brain Tumor Classification System
        </h2>

        <p>
          Developed a deep learning-powered healthcare AI system using
          MobileNetV2 achieving 92% validation accuracy with Grad-CAM
          explainability and optimized ONNX deployment.
        </p>

        {/* METRICS */}
        <div className="featured-metrics">

          <div>
            <h3>92%</h3>
            <span>Validation Accuracy</span>
          </div>

          <div>
            <h3>FastAPI</h3>
            <span>Backend Deployment</span>
          </div>

          <div>
            <h3>ONNX</h3>
            <span>Optimized Runtime</span>
          </div>

        </div>

        {/* BUTTON */}
        <div className="hero-buttons">

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

      {/* RIGHT */}
      <div className="featured-right">

        <img
          src={brainDet}
          alt="Brain Tumor"
        />

      </div>

    </section>
  );
}

export default FeaturedProject;