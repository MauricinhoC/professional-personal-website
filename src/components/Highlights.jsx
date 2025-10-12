import React from "react";

export default function Highlights() {
  return (
    <section className="section" aria-labelledby="highlights-title" id="projects">
      <h2 id="highlights-title">Highlights</h2>
      <div className="grid">
        <article className="card" aria-label="Recent Project">
          <h3>Stock Trading System (CSE 305)</h3>
          <p>Designed and implemented multi-table MySQL schema and DAO layer; built order logic (Market, MOC, Trailing/Hidden Stop). Java + Tomcat + MySQL.</p>
          <p style={{ marginTop: 10 }}>
            <a href="#projects">Read case study →</a>
          </p>
        </article>

        <article className="card" aria-label="Systems Project">
          <h3>V6 Filesystem Tool – dosiero</h3>
          <p>Unix-style archive and consistency checker in C; implemented multiple modes with robust tests and CI. Focus on performance and reliability.</p>
          <p style={{ marginTop: 10 }}>
            <a href="#projects">Explore project →</a>
          </p>
        </article>

        <article className="card" aria-label="Web App">
          <h3>Phreddit – Reddit-like Platform</h3>
          <p>MERN app with communities, posts, comments, and search. Role-based features and clean component architecture.</p>
          <p style={{ marginTop: 10 }}>
            <a href="#projects">See screenshots →</a>
          </p>
        </article>

        <article className="card" aria-label="Experience" id="experience">
          <h3>Experience</h3>
          <p>Student developer; bartender with strong customer service background; internship candidate interested in high-performance systems.</p>
          <p style={{ marginTop: 10 }}>
            <a href="#experience">View experience →</a>
          </p>
        </article>
      </div>
    </section>
  );
}
