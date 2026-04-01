import React from "react";

const Header = () => {
  return (
    <>
      <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
        <nav className="mt-4 relative max-w-2xl w-full bg-navbar border border-navbar-line rounded rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto">
          <div className="flex items-center">
            {/* <img
              src="/logo.png"
              alt=""
              style={{ height: "50px", width: "60px" }}
            /> */}
            <img src="/logo-black.png" alt="" style={{height:'50px', width:'60px'}} />
          </div>

          <div className="flex items-center gap-1 md:order-4 md:ms-4">
            <a
              className="w-full sm:w-auto whitespace-nowrap py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded rounded-[24px] bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
              href="#"
            >
              Book a call
            </a>

            <div className="md:hidden">
              <button
                type="button"
                className="hs-collapse-toggle flex justify-center items-center size-9.5 bg-layer border border-layer-line text-muted-foreground-1 rounded-full hover:bg-muted-hover focus:outline-hidden focus:bg-muted-focus"
                id="hs-pro-pnm-collapse"
                aria-expanded="false"
                aria-controls="hs-pro-pnm"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-pro-pnm"
              >
                <svg
                  className="hs-collapse-open:hidden shrink-0 size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" x2="21" y1="6" y2="6" />
                  <line x1="3" x2="21" y1="12" y2="12" />
                  <line x1="3" x2="21" y1="18" y2="18" />
                </svg>
                <svg
                  className="hs-collapse-open:block hidden shrink-0 size-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div
            id="hs-pro-pnm"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block"
            aria-labelledby="hs-pro-pnm-collapse"
            role="region"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 hover:text-navbar-nav-foreground-hover focus:outline-hidden focus:navbar-nav-focus border-primary font-medium text-navbar-nav-foreground"
                href="#"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 hover:text-navbar-nav-foreground-hover focus:outline-hidden focus:navbar-nav-focus border-transparent text-navbar-nav-foreground/80"
                href="#"
                aria-current="page"
              >
                Work
              </a>
              <a
                className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 hover:text-navbar-nav-foreground-hover focus:outline-hidden focus:navbar-nav-focus border-transparent text-navbar-nav-foreground/80"
                href="#"
                aria-current="page"
              >
                Reviews
              </a>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
