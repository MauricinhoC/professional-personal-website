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
          <article className="card">
            <h3>Bartender / Floor Manager | Casa Fuego</h3>
            <p>2025–Present</p>
            <ul>
              <li>Manage daily restaurant and bar operations in a high-volume environment, coordinating staff, customer service, and workflow efficiency during peak business hours.</li>
              <li>Utilize Toast POS to process transactions, track sales performance, manage orders, and support inventory and operational reporting.</li>
              <li>Create and maintain weekly employee schedules using Excel, balancing staffing requirements, labor costs, and employee availability.</li>
              <li>Train and supervise new team members, ensuring adherence to service standards, operational procedures, and customer satisfaction goals.</li>
            </ul>
          </article>

          <article className="card">
            <h3>Inventory Management System Developer • Independent Project</h3>
            <p>2024 • Personal Project</p>
            <ul>
              <li>Designed and developed a custom inventory management system for a tire distribution business to streamline inventory tracking and operational workflows.</li>
              <li>Implemented tools for managing stock levels, product records, and inventory updates through an intuitive user interface.</li>
              <li>Designed database structures to improve data organization, accuracy, and retrieval efficiency.</li>
              <li>Gathered business requirements directly from stakeholders and translated operational needs into software solutions.</li>
            </ul>
          </article>

          <article className="card">
            <h3>Server • Chat American Grill</h3>
            <p>2023–2024 • Scarsdale, NY</p>
            <ul>
              <li>Delivered high-quality customer service in a fast-paced dining environment while managing multiple tables simultaneously.</li>
              <li>Developed strong communication and problem-solving skills through direct customer interaction.</li>
              <li>Collaborated with kitchen and front-of-house teams to ensure efficient service and guest satisfaction.</li>
              <li>Trained and mentored new staff members on restaurant procedures and service standards.</li>
            </ul>
          </article>

          <article className="card">
            <h3>Volunteer Technology Support • Church</h3>
            <p>2020–2023 • New York, NY</p>
            <ul>
              <li>Configure and maintain audio/visual systems supporting live services and events.</li>
              <li>Manage livestreaming equipment and troubleshoot technical issues during broadcasts.</li>
              <li>Assist with website updates and digital content management.</li>
              <li>Train volunteers on equipment setup, operation, and basic technical troubleshooting.</li>
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
