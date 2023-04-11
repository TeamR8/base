import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  // custom props here...
};

const Sidebar = (props: Props) => {
  const { locale } = useRouter();
  const { t } = useTranslation("common");

  return (
    <aside className="fixed start-0 top-0 h-full w-64" aria-label="Sidenav">
      <div className="h-full overflow-y-auto border-e border-gray-200 bg-white px-3 py-5 dark:border-gray-700 dark:bg-gray-800">
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ms-3">{t("Overview")}</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-pages"
              data-collapse-toggle="dropdown-pages"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap text-start">
                {t("Pages")}
              </span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-pages" className="hidden space-y-2 py-2">
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Settings")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Kanban")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Calendar")}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <button
              type="button"
              className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-sales"
              data-collapse-toggle="dropdown-sales"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap text-start">
                {t("Sales")}
              </span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-sales" className="hidden space-y-2 py-2">
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Products")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Billing")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Invoice")}
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap">
                {t("Messages")}
              </span>
              <span className="text-primary-800 bg-primary-100 dark:bg-primary-200 dark:text-primary-800 inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold">
                6
              </span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-authentication"
              data-collapse-toggle="dropdown-authentication"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ms-3 flex-1 whitespace-nowrap text-start">
                {t("Authentication")}
              </span>
              <svg
                aria-hidden="true"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            <ul id="dropdown-authentication" className="hidden space-y-2 py-2">
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Sign In")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Sign Up")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex w-full items-center rounded-lg p-2 ps-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {t("Forgot Password")}
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="mt-5 space-y-2 border-t border-gray-200 pt-5 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path
                  fill-rule="evenodd"
                  d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ms-3">{t("Docs")}</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path>
              </svg>
              <span className="ms-3">{t("Components")}</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 flex-shrink-0 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="ms-3">{t("Help")}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="absolute bottom-0 start-0 z-20 hidden w-full justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          </svg>
        </a>
        <a
          href="#"
          data-tooltip-target="tooltip-settings"
          className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
        <div
          id="tooltip-settings"
          role="tooltip"
          className="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300"
        >
          {t("Settings page")}
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
          type="button"
          data-dropdown-toggle="language-dropdown"
          className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            aria-hidden="true"
            className="mt-0.5 h-5 w-5 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 3900 3900"
          >
            <path fill="#b22234" d="M0 0h7410v3900H0z" />
            <path
              d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0"
              stroke="#fff"
              stroke-width="300"
            />
            <path fill="#3c3b6e" d="M0 0h2964v2100H0z" />
            <g fill="#fff">
              <g id="d">
                <g id="c">
                  <g id="e">
                    <g id="b">
                      <path
                        id="a"
                        d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"
                      />
                      <use xlinkHref="#a" y="420" />
                      <use xlinkHref="#a" y="840" />
                      <use xlinkHref="#a" y="1260" />
                    </g>
                    <use xlinkHref="#a" y="1680" />
                  </g>
                  <use xlinkHref="#b" x="247" y="210" />
                </g>
                <use xlinkHref="#c" x="494" />
              </g>
              <use xlinkHref="#d" x="988" />
              <use xlinkHref="#c" x="1976" />
              <use xlinkHref="#e" x="2470" />
            </g>
          </svg>
        </button>
        {/* <!-- Dropdown --> */}
        <div
          className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:bg-gray-700"
          id="language-dropdown"
        >
          <ul className="py-1" role="none">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    className="me-2 h-4 w-4 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icon-css-us"
                    viewBox="0 0 512 512"
                  >
                    <g fill-rule="evenodd">
                      <g stroke-width="1pt">
                        <path
                          fill="#bd3d44"
                          d="M0 0h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                        <path
                          fill="#fff"
                          d="M0 10h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0zm0 20h247v10H0z"
                          transform="scale(3.9385)"
                        />
                      </g>
                      <path
                        fill="#192f5d"
                        d="M0 0h98.8v70H0z"
                        transform="scale(3.9385)"
                      />
                      <path
                        fill="#fff"
                        d="M8.2 3l1 2.8H12L9.7 7.5l.9 2.7-2.4-1.7L6 10.2l.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7L74 8.5l-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 7.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 24.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 21.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 38.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 35.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 52.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 49.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm-74.1 7l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7H65zm16.4 0l1 2.8H86l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm-74 7l.8 2.8h3l-2.4 1.7.9 2.7-2.4-1.7L6 66.2l.9-2.7-2.4-1.7h3zm16.4 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8H45l-2.4 1.7 1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9zm16.4 0l1 2.8h2.8l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h3zm16.5 0l.9 2.8h2.9l-2.3 1.7.9 2.7-2.4-1.7-2.3 1.7.9-2.7-2.4-1.7h2.9zm16.5 0l.9 2.8h2.9L92 63.5l1 2.7-2.4-1.7-2.4 1.7 1-2.7-2.4-1.7h2.9z"
                        transform="scale(3.9385)"
                      />
                    </g>
                  </svg>
                  {t("English (US)")}
                </div>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem"
              >
                <div className="inline-flex items-center">
                  <svg
                    className="me-2 h-4 w-4 rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    id="flag-icons-sa"
                    viewBox="0 0 512 512"
                  >
                    <defs>
                      <clipPath id="a">
                        <path fill-opacity=".7" d="M124 0h496v496H124z" />
                      </clipPath>
                    </defs>
                    <g
                      fill-rule="evenodd"
                      clip-path="url(#a)"
                      transform="translate(-128) scale(1.0321)"
                    >
                      <path fill="#165d31" d="M0 0h744v496H0z" />
                      <path
                        fill="#fff"
                        d="M187.5 140.6c-.8 11.6-1.9 32 8 34.1 11.9 1.1 5.3-20.2 9.6-24 .9-2 2.4-2 2.5.5v18c-.1 6 3.7 7.6 6.7 8.9 3.2-.3 5.2-.2 6.5 2.8l1.4 31.3s7.3 2 7.6-17.6c.4-11.5-2.3-21.2-.7-23.4 0-2.2 2.8-2.3 4.8-1.3 3.1 2.2 4.5 5 9.3 3.8 7.4-2 11.8-5.6 12-11.2a51 51 0 0 0-3.4-16.1c.3-1-1.5-3.5-1.1-4.5 1.3 2 3.3 1.9 3.8 0-1.3-4.2-3.2-8.1-6.4-9.8-2.6-2.3-6.4-1.8-7.8 3a26 26 0 0 0 6 17.3 17 17 0 0 1 1.5 8.7c-2.1 1.3-4.2.7-6-1.1 0 0-5.9-4.5-5.9-5.4 1.6-10 .4-11.1-.5-13.9-.6-3.8-2.4-5-3.9-7.6-1.5-1.6-3.4-1.6-4.4 0-2.6 4.5-1.4 14.1.5 18.4 1.4 4 3.4 6.5 2.4 6.5-.8 2.2-2.4 1.7-3.6-.9a61.2 61.2 0 0 1-2.1-16.9c-.5-4.5-1-14-4-16.4-1.8-2.4-4.5-1.2-5.4 1a80 80 0 0 0 .3 13c2 7 2.6 13.4 3.6 20.7.3 9.8-5.7 4.3-5.4-.6 1.4-6.3 1-16.3-.2-18.8-1-2.5-2.1-3.1-4.4-2.7-2-.2-6.7 5-8 13.8 0 0-1.2 4.5-1.7 8.4-.7 4.5-3.6 7.7-5.7-.6-1.8-6-2.9-20.9-5.9-17.4z"
                      />
                      <path
                        fill="#fff"
                        d="m219.9 188.2-31 14.9c.3-7 14.7-19.8 24.5-20 6.4.2 4.8 2.5 6.5 5z"
                      />
                      <path
                        fill="#fff"
                        d="M214.5 197.9c-16.4 42.1 38.2 48 44.3 1.7.6-1.9 3-3.8 3.3-.7-1.3 42-42.2 44.8-49.2 31.6-1.7-3-2.2-10-2.4-14.2-1-8.2-5.4-5-6 3.2-.7 4.5-.6 5.8-.6 10.2 2.2 33 55 18.8 63.6-8.5 4.5-15.1-.8-26.3 1.7-26.3 5.2 5.7 12.6.8 14.2-1.2.7-1 2.4-1.6 3.6-.3 4 3 11.3 1.5 12.8-3.6.8-5.1 1.5-10.3 1.7-15.7-3.3 1-5.8 1.7-6 3l-.7 4.6c-.3 1.4-3.2 1.5-3.3-.4-1.3-5.7-6.5-6.5-9.7 2.4-2.1 1.8-6 2-6.4-.5.5-6-1.9-6.8-6.7-4l-4.7-35c2 0 3.9 1.4 5.7-.9-2-6.3-6.3-19-8.6-20-1.2-1.4-2.1-.5-3.6-.2-2.6.8-5 3-4.2 7.3l8 50.2c.4 2.1-1.4 5-3.7 4.7-3.9-2.7-4.9-8-11.5-7.8-4.9 0-10.4 5.3-11 10.4-.9 4-1.2 8.4 0 11.9 3.3 4 7.4 3.7 11 2.7 2.9-1.2 5.3-4.1 6.4-3.4.7.9.1 10.5-13.9 18-8.4 3.8-15.2 4.6-18.8-2.3-2.2-4.3.2-20.7-5.3-17z"
                      />
                      <path
                        fill="#fff"
                        d="M283.8 155c3.3-1.1 18.8-19 18.8-19l-2.3-1.8c-.9-.8-.8-1.5 0-2.3 3.8-2.2 2.6-7.2.6-9.4a9.4 9.4 0 0 0-8.4 0c-2.7 2.7-3.3 6.8-1.2 9.4 2 1 4.2 3 2.8 4.2-6.4 6.8-23.8 18.5-21.8 19 .4.5 11.2.5 11.5 0zm-93.9 63c-5.8 9.3-6.3 23.2-3 27.3 1.6 2 4.4 2.8 6.5 2.2 3.7-1.6 5.3-9 4.4-11.7-1.2-2-2.2-2.2-3.4-.6-2.6 5.2-3.7 1.6-3.9-1.3-.4-5.5.1-10.7.7-14.7.7-4.1 0-2.9-1.3-1.2zM439 203c-5.6-12.1-13.4-24.1-15.9-28.7a541 541 0 0 0-24-34.9c-6-7.2 9.9 3-2-11.3-4.5-4-4.8-4.1-8.6-7.3-1.9-1.4-6.5-3.8-7.3.2a23.5 23.5 0 0 0 .4 8.6c.4 2 3.3 5.3 4.8 7.3 19 25.5 35.9 51.4 52.1 83.8 2.6-1.2 2-15.6.5-17.7z"
                      />
                      <path
                        fill="#fff"
                        d="M414.3 243.7c-1.1 1.3 2.7 6.6 7.7 6.6 8.4-1 15.7-5.7 22.5-18 1.8-3 5-9 5.1-13.9.7-28-1.4-49.8-5.6-70-.2-2 0-4.4.3-5 .5-.6 2.3 0 3.3-1.5 1.4-1.5-3.8-13.6-6.7-18.2-1.1-2.1-1.5-3.5-3.2.2-1.9 3-3 8.3-3 13.2 4 27.6 5.3 51.8 7.9 79.3.2 2.7-.2 6.6-2 8.1a77.8 77.8 0 0 1-26.3 19.2zm112.8-.1c-6 3.4-6 7.4-1.1 7.6 8.3-1 18.2-1.7 25-12 1.8-2.9 4-10.7 4.1-15.4.6-28-.4-49-4.6-69.2-.2-2-1.1-6.5-.8-7.1.6-1.4 3.3.1 4.3-1.5 1.4-1.4-7-12.3-10-17-1.1-2-1.5-3.4-3.2.3-1.9 3-2.5 8.4-1.8 13.1 4.5 30 7.8 52.5 8.4 79-.3 2.6-.4 4-1.6 7.1-2.6 3.4-5.5 7.6-8.3 9.6-2.7 2-8.5 4-10.4 5.5z"
                      />
                      <path
                        fill="#fff"
                        d="M531.6 216.7v-18.3a33 33 0 0 0-3-13.2c-1.8-4-.7-7.1-1.5-11.4-.8-4.2-.6-10.6-1.8-15.6-.4-2-1.4-8.2-1-8.8.4-1.4 2.3 0 3.2-1.6 1.4-1.5-4.8-17.5-7.9-22-1.1-2-3.1-1.4-5.7 2-2.3 2.1-1.4 7.1-.5 11.8 6 31.3 10.4 59.7 9.5 89.4-.3 2.6 8.8-7.5 8.7-12.3zm-44.3-38.8c-3.7 0-11.6-7.4-14-11.6a7.8 7.8 0 0 1 .5-6.2c1.4-1 3.6-2 5.2-1 0 0 1.6 2.4 1.3 2.7 2 1 3 .4 3.2-.5.1-1.4-.7-2.3-.7-4 1-4.3 6-5 7.8-2.2 1.4 1.7 1.9 5.3 2.1 7.8 0 1.2-2-.3-3.2 0-1.1.4-1.4 1.7-1.5 2.9-.2 3.2-.6 8.3-.7 12zm-69.6 46.6c1-9.6-.3-26.5-.4-32.1-.4-13.3-2.6-39-3.6-43.2-1.2-8.1 3.3.9 2.7-3.8-1.5-8-6-13.6-11.2-21-1.7-2.3-1.6-2.8-4.3.6-2.8 6.6-.3 11.1.4 16.2 3.8 16.7 6 32 7 47.2a381.2 381.2 0 0 1 .4 47.5c2.9.2 7.5-4.6 9-11.4z"
                      />
                      <path
                        fill="#fff"
                        d="M544.5 209.2c-6.7-11.1-16.7-23.2-19.4-27.7a639.2 639.2 0 0 0-28.2-36.7c-8.3-8.7 3.8-1.4-1.6-8.1-4.6-5-6-6.6-9.8-9.6-2-1.3-3.2-3.7-3.8.4-.3 3.6-.5 7.8-.3 10.9 0 1.7 1.8 4.8 3.3 6.7 20 24.7 42 50 59.7 81.7 2.5-1.4 1.7-15.6 0-17.6z"
                      />
                      <path
                        fill="#165d31"
                        d="M242.8 188.6c-.5.9-1.6 2-1.2 3 .8 1 1.4 1.3 2.6 1.4 1 0 2.6.2 2.9-.4a3.2 3.2 0 0 0 .5-3.2c-1-2.8-4.2-1.8-4.8-.8z"
                      />
                      <path
                        fill="#fff"
                        d="M467.2 351.3c8.9.3 14.7.4 22.6 1.3l9.2-1c10.3-1 10.8 14.7 10.8 14.7-.1 9.2-3.7 9.6-8.2 10.6-2.6.4-4-1.5-5.3-3.5-1.7.7-4 .8-6.9.4-3.7-.2-7.4-.2-11-.5-4-.3-6.1.5-10 .1-.9 1.3-2 3-4.3 2.5-2-.2-4.4-5.9-3.7-10.1 1.4-3.1 1-2.1.9-3.5-36.4-.9-73-2.5-108.7-2-28 0-55.5 1.2-83 2.4-14.7-.2-26-2.6-33.7-14 .7 0 37.5 2.2 48.2 1.5 20-.3 38.1-1.9 58.4-2.5 40 .7 79.5.7 119.5 3.5-3.8-2.6-4-8.8 2-10.3.4-.3.7 3 1.6 3 4.6-.3 2.6 6 1.6 7.4zM306.8 131c-6 17.3 3.4 36.2 10 34.4 4.8 2 7.8-7.1 9.8-17 1.3-2.8 2.3-3.1 3-1.7-.2 13.2 1 16.1 4.4 20.1a11 11 0 0 0 14.3.3l5.9-6c1.3-1.3 3-1.4 4.9-.2 1.8 1.7 1.5 4.5 5.4 6.5 3.2 1.3 10.2.3 11.8-2.5 2.1-3.7 2.7-5 3.7-6.4 1.5-2 4.1-1.2 4.1-.5-.2 1.1-1.7 2.3-.7 4.3 1.8 1.4 2.3.5 3.4.2 3.8-1.8 6.7-10.2 6.7-10.2.1-3-1.6-2.8-2.7-2.2l-3 2.1c-2 .3-5.6 1.5-7.4-1.3-1.8-3.3-1.9-8-3.3-11.4 0-.2-2.4-5.3-.1-5.6 1.1.2 3.6.8 4-1.2 1.2-2-2.6-7.7-5.2-10.6-2.2-2.4-5.4-2.7-8.4-.2-2 2-1.8 4-2.2 6.1a9.6 9.6 0 0 0 2 8.4c2.1 4.1 6 9.4 4.7 17 0 0-2.3 3.5-6.2 3-1.6-.4-4.2-1-5.6-11.4-1-7.9.2-18.9-3.1-24-1.2-3.2-2-6.2-5-.8-.8 2-4.2 5.2-1.8 11.8a35 35 0 0 1 2 18.3c-1.4 2.1-1.7 2.9-3.6 5-2.5 2.7-5.3 2-7.4 1-2-1.3-3.6-2-4.5-6.3.2-6.8.5-17.9-.7-20.3-1.8-3.6-4.8-2.3-6.1-1.2a46.3 46.3 0 0 0-11.2 22.9c-1.7 5.5-3.5 4-4.8 1.7-3.1-3-3.3-25.9-7.1-22.1z"
                      />
                      <path
                        fill="#fff"
                        d="M325 168.7c2.8-2 1.5-3.3 5.6.8a69.8 69.8 0 0 1 9 30.3c-.3 2.5 1.5 4 2.3 3.5.4-5.8 14.7-14 27.7-15.2 2-.4 1-4.2 1.3-6.2-.8-7.2 4-13.8 10.9-14.3 9.2 1.4 12.3 6.3 12.5 13.8-1 14.5-16.1 17-24.6 18-1.3.6-1.8 1.2 0 1.9l35.5.1 1.8 1c.2 1-.5.2-2 2.5s-3.4 7.7-3.5 11.2a173 173 0 0 1-32.6 6.2c-3.8 2-5.7 4.6-5 7.5 1.3 3.3 9.9 6.5 9.9 6.7 1.6 1 3.5 3.4-.5 8.2-17.3-.7-30.7-8.1-35.3-18.5-1.4-1-3 0-3.9 1.4a54.7 54.7 0 0 1-24.9 20.7c-6.9 1.7-13.9-1-17.2-5.5-2.2-2.6-2.1-5.4-3-6-3.7 1.6-35.6 15.2-31.5 8.9 7.7-8.4 21.2-14.5 33-22.7 1-2.7 2.5-12 7.2-15 .2 0-.8 5.4-.7 7.7 0 1.9-.1 2.6.3 2.1.8-.5 15.2-11.8 16.3-15.3 1.4-2 .4-7 .4-7.2-2.6-7-6.4-7.5-7.8-11-1.3-4.6-.7-9.8 1.9-11.3 2.3-2.1 5-1.9 7.6.4 3 2.6 5.5 7.7 6.3 11.5-.5 1.5-3.8-1-5-.2 2 2 3 4.5 3.7 7.5 2 8 1.3 11-.5 16.2-6.4 13.4-14.6 17.5-21.8 22.4-.2.1-.3 3.5 2.4 5.3 1 1 4.7 1.4 9 0a52.8 52.8 0 0 0 21.7-22.6c1.3-7.2-.5-14.8-2.4-21.4a252.7 252.7 0 0 1-6-16c-.2-4 .1-5.4 2-7.4zm-92.8-37.4c4 1.9 11.7 1 11.4-5.5l-.2-3.1c-.8-2-3.1-1.5-3.6.6-.2.6.3 1.7-.3 2-.4.3-1.7.1-1.6-1.7 0-.6-.4-1.2-.7-1.6-.3-.1-.4-.2-.9-.2-.6 0-.5.2-.9.7l-.3 1.5c0 .7-.3.9-.8 1-.5 0-.4 0-.8-.2-.3-.3-.6-.4-.6-.9l-.2-1.6a2 2 0 0 0-1-.6c-2.3 0-2.4 2.6-2.3 3.6-.2.1-.3 4.7 2.8 6z"
                      />
                      <path
                        fill="#fff"
                        d="M351.8 181.9c4 2 13.8.8 11.4-5.5l-.2-3c-.8-2-3-1.5-3.6.5-.1.6.3 1.7-.3 2-.3.4-1.6.2-1.6-1.6 0-.6-.4-1.2-.7-1.6-.2-.2-.4-.2-.9-.2s-.5.1-.8.6l-.3 1.5c-.1.7-.4 1-.8 1-.6 0-.4 0-.9-.2-.2-.3-.6-.4-.6-.9s0-1.3-.2-1.6c-.2-.3-.6-.4-1-.5-2.2 0-2.4 2.5-2.3 3.5-.1.2-.2 4.7 2.8 6zm69.8-21c4 2 11.7 1.1 11.4-5.4l-.2-3.1c-.8-2-3.1-1.5-3.6.5-.2.7.3 1.7-.3 2-.4.4-1.7.2-1.6-1.6 0-.6-.5-1.2-.7-1.6-.3-.1-.4-.2-1-.2-.5 0-.5.2-.8.7l-.3 1.5c0 .6-.3.9-.8 1-.5 0-.4 0-.8-.3-.3-.2-.6-.4-.6-.8 0-.5-.1-1.3-.3-1.7-.2-.3-.5-.4-1-.5-2.2 0-2.3 2.6-2.2 3.5-.2.2-.3 4.8 2.8 6zm36 52.7c-7 8-3.9 21.2-2.3 24 2.4 4.8 4.2 7.8 8.8 10.1 4.2 3 7.4 1.1 9.2-1 4.2-4.3 4.2-15.4 6.2-17.6 1.4-4 4.8-3.3 6.5-1.5a16 16 0 0 0 6 5.1c3.9 3.4 8.5 4 13.1 1 3.1-1.8 5.2-4.1 7-8.6 2-5.5 1-30.7.5-45.6-.1-1.2-4-20.6-4-20.8 0-.2-.6-9.9-1-12.2 0-.9-.3-1.2.7-1 1 .8 1.2.9 1.8 1.2 1 .2 2-1.6 1.4-3.3l-9.8-18c-.7-.7-1.7-1.5-3 .3a7 7 0 0 0-2.4 5.3c.3 4.3 1 8.6 1.3 12.9l4 21.8c1.2 15.6 1.5 28.3 2.7 44-.2 6.5-2.2 12.3-4.2 13 0 0-2.9 1.8-4.8 0-1.5-.7-7.2-9.6-7.2-9.6-3-2.7-4.8-2-7 0-5.6 5.5-8.2 15.9-12.1 23-1 1.6-3.9 3-7-.1-8-11-3.3-26.4-4.3-22.4zm-34.2-90.9c3.7 1.5 6.2 9 5.4 12.6-.7 4.4-2.7 9.3-4 8.6-1.6-.5 1-4.4-.5-8.5-.8-2.6-5.8-7.5-5.3-8.9-1-3 2.2-4.3 4.4-3.8z"
                      />
                      <path
                        fill="#fff"
                        d="M469.5 218c.7-9-.6-14.4-.8-19.6-.2-5.2-6-45-7-49-1.5-7.5 5.5-1 4.7-5.4-2.4-5.5-8.3-13.5-10.2-18.2-1.1-2-.7-3.9-3.2-.6a41 41 0 0 0-2.2 18.6c6 31.3 12.1 57.3 11.1 87.1 2.9 0 6.2-6.5 7.6-13zm62.4-82.7c3.4 1.7 5.3 11 5 13.6-.7 4.9-2.5 10-3.8 9.4-1.3-.6.3-7.2-.4-9.2-.7-2.9-5.2-8.1-4.8-9.7-.9-3.2 2-4.6 4-4zm-247.7 65.8c3.2 1.3 5 8 4.7 10-.6 3.6-2.3 7.4-3.5 7-1.3-.5.2-5.3-.4-6.8-.3-3.7-4.7-5.6-4.6-7.1-.8-3 1.9-3.5 3.8-3z"
                      />
                      <path
                        fill="#165d31"
                        d="M361.3 211.4c4 .2 6.1 3.5 2.3 4.8-3.8 1.3-7.5 2.3-7.5 7.8 1.4 7.7-2 5-4 4-2.3-1.7-8.9-5.7-9.8-14.5-.1-2 1.5-3.8 4.1-3.8 4 1 9.8 1.2 14.8 1.7z"
                      />
                      <path
                        fill="#fff"
                        d="M199 120.5c4.7 1.4 5 8.3 4.6 10.4-.6 3.7-2.3 7.6-3.5 7.1-1.3-.4 0-5.4-.6-7-.7-2.2-4.7-6.2-4.2-7.4-1-2.4 1.8-3.5 3.7-3zm92.9 32.6c-3.6 2-5 7.8-2.8 11.2 2.1 3 5.4 1.9 5.9 1.9 3.5.4 5.6-6.7 5.6-6.7s.1-2-4 1.8c-1.8.3-2-.3-2.5-1.3a8.7 8.7 0 0 1 .6-5.6c.6-1.7-.8-2.5-2.8-1.3zm27-35.3c-1.7 1.3-5.4 5-5.5 9.3 0 2.4-.5 2.4 1 4 1.2 1.6 2.4 1.5 4.7.3a5 5 0 0 0 2.2-3.3c.6-2.8-2.9 1.3-3.3-1.8-.8-2.8 1.4-4 3.5-6.8 0-1.9 0-3.2-2.5-1.7zm21.9 4a56.9 56.9 0 0 0-1.6 10.7c-.6 2.7 2.8 3.8 4.4.3 2.3-6.3 2.3-9 2.5-11.7-.7-4-3.5-4-5.3.6zm137.5 69.9c.4-.5 19.4-14 19.4-14 1.9-.6 1.5 7 .6 7a75.3 75.3 0 0 1-20 13.9c-1 .6-1.9-5.2 0-7zm17.2-.1c3.3 1.6 4.7 11.4 4.3 14 .1 5.2-3.2 9.3-4.5 8.6-1.4-.6.1-6.4-.5-8.4-.7-2.9-3.6-8.3-3.1-9.8-1-3.3 1.8-5 3.8-4.4zm-112.4 42c1.3-2 5.3-4.7 5.4-4.7 1.9-1 3.7.7 3.6.6.3 1.9-1.2 3.6-.7 6.1.4 1 .7 2.1 2.6 1.7 3-2.3 5.8-2.5 8.8-2.7 2.3.2 2.3 4 .9 4.1-5.6 1.2-8 2.7-12 4.2-1.9 1.1-3.5-.3-3.5-.4s-1-1.1-.3-3.6c.1-2-.7-3-2.3-2.8-1.3.6-2.4 1-3-.4-.3-1-.3-1.5.5-2.1zm132.3 5.2c.8 1 1.4 2 0 3.7l-3.6 3c-.7 1.2-1 2.8.9 3.3 3.5 1 11.7-4.3 11.7-4.4 1.3-1 .9-2.9.7-2.9-.7-.9-2.5-.4-3.6-.5-.6 0-2.4-.3-1.6-1.9.8-1 1-1.6 1.5-2.9.6-1.2.1-2-1.9-2.7-2-.3-2.8-.1-5 0-1.3.3-1.7.8-2 2.3.2 2.2 1.5 2.1 3 3z"
                      />
                      <path
                        fill="#165d31"
                        d="M383.8 183.8c-.5 1-2.3.9-4 0s-2.5-2.5-2-3.4 2.3-.9 4 0 2.5 2.5 2 3.4zM297.5 132c-1 .3-2.3-.6-2.9-2s-.3-2.5.7-2.8 2.3.7 2.9 2 .3 2.6-.7 2.8z"
                      />
                      <path
                        fill="#165d31"
                        d="M468.2 363.3c9 .4 17.6.1 26.6.6 1.7 1.3.5 4.8-.6 4.5l-7.6-.2c0-2.9-7.5-2.4-7.2.1-4 .5-7.6-.1-11.6-.3-1.2-1.5-1-4.1.4-4.7z"
                      />
                    </g>
                  </svg>
                  {t("Arabic (SA)")}
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
