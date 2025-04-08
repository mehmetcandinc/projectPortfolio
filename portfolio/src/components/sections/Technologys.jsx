import React, { useState } from "react";
import reactLogo from "../../assets/react.svg";
import antD from "../../assets/ant-design.svg";
import bootstrap from "../../assets/bootstrap.svg";
import css from "../../assets/css-3.svg";
import html from "../../assets/html-5.svg";
import javaScript from "../../assets/javascript.svg";
import tailwindCSS from "../../assets/tailwindcss-icon.svg";
import uiKit from "../../assets/uikit.svg";
import viteLogo from "/vite.svg";
import gitHub from "../../assets/github-mark-white.svg";
const Technologys = ({ active, deActive }) => {
  const [techs, setTechs] = useState([
    {
      id: 1,
      href: "https://html.com/",
      cName: "html logo",
      alt: "HTML logo",
      src: html,
      tName: "HTML",
    },
    {
      id: 2,
      href: "https://www.w3schools.com/css/",
      cName: "css logo",
      alt: "CSS logo",
      src: css,
      tName: "CSS",
    },
    {
      id: 3,
      href: "https://www.javascript.com/",
      cName: "javascript logo",
      alt: "JavaScript logo",
      src: javaScript,
      tName: "JavaScript",
    },
    {
      id: 4,
      href: "https://getuikit.com/",
      cName: "uikit logo",
      alt: "UIKit logo",
      src: uiKit,
      tName: "UIKit",
    },
    {
      id: 5,
      href: "https://getbootstrap.com/",
      cName: "bootstrap logo",
      alt: "Bootstrap logo",
      src: bootstrap,
      tName: "Bootstrap",
    },
    {
      id: 6,
      href: "https://tailwindcss.com/",
      cName: "tailwindcss logo",
      alt: "TailwindCSS logo",
      src: tailwindCSS,
      tName: "Talwind CSS",
    },
    {
      id: 7,
      href: "https://ant.design/",
      cName: "antD logo",
      alt: "Ant-D logo",
      src: antD,
      tName: "Ant D",
    },
    {
      id: 8,
      href: "https://github.com/",
      cName: "github logo",
      alt: "GitHub logo",
      src: gitHub,
      tName: "GitHub",
    },
    {
      id: 9,
      href: "https://react.dev",
      cName: "react logo",
      alt: "React.js logo",
      src: reactLogo,
      tName: "React",
    },
    {
      id: 10,
      href: "https://vite.dev",
      cName: "vite logo",
      alt: "Vite logo",
      src: viteLogo,
      tName: "Vite",
    },
  ]);
  return (
    <div
      onMouseOver={active}
      onMouseOut={deActive}
      id="technologys"
      className=" w-full sm:h-dvh mt-90 sm:mt-0 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h2 className="text-5xl px-7 pb-4 font-light">Technologys</h2>
        </div>
        <div>
          <div className="w-full grid grid-cols-2 sm:grid-cols-5 gap-2">
            {techs.map((tech) => (
              <div
                key={tech.id}
                className="px-5 py-5 flex flex-col items-center justify-center"
              >
                <a key={tech.id} href={tech.href} target="_blank">
                  <img
                    src={tech.src}
                    className={
                      tech.cName + " " + "hover:scale-125 duration-300"
                    }
                    alt={tech.alt}
                  />
                </a>
                <p> {tech.tName}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologys;
