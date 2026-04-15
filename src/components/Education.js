function Education() {
  return (
    <section id="education">
      <h2>Education</h2>

      <div className="edu-container">

        {/* College */}
        <div className="edu-card">
          <div className="edu-left">
            <span className="edu-year">2023 – 2027</span>
          </div>

          <div className="edu-right">
            <h3>B.E Computer Science (AI & ML)</h3>
            <p className="edu-place">
              KPR Institute of Engineering and Technology, Coimbatore
            </p>

            <p><b>CGPA:</b> 8.27</p>

          </div>
        </div>

        {/* School */}
        <div className="edu-card">
          <div className="edu-left">
            <span className="edu-year">2023</span>
          </div>

          <div className="edu-right">
            <h3>Higher Secondary Education (HSE)</h3>
            <p className="edu-place">
              Thaai Matric Higher Secondary School
            </p>

            <p><b>Score:</b> 93.5%</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Education;