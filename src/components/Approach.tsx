import { useEffect } from "react";

const PRINCIPLES = [
  {
    title: "Map the mess before redesigning it",
    body:
      "Most of the workflows I inherit didn't start on a whiteboard — they grew out of whatever got a transaction processed on a deadline. Before proposing a cleaner version, I want to understand why the messy one looks the way it does. Usually there's a reason, even if it's a bad one.",
  },
  {
    title: "Normalize at the edges, keep the core simple",
    body:
      "Wallets, remittance flows, and KYC systems all end up talking to a lot of third-party services, each with its own shape. I'd rather spend the time up front making integrations conform to a shared contract than let that inconsistency leak into the core logic, where it's much more expensive to untangle later.",
  },
  {
    title: "Match the stack to the constraints, not the trend",
    body:
      "A framework is worth its overhead when a codebase will grow and change hands. It's dead weight when a tool needs to serve a small, fixed set of users for years with minimal upkeep. I try to pick based on what a project actually needs to survive, not what's most interesting to build with.",
  },
  {
    title: "Compliance and trust are UX problems too",
    body:
      "In fintech and remittance work, an unclear KYC step or an ambiguous transaction status isn't just a design nitpick — it's the difference between a user trusting the product with their money and abandoning it halfway through. Clarity in the interface carries real weight here.",
  },
  {
    title: "A shared fix should ship once",
    body:
      "If the same bug can exist in twenty places at once, the architecture is the bug. I'd rather invest in consolidating shared logic early than keep patching the same issue in slightly different codebases indefinitely.",
  },
];

export default function Approach() {
  useEffect(() => {
    document.title = "Approach — Ayush Niraula";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div data-reveal className="is-visible">
      <h1>Approach</h1>
      <p className="tagline">a few principles that shape how I build.</p>

      <div className="approach-list">
        {PRINCIPLES.map((p, i) => (
          <div className="approach-row" key={p.title}>
            <span className="approach-index" aria-hidden="true">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <div className="approach-title">{p.title}</div>
              <p className="approach-body">{p.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
