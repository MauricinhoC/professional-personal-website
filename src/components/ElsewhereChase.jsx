import React, { useCallback, useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/ThemeProvider"; // <-- theme-aware

const LINKS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mauriciocneto" },
  { label: "GitHub",   href: "https://github.com/MauricinhoC" },
  { label: "Email",    href: "mailto:mauricio.cardosoneto@stonybrook.edu" },
];

export default function ElsewhereChase({ links = LINKS }) {
  const { theme } = useTheme(); // "light" | "dark" | "system" (resolved in provider)
  const areaRef = useRef(null);
  const btnRefs = useRef([]);
  const [frozen, setFrozen] = useState(false);
  const [positions, setPositions] = useState(() => links.map(() => ({ x: 0, y: 0 })));

  // Place buttons nicely at mount (and when link count changes)
  useEffect(() => {
    if (!areaRef.current) return;
    const area = areaRef.current.getBoundingClientRect();
    setPositions(
      links.map((_, i) => ({
        x: Math.round((i + 1) * (area.width / (links.length + 1)) - 50),
        y: 16 + i * 8,
      }))
    );
  }, [links]);

  const randomSpot = useCallback((i) => {
    const area = areaRef.current?.getBoundingClientRect();
    const btn = btnRefs.current[i]?.getBoundingClientRect();
    if (!area || !btn) return { x: 0, y: 0 };

    const padding = 6;
    const maxX = Math.max(0, area.width - btn.width - padding);
    const maxY = Math.max(0, area.height - btn.height - padding);

    return {
      x: Math.floor(Math.random() * (maxX + 1)),
      y: Math.floor(Math.random() * (maxY + 1)),
    };
  }, []);

  const runAway = useCallback((i) => {
    if (frozen) return;
    setPositions((pos) => pos.map((p, idx) => (idx === i ? randomSpot(i) : p)));
  }, [frozen, randomSpot]);

  // Accessibility: freeze while a button is focused (keyboard users)
  const onFocus = useCallback(() => setFrozen(true), []);
  const onBlur  = useCallback(() => setFrozen(false), []);

  // Theme-aware calm colors when Frozen
  const frozenAreaBg  = theme === "light" ? "#e0e0e0" : "#24292f"; // neutral light/dark
  const frozenBtnBg   = theme === "light" ? "#f5f5f5" : "#1b1f24";
  const frozenBorder  = theme === "light" ? "rgba(0,0,0,0.12)" : "rgba(255,255,255,0.14)";
  const frozenText    = theme === "light" ? "#1a1f26" : "#e6e8eb";

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", minHeight: 420 }}>
      <div className="chase-header">
        <h3 style={{ margin: 0 }}>give up 😂</h3>
        <div className="freeze-wrap">
          <label className="freeze-toggle">
            <input
              type="checkbox"
              checked={frozen}
              onChange={(e) => setFrozen(e.target.checked)}
              aria-label="Freeze links so they stop running away"
            />
            <span>{frozen ? "🧊 I knew it" : "🏃 ON"}</span>
          </label>
        </div>
      </div>

      <p style={{ margin: "6px 0 12px" }}>
        contact me if you can!!
      </p>

      {/* Game area fills remaining card space */}
      <div
        className="chase-area"
        ref={areaRef}
        aria-live="polite"
        style={{
          position: "relative",
          flex: 1,
          width: "100%",
          borderRadius: 12,
          overflow: "hidden",
          // Animated background when running; calm neutral when frozen
          background: frozen ? frozenAreaBg : undefined,
          animation: frozen ? "none" : "bg-cycle 6s infinite alternate ease-in-out",
          border: `1px solid ${frozenBorder}`,
          boxShadow: "inset 0 1px 0 color-mix(in srgb, #fff 12%, transparent)",
        }}
      >
        {links.map((l, i) => (
          <a
            key={l.label}
            ref={(el) => (btnRefs.current[i] = el)}
            className="btn runaway-btn"
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
            onMouseEnter={() => runAway(i)}
            onFocus={onFocus}
            onBlur={onBlur}
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              whiteSpace: "nowrap",
              transform: `translate(${positions[i]?.x || 0}px, ${positions[i]?.y || 0}px)`,
              transition: "transform 90ms ease, background 160ms ease, color 160ms ease, border-color 160ms ease",
              willChange: "transform",
              userSelect: "none",
              // Animated button backgrounds while running; calm neutral when frozen
              background: frozen ? frozenBtnBg : undefined,
              color: frozen ? frozenText : undefined,
              borderColor: frozen ? frozenBorder : undefined,
              animation: frozen ? "none" : "btn-cycle 4s linear infinite",
            }}
          >
            {l.label}
          </a>
        ))}
      </div>

      {/* Local keyframes for area + button color cycling */}
      <style>
        {`
          /* Area background cycles through soft gradients */
          @keyframes bg-cycle {
            0%   { background: linear-gradient(135deg, #ff9a9e, #fad0c4); }
            25%  { background: linear-gradient(135deg, #a18cd1, #fbc2eb); }
            50%  { background: linear-gradient(135deg, #f6d365, #fda085); }
            75%  { background: linear-gradient(135deg, #84fab0, #8fd3f4); }
            100% { background: linear-gradient(135deg, #cfd9df, #e2ebf0); }
          }

          /* Buttons cycle through brand-adjacent hues; text stays readable */
          @keyframes btn-cycle {
            0%   { background: linear-gradient(135deg, #00aaff, #5ce1e6); color: #071018; }
            25%  { background: linear-gradient(135deg, #7c83ff, #96fbc4); color: #071018; }
            50%  { background: linear-gradient(135deg, #ffd86f, #fc6262); color: #071018; }
            75%  { background: linear-gradient(135deg, #b6fbff, #83a4d4); color: #071018; }
            100% { background: linear-gradient(135deg, #ffecd2, #fcb69f); color: #071018; }
          }
        `}
      </style>
    </div>
  );
}
