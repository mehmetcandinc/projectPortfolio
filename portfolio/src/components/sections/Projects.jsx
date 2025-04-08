import React, { useState } from "react";
import Weatherly from "../../assets/website photos/WeatherlySite.png";
import ToDo from "../../assets/website photos/todolist.png";
import QRMenu from "../../assets/website photos/qrmenu.png";
const Projects = ({ active, deActive }) => {
  const [links, setLink] = useState([
    {
      id: 1,
      technologys: "React.js / CRA / TailwindCSS",
      header: "Weatherly",
      declaration:
        "Weatherly API bilgilerini OpenWeatherApi tarafından sağlanan bir hava durumu sitesidir. React ortamında Create React App ile build edilmiştir.",
      website: "https://weatherweatherly.netlify.app/",
      src: Weatherly,
      alt: "Weatherly Site",
      github: "https://github.com/mehmetcandinc/projectWeatherly",
      shadowColor: "shadow-orange-500/50",
    },
    {
      id: 2,
      technologys: "React.js / Vite / TailwindCSS",
      header: "To-Do List",
      declaration:
        "To-Do List, klasik bir yapılacaklar listesi sitesidir. Amaç state yönetimini kavramak ve localStorage pratiği olup işleyen bir yapıya sokulmuş ve aktif olarak hizmet verebilmektedir.",
      website: "https://classictodolist.netlify.app/",
      src: ToDo,
      alt: "To-Do List Site",
      github: "https://github.com/mehmetcandinc/projectToDo",
      shadowColor: "shadow-gray-500",
    },
    {
      id: 3,
      technologys: "React.js / Vite / TailwindCSS",
      header: "QR Menu",
      declaration:
        "QR Menu, baştan sona özgün kod ve tasarımla hazırlanmış olup Firebase ile veritabanı ile birlikte kullanıcıya ve restoranlara açık süre sınırı olmayan QR desteği ile hizmet vermeyi hedeflemektedir.(Backend Sürecinde)",
      website: "https://greenboardqrmenu.netlify.app/",
      src: QRMenu,
      alt: "QR Menu Site",
      github: "https://github.com/mehmetcandinc/projectQRMenu",
      shadowColor: "shadow-green-800",
    },
  ]);
  return (
    <div
      onMouseOver={active}
      onMouseOut={deActive}
      id="projects"
      className="sm:h-dvh  w-full pt-4"
    >
      <div className="max-w-screen-lg p-4 mx-auto">
        <div className="">
          <h2 className="text-5xl px-7 pb-4 font-light">Projects</h2>
        </div>
        <div className="tags grid grid-cols-1 md:grid-cols-4 gap-5 ">
          {links.map((link) => (
            <div
              key={link.id}
              className={
                "shadow-md p-5 rounded-2xl flex flex-col justify-between " +
                link.shadowColor
              }
            >
              <a href={link.website} target="_blank">
                <img
                  className="rounded-xl hover:scale-95 duration-300 mb-4"
                  src={link.src}
                  alt={link.alt}
                />
              </a>
              <div>
                <p className="text-sm text-white/50 mb-4">{link.technologys}</p>
                <h3 className="text-2xl font-medium mb-4">{link.header}</h3>
                <p className="text-xs mb-4 text-white/50">{link.declaration}</p>
              </div>
              <div className="flex flex-row items-center justify-around">
                <a
                  href={link.website}
                  target="_blank"
                  className="cursor-pointer hover:scale-95 duration-300"
                >
                  Website
                </a>
                <a
                  href={link.github}
                  target="_blank"
                  className="cursor-pointer hover:scale-95 duration-300"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
