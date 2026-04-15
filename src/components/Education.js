function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="edu-container">

        <div className="edu-card-new">
          <div className="edu-line"></div>

          <div className="edu-content">
            <h3>B.E Computer Science (AI & ML)</h3>
            <p>KPR Institute of Engineering and Technology, Coimbatore</p>

            <div className="edu-meta">
              <span>2023 – 2027</span>
              <span>CGPA: 8.27</span>
            </div>
          </div>
        </div>

        <div className="edu-card-new">
          <div className="edu-line"></div>

          <div className="edu-content">
            <h3>Higher Secondary Education (HSE)</h3>
            <p>Thaai Matric Higher Secondary School</p>

            <div className="edu-meta">
              <span>2023</span>
              <span>Score: 93.5%</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;