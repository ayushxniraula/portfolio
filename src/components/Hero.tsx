import { FaDownload } from "react-icons/fa6";
import { PiArrowBendDownLeft } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <div data-reveal>
        <h1>Hey, it&rsquo;s Ayush!</h1>
        <p className="tagline">Software Engineer (JavaScript / TypeScript / Full Stack)</p>

      <span className="status-pill">
  <span className="status-dot" aria-hidden="true" />
  <b>Open to work</b> &mdash; freelance &amp; full-time
</span>


<p>
  I am currently working as a <b>Software Engineer / Frontend Team Lead</b> at{" "}
  
   <a href="https://thebigsolutions.com/"
    target="_blank"
    rel="noopener"
    data-tooltip="thebigsolutions.com"
  >
    The Big Solutions<span className="sr-only"> (opens in a new tab)</span>
  </a>
  , where I lead a team of developers building full-stack{" "}
  <b>JavaScript and TypeScript</b> applications across Angular and React.
  Most of my work sits within <b>complex web applications including voting
  systems, fintech and remittance systems, and digital wallets</b> where
  workflows involve real money, real compliance requirements, and real
  operational stakes, and clarity in the interface is often the difference
  between trust and confusion. Over the last 3+ years, I&rsquo;ve also led and
  worked closely with teams managing <b>digital wallets and agent portals</b>{" "}
  at{" "}
  
   <a href="https://mypay.com.np/"
    target="_blank"
    rel="noopener"
    data-tooltip="mypay.com.np"
  >
    MyPay<span className="sr-only"> (opens in a new tab)</span>
  </a>
  . Much of my work begins with understanding flow across KYC flows,
  verification journeys, payment integrations, and the countless edge cases
  that come with handling other people&rsquo;s transactions.
</p>

<p>
  I started out as a <b>freelance full-stack developer</b>, picking up
  projects wherever I could and learning by building. Looking back, that
  period feels less like a warm-up and more like where the instincts formed:
  an interest in other domains including <b>real estate applications and
  management systems</b> and the way people move through <b>flows</b> that
  need to feel simple even when what&rsquo;s happening underneath is not.
</p>

<p>
  Outside of work, I continue to explore that same interest through side
  projects; looking for new clients to collaborate with, tinkering with{" "}
  <b>machine learning / artificial intelligence</b>, and other things that
  occasionally take shape outside corporate work.
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
            that&rsquo;s me — still figuring out where the semicolon goes and where the bracket ends
            <PiArrowBendDownLeft aria-hidden="true" focusable="false" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
