import { useEffect } from "react";
import { FaAws } from "react-icons/fa6";
import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const Work = () => {
  useEffect(() => {
    const cleanups: any = [];
    function on(el: any, evt: any, fn: any) {
      el.addEventListener(evt, fn);
      cleanups.push(() => el.removeEventListener(evt, fn));
    }

    const isTouch = window.matchMedia("(hover: none)").matches;

    // ---- Experience rows: click/keyboard expand + hover/focus preview ----
    (function () {
      const rows: any = document.querySelectorAll(".exp-row[data-highlights]");
      const preview: any = document.getElementById("expPreview");
      const titleEl: any = document.getElementById("expPreviewTitle");
      const listEl: any = document.getElementById("expPreviewList");
      if (!rows.length) return;

      function bulletsFrom(row: any) {
        return (row.getAttribute("data-highlights") || "")
          .split("|")
          .filter(Boolean);
      }

      function toggleRow(row: any) {
        const wasOpen = row.classList.contains("is-expanded");
        rows.forEach((r: any) => {
          r.classList.remove("is-expanded");
          r.setAttribute("aria-expanded", "false");
        });
        if (!wasOpen) {
          row.classList.add("is-expanded");
          row.setAttribute("aria-expanded", "true");
        }
      }

      rows.forEach((row: any) => {
        const inline: any = row.querySelector(".exp-inline");
        bulletsFrom(row).forEach((text: any) => {
          const li = document.createElement("li");
          li.textContent = text;
          inline.appendChild(li);
        });
        on(row, "click", () => toggleRow(row));
        on(row, "keydown", (e: any) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleRow(row);
          }
        });
      });

      if (isTouch || !preview) return;

      function fillFrom(row: any) {
        const roleEl = row.querySelector(".exp-role");
        titleEl.textContent = roleEl ? roleEl.textContent : "";
        listEl.innerHTML = "";
        bulletsFrom(row).forEach((text: any) => {
          const li = document.createElement("li");
          li.textContent = text;
          listEl.appendChild(li);
        });
      }

      function place(e: any) {
        const offset = 18;
        const w = preview.offsetWidth,
          h = preview.offsetHeight;
        let x = e.clientX + offset,
          y = e.clientY + offset;
        if (x + w > window.innerWidth - 8) x = e.clientX - w - offset;
        if (y + h > window.innerHeight - 8) y = e.clientY - h - offset;
        preview.style.transform =
          "translate(" + x + "px, " + y + "px) scale(1)";
      }

      rows.forEach((row: any) => {
        on(row, "mouseenter", (e: any) => {
          fillFrom(row);
          preview.classList.add("is-visible");
          place(e);
        });
        on(row, "mousemove", place);
        on(row, "mouseleave", () => preview.classList.remove("is-visible"));
        on(row, "focus", () => {
          fillFrom(row);
          preview.classList.add("is-visible");
          const r = row.getBoundingClientRect();
          preview.style.transform =
            "translate(" + (r.right + 12) + "px, " + r.top + "px) scale(1)";
        });
        on(row, "blur", () => preview.classList.remove("is-visible"));
      });
    })();

    // ---- One-time hover-discovery nudge on exp list ----
    (function () {
      const el: any = document.querySelector(".exp-list");
      if (!el || !("IntersectionObserver" in window)) return;
      let timeoutA: any, timeoutB: any;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              timeoutA = setTimeout(() => {
                el.classList.add("hint-active");
                timeoutB = setTimeout(
                  () => el.classList.remove("hint-active"),
                  6600,
                );
              }, 500);
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.3 },
      );
      io.observe(el);
      cleanups.push(() => {
        io.disconnect();
        clearTimeout(timeoutA);
        clearTimeout(timeoutB);
      });
    })();

    return () => cleanups.forEach((fn: any) => fn());
  }, []);

  return (
    <>
      <div data-reveal>
         <div className="section-title" id="work-heading">
          Work & Stack
          <span className="hint">
            <span className="hint-hover">— hover a project for a preview</span>
            <span className="hint-touch">— tap a project to open it</span>
            <span className="hint-kbd">
              — focus a project and press Enter to open it
            </span>
          </span>
        </div>
        <div className="section-sub">
          where I&rsquo;ve been, and what I build with Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Fugiat, incidunt odio quaerat
          beatae voluptate, quidem soluta maxime autem ipsum distinctio
          debitis optio, aspernatur iure minima provident cumque recusandae
          architecto nemo..
        </div>

        <div className="dual-col">
          <div>
            <div className="col-title" id="work-exp-heading">
              <u>Work Experience</u>
             
            </div>
            <div className="exp-list" role="list" aria-labelledby="work-exp-heading">
              <div
                className="exp-row"
                data-highlights="Led architecture for a platform processing 1M+ transactions monthly|Managed and mentored a team of 5 engineers|Cut page load times by 40% through code-splitting and caching|Built a CI/CD pipeline, cutting deploy time from hours to minutes|Shipped 3 major product modules from 0 to 1"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                aria-label="Senior Fullstack Developer, Nimbus Cloudworks, 2023 to Present. Press Enter to show highlights."
              >
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">Senior Fullstack Developer</div>
                  <div className="exp-meta">
                    Nimbus Cloudworks &middot; 2023&ndash;Present
                  </div>
                  <ul className="exp-inline"></ul>
                </div>
              </div>

              <div
                className="exp-row"
                data-highlights="Built and shipped 10+ full-stack features end-to-end|Reduced API response times by 35% through query optimization|Implemented real-time features for 50K+ active users|Partnered with design to rebuild the core dashboard UX|Added test coverage that cut production bugs by 25%"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                aria-label="MERN Stack Developer, Byteforge Labs, 2021 to 2023. Press Enter to show highlights."
              >
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">MERN Stack Developer</div>
                  <div className="exp-meta">
                    Byteforge Labs &middot; 2021&ndash;2023
                  </div>
                  <ul className="exp-inline"></ul>
                </div>
              </div>

              <div
                className="exp-row"
                data-highlights="Rebuilt the core Angular app on a MEAN stack, cutting bundle size by 30%|Built a reusable component library adopted across 4 product teams|Migrated legacy AngularJS views to Angular with zero downtime|Introduced reactive forms and RxJS patterns for complex flows|Paired closely with backend on API contracts and edge cases"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                aria-label="Frontend Engineer, Angular and MEAN, Vertex Softworks, 2019 to 2021. Press Enter to show highlights."
              >
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">Frontend Engineer (Angular/MEAN)</div>
                  <div className="exp-meta">
                    Vertex Softworks &middot; 2019&ndash;2021
                  </div>
                  <ul className="exp-inline"></ul>
                </div>
              </div>

              <div
                className="exp-row"
                data-highlights="Built marketing landing pages and static sites from design handoffs|Learned the fundamentals of responsive, cross-browser layout|Maintained and patched a handful of WordPress client sites|Assisted senior devs with QA and bug triage|First real exposure to version control and code review"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                aria-label="Junior Web Developer, Pixel and Co., 2018 to 2019. Press Enter to show highlights."
              >
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">Junior Web Developer</div>
                  <div className="exp-meta">
                    Pixel &amp; Co. &middot; 2018&ndash;2019
                  </div>
                  <ul className="exp-inline"></ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="col-title" id="tech-stack-heading">
              <u>Tech Stack</u>
            </div>
            <div className="stack-list" role="list" aria-labelledby="tech-stack-heading">
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiReact aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  React <span>&mdash; frontend</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiAngular aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Angular <span>&mdash; frontend</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiNodedotjs aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Node.js <span>&mdash; runtime</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiExpress aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Express <span>&mdash; API</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiMongodb aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  MongoDB <span>&mdash; database</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiTypescript aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  TypeScript <span>&mdash; language</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiDocker aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Docker <span>&mdash; deployment</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <FaAws aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  AWS <span>&mdash; cloud</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="exp-preview" id="expPreview" aria-hidden="true">
        <div className="exp-preview-title" id="expPreviewTitle"></div>
        <ul id="expPreviewList"></ul>
      </div>
    </>
  );
};

export default Work;