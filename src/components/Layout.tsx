import { useEffect } from "react";
import {  Outlet, useLocation } from "react-router";
import { FaSun, FaMoon } from "react-icons/fa6";
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
    </>
  );
}
