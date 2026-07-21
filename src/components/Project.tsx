import { useEffect } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Project = () => {
  useEffect(() => {
    const cleanups: any = [];
    function on(el: any, evt: any, fn: any) {
      el.addEventListener(evt, fn);
      cleanups.push(() => el.removeEventListener(evt, fn));
    }

    const isTouch = window.matchMedia("(hover: none)").matches;

    // ---- Project link hover/focus preview ----
    (function () {
      const links: any = document.querySelectorAll(".project-link");
      const preview: any = document.getElementById("projectPreview");
      const previewImg: any = document.getElementById("projectPreviewImg");
      if (!links.length || !preview || isTouch) return;

      function placeholderSrc(link: any) {
        const explicit = link.getAttribute("data-preview");
        if (explicit) return explicit;
        const color = link.getAttribute("data-preview-color") || "#8a8a8a";
        const label = link.getAttribute("data-preview-label") || "";
        const nameEl = link.querySelector(".p-name");
        const name = nameEl ? nameEl.textContent : "";
        const svg =
          '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="138">' +
          '<rect width="100%" height="100%" fill="' +
          color +
          '"/>' +
          '<rect width="100%" height="100%" fill="black" opacity="0.12"/>' +
          '<text x="16" y="34" font-family="Georgia, serif" font-size="26" fill="white" opacity="0.9">' +
          label +
          "</text>" +
          '<text x="16" y="118" font-family="Helvetica, Arial, sans-serif" font-size="12" fill="white" opacity="0.85">' +
          name.replace(/&/g, "&amp;") +
          "</text>" +
          "</svg>";
        return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
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

      links.forEach((link: any) => {
        on(link, "mouseenter", (e: any) => {
          previewImg.src = placeholderSrc(link);
          previewImg.alt = "";
          preview.classList.add("is-visible");
          place(e);
        });
        on(link, "mousemove", place);
        on(link, "mouseleave", () => preview.classList.remove("is-visible"));
        on(link, "focus", () => {
          previewImg.src = placeholderSrc(link);
          previewImg.alt = "";
          preview.classList.add("is-visible");
          const r = link.getBoundingClientRect();
          preview.style.transform =
            "translate(" + (r.right + 12) + "px, " + r.top + "px) scale(1)";
        });
        on(link, "blur", () => preview.classList.remove("is-visible"));
      });
    })();

    // ---- One-time hover-discovery nudge on project list ----
    (function () {
      const el: any = document.querySelector(".project-list");
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
                  2400,
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
      <div className="about" data-reveal>
        <div className="section-title" id="projects-heading">
          Project
          <span className="hint">
            <span className="hint-hover">— hover a project for a preview</span>
            <span className="hint-touch">— tap a project to open it</span>
            <span className="hint-kbd">
              — focus a project and press Enter to open it
            </span>
          </span>
        </div>
        <div className="section-sub">
          A mix of client and freelance work — remittance platforms, digital
          wallets, e-commerce, and a few passion projects on the side.
        </div>

        <div className="project-list" role="list" aria-labelledby="projects-heading">
          <a className="project-link" role="listitem" href="https://www.xpressewa.com/" target="_blank" rel="noopener" data-preview-color="#33587e" data-preview-label="01">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">Xpress Sewa &mdash; Remittance Platform</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://customer.mypay.com.np/" target="_blank" rel="noopener" data-preview-color="#5c7e33" data-preview-label="02">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">MyPay Digital Wallet</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://mypay.com.np/" target="_blank" rel="noopener" data-preview-color="#7e5c33" data-preview-label="03">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">MyPay &mdash; Agent &amp; Services Portal</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://www.mypaygold.com/" target="_blank" rel="noopener" data-preview-color="#33667e" data-preview-label="04">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">MyPay Gold &mdash; Investment Platform</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://www.mypayevents.com/" target="_blank" rel="noopener" data-preview-color="#6e3378" data-preview-label="05">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">MyPay Events &mdash; Voting Platform</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://instaremit.com.au/" target="_blank" rel="noopener" data-preview-color="#7e3355" data-preview-label="06">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">Insta Remit &mdash; AU Remittance</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://registeredremit.com.au/" target="_blank" rel="noopener" data-preview-color="#3e7e33" data-preview-label="07">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">Registered Remit &mdash; AU Remittance</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://shreeommandir.com/" target="_blank" rel="noopener" data-preview-color="#7e6b33" data-preview-label="08">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">Shree Om Mandir &mdash; Digital Temple App</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://kplt20.org/" target="_blank" rel="noopener" data-preview-color="#33417e" data-preview-label="09">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">Koshi Pride League &mdash; Cricket Platform</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://lotto.rajatshrestha.info.np/" target="_blank" rel="noopener" data-preview-color="#337e70" data-preview-label="10">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">Lottery Results &amp; Tickets App</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://futureworkrealestate.com/" target="_blank" rel="noopener" data-preview-color="#7e3333" data-preview-label="11">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">FutureWork &mdash; Real Estate Platform</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://zamzamperfumes.com.np/" target="_blank" rel="noopener" data-preview-color="#5c337e" data-preview-label="12">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">ZamZam Perfumes &mdash; E-commerce Site</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
          <a className="project-link" role="listitem" href="https://nemdec-nepal-client.netlify.app/" target="_blank" rel="noopener" data-preview-color="#7e5533" data-preview-label="13">
            <span className="p-dot" aria-hidden="true"></span>
            <span className="p-name">NEMDEC &mdash; Consultancy Website</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <span className="p-arrow" aria-hidden="true">
              <FaArrowUpRightFromSquare aria-hidden="true" focusable="false" />
            </span>
          </a>
        </div>
      </div>
      <div className="project-preview" id="projectPreview" aria-hidden="true">
        <img id="projectPreviewImg" alt="" />
      </div>
    </>
  );
};

export default Project;