import React, { useState } from "react";

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Replace with your real photos
  const photos = [
    { src: "/assets/mauricio-action-0.jpg", alt: "Headshot of Mauricio" },
    { src: "/assets/mauricio-action-1.jpg", alt: "Mauricio working on a project" },
    { src: "/assets/mauricio-action-2.jpg", alt: "Mauricio presenting a demo" },
    { src: "/assets/mauricio-action-3.jpg", alt: "Mauricio presenting a demo" },
  ];

  const nextPhoto = () => setCurrent((prev) => (prev + 1) % photos.length);
  const prevPhoto = () => setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <main id="main" className="container">
      {/* VISION */}
      <section className="section" aria-labelledby="vision-title">
        <h2 id="vision-title">Vision</h2>
        <div className="about-bio" style={{ gridColumn: "span 12" }}>
          <p style={{ margin: 0, color: "var(--muted)" }}>
            Over the next 5–10 years, I hope to grow into a software engineer who can take ownership of complex systems and contribute to products at scale. I'm particularly interested in backend development, distributed systems, and the infrastructure that powers modern applications.

            As I gain experience, I want to deepen my understanding of system design, performance optimization, and scalable architectures while working on products that solve real problems for users. My goal is to continuously develop both my technical and leadership skills so I can contribute to building reliable, efficient, and impactful software.
          </p>
        </div>
      </section>

      {/* ABOUT ME */}
      <section className="section" aria-labelledby="about-title">
        <h2 id="about-title">About Me</h2>
        <div className="grid">
          {/* Bio */}
          <article className="about-bio" style={{ gridColumn: "span 6" }}>
            <h3 style={{ marginTop: 0 }}>Hi, I’m Mauricio</h3>
            <div style={{ color: "var(--muted)" }}>
              <p>I was born and raised in Brazil, where I learned early the value of hard work and perseverance. In 2018, I moved to the United States without knowing any English. Learning the language was one of my biggest challenges, but it taught me how to adapt quickly and keep moving forward no matter how steep the climb.</p>

              <p>Growing up, I was raised by a single mother, and I started working young to help her pay the bills throughout high school. My first job was as a dishwasher, and from there, I worked my way up to server and eventually became a full-time bartender—a role I still hold today to pay for college entirely out of pocket. That journey shaped my work ethic and gave me real-world problem-solving experience under pressure.</p>

              <p>Bartending, surprisingly, has a lot in common with engineering. On a busy night, I might be serving twenty people at once—taking new orders, checking in with customers, cleaning, restocking, and making sure every detail runs smoothly. It’s all about organizing priorities, managing complexity, and solving problems efficiently, just like in software development. By the end of the night, a great review feels like shipping a great piece of software—both require precision, patience, and care.</p>

              <p>My passion for Computer Science began when I took my first programming class and built a small compound interest calculator in Python. Even though it only printed output in the terminal, seeing something I built actually work was incredible. That feeling of turning logic into something functional hooked me.</p>

              <p>I’m proud to say I’ve built a stable foundation for myself — I will be graduating with no debt, owning a fully paid-off car, which means nothing holds me back from focusing entirely on my growth and the success of the company I work for. I’m fully committed to putting in the time, energy, and dedication it takes to deliver meaningful results and keep improving every day.</p>
            </div>
          </article>

          {/* Photo carousel */}
        <aside
        className="card"
        style={{
            gridColumn: "span 6",
            position: "relative",
            padding: 0,
            overflow: "hidden",
            height: "720px", // 👈 fixed height based on first image size
        }}
        >
        <img
            src={photos[current].src}
            alt={photos[current].alt}
            style={{
            width: "100%",
            height: "100%",
            objectFit: "cover", // fills box uniformly
            borderRadius: "12px",
            }}
        />

        {/* Left arrow */}
        <button
            onClick={prevPhoto}
            style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            cursor: "pointer",
            }}
        >
            ‹
        </button>

        {/* Right arrow */}
        <button
            onClick={nextPhoto}
            style={{
            position: "absolute",
            top: "50%",
            right: "10px",
            transform: "translateY(-50%)",
            background: "rgba(0,0,0,0.4)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            cursor: "pointer",
            }}
        >
            ›
        </button>
        </aside>

        </div>
      </section>

      {/* EDUCATION */}
      <section className="section" aria-labelledby="education-title">
        <h2 id="education-title">Education</h2>

        <div className="grid">
            <article className="card education" style={{ gridColumn: "span 12" }}>
            <h3 className="edu-title">Stony Brook University</h3>
            <p className="edu-subtitle">B.S. Computer Science</p>
            <p className="edu-period">Aug 2022 – May 2026</p>

            <hr className="edu-divider" />

            <div className="edu-stats">
                <div className="edu-stat">
                <span className="icon">📍</span>
                <span className="label">Location</span>
                <span className="value">Stony Brook, NY</span>
                </div>
                <div className="edu-stat">
                <span className="icon">🏆</span>
                <span className="label">Notable Achievement</span>
                <span className="value">Graduated while working full-time</span>
                </div>
                <div className="edu-stat">
                <span className="icon">💻</span>
                <span className="label">Technical Focus</span>
                <span className="value">Backend Development • System Design • Databases</span>
                </div>
                <div className="edu-stat">
                <span className="icon">🌎</span>
                <span className="label">Languages</span>
                <span className="value">English • Portuguese • Spanish</span>
                </div>
            </div>

            <div className="edu-stat">Key Coursework</div>

            <div className="edu-pills">
                <div className="edu-pill">Operating Systems</div>
                <div className="edu-pill">Analysis of Algorithms</div>
                <div className="edu-pill">Computer Networks</div>
                <div className="edu-pill">Database Systems</div>
                <div className="edu-pill">Software Engineering</div>
                <div className="edu-pill">Computer Vision</div>
            </div>
            </article>
        </div>
        </section>

    </main>
  );
}
