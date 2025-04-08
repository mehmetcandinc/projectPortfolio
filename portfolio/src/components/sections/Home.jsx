import React from "react";
import heroImage from "../../assets/website photos/heroImage.png";
const Home = ({ active, deActive }) => {
  return (
    <div
      onMouseOver={active}
      onMouseOut={deActive}
      id="home"
      className="h-dvh w-full"
    >
      <div className="max-w-screen-lg h-full mx-auto px-4 flex flex-col items-center justify-center md:flex-row">
        <div>
          <img
            className=" w-2/3 md:w-3/4 mx-auto rounded-t-full border-4 border-black"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
        <div className="flex flex-col gap-3 items-center">
          <h2 className="text-4xl md:text-6xl font-light mt-2 sm:mt-0 text-center sm:text-start">
            I'm Frontend Developer
          </h2>
          <p className="font-extralight text-center sm:text-start">
            Ben Mehmetcan! Dumlupınar Üniversitesi Bilgisayar Mühendisliği
            mezunuyum. Bölüm olarak Frontend Developer olarak kendimi hala
            geliştirmek için çalışmalarıma devam ediyorum. React.js ortamında
            çeşitli projeler gerçekleştiriyorum. Bu portfolyo sitemle birlikte
            beni daha yakından tanıyın!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
