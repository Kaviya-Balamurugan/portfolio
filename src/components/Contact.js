function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h2>Get In Touch</h2>

      <div className="contact-box">

        {/* LEFT */}
        <div className="contact-left">
          <h3>Let’s Connect 👋</h3>
          <p>
            I’m open to opportunities, collaborations, and discussions 
            related to AI, Machine Learning, and Full Stack Development.
          </p>

          <a 
            href="mailto:kaviyabalamurugan03@gmail.com" 
            className="btn-primary"
          >
            Send Email
          </a>
        </div>

        {/* RIGHT */}
        <div className="contact-right">

          <div className="contact-card">
            📧
            <span>kaviyabalamurugan03@gmail.com</span>
          </div>

          <div className="contact-card">
            💻
            <a 
              href="https://github.com/Kaviya-Balamurugan"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>

          <div className="contact-card">
            🔗
            <a 
              href="https://linkedin.com/in/kaviyabalamurugan"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;