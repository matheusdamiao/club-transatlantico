import React from "react";
import hero from "./../assets/videos/herovideobig.mp4";
import heroMobile from "./../assets/videos/hero-mobile.mp4";
import logo from "./../assets/images/logo_white_club.png";

const HeroSectionHome = () => {
  return (
    <div>
      <div className="bg-black relative">
        <nav className="lg:ml-12 lg:pl-6 flex lg:w-[50%] w-full top-0 items-center lg:justify-between z-40 fixed">
          <ul className="flex gap-6 w-full items-center lg:justify-start justify-between h-28 px-8">
            <li className="hover:underline pointer flex justify-center items-center">
              <a className="text-white text-center" href="">
                nossa história
              </a>
            </li>
            <li className="lg:hidden justify-center items-center absolute left-[40vw] top-0">
              <img src={logo} alt="" className="w-full" />
            </li>
            <li className="hover:underline pointer flex justify-center items-center">
              <a className="text-white" href="">
                contato
              </a>
            </li>
          </ul>
          <div className="hidden lg:block">
            <img src={logo} alt="" />
          </div>
        </nav>
        <video
          autoPlay
          muted
          loop
          src={hero}
          className="hidden lg:block"
        ></video>
        <video
          autoPlay
          muted
          loop
          src={heroMobile}
          className="block lg:hidden"
        ></video>
        <div className="lg:pl-16 px-11 w-full absolute bottom-1/4  2xl:bottom-1/3 text-white">
          <h1 className="font-title lg:text-7xl text-5xl">Cultura</h1>
          <h3 className="font-body lg:text-5xl text-2xl max-w-3xl pt-4">
            Um elo de cultura entre o Brasil e a Europa
          </h3>
          <div className="flex mt-9">
            <button className="bg-amarelo px-8 py-3 text-black rounded-xl font-title hover:scale-105 transition-all">
              CONHEÇA NOSSO CLUB
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionHome;
