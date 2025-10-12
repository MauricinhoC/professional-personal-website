import React from "react";

export default function Projects() {
  return (
    <main className="container">
      <section className="section">
        <h1>Projects</h1>

        <div className="grid">
          {/* Stock Trading System */}
          <article className="card" id="stock-system">
            <h3>Stock Trading System (CSE 305)</h3>
            <p>
              Full Java + MySQL stock trading simulator with multi-order support 
              (Market, Market-on-Close, Trailing Stop, Hidden Stop). Includes DAO 
              layer and transaction logic.
            </p>
            <p>
              <a
                className="btn"
                href="https://github.com/MauricinhoC/homework_4_220"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </p>
          </article>

          {/* dosiero – V6 Filesystem Tool */}
          <article className="card" id="dosiero">
            <h3>dosiero – V6 Filesystem Tool</h3>
            <p>
              Unix V6-style filesystem utility written in C. Supports archive, 
              extract, and consistency-check modes with automated testing and CI.
            </p>
            <p>
              <a
                className="btn"
                href="https://github.com/MauricinhoC/cse220_hw2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </p>
          </article>

          {/* Phreddit – Reddit-like Platform */}
          <article className="card" id="phreddit">
            <h3>Phreddit – Reddit-like Platform</h3>
            <p>
              MERN stack project replicating Reddit features: communities, posts,
              comments, and link flairs with live sorting and filtering.
            </p>
            <p>
              <a
                className="btn"
                href="https://github.com/sbu-ckane-f24-cse316-pa01org/project-part-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </p>
          </article>

          {/* Fake Twitter Replication */}
          <article className="card" id="twitter-clone">
            <h3>Twitter Replication</h3>
            <p>
              Full-stack Twitter clone with authentication, posts, likes, and 
              live feed updates. Built with React, Node.js, Express, and MongoDB.
            </p>
            <p>
              <a
                className="btn"
                href="https://github.com/wcc-webprogramming-1/web-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
