// src/App.jsx
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider } from "./theme/ThemeProvider";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppShell />
      </Router>
    </ThemeProvider>
  );
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="app-root">
      <a className="skip-link" href="#main">Skip to content</a>

      <Navbar menuOpen={menuOpen} onMenuToggle={() => setMenuOpen(!menuOpen)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      {/* Animated route region */}
      <main id="main" className="route-container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageFade><Home /></PageFade>} />
            <Route path="/projects" element={<PageFade><Projects /></PageFade>} />
            <Route path="/experience" element={<PageFade><Experience /></PageFade>} />
            <Route path="/resume" element={<PageFade><Resume /></PageFade>} />
            <Route path="/contact" element={<PageFade><Contact /></PageFade>} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}

function PageFade({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
