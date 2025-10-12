import React from "react";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="intro-title">
      <div className="hero-card">
        {/* Replace with your real headshot */}
        <img
          className="avatar"
          src="/assets/mauricio-headshot.jpg"
          alt="Headshot of Mauricio Cardoso Neto"
        />
        <div>
          <h1 id="intro-title">Hi, I'm Mauricio — CS @ Stony Brook</h1>
          <p className="lead">
            Computer Science student focused on full-stack web apps, systems programming in C, and data-driven products. I enjoy building reliable backends, clean UIs, and performant tools.
          </p>

          <div className="chips" aria-label="Key skills">
            <span className="chip">Java • Spring</span>
            <span className="chip">C / Systems</span>
            <span className="chip">MySQL • SQL</span>
            <span className="chip">React • TypeScript</span>
            <span className="chip">MongoDB • Express</span>
          </div>

          <div className="cta-row">
            <a className="btn primary" href="#contact">Get in touch</a>
            <a className="btn" href="/assets/Mauricio_Cardoso_Neto_Resume.pdf" target="_blank" rel="noopener">View Resume</a>
            <a className="btn" href="https://www.linkedin.com/in/your-custom-url" target="_blank" rel="noopener">LinkedIn</a>
            <a className="btn" href="https://github.com/your-github" target="_blank" rel="noopener">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
}
