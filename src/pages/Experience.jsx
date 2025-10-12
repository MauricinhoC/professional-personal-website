import React, { useState, useMemo } from "react";

export default function Experience() {
  const reviewImgs = useMemo(
    () => [
      { src: "/assets/reviews/rev1.jpg", alt: "Review screenshot 1" },
      { src: "/assets/reviews/rev2.jpg", alt: "Review screenshot 2" },
      { src: "/assets/reviews/rev3.jpg", alt: "Review screenshot 3" },
      { src: "/assets/reviews/rev4.jpg", alt: "Review screenshot 4" },
      { src: "/assets/reviews/rev5.jpg", alt: "Review screenshot 5" },
      { src: "/assets/reviews/rev6.jpg", alt: "Review screenshot 6" },
    ],
    []
  );

  const [idx, setIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const next = () => setIdx((i) => (i + 1) % reviewImgs.length);
  const prev = () => setIdx((i) => (i - 1 + reviewImgs.length) % reviewImgs.length);

  return (
    <main className="container">
      <section className="section">
        <h1>Experience</h1>

        <div className="grid">
          {/* CS Projects */}
          <article className="card">
            <h3>CS Projects • Stony Brook University</h3>
            <p>2023–Present • Stony Brook, NY</p>
            <ul>
              <li>Full-stack projects across data modeling, API design, and UI engineering.</li>
              <li>Stock trading simulation (Java/MySQL/Tomcat) with complex order logic.</li>
              <li>Unix V6 filesystem tool (C) emphasizing performance and correctness.</li>
              <li>MERN app with role-based access and modular React components.</li>
            </ul>
          </article>

          {/* Volunteer Tech Support */}
          <article className="card">
            <h3>Volunteer Tech Support • Church</h3>
            <p>2023–Present • New York, NY</p>
            <ul>
              <li>Set up AV systems and managed live streaming during services.</li>
              <li>Maintained basic website content and helped digitize internal workflows.</li>
              <li>Trained volunteers on basic troubleshooting and device setup.</li>
            </ul>
          </article>

          {/* Server at Patsy's */}
          <article className="card">
            <h3>Server • Patsy’s Pizzeria</h3>
            <p>2023–2024 • New York, NY</p>
            <ul>
              <li>High-volume service with emphasis on communication and multitasking.</li>
              <li>Mentored new hires on service etiquette and teamwork.</li>
              <li>Maintained quality and pace during busy weekend rushes.</li>
            </ul>
          </article>

          {/* Bartender at Casa Fuego */}
          <article className="card">
            <h3>Bartender • Casa Fuego (Ridge Hill)</h3>
            <p>2024–Present • Yonkers, NY</p>
            <ul>
              <li>Created craft cocktails and engaged guests in a high-energy environment.</li>
              <li>Oversaw prep, inventory, and bar maintenance to ensure smooth shifts.</li>
              <li>Consistently earned strong feedback and returning regulars.</li>
            </ul>
          </article>
        </div>

        {/* Reviews Carousel */}
        <div className="card" style={{ marginTop: 28 }}>
          <h2 style={{ textAlign: "center", marginBottom: 16 }}>Reviews</h2>

          <div className="reviews-carousel">
            <div
              className="reviews-viewport"
              onClick={() => setModalOpen(true)}
              title="Click to view full image"
              style={{ cursor: "zoom-in" }}
            >
              <img
                key={reviewImgs[idx].src}
                src={reviewImgs[idx].src}
                alt={reviewImgs[idx].alt}
                className="review-image"
                loading="lazy"
              />
            </div>

            <div className="review-controls">
              <button className="btn" onClick={prev}>← Previous</button>
              <span className="review-counter">
                {idx + 1} / {reviewImgs.length}
              </span>
              <button className="btn" onClick={next}>Next →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Modal */}
      {modalOpen && (
        <div className="review-modal" onClick={() => setModalOpen(false)}>
          <img
            src={reviewImgs[idx].src}
            alt={reviewImgs[idx].alt}
            className="review-modal-img"
          />
        </div>
      )}
    </main>
  );
}
