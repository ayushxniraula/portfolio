import { FaChevronLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";

const Nav = () => {
  const navigate = useNavigate();

  const isHome: any = location.pathname === "/";
  const caseStudyActive: any = location.pathname.startsWith("/case-study");
  const contactActive: any = location.pathname === "/contact";
  const approachActive: any = location.pathname === "/approach";

  const isBack: any = !isHome;
  const isBlogPost: any = /^\/blog\/.+/.test(location.pathname);

  const backTo: any = isBlogPost ? "/blog" : "/";
  const blogActive: any = location.pathname.startsWith("/blog");

  function handleBrandClick(e: any) {
    if (isBlogPost) {
      e.preventDefault();
      navigate("/blog");
    }
  }

  return (
    <>
      <div className="top-row">
        <div className="brand-group">
          <Link
            className={"brand-mark" + (isBack ? " is-back" : "")}
            id="brandMark"
            to={backTo}
            onClick={handleBrandClick}
            aria-label={isBack ? "Go back" : "Ayush Niraula — home"}
          >
            <span className="mark" id="brandMarkIcon" aria-hidden="true">
              {isBack ? (
                <FaChevronLeft aria-hidden="true" focusable="false" />
              ) : (
                "✌🏻"
              )}
            </span>
          </Link>
        </div>
        <nav className="top-nav" aria-label="Site sections">
          <Link
            className={"nav-link" + (blogActive ? " is-active" : "")}
            to="/blog"
          >
            Blogs
          </Link>
          <Link
            className={"nav-link" + (caseStudyActive ? " is-active" : "")}
            to="/case-study"
          >
            Case Study
          </Link>
          <Link
            className={"nav-link" + (approachActive ? " is-active" : "")}
            to="/approach"
          >
            Approach
          </Link>
          <Link
  className={"nav-link" + (contactActive ? " is-active" : "")}
  to="/contact"
>
  Contact
</Link>
        </nav>
      </div>
    </>
  );
};

export default Nav;
