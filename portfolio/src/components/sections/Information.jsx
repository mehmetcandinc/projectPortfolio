import React from "react";
import github from "../../assets/github-mark-white.svg";
const Information = ({ active, deActive }) => {
  return (
    <div
      onMouseOver={active}
      onMouseOut={deActive}
      id="information"
      className="h-dvh pt-4"
    >
      <h2 className="text-5xl px-12 pb-4 font-light text-center">Contact Me</h2>
      <div className="flex items-center justify-between">
        <ul className="flex flex-col mt-40">
          <li className="flex items-center justify-around w-64 border-t border-r rounded-tr-2xl bg-gray-900 py-1 px-2 sm:ml-[-175px] transform transition-all duration-700 hover:ml-0">
            <a
              href="https://www.linkedin.com/in/mehmetcandinc/"
              target="_blank"
              className="flex items-center justify-between w-full text-4xl"
            >
              Linkedin
              <svg
                className="w-18"
                viewBox="0 0 256 256"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier"></g>
                <g id="SVGRepo_tracerCarrier"></g>
                <g id="SVGRepo_iconCarrier">
                  <g fill="none">
                    <path
                      d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                      fill="#0000"
                    ></path>
                    <path
                      d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </g>
              </svg>
            </a>
          </li>
          <li className="flex items-center justify-around w-64 border-r bg-gray-900 py-1 px-2 sm:ml-[-175px] transform transition-all duration-700 hover:ml-0">
            <a
              href="https://github.com/mehmetcandinc"
              target="_blank"
              className="flex items-center justify-between w-full text-4xl"
            >
              GitHub
              <img className="w-18" src={github} />
            </a>
          </li>
          <li className="flex items-center justify-around w-64 border-r bg-gray-900 py-1 px-2 sm:ml-[-175px] transform transition-all duration-700 hover:ml-0">
            <a className="flex items-center justify-between w-full text-4xl">
              CV
              <svg
                className="w-18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#e3e3e3"
              >
                <path d="M436-82q-76-8-141-42t-112.5-88Q135-266 108-335T81-481q0-155 101.5-269T437-880v60q-128 19-212 115t-84 224q0 128 83.5 224T436-142v60Zm44-198L280-480l43-43 127 127v-284h60v284l127-127 43 43-200 200Zm44 198v-60q46-6 88.5-23.5T691-212l44 44q-46 35-99.5 58T524-82Zm168-667q-38-27-80-45.5T524-820v-60q58 7 111 29.5T735-793l-43 44Zm100 519-43-42q29-37 46-79.5t23-88.5h61q-7 58-29 111.5T792-230Zm26-292q-6-46-23-89t-46-79l47-41q35 46 56 99t27 110h-61Z" />
              </svg>
            </a>
          </li>
          <li className="flex items-center justify-around w-64 border-b border-r rounded-br-2xl bg-gray-900 py-1 px-2 sm:ml-[-175px] transform transition-all duration-700 hover:ml-0">
            <a
              href="mailto:dincmehmetcann@gmail.com"
              className="flex items-center justify-between w-full text-4xl"
            >
              Send Mail
              <svg
                className="w-18"
                xmlns="http://www.w3.org/2000/svg"
                height="48px"
                viewBox="0 -960 960 960"
                width="48px"
                fill="#e3e3e3"
              >
                <path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h434q-3 15-4 30t1 30H145l335 218 151-98q10 9 21 16.67 11 7.68 23 13.33L480-462 140-685v465h680v-360q16.79-4.78 31.4-13.39Q866-602 880-613v393q0 24-18 42t-42 18H140Zm0-580v520-520Zm619.88 90Q714-650 682-682.12q-32-32.12-32-78T682.12-838q32.12-32 78-32T838-837.88q32 32.12 32 78T837.88-682q-32.12 32-78 32Z" />
              </svg>
            </a>
          </li>
        </ul>
        <div className="mt-40 md:text-9xl hidden sm:block font-extralight">
          THANK YOU
        </div>
      </div>
    </div>
  );
};

export default Information;
