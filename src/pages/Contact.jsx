import ElsewhereChase from "../components/ElsewhereChase";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <main className="container">
      <section className="section contact-section" aria-labelledby="contact-title">
        <h1 id="contact-title">Contact</h1>

        <div className="grid contact-grid">
          <article className="card contact-panel">
            <div className="contact-hero">
              <p className="eyebrow">Open to opportunity</p>
              <h2>Seeking full-time, part-time, or internship roles.</h2>
              <p>
                I am actively looking for a professional opportunity in software engineering,
                with a strong interest in full-stack web development, systems programming, and
                reliable backend services. If your team needs an engineer who values clean code,
                performance, and collaboration, let’s connect.
              </p>
            </div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="info-label">Email</span>
                <a className="info-value" href="mailto:mauricio.cardosoneto@stonybrook.edu">
                  mauricio_cardosinho@hotmail.com
                </a>
              </div>

              <div className="contact-info-item">
                <span className="info-label">Location</span>
                <span className="info-value">New York, NY</span>
              </div>

              <div className="contact-info-item">
                <span className="info-label">Availability</span>
                <span className="info-value">Any time!</span>
              </div>
            </div>
          </article>

          <article className="card contact-panel">
            <ContactForm />
          </article>
        </div>

        <article className="card contact-panel contact-game">
          <ElsewhereChase />
        </article>
      </section>
    </main>
  );
}
