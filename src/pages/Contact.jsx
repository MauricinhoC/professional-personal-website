import ElsewhereChase from "../components/ElsewhereChase";
import FakeContactForm from "../components/FakeContactForm";

export default function Contact() {
  return (
    <main className="container">
      <section className="section" aria-labelledby="contact-title">
        <h1 id="contact-title">Contact</h1>

        <div className="grid">
          {/* LEFT: Fake Contact form */}
          <div className="card">
            <FakeContactForm />
          </div>

          <div className="card">
            <ElsewhereChase />
          </div>
        </div>
      </section>
    </main>
  );
}
