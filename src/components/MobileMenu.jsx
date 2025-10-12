import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

export default function MobileMenu({ open, onClose }) {
  const overlayRef = useRef(null);
  const linkClass = ({ isActive }) => (isActive ? "active" : undefined);

  useEffect(() => {
    function onKey(e) { if (e.key === "Escape") onClose(); }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className="mobile-sheet"
      id="mobileMenu"
      aria-hidden={open ? "false" : "true"}
      style={{ display: open ? "block" : "none" }}
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="mobile-panel" role="dialog" aria-label="Mobile Navigation">
        <div className="mobile-links">
          <NavLink className={linkClass} to="/" onClick={onClose}>Home</NavLink>
          <NavLink className={linkClass} to="/projects" onClick={onClose}>Projects</NavLink>
          <NavLink className={linkClass} to="/experience" onClick={onClose}>Experience</NavLink>
          <NavLink className={linkClass} to="/resume" onClick={onClose}>Resume</NavLink>
          <NavLink className={linkClass} to="/contact" onClick={onClose}>Contact</NavLink>
        </div>
        <div className="cta-row" style={{ marginTop: 16 }}>
          <a className="btn primary" href="#contact" onClick={onClose}>Contact Me</a>
          <a className="btn" href="/assets/Mauricio_Cardoso_Neto_Resume.pdf" target="_blank" rel="noopener" onClick={onClose}>View Resume</a>
        </div>
      </div>
    </div>
  );
}
