import { useEffect } from "react";
import { Link, useParams } from "react-router";

// Edit this array to add/update/remove posts.
// Each post needs: slug, title, date, tag, excerpt, cover, coverAlt, body (HTML string).
const POSTS = [
  {
    slug: "21-apps-one-shared-library",
    title: "21 remittance apps, 4 months, one shared library",
    date: "2026-06-18",
    tag: "engineering",
    cover: "/blog/monorepo.svg",
    coverAlt: "Abstract diagram of many nodes converging into one central point",
    excerpt:
      "How XpressV2 went from 21 near-identical Angular codebases to one shared library and 21 thin shells — and what standalone components and signals had to do with it.",
    body:
      "<p>At one point, our team was maintaining 21 separate remittance platforms &mdash; same core flows, same KYC steps, same wallet logic &mdash; each living in its own Angular codebase. Every fix had to be copy-pasted 21 times. Every bug had 21 chances to slip through.</p>" +
      "<p>The brief for XpressV2 was simple to say and hard to do: turn that into <b>one shared library and 21 thin shells</b>, without a rewrite freeze that would stop client work for months.</p>" +
      "<h3>Standalone first</h3>" +
      "<p>We leaned hard on Angular's standalone components so the shared pieces &mdash; send modals, wallet load wizards, currency conversion, multi-step KYC &mdash; didn't drag an NgModule graph along with them. Each shell could import exactly what it needed and nothing else.</p>" +
      "<p>Getting the barrel exports right mattered more than I expected going in. A shared library with a messy public surface just moves the duplication problem from 'copy-pasted code' to 'copy-pasted imports.' We spent real time making sure each shell only ever imported from a small, deliberate set of entry points.</p>" +
      "<h3>Zoneless, with signals</h3>" +
      "<p>We also moved change detection to signals and ran the shared library zoneless. For flows handling live currency conversion and wallet balances, not depending on zone.js to figure out when to re-render made the update path a lot more predictable &mdash; you could trace exactly what triggered a re-render instead of hoping zone.js caught it.</p>" +
      "<h3>What actually shipped</h3>" +
      "<p>21 platforms went out in about four months, each with its own branding and domain but sharing the same tested core underneath. The real win wasn't the four months &mdash; it was that a KYC fix now ships once, not 21 times.</p>",
  },
  {
    slug: "building-rirems-without-a-framework",
    title: "Why RIREMS is a single vanilla JS file",
    date: "2026-05-09",
    tag: "process",
    cover: "/blog/rirems.svg",
    coverAlt: "Abstract diagram of a document with checked rows, suggesting a records ledger",
    excerpt:
      "Building a government fraud-investigation portal and choosing not to reach for a framework — and why that was the right call for this one.",
    body:
      "<p>RIREMS is a regulatory portal used to investigate remittance fraud &mdash; case records, flagged transactions, audit trails, backed by Supabase. It's also, by choice, a single vanilla JavaScript file.</p>" +
      "<p>That wasn't laziness. Most of my day-to-day work is Angular or React, and reaching for a framework is usually the right instinct. But this tool had a specific shape: a small, fixed set of internal users, a review-heavy procurement process where every dependency has to be justified, and a lifespan measured in years without much appetite for maintenance work.</p>" +
      "<h3>What a framework would have cost here</h3>" +
      "<p>A build step, a dependency tree, and a framework upgrade path are worth it when a codebase is going to grow and change hands. RIREMS mostly needed to keep working, quietly, for a small compliance team. Every dependency I didn't add was one less thing to explain in a security review and one less thing to go stale.</p>" +
      "<h3>What Supabase carried</h3>" +
      "<p>Supabase did the heavy lifting &mdash; auth, row-level security on case data, and realtime updates so two investigators looking at the same case don't step on each other. The vanilla JS layer stayed thin: render the tables, wire the forms, call Supabase, done.</p>" +
      "<p>It's not a flashy stack. But for a portal where trust and auditability matter more than developer experience, boring was the feature.</p>",
  },
  {
    slug: "integrating-50-services-into-a-kyc-wallet",
    title: "Integrating 50+ services into a digital wallet, one contract at a time",
    date: "2026-03-22",
    tag: "engineering",
    cover: "/blog/kyc-wallet.svg",
    coverAlt: "Abstract diagram of a central wallet node connected to many service nodes",
    excerpt:
      "Notes on wiring 50+ third-party services into MyPay's KYC digital wallet — payment providers, utility billers, verification services — without every integration becoming its own special case.",
    body:
      "<p>MyPay's digital wallet sits in front of a lot of other people's systems &mdash; payment providers, utility billers, KYC and identity verification services, and more, more than 50 in total, serving 500K+ users. Every one of them has its own API shape, its own failure modes, and its own idea of what a 'pending' transaction means.</p>" +
      "<h3>The trap: one integration, one special case</h3>" +
      "<p>The easy path is to build each integration as its own thing &mdash; a bespoke module per provider, a bespoke error-handling story per provider. It works right up until the wallet has 50 of them, and every new engineer has to learn 50 slightly different mental models before they can safely touch billing code.</p>" +
      "<h3>What held it together</h3>" +
      "<p>What made this manageable was treating verification and payment providers as implementations of a small number of shared contracts, not as 50 unrelated integrations. A provider adapter had to answer the same handful of questions the same way &mdash; what does 'pending' mean here, what's retryable, what needs a human in the loop &mdash; so the wallet's core logic never had to know or care which specific provider it was talking to underneath.</p>" +
      "<p>That discipline paid off most during KYC flows specifically, where a verification step failing silently isn't just a bug, it's a compliance problem. Normalizing failure states across providers meant the wallet could handle a provider timeout or a rejected document the same way regardless of which service produced it.</p>" +
      "<h3>Where it mattered most</h3>" +
      "<p>The same pattern carried into the Agent Wallet's commission and sub-network tooling, and into real-time notifications across the platform &mdash; different feature, same underlying idea: normalize at the edges, keep the core simple, and let new integrations slot into an existing shape instead of inventing a new one.</p>",
  },
];

function formatDate(iso:any) {
  const d = new Date(iso + "T00:00:00");
  if (isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function BlogList() {
  useEffect(() => {
    document.title = "Blog — Ayush Niraula";
    window.scrollTo(0, 0);
  }, []);

  const sorted = [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <div data-reveal className="is-visible">
      <h1>Blog</h1>
      <p className="tagline">notes on design, code, and the systems in between.</p>
      <div className="blog-list" role="list" aria-label="Blog posts">
        {sorted.length === 0 ? (
          <div className="blog-empty">No posts yet &mdash; check back soon.</div>
        ) : (
          sorted.map((post) => (
            <Link key={post.slug} className="blog-row" to={`/blog/${post.slug}`} role="listitem">
              <span className="blog-row-cover" aria-hidden="true">
                <img src={post.cover} alt="" loading="lazy" />
              </span>
              <span className="blog-row-date">{formatDate(post.date)}</span>
              <span className="blog-row-main">
                <span className="blog-row-head">
                  <span className="blog-title">{post.title}</span>
                  {post.tag ? <span className="blog-tag">{post.tag}</span> : null}
                </span>
                <p className="blog-excerpt">{post.excerpt}</p>
              </span>
              <span className="blog-row-arrow" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

function BlogPost({ post }:any) {
  useEffect(() => {
    document.title = post.title + " — Ayush Niraula";
    window.scrollTo(0, 0);
  }, [post]);

  return (
    <div data-reveal className="is-visible">
      <div className="post-meta-row">
        <span className="post-date">{formatDate(post.date)}</span>
        {post.tag ? <span className="post-tag">{post.tag}</span> : null}
      </div>
      <h1 className="post-title">{post.title}</h1>
      {post.cover ? (
        <div className="post-cover">
          <img src={post.cover} alt={post.coverAlt || ""} />
        </div>
      ) : null}
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
      <div className="post-footer">
        <Link to="/blog">&larr; Back to all posts</Link>
      </div>
    </div>
  );
}

export default function Blog() {
  const { slug } = useParams();

  if (!slug) return <BlogList />;

  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div data-reveal className="is-visible">
        <h1>Post not found</h1>
        <p className="tagline">
          That post doesn't exist. <Link to="/blog">Back to the blog</Link>.
        </p>
      </div>
    );
  }

  return <BlogPost post={post} />;
}
