import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
        <span>© <span>{year}</span> Mauricio Cardoso Neto</span>
        <span style={{ color: "var(--muted)" }}>Built with accessible, responsive HTML &amp; CSS.</span>
      </div>
    </footer>
  );
}
