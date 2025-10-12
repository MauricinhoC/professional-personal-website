import React, { useRef } from "react";
import { useTheme } from "../theme/ThemeProvider";

const FADE_MS = 300; // should be >= your CSS animation (260ms in my example)

export default function ThemeToggle() {
  const { resolved, toggle } = useTheme();
  const isTogglingRef = useRef(false);

  const handleToggle = () => {
    if (isTogglingRef.current) return; // avoid double-click spamming
    isTogglingRef.current = true;

    const root = document.documentElement;

    // 1) enable smooth color transitions + overlay fade
    root.classList.add("theme-transition");
    root.classList.add("theme-fade");

    // 2) flip theme (your provider updates data-theme)
    toggle();

    // 3) cleanup after fade
    window.setTimeout(() => {
      root.classList.remove("theme-transition");
      root.classList.remove("theme-fade");
      isTogglingRef.current = false;
    }, FADE_MS);
  };

  return (
    <div style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
      <button
        type="button"
        className="btn"
        aria-label={`Switch to ${resolved === "dark" ? "light" : "dark"} mode`}
        onClick={handleToggle}
        title="Toggle theme"
      >
        {resolved === "dark" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </div>
  );
}
