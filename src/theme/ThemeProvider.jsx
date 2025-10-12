import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeCtx = createContext({ theme: "system", resolved: "dark", toggle: () => {} });

function getSystemTheme() {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getInitialTheme() {
  if (typeof window === "undefined") return { theme: "system", resolved: "dark" };
  const saved = window.localStorage.getItem("theme-preference"); // "light" | "dark" | "system"
  const theme = saved || "system";
  const resolved = theme === "system" ? getSystemTheme() : theme;
  return { theme, resolved };
}

export function ThemeProvider({ children }) {
  const [{ theme, resolved }, setState] = useState(getInitialTheme);

  // keep <html data-theme="...">
  useEffect(() => {
    const root = document.documentElement;
    const apply = (val) => {
      // quick transition helper
      root.classList.add("theme-transition");
      root.setAttribute("data-theme", val);
      window.setTimeout(() => root.classList.remove("theme-transition"), 180);
    };

    if (theme === "system") {
      const sys = getSystemTheme();
      apply(sys);
      setState((s) => ({ ...s, resolved: sys }));
      // react to OS changes
      const mq = window.matchMedia("(prefers-color-scheme: light)");
      const handler = () => {
        const next = getSystemTheme();
        apply(next);
        setState((s) => ({ ...s, resolved: next }));
      };
      mq.addEventListener?.("change", handler);
      return () => mq.removeEventListener?.("change", handler);
    } else {
      apply(theme);
    }
  }, [theme]);

  const value = useMemo(
    () => ({
      theme,       // "light" | "dark" | "system"
      resolved,    // "light" | "dark" (what’s actually applied)
      setTheme: (t) => {
        window.localStorage.setItem("theme-preference", t);
        setState((s) => ({ ...s, theme: t, resolved: t === "system" ? getSystemTheme() : t }));
      },
      toggle: () => {
        const next = (resolved === "dark") ? "light" : "dark";
        window.localStorage.setItem("theme-preference", next);
        setState({ theme: next, resolved: next });
      }
    }),
    [theme, resolved]
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme() {
  return useContext(ThemeCtx);
}
