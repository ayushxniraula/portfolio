import { useEffect } from "react";
import { Link, useParams } from "react-router";

const CASE_STUDIES = [
  {
    slug: "xpressv2-shared-library",
    title: "XpressV2: turning 21 remittance codebases into one shared library",
    org: "The Big Solutions",
    period: "2024–Present",
    tag: "engineering",
    cover: "/blog/case-study-xpressv2.svg",
    coverAlt: "Diagram of a shared library feeding multiple thin platform shells",
    dek:
      "Same KYC flows, same wallet logic, same bugs — copy-pasted across 21 separate Angular projects. Here's how we consolidated them into a single shared library and 21 thin platform shells, without freezing client work to do it.",
    sections: [
      {
        heading: "The problem",
        html:
          "<p>Our team was maintaining 21 remittance platforms for different clients and markets. Each one ran the same core flows &mdash; KYC verification, wallet loading, currency conversion, agent commission tooling &mdash; but each lived in its own Angular codebase. A single fix to the KYC step meant opening 21 pull requests. Some inevitably got missed. Bugs would get patched in one platform and quietly persist in the other twenty.</p>",
      },
      {
        heading: "The constraint",
        html:
          "<p>We couldn't stop shipping client work to rebuild everything from scratch. Whatever the new architecture looked like, it had to let us migrate platforms one at a time, in production, while still taking on new client requests in parallel.</p>",
      },
      {
        heading: "The approach",
        html:
          "<p>XpressV2 splits the system into one shared library and 21 thin shells, each shell owning only branding, routing, and environment config for its platform.</p>" +
          "<ul class=\"cs-list\">" +
          "<li><b>Standalone components throughout.</b> Send modals, wallet load wizards, currency conversion, and multi-step KYC all became standalone Angular components, so a shell could import exactly the pieces it needed without dragging in an NgModule graph it didn't use.</li>" +
          "<li><b>Deliberate barrel exports.</b> A shared library is only as clean as its public surface. We spent real time making sure every shell imported from a small, intentional set of entry points &mdash; otherwise duplication just moves from copy-pasted code to copy-pasted imports.</li>" +
          "<li><b>Zoneless change detection with signals.</b> For flows handling live currency conversion and wallet balances, moving off zone.js and onto signals made the update path traceable: every re-render has a clear cause instead of an implicit one.</li>" +
          "<li><b>SendConnector / SendService architecture.</b> The same pattern that powers the remittance send flow was reused for adjacent utility-payment work &mdash; internet provider lookups, flight booking history, electricity payments &mdash; so new payment types slot into the existing service layer instead of inventing a new one each time.</li>" +
          "</ul>",
      },
      {
        heading: "What shipped",
        html:
          "<p>21 platforms went live on the new architecture in about four months, each keeping its own branding and domain while sharing the same tested core underneath. The number that mattered more than the four months: a KYC fix now ships once, to one library, instead of 21 times.</p>",
      },
      {
        heading: "What I'd do differently",
        html:
          "<p>The barrel-export discipline should have been a written convention from day one instead of something the team converged on halfway through. A couple of early shells imported deeper than they should have, which meant a short cleanup pass once the pattern was settled. Worth the cost, but it's the kind of thing that's cheaper to decide upfront.</p>",
      },
    ],
    relatedSlug: "21-apps-one-shared-library",
    relatedLabel: "Read the shorter blog post on this",
  },
  {
    slug: "rirems-fraud-investigation-portal",
    title: "RIREMS: a fraud-investigation portal built to be boring",
    org: "The Big Solutions",
    period: "2024–Present",
    tag: "product",
    cover: "/blog/rirems.svg",
    coverAlt: "Diagram of a document with checked rows, suggesting a records ledger",
    dek:
      "A regulatory portal for investigating remittance fraud, built as a single vanilla JS file on Supabase — and why that was the right call, not a shortcut, for this particular tool.",
    sections: [
      {
        heading: "The brief",
        html:
          "<p>RIREMS needed to give a small internal compliance team a way to review flagged transactions, manage case records, and keep an audit trail &mdash; the kind of tool that has to be trustworthy and auditable far more than it needs to be impressive.</p>",
      },
      {
        heading: "Why not a framework",
        html:
          "<p>Most of my day-to-day work is Angular or React, and reaching for a framework is usually the right instinct. RIREMS had a different shape: a small, fixed set of internal users, a review-heavy procurement process where every dependency has to be justified, and a lifespan measured in years without much appetite for ongoing maintenance.</p>" +
          "<p>A build step, a dependency tree, and a framework upgrade path are worth it when a codebase is going to grow and change hands often. RIREMS mostly needed to keep working, quietly, for a small team. Every dependency left out was one less thing to explain in a security review and one less thing to go stale.</p>",
      },
      {
        heading: "What Supabase carried",
        html:
          "<p>Supabase handled auth, row-level security on case data, and realtime updates so two investigators looking at the same case wouldn't step on each other. The vanilla JS layer stayed thin by design: render the tables, wire the forms, call Supabase.</p>",
      },
      {
        heading: "The outcome",
        html:
          "<p>A portal that's easy to reason about end to end, with no framework upgrade cycle to manage and a small enough surface area that a security review doesn't take a week. Not every project needs to be built the same way &mdash; matching the tool to the constraints mattered more here than using the 'better' stack.</p>",
      },
    ],
    relatedSlug: "building-rirems-without-a-framework",
    relatedLabel: "Read the shorter blog post on this",
  },
];

function CaseStudyList() {
  useEffect(() => {
    document.title = "Case Study — Ayush Niraula";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-reveal className="is-visible">
      <h1>Case Study</h1>
      <p className="tagline">deeper dives into specific projects.</p>
      <div className="blog-list" role="list" aria-label="Case studies">
        {CASE_STUDIES.map((cs) => (
          <Link key={cs.slug} className="blog-row" to={`/case-study/${cs.slug}`} role="listitem">
            <span className="blog-row-cover" aria-hidden="true">
              <img src={cs.cover} alt="" loading="lazy" />
            </span>
            <span className="blog-row-main">
              <span className="blog-row-head">
                <span className="blog-title">{cs.title}</span>
                <span className="blog-tag">{cs.tag}</span>
              </span>
              <p className="blog-excerpt">{cs.dek}</p>
            </span>
            <span className="blog-row-arrow" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

function CaseStudyDetail({ cs }: any) {
  useEffect(() => {
    document.title = cs.title + " — Ayush Niraula";
    window.scrollTo(0, 0);
  }, [cs]);

  return (
    <div data-reveal className="is-visible">
      <article className="case-study">
        <header className="cs-header">
          <div className="cs-header-meta">
            <span className="post-tag">{cs.tag}</span>
            <span className="post-date">
              {cs.org} &middot; {cs.period}
            </span>
          </div>
          <h1 className="cs-title">{cs.title}</h1>
          <p className="cs-dek">{cs.dek}</p>
        </header>

        <div className="cs-cover">
          <img src={cs.cover} alt={cs.coverAlt || ""} />
        </div>

        <div className="cs-body">
          {cs.sections.map((s: any) => (
            <div key={s.heading}>
              <h3>{s.heading}</h3>
              <div dangerouslySetInnerHTML={{ __html: s.html }} />
            </div>
          ))}
        </div>

        <div className="cs-footer">
          {cs.relatedSlug ? (
            <Link to={`/blog/${cs.relatedSlug}`}>{cs.relatedLabel} &rarr;</Link>
          ) : null}
        </div>
      </article>

      <div className="post-footer">
        <Link to="/case-study">&larr; Back to all case studies</Link>
      </div>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();

  if (!slug) return <CaseStudyList />;

  const cs = CASE_STUDIES.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div data-reveal className="is-visible">
        <h1>Case study not found</h1>
        <p className="tagline">
          That one doesn't exist. <Link to="/case-study">Back to case studies</Link>.
        </p>
      </div>
    );
  }

  return <CaseStudyDetail cs={cs} />;
}
