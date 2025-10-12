import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import PitchModal from "./PitchModal";

const FADE_MS = 300; // keep in sync with your CSS overlay animation

export default function Navbar({ menuOpen, onMenuToggle }) {
  const [pitchOpen, setPitchOpen] = React.useState(false);
  const linkClass = ({ isActive }) => (isActive ? "active" : undefined);
  const navigate = useNavigate();
  const gatingRef = useRef(false);

  // helper: run a page fade, then perform some state change (open/close/navigate)
  const withPageFade = (fn) => {
    if (gatingRef.current) return;
    gatingRef.current = true;

    const root = document.documentElement;
    root.classList.add("theme-transition"); // smoothen color/border changes
    root.classList.add("theme-fade");       // overlay cross-fade

    // do the action immediately (opening/closing the modal, navigation, etc.)
    fn?.();

    // remove helper classes after the fade ends
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
      root.classList.remove("theme-fade");
      gatingRef.current = false;
    }, FADE_MS);
  };

  const openPitch = () => withPageFade(() => setPitchOpen(true));
  const closePitch = () => withPageFade(() => setPitchOpen(false));

  return (
    <>
      <header className="navbar" aria-label="Primary Navigation">
        <div className="container nav-inner">
          {/* Logo/name opens the pitch modal with the same fade effect */}
          <button
            type="button"
            className="logo"
            onClick={openPitch}
            aria-haspopup="dialog"
            aria-expanded={pitchOpen ? "true" : "false"}
            style={{ background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
            title="About Mauricio (elevator pitch)"
          >
            <span className="logo-badge" aria-hidden="true">MC</span>
            <span>Mauricio Cardoso Neto</span>
          </button>

          <nav aria-label="Main">
            <ul>
              <li><NavLink className={linkClass} to="/">Home</NavLink></li>
              <li><NavLink className={linkClass} to="/projects">Projects</NavLink></li>
              <li><NavLink className={linkClass} to="/experience">Experience</NavLink></li>
              <li><NavLink className={linkClass} to="/resume">Resume</NavLink></li>
              <li><NavLink className={linkClass} to="/contact">Contact</NavLink></li>
            </ul>
          </nav>

          <div className="nav-cta" style={{ gap: 10 }}>
            <ThemeToggle />
            <button
              className="btn menu-btn"
              aria-controls="mobileMenu"
              aria-expanded={menuOpen ? "true" : "false"}
              onClick={onMenuToggle}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Elevator Pitch Modal */}
      <PitchModal open={pitchOpen} onClose={closePitch}>
        <div className="pitch-heading">
          <div className="pitch-badge">MC</div>
          <h2 id="pitch-title" style={{ margin: 0 }}>Elevator pitch</h2>
        </div>

        <p className="pitch-body">
          Hi, I’m Mauricio, a Computer Science student at Stony Brook University who’s passionate about low-level 
          systems and software development. I’ve built projects ranging from a Unix V6 filesystem tool in C to 
          full-stack web applications, and I take pride in writing clean, reliable code that performs well. 
          I’ve achieved all this while working full-time and studying in a 
          language I only began learning in 2018 when I first arrived in the United States — it’s taught me discipline, adaptability, and resilience. 
          I bring that same drive to every project I work on, and I’d love the opportunity to contribute 
          that mindset and skill set to your team. Would you be open to discussing how I can make your company make more
          money?
        </p>

        <div className="pitch-cta">
          <button
            className="btn primary"
            onClick={() => withPageFade(() => { setPitchOpen(false); navigate("/projects"); })}
          >
            See Projects
          </button>

          <button
            className="btn"
            onClick={() => withPageFade(() => { setPitchOpen(false); navigate("/resume"); })}
          >
            View Resume
          </button>

          <button
            className="btn"
            onClick={() => withPageFade(() => { setPitchOpen(false); navigate("/contact"); })}
          >
            Get in Touch
          </button>
        </div>
      </PitchModal>
    </>
  );
}
