import { useEffect } from "react";

import Hero from "./Hero";
import Work from "./Work";
import Project from "./Project";
import YearLedger from "./Ledger";

export default function Home() {
  useEffect(() => {
    document.title = "Ayush Niraula — About";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cleanups: any = [];
    function on(el: any, evt: any, fn: any) {
      el.addEventListener(evt, fn);
      cleanups.push(() => el.removeEventListener(evt, fn));
    }

    const isTouch = window.matchMedia("(hover: none)").matches;

    // ---- Reveal-on-scroll for [data-reveal] sections (page-wide) ----
    (function () {
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
      cleanups.push(() => io.disconnect());
    })();

    // ---- Text tooltip for [data-tooltip] inline links ----
    (function () {
      const targets: any = document.querySelectorAll("[data-tooltip]");
      const tooltip: any = document.getElementById("textTooltip");
      if (!targets.length || !tooltip || isTouch) return;

      function place(e: any) {
        const offset = 14;
        const w = tooltip.offsetWidth,
          h = tooltip.offsetHeight;
        let x = e.clientX - w / 2,
          y = e.clientY - h - offset;
        if (x < 8) x = 8;
        if (x + w > window.innerWidth - 8) x = window.innerWidth - w - 8;
        if (y < 8) y = e.clientY + offset;
        tooltip.style.transform =
          "translate(" + x + "px, " + y + "px) scale(1)";
      }

      targets.forEach((el: any) => {
        on(el, "mouseenter", (e: any) => {
          tooltip.textContent = el.getAttribute("data-tooltip") || "";
          tooltip.classList.add("is-visible");
          place(e);
        });
        on(el, "mousemove", place);
        on(el, "mouseleave", () => tooltip.classList.remove("is-visible"));
        on(el, "focus", () => {
          tooltip.textContent = el.getAttribute("data-tooltip") || "";
          tooltip.classList.add("is-visible");
          const r = el.getBoundingClientRect();
          tooltip.style.transform =
            "translate(" + r.left + "px, " + (r.top - 30) + "px) scale(1)";
        });
        on(el, "blur", () => tooltip.classList.remove("is-visible"));
      });
    })();

    return () => cleanups.forEach((fn: any) => fn());
  }, []);

  return (
    <div>
      <Hero />
      <hr />
      <Work />
      <hr />
      <Project />
      <hr />
      <YearLedger/>
      <div className="text-tooltip" id="textTooltip" aria-hidden="true"></div>
    </div>
  );
}