import React from "react";

export default function Projects() {
  return (
    <main className="container">
      <section className="section">
        <h1>Projects</h1>

        <div className="grid">
          <article className="card" id="fantasy-baseball">
            <h3>Fantasy Baseball Draft Kit (Capstone Project)</h3>
            <p>
              Tech: React, TypeScript, Node.js, Express, MySQL
            </p>
            <p>
              Full-stack fantasy baseball draft platform with real-time player valuation,
              dynamic draft recommendations, customizable league configurations, and automated
              CI/CD deployment pipelines.
            </p>
            <div className="project-actions">
              <a
                className="btn"
                href="https://416-crimson-group.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>
              <a
                className="btn"
                href="https://github.com/MauricinhoC/416-Crimson-Group"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </article>

          <article className="card" id="phreddit">
            <h3>Phreddit – Reddit-like Platform</h3>
            <p>
              Tech: React, Node.js, Express, MongoDB
            </p>
            <p>
              MERN-stack Reddit-style application featuring authentication, communities,
              posts, comments, content sorting, and secure user management.
            </p>
            <div className="project-actions">
              <a
                className="btn"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>
              <a
                className="btn"
                href="https://github.com/sbu-ckane-f24-cse316-pa01org/project-part-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </article>

          <article className="card" id="twitter-replication">
            <h3>Twitter Replication</h3>
            <p>
              Tech: Svelte, MySQL
            </p>
            <p>
              Social media platform replicating core Twitter functionality including timelines,
              follows, bookmarks, profiles, and tweet interactions.
            </p>
            <div className="project-actions">
              <a
                className="btn"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                View App
              </a>
              <a
                className="btn"
                href="https://github.com/wcc-webprogramming-1/web-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </article>

          <article className="card" id="stock-system">
            <h3>Stock Trading System</h3>
            <p>
              Tech: Java, MySQL, Tomcat
            </p>
            <p>
              Java-based stock trading simulator implementing portfolio management,
              order execution, transaction tracking, and MySQL-backed persistence.
            </p>
            <div className="project-actions">
              <a
                className="btn"
                href="https://github.com/MauricinhoC/homework_4_220"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
