import React from "react";

const AdminLogInModal = ({ openCheck, closeModal }) => {
  if (!openCheck) return null;
  return (
    <div
      className="modal-overlay fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-blur-sm shadow-2xl"
      onClick={closeModal}
    >
      <div
        className="modal-container flex flex-col w-96 backdrop-blur-xl bg-white/40 rounded-3xl p-9 "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header flex gap-1 item">
          <div className="h-7 w-7 opacity-70  bg-purple-500 rounded-3xl border border-purple-700 flex items-center justify-center">
            {/* log in admin */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#e3e3e3"
            >
              <path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z" />
            </svg>
          </div>
          <p className="font-light mb-10 text-xl">Admin Log In</p>
        </div>
        <div className=" font-normal space-y-7">
          <div className="relative mt-3">
            <form className="relative flex rounded-lg flex-col gap-2">
              <div className="flex items-center">
                <div className="bg-white/80  p-2 rounded-l-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000"
                  >
                    <path d="M560-440h200v-80H560v80Zm0-120h200v-80H560v80ZM200-320h320v-22q0-45-44-71.5T360-440q-72 0-116 26.5T200-342v22Zm160-160q33 0 56.5-23.5T440-560q0-33-23.5-56.5T360-640q-33 0-56.5 23.5T280-560q0 33 23.5 56.5T360-480ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Username"
                  className=" w-full rounded-r-md border-0 p-2 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 focus:outline-none bg-white/60"
                />
              </div>
              <div className="flex items-center mb-5">
                <div className="bg-white/80 group p-2  rounded-l-md">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#000"
                  >
                    <path d="M240-80q-33 0-56.5-23.5T160-160v-400q0-33 23.5-56.5T240-640h40v-80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720v80h40q33 0 56.5 23.5T800-560v400q0 33-23.5 56.5T720-80H240Zm0-80h480v-400H240v400Zm240-120q33 0 56.5-23.5T560-360q0-33-23.5-56.5T480-440q-33 0-56.5 23.5T400-360q0 33 23.5 56.5T480-280ZM360-640h240v-80q0-50-35-85t-85-35q-50 0-85 35t-35 85v80ZM240-160v-400 400Z" />
                  </svg>
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  className=" w-full rounded-r-md border-0 p-2 text-gray-700 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 focus:outline-none bg-white/60"
                />
              </div>
              <div className="flex items-center gap-5 justify-end">
                <button
                  type="submit"
                  className="transform origin-left p-2 text-sm  bg-gradient-to-l bg-gray-500 hover:from-gray-500 hover:to-gray-400 text-white focus:outline-none focus:bg-gray-700 font-bold rounded-lg shadow-[0_4px_0_rgb(40,80,105)] active:shadow-none active:translate-y-1 transition-all cursor-pointer"
                >
                  Log In
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="transform origin-left p-2 text-sm bg-gradient-to-r bg-gray-500 hover:from-gray-500 hover:to-gray-400 text-white focus:outline-none focus:bg-gray-700 font-bold rounded-lg shadow-[0_4px_0_rgb(40,80,105)] active:shadow-none active:translate-y-1 transition-all cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogInModal;
