import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-subtitle">
      </p>

      <div className="contact-circles">
        {/* Email */}
        <a
          href="mailto:sahilsolanki3550@gmail.com"
          className="contact-circle email"
          title="Email"
        >
          ✉
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/sahil-solanki-326652294/"
          target="_blank"
          rel="noreferrer"
          className="contact-circle linkedin"
          title="LinkedIn"
        >
          in
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="contact-circle github"
          title="GitHub"
        >
          GH
        </a>
      </div>
    </section>
  );
}

export default Contact;
