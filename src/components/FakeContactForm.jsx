import React, { useState } from "react";

export default function FakeContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return "Please enter your name.";
    if (!form.email.trim()) return "Please enter your email.";
    if (!form.message.trim()) return "Please write a message.";
    // optional: simple email pattern
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    // fake sending
    setStatus("sending");
    setTimeout(() => {
      // 90% success fake
      const ok = Math.random() > 0.1;
      if (ok) {
        setStatus("success");
        // clear fields
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setError("Something went wrong. Try again.");
      }

      // auto-hide success after a bit (optional)
      if (ok) {
        setTimeout(() => setStatus("idle"), 3500);
      }
    }, 900); // fake network latency
  };

  return (
    <div>
      <h3>Get in touch</h3>

      <form className="form" onSubmit={handleSubmit} noValidate>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input
              className="input"
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="subject">Subject</label>
          <input
            className="input"
            id="subject"
            name="subject"
            type="text"
            placeholder="What’s this about?"
            value={form.subject}
            onChange={handleChange}
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            className="textarea"
            id="message"
            name="message"
            rows={6}
            placeholder="How can I help?"
            value={form.message}
            onChange={handleChange}
            required
          />
          <div className="form-hint">I’ll get back to you within 1–2 days.</div>
        </div>

        {error && <div className="form-error" role="alert">{error}</div>}

        <div className="form-actions">
          <button className="btn primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>

      {/* accessible live region for success */}
      <div aria-live="polite" className="visually-hidden">
        {status === "success" ? "Message sent successfully." : ""}
      </div>

      {status === "success" && (
        <div className="success-message" role="status">
          <strong>Thanks —</strong> message delivered.
        </div>
      )}

      {status === "error" && (
        <div className="form-error" role="alert">
          {error || "Failed to send."}
        </div>
      )}
    </div>
  );
}
