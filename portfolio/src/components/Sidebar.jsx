import React from "react";

const Sidebar = ({ activeSectionCheck, openAdminModal }) => {
  return (
    <div className="w- flex flex-col gap-2 m-4 fixed">
      <div
        onClick={() =>
          document
            .getElementById("home")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className=" blue-main flex cursor-pointer"
      >
        {/* main */}
        <div
          className={`bg-blue-600 rounded-3xl border border-blue-700 flex items-center justify-center transform origin-left transition-all duration-300 
            ${activeSectionCheck === "home" ? "h-9 w-9 opacity-100" : "h-6 w-6 opacity-70 hover:opacity-100 hover:h-9 hover:w-9"} `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
          </svg>
        </div>
      </div>

      <div
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        className="green-projects flex cursor-pointer"
        title="Projects"
      >
        {/* projects */}
        <div
          className={`bg-green-600 rounded-3xl border border-green-700 flex items-center justify-center transform origin-left transition-all duration-300
            ${activeSectionCheck === "projects" ? "h-9 w-9 opacity-100" : "h-6 w-6 opacity-70 hover:opacity-100 hover:h-9 hover:w-9"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="m680-80-12-60q-12-5-22.5-10.5T624-164l-58 18-40-68 46-40q-2-12-2-26t2-26l-46-40 40-68 58 18q11-8 21.5-13.5T668-420l12-60h80l12 60q12 5 22.5 10.5T816-396l58-18 40 68-46 40q2 12 2 26t-2 26l46 40-40 68-58-18q-11 8-21.5 13.5T772-140l-12 60h-80Zm40-120q33 0 56.5-23.5T800-280q0-33-23.5-56.5T720-360q-33 0-56.5 23.5T640-280q0 33 23.5 56.5T720-200Zm-560-40v-480 172-12 320Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h240l80 80h320q33 0 56.5 23.5T880-640v131q-18-13-38-22.5T800-548v-92H447l-80-80H160v480h283q3 21 9.5 41t15.5 39H160Z" />
          </svg>
        </div>
      </div>
      <div
        className="yellow-technologys flex cursor-pointer"
        title="Technologys"
      >
        <div
          onClick={() =>
            document
              .getElementById("technologys")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`bg-yellow-600 rounded-3xl border border-yellow-700 flex items-center justify-center transform origin-left transition-all duration-300
            ${activeSectionCheck === "technologys" ? "h-9 w-9 opacity-100" : "h-6 w-6 opacity-70 hover:opacity-100 hover:h-9 hover:w-9"}`}
        >
          {/* technologys */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M320-240 80-480l240-240 57 57-184 184 183 183-56 56Zm320 0-57-57 184-184-183-183 56-56 240 240-240 240Z" />
          </svg>
        </div>
      </div>
      <div className="red-information cursor-pointer" title="Information">
        <div
          onClick={() =>
            document
              .getElementById("information")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className={`bg-red-500 rounded-3xl border border-red-700 flex items-center justify-center transform origin-left transition-all duration-300
            ${activeSectionCheck === "information" ? "h-9 w-9 opacity-100" : "h-6 w-6 opacity-70 hover:opacity-100 hover:h-9 hover:w-9"}`}
        >
          {/* information */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
          </svg>
        </div>
      </div>
      <div
        onClick={openAdminModal}
        className="purple-logInAdmin mt-5 cursor-pointer"
      >
        {/* <div className="h-6 w-6 opacity-70 hover:opacity-100 hover:h-9 hover:w-9 bg-purple-500 rounded-3xl border border-purple-700 flex items-center justify-center transform origin-left transition-all duration-300">
           {/*log in admin*} 
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#e3e3e3"
          >
            <path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z" />
          </svg>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
