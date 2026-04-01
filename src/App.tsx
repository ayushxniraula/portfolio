import "./App.css";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Testimonial from "./components/Testimonial";
import Work from "./components/Work";

function App() {
  return (
    <>
      <body className="bg-background">
        <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
          <nav className="mt-4 relative max-w-2xl w-full bg-navbar border border-navbar-line rounded rounded-[24px] mx-2 flex flex-wrap md:flex-nowrap items-center justify-between p-1 ps-4 md:py-0 sm:mx-auto">
            <div className="flex items-center">
              <a
                className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-hidden focus:opacity-80"
                href="index.html"
                aria-label="Preline"
              >
                <svg
                  className="w-24 h-auto"
                  width="116"
                  height="32"
                  viewBox="0 0 116 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5696 30.8182V11.3182H37.4474V13.7003H37.6229C37.7952 13.3187 38.0445 12.9309 38.3707 12.5369C38.7031 12.1368 39.134 11.8045 39.6634 11.5398C40.1989 11.2689 40.8636 11.1335 41.6577 11.1335C42.6918 11.1335 43.6458 11.4044 44.5199 11.946C45.3939 12.4815 46.0926 13.291 46.6158 14.3743C47.139 15.4515 47.4006 16.8026 47.4006 18.4276C47.4006 20.0095 47.1451 21.3452 46.6342 22.4347C46.1295 23.518 45.4401 24.3397 44.5661 24.8999C43.6982 25.4538 42.7256 25.7308 41.6484 25.7308C40.8852 25.7308 40.2358 25.6046 39.7003 25.3523C39.1709 25.0999 38.737 24.7829 38.3984 24.4013C38.0599 24.0135 37.8014 23.6226 37.6229 23.2287H37.5028V30.8182H33.5696ZM37.4197 18.4091C37.4197 19.2524 37.5367 19.9879 37.7706 20.6158C38.0045 21.2436 38.343 21.733 38.7862 22.0838C39.2294 22.4285 39.768 22.6009 40.402 22.6009C41.0421 22.6009 41.5838 22.4254 42.027 22.0746C42.4702 21.7176 42.8056 21.2251 43.0334 20.5973C43.2673 19.9633 43.3842 19.2339 43.3842 18.4091C43.3842 17.5904 43.2704 16.8703 43.0426 16.2486C42.8149 15.6269 42.4794 15.1406 42.0362 14.7898C41.593 14.4389 41.0483 14.2635 40.402 14.2635C39.7618 14.2635 39.2202 14.4328 38.777 14.7713C38.34 15.1098 38.0045 15.59 37.7706 16.2116C37.5367 16.8333 37.4197 17.5658 37.4197 18.4091ZM49.2427 25.5V11.3182H53.0559V13.7926H53.2037C53.4622 12.9124 53.8961 12.2476 54.5055 11.7983C55.1149 11.3428 55.8166 11.1151 56.6106 11.1151C56.8076 11.1151 57.02 11.1274 57.2477 11.152C57.4754 11.1766 57.6755 11.2105 57.8478 11.2536V14.7436C57.6632 14.6882 57.4077 14.639 57.0815 14.5959C56.7553 14.5528 56.4567 14.5312 56.1859 14.5312C55.6073 14.5312 55.0903 14.6574 54.6348 14.9098C54.1854 15.156 53.8284 15.5007 53.5638 15.9439C53.3052 16.3871 53.176 16.898 53.176 17.4766V25.5H49.2427ZM64.9043 25.777C63.4455 25.777 62.1898 25.4815 61.1373 24.8906C60.0909 24.2936 59.2845 23.4503 58.7182 22.3608C58.1519 21.2652 57.8688 19.9695 57.8688 18.4737C57.8688 17.0149 58.1519 15.7346 58.7182 14.6328C59.2845 13.531 60.0816 12.6723 61.1096 12.0568C62.1437 11.4413 63.3563 11.1335 64.7474 11.1335C65.683 11.1335 66.5539 11.2843 67.3603 11.5859C68.1728 11.8814 68.8806 12.3277 69.4839 12.9247C70.0932 13.5218 70.5672 14.2727 70.9057 15.1776C71.2443 16.0762 71.4135 17.1288 71.4135 18.3352V19.4155H59.4384V16.978H67.7111C67.7111 16.4117 67.588 15.91 67.3418 15.473C67.0956 15.036 66.754 14.6944 66.317 14.4482C65.8861 14.1958 65.3844 14.0696 64.812 14.0696C64.2149 14.0696 63.6856 14.2081 63.2239 14.4851C62.7684 14.7559 62.4114 15.1222 62.1529 15.5838C61.8944 16.0393 61.762 16.5471 61.7559 17.1072V19.4247C61.7559 20.1264 61.8851 20.7327 62.1437 21.2436C62.4083 21.7545 62.7807 22.1484 63.2608 22.4254C63.741 22.7024 64.3103 22.8409 64.9689 22.8409C65.406 22.8409 65.8061 22.7794 66.1692 22.6562C66.5324 22.5331 66.8432 22.3485 67.1018 22.1023C67.3603 21.8561 67.5572 21.5545 67.6927 21.1974L71.3304 21.4375C71.1458 22.3116 70.7672 23.0748 70.1948 23.7273C69.6285 24.3736 68.896 24.8783 67.9974 25.2415C67.1048 25.5985 66.0738 25.777 64.9043 25.777ZM77.1335 6.59091V25.5H73.2003V6.59091H77.1335ZM79.5043 25.5V11.3182H83.4375V25.5H79.5043ZM81.4801 9.49006C80.8954 9.49006 80.3937 9.29616 79.9752 8.90838C79.5628 8.51444 79.3566 8.04356 79.3566 7.49574C79.3566 6.95407 79.5628 6.48935 79.9752 6.10156C80.3937 5.70762 80.8954 5.51065 81.4801 5.51065C82.0649 5.51065 82.5635 5.70762 82.9759 6.10156C83.3944 6.48935 83.6037 6.95407 83.6037 7.49574C83.6037 8.04356 83.3944 8.51444 82.9759 8.90838C82.5635 9.29616 82.0649 9.49006 81.4801 9.49006ZM89.7415 17.3011V25.5H85.8083V11.3182H89.5569V13.8203H89.723C90.037 12.9955 90.5632 12.343 91.3019 11.8629C92.0405 11.3767 92.9361 11.1335 93.9887 11.1335C94.9735 11.1335 95.8322 11.349 96.5647 11.7798C97.2971 12.2107 97.8665 12.8262 98.2728 13.6264C98.679 14.4205 98.8821 15.3684 98.8821 16.4702V25.5H94.9489V17.1719C94.9551 16.304 94.7335 15.6269 94.2841 15.1406C93.8348 14.6482 93.2162 14.402 92.4283 14.402C91.8989 14.402 91.4311 14.5159 91.0249 14.7436C90.6248 14.9714 90.3109 15.3037 90.0831 15.7408C89.8615 16.1716 89.7477 16.6918 89.7415 17.3011ZM107.665 25.777C106.206 25.777 104.951 25.4815 103.898 24.8906C102.852 24.2936 102.045 23.4503 101.479 22.3608C100.913 21.2652 100.63 19.9695 100.63 18.4737C100.63 17.0149 100.913 15.7346 101.479 14.6328C102.045 13.531 102.842 12.6723 103.87 12.0568C104.905 11.4413 106.117 11.1335 107.508 11.1335C108.444 11.1335 109.315 11.2843 110.121 11.5859C110.934 11.8814 111.641 12.3277 112.245 12.9247C112.854 13.5218 113.328 14.2727 113.667 15.1776C114.005 16.0762 114.174 17.1288 114.174 18.3352V19.4155H102.199V16.978H110.472C110.472 16.4117 110.349 15.91 110.103 15.473C109.856 15.036 109.515 14.6944 109.078 14.4482C108.647 14.1958 108.145 14.0696 107.573 14.0696C106.976 14.0696 106.446 14.2081 105.985 14.4851C105.529 14.7559 105.172 15.1222 104.914 15.5838C104.655 16.0393 104.523 16.5471 104.517 17.1072V19.4247C104.517 20.1264 104.646 20.7327 104.905 21.2436C105.169 21.7545 105.542 22.1484 106.022 22.4254C106.502 22.7024 107.071 22.8409 107.73 22.8409C108.167 22.8409 108.567 22.7794 108.93 22.6562C109.293 22.5331 109.604 22.3485 109.863 22.1023C110.121 21.8561 110.318 21.5545 110.454 21.1974L114.091 21.4375C113.907 22.3116 113.528 23.0748 112.956 23.7273C112.389 24.3736 111.657 24.8783 110.758 25.2415C109.866 25.5985 108.835 25.777 107.665 25.777Z"
                    className="fill-primary"
                    fill="currentColor"
                  />
                  <path
                    d="M1 29.5V16.5C1 9.87258 6.37258 4.5 13 4.5C19.6274 4.5 25 9.87258 25 16.5C25 23.1274 19.6274 28.5 13 28.5H12"
                    className="stroke-primary"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <path
                    d="M5 29.5V16.66C5 12.1534 8.58172 8.5 13 8.5C17.4183 8.5 21 12.1534 21 16.66C21 21.1666 17.4183 24.82 13 24.82H12"
                    className="stroke-primary"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle
                    cx="13"
                    cy="16.5214"
                    r="5"
                    className="fill-primary"
                    fill="currentColor"
                  />
                </svg>
              </a>

              <div className="ms-1 sm:ms-2">
                <div className="hs-dropdown  relative  [--scope:window] [--auto-close:inside] inline-flex">
                  <button
                    id="hs-dropdown-preview-navbar"
                    type="button"
                    className="hs-dropdown-toggle  group relative flex justify-center items-center size-8 text-xs rounded-full text-foreground hover:bg-muted-hover focus:bg-muted-focus disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    aria-label="Dropdown"
                  >
                    <span className="">
                      <svg
                        className=" size-4 shrink-0"
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
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>

                    <span className="absolute -top-0.5 -end-0.5">
                      <span className="relative flex">
                        <span className="animate-ping absolute inline-flex size-full rounded-[999px] bg-red-400 dark:bg-red-600 opacity-75"></span>
                        <span className="relative inline-flex size-2 bg-red-500 rounded-[999px]"></span>
                        <span className="sr-only">Notification</span>
                      </span>
                    </span>
                  </button>

                  <div
                    className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-full min-w-90 md:w-125 transition-[opacity,margin] duration opacity-0 hidden z-61 overflow-hidden border border-gray-200 bg-white rounded-[12px] shadow-xl dark:bg-neutral-800 dark:border-neutral-700"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="hs-dropdown-preview-navbar"
                  >
                    <div className="p-3 pb-0 flex flex-wrap justify-between items-center gap-3 border-b border-gray-200 dark:border-neutral-700">
                      <nav
                        className="flex gap-1"
                        aria-label="Tabs"
                        role="tablist"
                        aria-orientation="horizontal"
                      >
                        <button
                          type="button"
                          className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-[8px] disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                          id="hs-pmn-item-pro"
                          aria-selected="false"
                          data-hs-tab="#hs-pmn-pro"
                          aria-controls="hs-pmn-pro"
                          role="tab"
                        >
                          Pro
                        </button>
                        <button
                          type="button"
                          className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-[8px] disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden active"
                          id="hs-pmn-item-free"
                          aria-selected="true"
                          data-hs-tab="#hs-pmn-free"
                          aria-controls="hs-pmn-free"
                          role="tab"
                        >
                          Free
                        </button>
                        <button
                          type="button"
                          className="hs-tab-active:after:bg-gray-800 hs-tab-active:text-gray-800 px-2 py-1.5 mb-2 relative inline-flex justify-center items-center gap-x-2 hover:bg-gray-100 text-gray-500 hover:text-gray-800 text-sm rounded-[8px] disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100 after:absolute after:-bottom-2 after:inset-x-2 after:z-10 after:h-0.5 after:pointer-events-none dark:hs-tab-active:text-neutral-200 dark:hs-tab-active:after:bg-neutral-400 dark:text-neutral-500 dark:hover:text-neutral-300 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden "
                          id="hs-pmn-item-theme"
                          aria-selected="false"
                          data-hs-tab="#hs-pmn-theme"
                          aria-controls="hs-pmn-theme"
                          role="tab"
                        >
                          Themes
                          <span className="py-0.5 px-2 inline-flex items-center gap-x-1.5 text-xs font-medium bg-emerald-100 text-emerald-800 rounded-[999px] dark:bg-emerald-900 dark:text-emerald-500">
                            New
                          </span>
                        </button>
                      </nav>

                      <div className="mb-2 flex items-center gap-x-0.5">
                        <button
                          type="button"
                          className="hs-dark-mode hs-dark-mode-active:hidden flex shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                          data-hs-theme-click-value="dark"
                        >
                          <svg
                            className="shrink-0 size-3.5"
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
                            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                          </svg>
                          Switch to Dark
                        </button>
                        <button
                          type="button"
                          className="hs-dark-mode hs-dark-mode-active:flex hidden shrink-0 justify-center items-center gap-x-1 text-xs text-gray-500 hover:text-gray-800 focus:outline-hidden focus:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                          data-hs-theme-click-value="light"
                        >
                          <svg
                            className="shrink-0 size-3.5"
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
                            <circle cx="12" cy="12" r="4"></circle>
                            <path d="M12 2v2"></path>
                            <path d="M12 20v2"></path>
                            <path d="m4.93 4.93 1.41 1.41"></path>
                            <path d="m17.66 17.66 1.41 1.41"></path>
                            <path d="M2 12h2"></path>
                            <path d="M20 12h2"></path>
                            <path d="m6.34 17.66-1.41 1.41"></path>
                            <path d="m19.07 4.93-1.41 1.41"></path>
                          </svg>
                          Switch to Light
                        </button>
                      </div>
                    </div>

                    <div
                      id="hs-pmn-pro"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pmn-item-pro"
                    >
                      <div className="p-3 flex flex-wrap justify-between items-center gap-3">
                        <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Templates (21)
                        </span>
                      </div>

                      <div className="px-3 h-64 sm:h-102 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/dashboard/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img1.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img1.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Dashboard
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/cms/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img55.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img55.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              CMS
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/ai-chat/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img58.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img58.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              AI Chat
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/video-call/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img61.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img61.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Video Call
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/startup/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img32.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img32.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Startup
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/payment/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img8.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img8.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Payment
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/chat/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img16.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img16.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Chat
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/shop/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img21.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img21.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Shop
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/ecommerce/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img4.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img4.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              E-Commerce
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/agency/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img46.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img46.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Agency
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/crm/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img11.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img11.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              CRM
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/workspace/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img18.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img18.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Workspace
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/analytics/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img9.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img9.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Analytics
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/calendars/day.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img14.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img14.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Calendars
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/smart-home/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img35.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img35.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Smart Home
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/coffee-shop/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img52.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img52.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Coffee Shop
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/inbox/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img26.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img26.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Inbox
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/project/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img10.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img10.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Project
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/shop-marketplace/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img29.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img29.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Shop Marketplace
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/personal/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img49.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img49.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Personal
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../pro/files/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews/img12.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/demo-previews-dark/img12.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Files
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="p-3">
                        <a
                          className="group p-2 rounded-[6px] flex justify-center items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                          href="../../pro/pricing.html"
                        >
                          Purchase Preline Pro
                          <svg
                            className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div
                      id="hs-pmn-free"
                      className=""
                      role="tabpanel"
                      aria-labelledby="hs-pmn-item-free"
                    >
                      <div className="p-3 flex flex-wrap justify-between items-center gap-3">
                        <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Templates (5)
                        </span>
                      </div>

                      <div className="px-3 h-64 sm:h-102 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../templates/agency/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews/img1.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews-dark/img1.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Agency
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../templates/ai-chat/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews/img4.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews-dark/img4.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              AI Chat
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../templates/cms/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews/img5.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews-dark/img5.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              CMS
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700  transition"
                            href="../../templates/coffee-shop/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews/img2.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews-dark/img2.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Coffee Shop
                            </p>
                          </a>

                          <a
                            className="p-3 relative flex flex-col justify-center items-center gap-y-3 rounded-[12px] hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 bg-gray-100 dark:bg-neutral-700 transition"
                            href="../../templates/personal/index.html"
                          >
                            <img
                              className="dark:hidden w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews/img3.webp"
                              alt="Main Page"
                            />
                            <img
                              className="hidden dark:block w-28 border border-gray-100 rounded-[8px] shadow-xs dark:border-neutral-700"
                              src="../../assets/img/template-previews-dark/img3.webp"
                              alt="Main Page"
                            />

                            <p className="text-sm text-center text-gray-800 dark:text-neutral-400">
                              Personal
                            </p>
                          </a>
                        </div>
                      </div>

                      <div className="p-3">
                        <a
                          className="group p-2 rounded-[6px] flex justify-center items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                          href="../../templates.html"
                        >
                          Free download
                          <svg
                            className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>

                    <div
                      id="hs-pmn-theme"
                      className="hidden"
                      role="tabpanel"
                      aria-labelledby="hs-pmn-item-theme"
                    >
                      <div className="p-3 flex flex-wrap justify-between items-center gap-3">
                        <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                          Themes
                        </span>
                      </div>

                      <div className="px-3 h-64 sm:h-102 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
                        <div
                          className="py-px grid grid-cols-2 md:grid-cols-3 gap-1"
                          data-hs-global-color-theme
                        >
                          <label
                            htmlFor="hs-pro-tps-default-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-default-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="default"
                              checked
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-blue-600 dark:bg-blue-500"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Default">
                                Default
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-harvest-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-harvest-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="harvest"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white dark:text-amber-900 rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-amber-700 dark:bg-amber-300"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Harvest">
                                Harvest
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-retro-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-retro-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="retro"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-fuchsia-500"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Retro">
                                Retro
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-ocean-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-ocean-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="ocean"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-cyan-600 dark:bg-cyan-500"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Ocean">
                                Ocean
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-autumn-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-autumn-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="autumn"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white dark:text-amber-800 rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-amber-500 dark:bg-amber-200"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Autumn">
                                Autumn
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-moon-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-moon-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="moon"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-gray-800 dark:bg-neutral-900"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Moon">
                                Moon
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-bubblegum-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-bubblegum-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="bubblegum"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-pink-600 dark:bg-pink-500"></span>
                            <span className="grow truncate">
                              <span
                                className="block truncate"
                                title="Bubblegum"
                              >
                                Bubblegum
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-cashmere-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-cashmere-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="cashmere"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-mauve-500"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Cashmere">
                                Cashmere
                              </span>
                            </span>
                          </label>
                          <label
                            htmlFor="hs-pro-tps-olive-@@previewMode.themes.id"
                            className="group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                          >
                            <input
                              type="radio"
                              id="hs-pro-tps-olive-@@previewMode.themes.id"
                              className="peer hidden"
                              name="hs-pro-tps-@@previewMode.themes.id"
                              value="olive"
                            />
                            <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                              <svg
                                className="shrink-0 size-4"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                            </span>
                            <span className="flex shrink-0 justify-center items-center size-5 rounded-[6px] bg-avocado-500"></span>
                            <span className="grow truncate">
                              <span className="block truncate" title="Olive">
                                Olive
                              </span>
                            </span>
                          </label>
                        </div>

                        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-neutral-700">
                          <div className="py-3 flex items-center gap-2">
                            <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                              Branding Colors
                            </span>

                            <div className="hs-tooltip [--placement:top] inline-block">
                              <svg
                                className="hs-tooltip-toggle shrink-0 size-4 text-muted-foreground"
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
                                <circle cx="12" cy="12" r="10" />
                                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                                <path d="M12 17h.01" />
                              </svg>
                              <span
                                className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 inline-block absolute invisible z-70 max-w-70 text-center py-1.5 px-2.5 bg-tooltip border border-tooltip-line text-xs text-tooltip-foreground rounded-lg"
                                role="tooltip"
                              >
                                Branding colors are shown for demonstration
                                purposes and sometimes may not match the
                                predefined Theme colors exactly.
                              </span>
                            </div>
                          </div>

                          <div
                            className="py-px flex flex-wrap gap-1"
                            data-hs-global-brand
                          >
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-red-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-red-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="red"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-red-600 dark:bg-red-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Red
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-orange-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-orange-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="orange"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-orange-600 dark:bg-orange-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Orange
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-amber-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-amber-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="amber"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white dark:text-black rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-amber-700 dark:bg-amber-300"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Amber
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-yellow-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-yellow-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="yellow"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-yellow-600 dark:bg-yellow-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Yellow
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-lime-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-lime-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="lime"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-lime-600 dark:bg-lime-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Lime
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-green-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-green-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="green"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-green-600 dark:bg-green-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Green
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-emerald-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-emerald-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="emerald"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-emerald-600 dark:bg-emerald-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Emerald
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-teal-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-teal-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="teal"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-teal-600 dark:bg-teal-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Teal
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-cyan-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-cyan-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="cyan"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-cyan-600 dark:bg-cyan-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Cyan
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-sky-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-sky-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="sky"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-sky-600 dark:bg-sky-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Sky
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-blue-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-blue-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="blue"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-blue-600 dark:bg-blue-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Blue
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-indigo-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-indigo-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="indigo"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-indigo-600 dark:bg-indigo-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Indigo
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-violet-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-violet-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="violet"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-violet-600 dark:bg-violet-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Violet
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-purple-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-purple-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="purple"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-purple-600 dark:bg-purple-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Purple
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-fuchsia-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-fuchsia-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="fuchsia"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-fuchsia-600 dark:bg-fuchsia-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Fuchsia
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-pink-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-pink-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="pink"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-pink-600 dark:bg-pink-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Pink
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-rose-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-rose-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="rose"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-rose-600 dark:bg-rose-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Rose
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-khaki-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-khaki-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="khaki"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-khaki-600 dark:bg-khaki-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Khaki
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-mauve-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-mauve-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="mauve"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-mauve-600 dark:bg-mauve-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Mauve
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-gray-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-gray-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="gray"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-gray-800 dark:bg-neutral-900"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  <span className="dark:hidden">Gray</span>
                                  <span className="dark:block hidden">
                                    Neutral
                                  </span>
                                </span>
                              </label>
                            </div>
                            <div className="hs-tooltip [--placement:top] inline-block">
                              <label
                                htmlFor="hs-pro-tps-avocado-@@previewMode.themes.id"
                                className="hs-tooltip-toggle group relative p-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[999px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                              >
                                <input
                                  type="radio"
                                  id="hs-pro-tps-avocado-@@previewMode.themes.id"
                                  className="peer hidden"
                                  name="hs-pro-tps-@@previewMode.themes.id-branding"
                                  value="avocado"
                                />
                                <span className="absolute top-1/2 start-2.5 -translate-y-1/2 size-4 flex shrink-0 justify-center items-center text-white rounded-[999px] opacity-0 scale-0 transition-all duration-200 peer-checked:opacity-100 peer-checked:scale-100">
                                  <svg
                                    className="shrink-0 size-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <path d="M20 6 9 17l-5-5" />
                                  </svg>
                                </span>
                                <span className="flex shrink-0 justify-center items-center size-5 rounded-[999px] bg-avocado-600 dark:bg-avocado-500"></span>
                                <span
                                  className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-70 py-1 px-2 bg-tooltip border border-tooltip-line text-xs font-medium text-tooltip-foreground rounded-md shadow-2xs"
                                  role="tooltip"
                                >
                                  Avocado
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 mt-4 border-t border-gray-200 dark:border-neutral-700">
                          <div className="py-3 flex items-center gap-2">
                            <span className="block font-semibold text-sm text-gray-800 dark:text-neutral-200">
                              Fonts
                            </span>
                          </div>

                          <div
                            className="py-px flex flex-wrap gap-2"
                            data-hs-global-font
                          >
                            <label
                              htmlFor="hs-pro-tps-sans-@@previewMode.themes.id"
                              className="group relative py-1.5 px-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                            >
                              <input
                                type="radio"
                                id="hs-pro-tps-sans-@@previewMode.themes.id"
                                className="peer hidden"
                                name="hs-pro-tfps-@@previewMode.themes.id"
                                value="sans"
                              />
                              <span className="size-8 flex shrink-0 justify-center items-center text-black bg-gray-200 rounded-[6px] border-b border-gray-300 dark:bg-neutral-700 dark:text-white dark:border-neutral-600">
                                <svg
                                  className="shrink-0 size-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 12.069999694824219 56.88999938964844 37.01000213623047"
                                  data-asc="0.96875"
                                  width="56.88999938964844"
                                  height="37.01000213623047"
                                >
                                  <defs />
                                  <g fill="currentColor">
                                    <g transform="translate(0, 0)">
                                      <path d="M4.62 48.44L0 48.44L13.35 12.07L17.90 12.07L31.25 48.44L26.63 48.44L15.77 17.83L15.48 17.83L4.62 48.44M6.32 34.23L24.93 34.23L24.93 38.14L6.32 38.14L6.32 34.23ZM44.39 49.08Q41.80 49.08 39.68 48.09Q37.57 47.11 36.33 45.23Q35.09 43.36 35.09 40.70Q35.09 38.35 36.01 36.89Q36.93 35.42 38.48 34.59Q40.02 33.75 41.89 33.34Q43.77 32.92 45.67 32.67Q48.15 32.35 49.71 32.18Q51.26 32.01 51.98 31.61Q52.70 31.20 52.70 30.18L52.70 30.04Q52.70 27.41 51.27 25.96Q49.84 24.50 46.95 24.50Q43.95 24.50 42.24 25.82Q40.54 27.13 39.84 28.62L35.87 27.20Q36.93 24.72 38.72 23.32Q40.50 21.93 42.62 21.37Q44.74 20.81 46.80 20.81Q48.12 20.81 49.83 21.12Q51.54 21.43 53.15 22.39Q54.76 23.35 55.82 25.28Q56.89 27.22 56.89 30.47L56.89 48.44L52.70 48.44L52.70 44.74L52.49 44.74Q52.06 45.63 51.07 46.64Q50.07 47.66 48.42 48.37Q46.77 49.08 44.39 49.08M45.03 45.31Q47.51 45.31 49.23 44.34Q50.94 43.36 51.82 41.81Q52.70 40.27 52.70 38.57L52.70 34.73Q52.43 35.05 51.54 35.31Q50.64 35.56 49.48 35.75Q48.31 35.94 47.22 36.07Q46.13 36.20 45.45 36.29Q43.82 36.51 42.41 36.98Q41.00 37.45 40.14 38.38Q39.28 39.31 39.28 40.91Q39.28 43.09 40.90 44.20Q42.52 45.31 45.03 45.31Z" />
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="grow truncate">
                                <span className="block truncate">
                                  <svg
                                    className="w-auto h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 11.579999923706055 110.16000366210938 37.5"
                                    data-asc="0.96875"
                                    width="110.16000366210938"
                                    height="37.5"
                                  >
                                    <defs />
                                    <g fill="currentColor">
                                      <g transform="translate(0, 0)">
                                        <path d="M21.45 21.16Q21.13 18.47 18.86 16.97Q16.58 15.48 13.28 15.48Q10.87 15.48 9.06 16.26Q7.26 17.05 6.26 18.41Q5.26 19.78 5.26 21.52Q5.26 22.98 5.96 24.01Q6.66 25.05 7.76 25.74Q8.86 26.42 10.07 26.86Q11.27 27.29 12.29 27.56L15.98 28.55Q17.40 28.92 19.15 29.58Q20.90 30.24 22.51 31.37Q24.11 32.49 25.16 34.25Q26.21 36.01 26.21 38.57Q26.21 41.51 24.67 43.89Q23.14 46.27 20.20 47.67Q17.26 49.08 13.07 49.08Q9.16 49.08 6.31 47.82Q3.46 46.56 1.84 44.30Q0.21 42.05 0 39.06L4.55 39.06Q4.72 41.12 5.94 42.46Q7.16 43.80 9.03 44.45Q10.90 45.10 13.07 45.10Q15.59 45.10 17.60 44.27Q19.60 43.45 20.77 41.97Q21.95 40.48 21.95 38.49Q21.95 36.68 20.93 35.55Q19.92 34.41 18.27 33.70Q16.62 32.99 14.70 32.46L10.23 31.18Q5.97 29.95 3.48 27.68Q0.99 25.41 0.99 21.73Q0.99 18.68 2.65 16.40Q4.31 14.12 7.13 12.85Q9.94 11.58 13.42 11.58Q16.94 11.58 19.67 12.83Q22.41 14.08 24.01 16.25Q25.62 18.41 25.71 21.16L21.45 21.16ZM40.91 49.08Q38.32 49.08 36.20 48.09Q34.09 47.11 32.85 45.23Q31.61 43.36 31.61 40.70Q31.61 38.35 32.53 36.89Q33.45 35.42 35.00 34.59Q36.54 33.75 38.41 33.34Q40.29 32.92 42.19 32.67Q44.67 32.35 46.23 32.18Q47.78 32.01 48.50 31.61Q49.22 31.20 49.22 30.18L49.22 30.04Q49.22 27.41 47.79 25.96Q46.36 24.50 43.47 24.50Q40.47 24.50 38.76 25.82Q37.06 27.13 36.36 28.62L32.39 27.20Q33.45 24.72 35.24 23.32Q37.02 21.93 39.14 21.37Q41.26 20.81 43.32 20.81Q44.64 20.81 46.35 21.12Q48.06 21.43 49.67 22.39Q51.28 23.35 52.34 25.28Q53.41 27.22 53.41 30.47L53.41 48.44L49.22 48.44L49.22 44.74L49.01 44.74Q48.58 45.63 47.59 46.64Q46.59 47.66 44.94 48.37Q43.29 49.08 40.91 49.08M41.55 45.31Q44.03 45.31 45.75 44.34Q47.46 43.36 48.34 41.81Q49.22 40.27 49.22 38.57L49.22 34.73Q48.95 35.05 48.06 35.31Q47.16 35.56 46.00 35.75Q44.83 35.94 43.74 36.07Q42.65 36.20 41.97 36.29Q40.34 36.51 38.93 36.98Q37.52 37.45 36.66 38.38Q35.80 39.31 35.80 40.91Q35.80 43.09 37.42 44.20Q39.04 45.31 41.55 45.31ZM65.27 32.03L65.27 48.44L61.08 48.44L61.08 21.16L65.13 21.16L65.13 25.43L65.48 25.43Q66.44 23.35 68.39 22.08Q70.35 20.81 73.44 20.81Q76.21 20.81 78.28 21.94Q80.36 23.06 81.52 25.35Q82.67 27.63 82.67 31.11L82.67 48.44L78.48 48.44L78.48 31.39Q78.48 28.18 76.81 26.38Q75.14 24.57 72.23 24.57Q70.22 24.57 68.65 25.44Q67.08 26.31 66.18 27.98Q65.27 29.65 65.27 32.03ZM109.66 27.27L105.89 28.34Q105.54 27.40 104.86 26.50Q104.17 25.60 103.00 25.02Q101.83 24.43 100.00 24.43Q97.50 24.43 95.84 25.58Q94.18 26.72 94.18 28.48Q94.18 30.04 95.31 30.95Q96.45 31.85 98.86 32.46L102.91 33.45Q106.57 34.34 108.36 36.16Q110.16 37.98 110.16 40.84Q110.16 43.18 108.82 45.03Q107.48 46.88 105.08 47.94Q102.68 49.01 99.50 49.01Q95.33 49.01 92.60 47.19Q89.86 45.38 89.13 41.90L93.11 40.91Q93.68 43.11 95.27 44.21Q96.86 45.31 99.43 45.31Q102.36 45.31 104.09 44.06Q105.82 42.81 105.82 41.05Q105.82 39.63 104.83 38.66Q103.84 37.70 101.78 37.22L97.23 36.15Q93.48 35.26 91.73 33.39Q89.99 31.52 89.99 28.69Q89.99 26.38 91.29 24.61Q92.60 22.83 94.86 21.82Q97.12 20.81 100.00 20.81Q104.05 20.81 106.37 22.59Q108.68 24.36 109.66 27.27Z" />
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                            </label>
                            <label
                              htmlFor="hs-pro-tps-serif-@@previewMode.themes.id"
                              className="group relative py-1.5 px-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                            >
                              <input
                                type="radio"
                                id="hs-pro-tps-serif-@@previewMode.themes.id"
                                className="peer hidden"
                                name="hs-pro-tfps-@@previewMode.themes.id"
                                value="serif"
                              />
                              <span className="size-8 flex shrink-0 justify-center items-center text-black bg-gray-200 rounded-[6px] border-b border-gray-300 dark:bg-neutral-700 dark:text-white dark:border-neutral-600">
                                <svg
                                  className="shrink-0 size-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 8.5 63.04999923706055 37"
                                  data-asc="0.9"
                                  width="63.04999923706055"
                                  height="37"
                                >
                                  <defs />
                                  <g fill="currentColor">
                                    <g transform="translate(0, 0)">
                                      <path d="M26.95 41.80L24.00 32.90L10.60 32.90L7.55 41.80L11.70 42.85L11.70 45L0 45L0 42.85L4.10 41.80L16.10 8.50L20.75 8.50L32.60 41.80L36.60 42.85L36.60 45L22.85 45L22.85 42.85L26.95 41.80M17.45 12.95L11.60 30L23.05 30L17.65 12.95L17.45 12.95ZM38.30 39.15Q38.30 35.25 41.95 33Q45.60 30.75 54.05 29.50Q53.85 26.55 53.50 24.90Q53.15 23.25 52.60 22.25Q51.90 20.95 50.65 20.32Q49.40 19.70 47.95 19.70Q46.55 19.70 45.43 20.20Q44.30 20.70 43.90 21.55Q44.60 22.05 44.93 22.85Q45.25 23.65 45.25 24.35Q45.25 25.60 44.43 26.32Q43.60 27.05 42.40 27.05Q41.20 27.05 40.43 26.25Q39.65 25.45 39.65 24Q39.65 21.90 41.10 20.45Q42.55 19 44.78 18.25Q47.00 17.50 49.25 17.50Q51.30 17.50 53.03 18.13Q54.75 18.75 55.95 19.95Q59.05 23.05 59.05 30.95L59.05 38.20Q59.05 40.65 59.38 41.60Q59.70 42.55 60.80 42.55L63.05 42.55L63.05 44.05Q59.45 45.50 57.45 45.50Q55.90 45.50 55.38 44.38Q54.85 43.25 54.85 40.05L54.65 40.05Q53.10 42.60 50.55 44.05Q48.00 45.50 45.05 45.50Q41.90 45.50 40.10 43.80Q38.30 42.10 38.30 39.15M47.15 42.60Q48.55 42.60 50.08 41.88Q51.60 41.15 52.65 39.85Q53.45 38.85 53.83 37.48Q54.20 36.10 54.20 34.25Q54.20 33.40 54.15 32.58Q54.10 31.75 54.00 31Q49.95 31.80 47.65 32.73Q45.35 33.65 44.40 34.92Q43.45 36.20 43.45 38.10Q43.45 40.25 44.43 41.42Q45.40 42.60 47.15 42.60Z" />
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="grow truncate">
                                <span className="block truncate">
                                  <svg
                                    className="w-auto h-[13px]"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 5.5 113.8499984741211 40.04999923706055"
                                    data-asc="0.9"
                                    width="113.8499984741211"
                                    height="40.04999923706055"
                                  >
                                    <defs />
                                    <g fill="currentColor">
                                      <g transform="translate(0, 0)">
                                        <path d="M12.75 45.55Q9.80 45.55 7.38 44.65Q4.95 43.75 3.35 42.10L2.80 45L0 45L0 33.65L3.05 33.65Q3.35 38.40 5.45 40.60Q7.55 42.80 11.80 42.80Q15.35 42.80 17.15 41.42Q18.95 40.05 18.95 37.35Q18.95 35.20 17.88 33.75Q16.80 32.30 14.77 31.15Q12.75 30 9.95 28.90Q6.80 27.60 4.60 26.32Q2.40 25.05 1.27 23.22Q0.15 21.40 0.15 18.50Q0.15 13.75 3.13 11.10Q6.10 8.45 11.10 8.45Q16.05 8.45 19.15 11.25L19.55 9L22.35 9L22.35 20.35L19.50 20.35Q19.50 15.55 17.70 13.35Q15.90 11.15 12.05 11.15Q5.20 11.15 5.20 17.40Q5.20 19.05 5.80 20.13Q6.40 21.20 7.97 22.10Q9.55 23 12.45 24.25Q16.60 26 19.15 27.65Q21.70 29.30 22.85 31.23Q24 33.15 24 35.80Q24 38.85 22.57 41.05Q21.15 43.25 18.63 44.40Q16.10 45.55 12.75 45.55ZM51.50 31.80L34.05 31.80Q34.05 35.45 35.05 37.85Q36.05 40.15 37.90 41.15Q39.75 42.15 41.90 42.15Q44.25 42.15 46.20 41.17Q48.15 40.20 49.70 38.50L51.30 39.70Q49.55 42.10 47.05 43.80Q44.55 45.50 40.60 45.50Q37.15 45.50 34.50 44.02Q31.85 42.55 30.45 39.70Q29.70 38.15 29.35 36.25Q29.00 34.35 29.00 32.20Q29.00 25.20 32.23 21.35Q35.45 17.50 41 17.50Q46.10 17.50 48.88 20.67Q51.65 23.85 51.65 29.45Q51.65 29.95 51.63 30.38Q51.60 30.80 51.50 31.80M40.70 20.20Q34.70 20.20 34.10 29.35L46.60 29.35L46.60 27.70Q46.60 24.10 45.08 22.15Q43.55 20.20 40.70 20.20ZM70.70 20.90Q70.50 20.75 70.23 20.67Q69.95 20.60 69.70 20.60Q69.10 20.60 68.40 21.15Q67.70 21.70 67.05 22.63Q66.40 23.55 65.85 24.75Q65.15 26.45 64.75 28.47Q64.35 30.50 64.35 32.65L64.35 42L69.75 42.95L69.75 45L55.65 45L55.65 42.95L59.50 42L59.50 21L55.65 20.05L55.65 18L62.85 18L63.95 24.60L64.15 24.60Q65.30 21.20 67.25 19.35Q69.20 17.50 71.55 17.50Q73.50 17.50 74.80 18.72Q76.10 19.95 76.10 22Q76.10 23.50 75.33 24.38Q74.55 25.25 73.25 25.25Q71.95 25.25 71.20 24.42Q70.45 23.60 70.45 22.25Q70.45 21.95 70.50 21.67Q70.55 21.40 70.70 20.90ZM82.40 21L78.55 20.05L78.55 18L87.25 18L87.25 42L91.10 42.95L91.10 45L78.55 45L78.55 42.95L82.40 42L82.40 21M81.70 9.95Q81.70 8.50 82.55 7.65Q83.40 6.80 84.80 6.80Q86.25 6.80 87.10 7.65Q87.95 8.50 87.95 9.95Q87.95 11.35 87.10 12.20Q86.25 13.05 84.80 13.05Q83.35 13.05 82.53 12.23Q81.70 11.40 81.70 9.95ZM93.25 20.50L93.25 18.70L98.10 18L98.10 17.50Q98.10 11.75 100.60 8.63Q103.10 5.50 107.35 5.50Q110.30 5.50 112.08 6.92Q113.85 8.35 113.85 10.55Q113.85 11.95 113.15 12.67Q112.45 13.40 111.25 13.40Q110.10 13.40 109.40 12.75Q108.70 12.10 108.70 10.90Q108.70 9.60 109.50 8.30Q108.65 7.40 107.20 7.40Q106.05 7.40 105.20 7.90Q104.10 8.55 103.63 9.75Q103.15 10.95 103.05 12.42Q102.95 13.90 102.95 15.50L102.95 18L109.35 18L109.35 20.50L102.95 20.50L102.95 42L108.35 42.95L108.35 45L94.25 45L94.25 42.95L98.10 42L98.10 20.50L93.25 20.50Z" />
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                            </label>
                            <label
                              htmlFor="hs-pro-tps-mono-@@previewMode.themes.id"
                              className="group relative py-1.5 px-2 flex items-center gap-x-2.5 text-sm text-gray-800 border border-transparent rounded-[8px] hover:border-gray-300 hover:bg-gray-100 has-checked:border-gray-300 has-checked:bg-gray-100 dark:hover:border-neutral-700 dark:hover:bg-neutral-500/20 dark:has-checked:border-neutral-700 dark:has-checked:bg-neutral-500/20 cursor-pointer dark:text-neutral-200"
                            >
                              <input
                                type="radio"
                                id="hs-pro-tps-mono-@@previewMode.themes.id"
                                className="peer hidden"
                                name="hs-pro-tfps-@@previewMode.themes.id"
                                value="mono"
                              />
                              <span className="size-8 flex shrink-0 justify-center items-center text-black bg-gray-200 rounded-[6px] border-b border-gray-300 dark:bg-neutral-700 dark:text-white dark:border-neutral-600">
                                <svg
                                  className="shrink-0 size-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 14 52.5 35"
                                  data-asc="0.98"
                                  width="52.5"
                                  height="35"
                                >
                                  <defs />
                                  <g fill="currentColor">
                                    <g transform="translate(0, 0)">
                                      <path d="M8.10 14L0 22.35L0 49L4 49L4 33L18 33L18 49L22 49L22 14L8.10 14M4 23.30L9.55 17.60L18 17.60L18 29.40L4 29.40L4 23.30ZM33.65 21.35L33.65 25.05L48.30 25.05L48.30 32.65L37.25 32.65L29.45 40.75L29.45 42.75L33.65 49L44.10 49L48.30 46.45L48.30 49L52.50 49L52.50 26L49.35 21.35L33.65 21.35M33.65 42.25L33.65 41.85L38.90 36.45L48.30 36.45L48.30 45.20L35.60 45.20L33.65 42.25Z" />
                                    </g>
                                  </g>
                                </svg>
                              </span>
                              <span className="grow truncate">
                                <span className="block truncate">
                                  <svg
                                    className="w-auto h-3"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 14 112.19999694824219 35"
                                    data-asc="0.98"
                                    width="112.19999694824219"
                                    height="35"
                                  >
                                    <defs />
                                    <g fill="currentColor">
                                      <g transform="translate(0, 0)">
                                        <path d="M0 14L0 49L4 49L4 21.80L8.80 28.90L8.80 29L13.15 29L13.15 24.45L18.10 19.25L18.10 49L22.15 49L22.15 14L18.10 14L9.25 23.15L4 15.40L4 14L0 14ZM34.05 22.45L48.20 22.45L52.20 28.45L52.20 44.85L48.20 49L34.10 49L30.05 43L30.05 26.60L34.05 22.45M34 42.50L36 45.40L46.60 45.40L48.10 43.80L48.10 28.90L46.20 26.05L35.55 26.05L34 27.70L34 42.50ZM60 22.45L60 49L64 49L64 27.65L65.55 26.05L76.20 26.05L78.10 28.85L78.10 49L82.15 49L82.15 28.35L78.10 22.45L68.05 22.45L64 24.85L64 22.45L60 22.45ZM94.05 22.45L108.20 22.45L112.20 28.45L112.20 44.85L108.20 49L94.10 49L90.05 43L90.05 26.60L94.05 22.45M94 42.50L96 45.40L106.60 45.40L108.10 43.80L108.10 28.90L106.20 26.05L95.55 26.05L94 27.70L94 42.50Z" />
                                      </g>
                                    </g>
                                  </svg>
                                </span>
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="p-3">
                        <a
                          className="group p-2 rounded-[6px] flex justify-center items-center gap-x-1 text-[13px] bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-900 dark:bg-white dark:hover:bg-neutral-200 dark:focus:bg-neutral-200 dark:text-neutral-800"
                          href="../../pro/pricing.html"
                        >
                          Purchase Preline Pro
                          <svg
                            className="hidden md:inline-block shrink-0 size-3.5 group-hover:translate-x-0.5 transition"
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
                            <path
                              className="lg:opacity-0 lg:-translate-x-1 lg:group-hover:opacity-100 lg:group-hover:translate-x-0 lg:group-focus:opacity-100 lg:group-focus:translate-x-0 lg:transition"
                              d="M5 12h14"
                            />
                            <path
                              className="lg:-translate-x-1.5 lg:group-hover:translate-x-0 lg:group-focus:translate-x-0 lg:transition"
                              d="m12 5 7 7-7 7"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

        <main id="content">
          <div className="w-full max-w-2xl mx-auto pt-10 px-4 sm:px-6 lg:px-8">
          <Hero/>
         <Project/>
<Testimonial/>
           <Skill/> 

          <Work/>
<Education/>


        

          

          

            <div className="my-10 sm:my-14">
              <h2 className="mb-5 font-medium text-foreground">Subscribe</h2>

              <form>
                <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-layer-line rounded-lg">
                  <div className="relative w-full">
                    <label htmlFor="hero-input" className="sr-only">
                      Subscribe
                    </label>
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
                      <svg
                        className="shrink-0 size-4 text-muted-foreground"
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
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="hero-input"
                      name="hero-input"
                      className="py-1.5 sm:py-2 ps-9 pe-3 block w-full bg-transparent border-transparent rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none"
                      placeholder="Enter your email"
                    />
                  </div>
                  <a
                    className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus disabled:opacity-50 disabled:pointer-events-none"
                    href="#"
                  >
                    Join
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <p className="mt-2 text-xs text-muted-foreground-1">
                  No spam, unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        </main>

        <footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6 border-t border-footer-line">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <div>
                <p className="text-xs text-muted-foreground-2">
                  © 2026 Preline Labs.
                </p>
              </div>

              <ul className="flex flex-wrap items-center">
                <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-surface-3">
                  <a
                    className="text-xs text-muted-foreground-1 underline hover:text-primary-hover hover:decoration-2 focus:outline-hidden focus:decoration-2"
                    href="#"
                  >
                    X (Twitter)
                  </a>
                </li>
                <li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-surface-3">
                  <a
                    className="text-xs text-muted-foreground-1 underline hover:text-primary-hover hover:decoration-2 focus:outline-hidden focus:decoration-2"
                    href="#"
                  >
                    Dribbble
                  </a>
                </li>
                <li className="inline-block pe-4 text-xs">
                  <a
                    className="text-xs text-muted-foreground-1 underline hover:text-primary-hover hover:decoration-2 focus:outline-hidden focus:decoration-2"
                    href="#"
                  >
                    Github
                  </a>
                </li>
                <li className="inline-block">
                  <button
                    type="button"
                    className="hs-dark-mode hs-dark-mode-active:hidden relative flex justify-center items-center size-7 bg-layer border border-layer-line text-layer-foreground rounded-full hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus"
                    data-hs-theme-click-value="dark"
                  >
                    <span className="sr-only">Dark</span>
                    <svg
                      className="shrink-0 size-3.5"
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
                      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="hs-dark-mode hs-dark-mode-active:flex hidden relative flex justify-center items-center size-7 bg-layer border border-layer-line text-layer-foreground rounded-full hover:bg-layer-hover focus:outline-hidden focus:bg-layer-focus"
                    data-hs-theme-click-value="light"
                  >
                    <span className="sr-only">Light</span>
                    <svg
                      className="shrink-0 size-3.5"
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
                      <circle cx="12" cy="12" r="4"></circle>
                      <path d="M12 2v2"></path>
                      <path d="M12 20v2"></path>
                      <path d="m4.93 4.93 1.41 1.41"></path>
                      <path d="m17.66 17.66 1.41 1.41"></path>
                      <path d="M2 12h2"></path>
                      <path d="M20 12h2"></path>
                      <path d="m6.34 17.66-1.41 1.41"></path>
                      <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}

export default App;
