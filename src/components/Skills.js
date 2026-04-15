function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {/* Languages */}
        <div className="skill-card">
          <h3>💻 Languages</h3>
          <p>Java, Python, HTML, CSS</p>
        </div>

        {/* AI / ML */}
        <div className="skill-card">
          <h3>🤖 AI / ML</h3>
          <p>
            Machine Learning, Deep Learning, CNN, Model Evaluation,
            Feature Engineering
          </p>
        </div>

        {/* Generative AI */}
        <div className="skill-card">
          <h3>🧠 Generative AI</h3>
          <p>
            RAG, Embeddings, Prompt Engineering, Vector Databases
          </p>
        </div>

        {/* Frameworks */}
        <div className="skill-card">
          <h3>⚙️ Frameworks</h3>
          <p>Spring Boot, React, Flask</p>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <h3>🗄️ Databases</h3>
          <p>MySQL, PostgreSQL, MongoDB</p>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>🛠️ Tools</h3>
          <p>GitHub, VS Code, Postman</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;