import { useEffect } from "react";
import { Link, useParams } from "react-router";

// Edit this array to add/update/remove posts.
// Each post needs: slug, title, date, tag, excerpt, body (HTML string).
const POSTS = [
  {
    slug: "designing-for-messy-b2b-workflows",
    title: "Designing for messy B2B workflows",
    date: "2026-06-02",
    tag: "process",
    excerpt:
      "Notes on untangling freight and procurement flows that live half in spreadsheets, half in someone's head.",
    body:
      "<p>Most of the interesting design problems I run into don't start on a whiteboard. They start in a spreadsheet someone built five years ago and never stopped patching.</p>" +
      "<p>When a workflow is <b>messy</b>, the temptation is to redesign it into something clean immediately. In practice, the first job is just mapping how people actually get the work done today &mdash; workarounds included.</p>" +
      "<p>More on this soon.</p>",
  },
  {
    slug: "from-blueprints-to-browsers",
    title: "From blueprints to browsers",
    date: "2026-05-14",
    tag: "career",
    excerpt:
      "What studying architecture actually taught me about product design, and what it didn't.",
    body:
      "<p>People assume the jump from architecture to product design is a bigger leap than it is. The medium changes. The questions mostly don't.</p>" +
      "<p>Constraints, circulation, and how people actually move through a space (physical or digital) &mdash; it's the same job with different tools.</p>",
  },
  {
    slug: "now",
    title: "Now",
    date: "2026-04-01",
    tag: "log",
    excerpt: "What I'm currently building, reading, and poking at outside of work.",
    body:
      "<p>Currently finishing the interiors of my family home, slowly rebuilding this site's blog section, and reading more than I'm writing.</p>",
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
      <div className="post-body" dangerouslySetInnerHTML={{ __html: post.body }} />
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