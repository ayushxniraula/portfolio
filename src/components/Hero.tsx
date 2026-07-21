import { FaDownload } from "react-icons/fa6";
import { PiArrowBendDownLeft } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div data-reveal>
        <h1>Hey, it&rsquo;s Ayush!</h1>
        <p className="tagline">designer. observer. chronic note-taker.</p>

      <span className="status-pill">
  <span className="status-dot" aria-hidden="true" />
  <b>Open to work</b> &mdash; freelance &amp; full-time
</span>

        <p>
          I am currently working as the <b>founding product designer</b> for
          <a
            href="#"
            target="_blank"
            rel="noopener"
            data-tooltip="eagleinbrit.com"
          >
            Eagle Inbrit<span className="sr-only"> (opens in a new tab)</span>
          </a>
          , where I design software for <b>logistics sales, supply,</b> and
          <b>operations teams.</b> Most of my work sits within complex
          <b>B2B systems</b>, where workflows are messy, decisions carry real
          operational consequences, and clarity is often the hardest thing to
          design. Over the last 3+ years, I&rsquo;ve worked closely with teams
          managing <b>freight, rates, procurement,</b> and
          <b>day-to-day operations.</b> Much of my work begins with
          understanding how things actually work; across spreadsheets,
          conversations, handoffs, and the countless workarounds people build
          for themselves.
        </p>

        <p>
          I studied <b>architecture</b> before moving into product design.
          Looking back, the transition feels less like a career change and more
          like a change in medium. I&rsquo;ve always been interested in
          <b>systems, constraints,</b> and the way people move through
          <b>environments</b>; the environments just happen to be digital now.
        </p>

        <p>
          Outside of work, I continue to explore design through other mediums.
          I&rsquo;m currently finishing up the interiors of my family home,
          alongside photography, illustration, and other projects that
          occasionally find their way onto this site how things actually work;
          across spreadsheets, conversations, handoffs, and the countless
          workarounds people build for themselves.
        </p>

        <a className="resume-link" href="/resume.pdf" download>
          <span className="resume-icon" aria-hidden="true">
            <FaDownload aria-hidden="true" focusable="false" />
          </span>
          Download Resume
          <span className="sr-only"> (PDF file)</span>
        </a>

        <div className="portrait-block">
          <div className="portrait">
            <img src="/ayush.jpg" alt="Portrait of Ayush Niraula" />
          </div>
          <div className="margin-note" aria-hidden="true">
            that&rsquo;s me — still trading blueprints for browsers
            <PiArrowBendDownLeft aria-hidden="true" focusable="false" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
