import { useEffect } from "react";
import {
  SiAngular,
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiSupabase,
  SiTypescript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

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
          Where I've been, and what I've built along the way — fintech, remittance, and digital wallet platforms serving hundreds of thousands of users, a government fraud-investigation portal along the way, plus a few detours into real estate and lottery systems on the side.
        </div>

        <div className="dual-col">
          <div>
            <div className="col-title" id="work-exp-heading">
              <u>Work Experience</u>
            </div>
            <div className="exp-list" role="list" aria-labelledby="work-exp-heading">
              <div
                className="exp-row"
                data-highlights="Leading a team of 5 developers across Angular and React|Shipped 21 remittance apps across 21 platforms in 4 months|Built RIREMS, a Supabase-backed fraud investigation portal|Delivered a multi-vendor marketplace and a temple admin portal|Architecting XpressV2, a next-gen Angular monorepo"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                aria-label="Software Engineer, FE Team Lead, The Big Solutions, 2024 to Present. Press Enter to show highlights."
              >
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">Software Engineer / FE Team Lead</div>
                  <div className="exp-meta">
                    The Big Solutions &middot; 2024&ndash;Present
                  </div>
                  <ul className="exp-inline"></ul>
                </div>
              </div>

              <div
                className="exp-row"
                data-highlights="Integrated 50+ services into a KYC digital wallet, 500K+ users|Built MyPay Gold, a live gold and silver investment platform|Shipped voting platforms with PayPal and Stripe integration|Built the Agent Wallet's commission and sub-network tools|Partnered cross-functionally on real-time notifications"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                aria-label="Software Engineer, MyPay, 2023 to 2024. Press Enter to show highlights."
              >
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">Software Engineer</div>
                  <div className="exp-meta">
                    MyPay &middot; 2023&ndash;2024
                  </div>
                  <ul className="exp-inline"></ul>
                </div>
              </div>

              <div
                className="exp-row"
                data-highlights="Delivered production websites for a range of clients|Built full-stack skills from HTML/CSS/JS to backend|Learned to scope, price, and ship projects independently"
                tabIndex={0}
                role="button"
                aria-expanded="false"
                aria-label="Freelance Full-Stack Developer, 2020 to 2022. Press Enter to show highlights."
              >
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">Freelance Full-Stack Developer</div>
                  <div className="exp-meta">
                    Independent &middot; 2020&ndash;2022
                  </div>
                  <ul className="exp-inline"></ul>
                </div>
              </div>
            </div>

            <div className="col-title" id="education-heading" style={{ marginTop: "2rem" }}>
              <u>Education</u>
            </div>
            <div className="exp-list" role="list" aria-labelledby="education-heading">
              <div className="exp-row" role="listitem">
                <span className="exp-dot" aria-hidden="true"></span>
                <div>
                  <div className="exp-role">B.Eng. in Computer Engineering</div>
                  <div className="exp-meta">
                    Tribhuvan University, IOE &middot; 2019&ndash;2023
                  </div>
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
                  <SiNodedotjs aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Node.js <span>&mdash; runtime</span>
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
                  <SiAngular aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Angular <span>&mdash; frontend</span>
                </span>
              </div>
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
                  <SiExpress aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Express <span>&mdash; API</span>
                </span>
              </div>
              <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiSupabase aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Supabase <span>&mdash; database & auth</span>
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
                <div className="stack-row" role="listitem">
                <span className="stack-icon" aria-hidden="true">
                  <SiExpress aria-hidden="true" focusable="false" />
                </span>
                <span className="stack-name">
                  Express <span>&mdash; API</span>
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