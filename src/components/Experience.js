function Experience() {
  return (
    <section id="experience">

      <h2>Experience</h2>

      <div className="timeline">

        {/* ITEM 1 */}
        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span className="timeline-date">
              Jun 2025 – Jul 2025
            </span>

            <h3>Machine Learning Intern</h3>

            <h4>Lennox India Technology Centre</h4>

            <p>
              Worked on large-scale industrial datasets, feature engineering,
              predictive modeling, and optimization techniques using machine
              learning algorithms including Random Forest and Gradient Boosting.
            </p>

          </div>

        </div>

        {/* ITEM 2 */}
        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <span className="timeline-date">
              2024
            </span>

            <h3>Machine Learning Intern</h3>

            <h4>CodSoft</h4>

            <p>
              Built multiple machine learning projects involving classification,
              regression, preprocessing, and model evaluation workflows.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;