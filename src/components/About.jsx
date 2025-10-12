import React from "react";

export default function About() {
  return (
    <section className="section" aria-labelledby="about-title">
      <h2 id="about-title">About</h2>
      <div className="card" style={{ gridColumn: "span 12" }}>
        <p style={{ margin: 0 }}>
          I’m a junior CS student at Stony Brook University (expected May 2026).
          I like working at the intersection of systems and product—building features that are reliable, testable, and pleasant to use.
          Recently I led database and backend work for a stock trading simulation and built a Unix V6 filesystem utility.
          Outside of school, I enjoy Brazilian Jiu-Jitsu and bartending.
        </p>
      </div>
    </section>
  );
}
