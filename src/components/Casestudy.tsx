import { useEffect } from "react";

export default function CaseStudy() {
  useEffect(() => {
    document.title = "Case Study — Ayush Niraula";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-reveal className="is-visible">
      <h1>Case Studies</h1>
      <p className="tagline">deeper dives into specific projects, coming soon.</p>
      <p>No case study as of now &mdash; check back soon.</p>
    </div>
  );
}