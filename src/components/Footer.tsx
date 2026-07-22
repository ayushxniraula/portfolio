import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div data-reveal>
        <div className="contact-top">
          <p className="contact-intro">
            Always happy to hear from people, whether that's a project you'd
            like help building, a role you think I'd be a good fit for, or just
            a conversation &mdash; so don't hesitate to say hi
            😁
          </p>
          <div className="signature" aria-hidden="true">
            <span className="signature-text">Ayush...</span>
          </div>
        </div>
        <div className="contact-card">
          <div>
            <span>
              <a className="email" href="mailto:ayushxniraula@gmail.com">
                ayushxniraula@gmail.com
              </a>
              <span
                aria-hidden="true"
                style={{ color: "var(--muted)", margin: "0 8px" }}
              >
                |
              </span>
              <a className="email" href="/resume.pdf" target="_blank">
                view resume
                <span className="sr-only"> (PDF, opens in a new tab)</span>
              </a>
              <span
                aria-hidden="true"
                style={{ color: "var(--muted)", margin: "0 8px" }}
              >
                |
              </span>
             <span className="email">made with care, by Ayush</span>
            </span>
          </div>
          <nav className="socials" aria-label="Social media links">
            <a
              href="https://www.linkedin.com/in/ayushxniraula/"
              aria-label="LinkedIn (opens in a new tab)"
              target="_blank"
              rel="noopener"
            >
              <FaLinkedin aria-hidden="true" focusable="false" />
            </a>
            <a
              href="https://github.com/ayushxniraula"
              aria-label="GitHub (opens in a new tab)"
              target="_blank"
              rel="noopener"
            >
              <FaGithub aria-hidden="true" focusable="false" />
            </a>
           <a
  href="https://wa.me/9861281996"
  aria-label="WhatsApp (opens in a new tab)"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp aria-hidden="true" focusable="false" />
</a>
            <a
              href="https://x.com/ayushxniraula"
              aria-label="X, formerly Twitter (opens in a new tab)"
              target="_blank"
              rel="noopener"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.9L4.1 22H1l8.2-9.3L1 2h7.3l5 6.3L18.9 2Zm-1.2 18h1.8L7.4 4H5.5l12.2 16Z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/the.ayush.niraula/"
              aria-label="Instagram (opens in a new tab)"
              target="_blank"
              rel="noopener"
            >
              <FaInstagram aria-hidden="true" focusable="false" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Footer;
