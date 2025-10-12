import React from "react";

export default function Resume() {
  return (
    <main className="container">
      <section className="section">
        <h1>Resume</h1>
        <div className="card">
          <p>Download or view my resume:</p>
          <div className="cta-row">
            <a className="btn primary" href="/assets/Mauricio_Cardoso_Neto_Resume.pdf" download>Download PDF</a>
            <a className="btn" href="/assets/Mauricio_Cardoso_Neto_Resume.pdf" target="_blank" rel="noopener noreferrer">Open in new tab</a>
          </div>
          <iframe
            className="pdf-frame"
            src="/assets/Mauricio_Cardoso_Neto_Resume.pdf"
            title="Resume PDF"
            style={{ width: "100%", height: "80vh", border: "1px solid #ccc", borderRadius: "12px" }}
          />
        </div>
      </section>
    </main>
  );
}
