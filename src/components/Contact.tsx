import { useState } from "react";
import { useEffect } from "react";
import { FaArrowUpRightFromSquare, FaPaperPlane } from "react-icons/fa6";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa6";

const DIRECT_LINES = [
  {
    href: "mailto:ayushxniraula@gmail.com",
    icon: <FaEnvelope aria-hidden="true" focusable="false" />,
    tone: "dark",
    name: "Email",
    note: "for anything, really — I reply within a day or two",
  },
  {
    href: "#",
    icon: <FaWhatsapp aria-hidden="true" focusable="false" />,
    tone: "light",
    name: "WhatsApp",
    note: "quickest way to reach me directly",
  },
  {
    href: "#",
    icon: <FaLinkedin aria-hidden="true" focusable="false" />,
    tone: "dark",
    name: "LinkedIn",
    note: "for roles, professional stuff & recs",
  },
  {
    href: "#",
    icon: <FaGithub aria-hidden="true" focusable="false" />,
    tone: "light",
    name: "GitHub",
    note: "see the code — repos & contributions",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    document.title = "Ayush Niraula — Contact";
    window.scrollTo(0, 0);
  }, []);

  function update(field: keyof typeof form) {
    return (e: any) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact — ${form.name || "no name given"}`,
    );
    const body = encodeURIComponent(
      `${form.message}\n\n—\n${form.name}\n${form.email}`,
    );
    window.location.href = `mailto:ayushxniraula@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const isValid = form.name.trim() && form.email.trim() && form.message.trim();

  return (
    <div className="contact-page" data-reveal>
        <h1>Contact</h1>
      <p className="tagline">notes on design, code, and the systems in between.</p>
  

      <div className="contact-blueprint-grid">
        <div className="contact-panel contact-panel--form">
          <div className="panel-ruler" aria-hidden="true">
            <span>01</span>
            <span>— message</span>
          </div>

          {sent ? (
            <div className="contact-sent">
              <div className="contact-sent-title">Mail app opening…</div>
              <p>
                If nothing happened, email me directly at{" "}
                <a href="mailto:ayushxniraula@gmail.com">
                  ayushxniraula@gmail.com
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="c-name">Name</label>
                <input
                  id="c-name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="c-email">Email</label>
                <input
                  id="c-email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="c-message">Message</label>
                <textarea
                  id="c-message"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="What's on your mind?"
                  required
                />
              </div>
              <button className="contact-submit" type="submit" disabled={!isValid}>
                Send message
                <FaPaperPlane aria-hidden="true" focusable="false" />
              </button>
              <p className="contact-form-note">
                Opens your mail app with this pre-filled — nothing is stored
                or sent from here directly.
              </p>
            </form>
          )}
        </div>

        <div className="contact-panel contact-panel--direct">
          <div className="panel-ruler" aria-hidden="true">
            <span>02</span>
            <span>— direct lines</span>
          </div>

          <div className="connect-list">
            {DIRECT_LINES.map((line) => (
              
              <a  key={line.name}
                className="connect-row"
                href={line.href}
                target={line.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={line.href.startsWith("mailto:") ? undefined : "noopener"}
              >
                <span className={`icon icon--${line.tone}`} aria-hidden="true">
                  {line.icon}
                </span>
                <span className="connect-row-text">
                  <span className="connect-name">{line.name}</span>
                  <span className="connect-note">{line.note}</span>
                </span>
                <span className="connect-row-arrow" aria-hidden="true">
                  <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
                </span>
              </a>
            ))}
          </div>

          <div className="contact-panel-foot">
            Prefer email or WhatsApp for anything <b>time-sensitive</b> —
            the others I check less often.
          </div>
        </div>
      </div>
    </div>
  );
}