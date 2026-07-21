import { useEffect } from "react";
import {  Outlet, useLocation } from "react-router";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaQuora,
  FaEnvelope,
  FaXmark,
  FaSun,
  FaMoon,
  FaKeyboard,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";
import Nav from "./Nav";
import Footer from "./Footer";
import PageLoader from "./PageLoader";

/*
 * All CSS from the original main.html is kept as plain CSS text
 * (not converted to CSS-in-JS objects) so nothing has to be rewritten.
 * It's injected once via a <style> tag here, since Layout stays mounted
 * for the whole app and wraps every route.
 *
 * Icons now come from react-icons (Font Awesome 6 set) instead of
 * hand-rolled inline <svg> paths. Existing CSS that targets `svg`
 * inside these wrapper spans (e.g. `.mark svg`, `.socials svg`,
 * `.connect-row .icon svg`) continues to apply, since react-icons
 * renders a real <svg> element with `fill="currentColor"` by default.
 */

export default function Layout() {
  const location = useLocation();

  // ---- Theme toggle (persists across route changes) ----
  useEffect(() => {
    const root: any = document.documentElement;
    const btn: any = document.getElementById("themeToggle");
    const label: any = document.getElementById("themeToggleLabel");
    const metaTheme: any = document.getElementById("themeColorMeta");
    let theme = "light";

    function apply(t: any) {
      theme = t;
      if (t === "dark") {
        root.setAttribute("data-theme", "dark");
        btn.setAttribute("aria-pressed", "true");
        if (label) label.textContent = "Dark";
      } else {
        root.removeAttribute("data-theme");
        btn.setAttribute("aria-pressed", "false");
        if (label) label.textContent = "Light";
      }
      if (metaTheme)
        metaTheme.setAttribute("content", t === "dark" ? "#121212" : "#ffffff");
    }
    apply(theme);
    function onClick() {
      apply(theme === "dark" ? "light" : "dark");
    }
    btn.addEventListener("click", onClick);
    return () => btn.removeEventListener("click", onClick);
  }, []);

  // ---- Connect modal ----
  useEffect(() => {
    const openBtn: any = document.getElementById("connectToggle");
    const overlay: any = document.getElementById("connectOverlay");
    const closeBtn: any = document.getElementById("connectModalClose");
    const modal: any = overlay ? overlay.querySelector(".connect-modal") : null;
    if (!openBtn || !overlay || !closeBtn || !modal) return;

    let lastFocused: any = null;

    function focusableEls() {
      return modal.querySelectorAll("a[href], button:not([disabled])");
    }

    function onKeydown(e: any) {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key === "Tab") {
        const items = Array.prototype.slice.call(focusableEls());
        if (!items.length) return;
        const first = items[0],
          last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    function open() {
      lastFocused = document.activeElement;
      overlay.classList.add("is-open");
      openBtn.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      closeBtn.focus();
      document.addEventListener("keydown", onKeydown);
    }

    function close() {
      overlay.classList.remove("is-open");
      openBtn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeydown);
      if (lastFocused && typeof lastFocused.focus === "function")
        lastFocused.focus();
    }

    function onOverlayClick(e: any) {
      if (e.target === overlay) close();
    }

    openBtn.addEventListener("click", open);
    closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", onOverlayClick);

    return () => {
      openBtn.removeEventListener("click", open);
      closeBtn.removeEventListener("click", close);
      overlay.removeEventListener("click", onOverlayClick);
      document.removeEventListener("keydown", onKeydown);
      document.body.style.overflow = "";
    };
  }, []);

  // ---- Generic dock tip toggle (keyboard + accessibility buttons) ----
  useEffect(() => {
    const cleanups: any = [];

    function wireDockTip(btnId: any, tipId: any) {
      const btn: any = document.getElementById(btnId);
      const tip: any = document.getElementById(tipId);
      if (!btn || !tip) return;

      function place() {
        const r = btn.getBoundingClientRect();
        const w = tip.offsetWidth;
        let x = r.right - w;
        if (x < 8) x = 8;
        const y = r.top - tip.offsetHeight - 10;
        tip.style.left = x + "px";
        tip.style.top = y + "px";
      }

      function hideOthers() {
        document.querySelectorAll(".dock-tip.is-visible").forEach((t) => {
          if (t !== tip) t.classList.remove("is-visible");
        });
        document
          .querySelectorAll(".dock-btn[aria-expanded='true']")
          .forEach((b) => {
            if (b !== btn) b.setAttribute("aria-expanded", "false");
          });
      }

      function show() {
        hideOthers();
        place();
        tip.classList.add("is-visible");
        btn.setAttribute("aria-expanded", "true");
      }
      function hide() {
        tip.classList.remove("is-visible");
        btn.setAttribute("aria-expanded", "false");
      }
      function toggle() {
        if (tip.classList.contains("is-visible")) hide();
        else show();
      }
      function onMouseLeave() {
        if (document.activeElement !== btn) hide();
      }
      function onResize() {
        if (tip.classList.contains("is-visible")) place();
      }

      btn.addEventListener("click", toggle);
      btn.addEventListener("mouseenter", show);
      btn.addEventListener("focus", show);
      btn.addEventListener("mouseleave", onMouseLeave);
      btn.addEventListener("blur", hide);
      window.addEventListener("resize", onResize);

      cleanups.push(() => {
        btn.removeEventListener("click", toggle);
        btn.removeEventListener("mouseenter", show);
        btn.removeEventListener("focus", show);
        btn.removeEventListener("mouseleave", onMouseLeave);
        btn.removeEventListener("blur", hide);
        window.removeEventListener("resize", onResize);
      });
    }

    wireDockTip("kbdToggle", "kbdTip");

    function hideAllTips() {
      document
        .querySelectorAll(".dock-tip.is-visible")
        .forEach((t) => t.classList.remove("is-visible"));
      document
        .querySelectorAll(".dock-btn[aria-expanded='true']")
        .forEach((b) => b.setAttribute("aria-expanded", "false"));
    }
    function onKeydown(e: any) {
      if (e.key === "Escape") hideAllTips();
    }
    function onDocClick(e: any) {
      const dock = document.getElementById("dock");
      if (dock && !dock.contains(e.target)) hideAllTips();
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("click", onDocClick);
    cleanups.push(() => {
      document.removeEventListener("keydown", onKeydown);
      document.removeEventListener("click", onDocClick);
    });

    return () => cleanups.forEach((fn: any) => fn());
  }, []);

  // ---- Detect keyboard use, swap hover-hints for keyboard-hints ----
  useEffect(() => {
    function onFirstTab(e: any) {
      if (e.key === "Tab") {
        document.body.classList.add("user-is-tabbing");
        window.removeEventListener("keydown", onFirstTab);
      }
    }
    window.addEventListener("keydown", onFirstTab);
    return () => window.removeEventListener("keydown", onFirstTab);
  }, []);

  // ---- Reveal-on-scroll for [data-reveal] sections (runs on every route,
// including Footer/hr which live in this shared Layout) ----
useEffect(() => {
  const els = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
  );
  els.forEach((el) => io.observe(el));
  return () => io.disconnect();
}, [location.pathname]);

  return (
    <>
      <div className="wrap" id="main-content">
        <Nav />
        <PageLoader />
        <Outlet />
                <hr />


        <Footer />
      </div>

      <div className="dock" id="dock">
        <button
          className="dock-btn"
          id="kbdToggle"
          type="button"
          aria-haspopup="true"
          aria-expanded="false"
          aria-controls="kbdTip"
          aria-label="Keyboard navigation info"
        >
          <span className="dock-icon" aria-hidden="true">
            <FaKeyboard aria-hidden="true" focusable="false" />
          </span>
          Keyboard
        </button>

       

        <button
          className="dock-btn connect-toggle"
          id="connectToggle"
          type="button"
          aria-haspopup="dialog"
          aria-expanded="false"
          aria-controls="connectOverlay"
        >
          <span className="connect-dot" aria-hidden="true"></span>
          Connect
        </button>

        <button
          className="dock-btn theme-toggle"
          id="themeToggle"
          type="button"
          aria-label="Toggle dark mode"
          aria-pressed="false"
        >
          <span className="dock-icon" aria-hidden="true">
            <FaSun className="icon-sun" aria-hidden="true" focusable="false" />
            <FaMoon
              className="icon-moon"
              aria-hidden="true"
              focusable="false"
            />
          </span>
          <span id="themeToggleLabel">Light</span>
        </button>
      </div>

      <div className="dock-tip" id="kbdTip" role="tooltip">
        This site is fully keyboard-accessible — press <kbd>Tab</kbd> to move
        between links and buttons, <kbd>Shift</kbd>+<kbd>Tab</kbd> to go back,
        and <kbd>Enter</kbd> to activate.
      </div>

    

      <div
        className="connect-overlay"
        id="connectOverlay"
        role="dialog"
        aria-modal="true"
        aria-labelledby="connectModalTitle"
      >
        <div className="connect-modal">
          <div className="connect-modal-head">
            <div>
              <h2 className="connect-modal-title" id="connectModalTitle">
                Let&rsquo;s connect
              </h2>
              <p className="connect-modal-sub">
                Pick whatever&rsquo;s easiest &mdash; I check all of these.
              </p>
            </div>
            <button
              className="connect-modal-close"
              id="connectModalClose"
              type="button"
              aria-label="Close"
            >
              <FaXmark aria-hidden="true" focusable="false" />
            </button>
          </div>

          <div className="connect-list">
            <a
              className="connect-row"
              href="mailto:ayushxniraula@gmail.com"
            >
              <span className="icon icon--dark" aria-hidden="true">
                <FaEnvelope aria-hidden="true" focusable="false" />
              </span>
              <span className="connect-row-text">
                <span className="connect-name">Email</span>
                <span className="connect-note">
                  for anything, really &mdash; I reply within a day or two
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>

            <a className="connect-row" href="#" target="_blank" rel="noopener">
              <span className="icon icon--light" aria-hidden="true">
                <FaLinkedin aria-hidden="true" focusable="false" />
              </span>
              <span className="connect-row-text">
                <span className="connect-name">LinkedIn</span>
                <span className="connect-note">
                  for roles, professional stuff &amp; recs
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>

            <a className="connect-row" href="#" target="_blank" rel="noopener">
              <span className="icon icon--dark" aria-hidden="true">
                <FaGithub aria-hidden="true" focusable="false" />
              </span>
              <span className="connect-row-text">
                <span className="connect-name">GitHub</span>
                <span className="connect-note">
                  see the code &mdash; repos &amp; contributions
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>

            <a className="connect-row" href="#" target="_blank" rel="noopener">
              <span className="icon icon--light" aria-hidden="true">
                <FaWhatsapp aria-hidden="true" focusable="false" />
              </span>
              <span className="connect-row-text">
                <span className="connect-name">WhatsApp</span>
                <span className="connect-note">
                  quickest way to reach me directly
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>

            <a className="connect-row" href="#" target="_blank" rel="noopener">
              <span className="icon icon--dark" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.9L4.1 22H1l8.2-9.3L1 2h7.3l5 6.3L18.9 2Zm-1.2 18h1.8L7.4 4H5.5l12.2 16Z" />
                </svg>
              </span>
              <span className="connect-row-text">
                <span className="connect-name">X (Twitter)</span>
                <span className="connect-note">
                  random thoughts on design &amp; code
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>

            <a className="connect-row" href="#" target="_blank" rel="noopener">
              <span className="icon icon--light" aria-hidden="true">
                <FaFacebook aria-hidden="true" focusable="false" />
              </span>
              <span className="connect-row-text">
                <span className="connect-name">Facebook</span>
                <span className="connect-note">
                  the personal feed, mostly friends
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>

            <a className="connect-row" href="#" target="_blank" rel="noopener">
              <span className="icon icon--dark" aria-hidden="true">
                <FaInstagram aria-hidden="true" focusable="false" />
              </span>
              <span className="connect-row-text">
                <span className="connect-name">Instagram</span>
                <span className="connect-note">
                  photography, interiors &amp; the in-between
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>

            <a className="connect-row" href="#" target="_blank" rel="noopener">
              <span className="icon icon--light" aria-hidden="true">
                <FaQuora aria-hidden="true" focusable="false" />
              </span>
              <span className="connect-row-text">
                <span className="connect-name">Quora</span>
                <span className="connect-note">
                  occasional long-form answers
                </span>
              </span>
              <span className="connect-row-arrow" aria-hidden="true">
                <FaArrowUpRightFromSquare
                  aria-hidden="true"
                  focusable="false"
                />
              </span>
            </a>
          </div>

          <div className="connect-modal-foot">
            Prefer email or WhatsApp for anything <b>time-sensitive</b> &mdash;
            the others I check less often.
          </div>
        </div>
      </div>
    </>
  );
}
