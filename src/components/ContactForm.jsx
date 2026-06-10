import React, { useState } from "react";

const CONTACT_ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT?.trim();

export default function ContactForm() {
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
    const re = /\S+@\S+\.\S+/;
    if (!re.test(form.email)) return "Please enter a valid email address.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      setStatus("error");
      return;
    }

    if (!CONTACT_ENDPOINT) {
      setError(
        "Contact endpoint is not configured. Please set REACT_APP_CONTACT_ENDPOINT in your .env file."
      );
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "New message from portfolio",
          message: form.message,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        const message = payload?.error || payload?.message || "Submission failed.";
        throw new Error(message);
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (sendError) {
      setStatus("error");
      setError(sendError.message || "Unable to send message. Please try again later.");
    }
  };

  return (
    <div>
      <div className="contact-form-header">
        <p className="eyebrow">Contact form</p>
        <h3>Send a message</h3>
        <p className="contact-copy">
          I’m available for full-time, part-time, and internship opportunities.
          Share your idea and I’ll respond as soon as possible.
        </p>
      </div>

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
              aria-invalid={!!error && !form.name.trim()}
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
              aria-invalid={!!error && !/\S+@\S+\.\S+/.test(form.email)}
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
            aria-invalid={!!error && !form.message.trim()}
          />
          <div className="form-hint">I’ll get back to you within 1–2 days.</div>
        </div>

        {status === "success" && (
          <div className="success-message" role="status">
            <strong>Thanks —</strong> your message is on its way.
          </div>
        )}

        {status === "error" && error && (
          <div className="form-error" role="alert">
            {error}
          </div>
        )}

        <div className="form-actions">
          <button className="btn primary" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>
        </div>
      </form>

      <div aria-live="polite" className="visually-hidden">
        {status === "success" ? "Message sent successfully." : ""}
      </div>
    </div>
  );
}
