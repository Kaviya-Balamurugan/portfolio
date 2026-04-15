function Hero() {
  return (
    <section className="hero">

      {/* LEFT */}
      <div className="hero-text">
        <h1>
          Hi, I'm <span>Kaviya</span>
        </h1>

        <h2>AI & ML Engineer</h2>

        <p>
          I build intelligent applications using Machine Learning,
          Deep Learning, and Generative AI.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="/resume.pdf" className="btn-secondary" download>
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-image">
        <img src={require("../assets/profile.jpg")} alt="profile" />
      </div>

    </section>
  );
}

export default Hero;