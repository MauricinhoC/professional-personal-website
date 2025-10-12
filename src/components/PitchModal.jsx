import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function PitchModal({ open, onClose, children }) {
  const overlayRef = useRef(null);
  const panelRef = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus the panel when opening
  useEffect(() => {
    if (open) {
      const t = setTimeout(() => panelRef.current?.focus(), 10);
      return () => clearTimeout(t);
    }
  }, [open]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = prev);
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className="modal-overlay"
      role="presentation"
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
    >
      <div
        className="modal-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="pitch-title"
        tabIndex={-1}
        ref={panelRef}
      >
        <button
          className="modal-close"
          aria-label="Close dialog"
          onClick={onClose}
          type="button"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}
