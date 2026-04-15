function Contact() {
  return (
    <section id="contact" className="contact-section">

      <h2>Get In Touch</h2>

      <div className="contact-container">

        <div className="contact-left">
          <h3>Let’s Connect 👋</h3>
          <p>
            I’m open to opportunities, collaborations, and discussions 
            related to AI, Machine Learning, and Full Stack Development.
          </p>
        </div>

        <div className="contact-right">

          <div className="contact-item">
            <span>📧</span>
            <p>kaviya.balamurugan03@gmail.com</p>
          </div>

          <div className="contact-item">
            <span>💻</span>
            <a 
              href="https://github.com/Kaviya-Balamurugan" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/Kaviya-Balamurugan
            </a>
          </div>

          <div className="contact-item">
            <span>🔗</span>
            <a 
              href="https://linkedin.com/in/kaviyabalamurugan" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              linkedin.com/in/kaviyabalamurugan
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;