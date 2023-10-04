import React, { useEffect, useState } from "react";
import hero from "./../assets/videos/video-full-about.mp4";
import heroMobile from "./../assets/videos/Germany - SHORT TRAVEL FILM. Vertical video ｜ .mp4";
import logo from "./../assets/images/club-logo-b-r.png";
import yellowArch from "./../assets/images/yellow-arch.png";
import grayArch from "./../assets/images/gray-arch.png";
import redArch from "./../assets/images/red-arch.png";
import { TypeAnimation } from "react-type-animation";
import Aos from "aos";
import useWindowDimensions from "../utils/useWindownDimensions";
import home from "./../assets/images/home-icon.svg";
import msg from "./../assets/images/msg-icon-l.svg";

const HeroSectionAbout = () => {
  const size = useWindowDimensions();
  const [menuHeight, setMenuHeight] = useState(0);

  useEffect(() => {
    if (size !== undefined) {
      setMenuHeight(size.scrollY);
    }
    console.log(size);
  }, [size?.scrollY, size?.width, size?.height]);

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="t">
      <div className="bg-black relative">
        <div
          className={`w-full h-16 lg:h-20 ${
            menuHeight > 100 ? "bg-cinza/30" : "bg-transparent"
          }  fixed z-30 lg:top-0 transition-transform ${
            menuHeight > 200 ? "bottom-0 " : "top-0"
          }
          `}
        >
          <nav className="flex w-full lg:w-[50vw] h-full items-center lg:justify-between z-40 lg:ml-4">
            <ul className="hidden lg:flex gap-6 w-full items-center justify-between h-28 pl-9 lg:pl-11">
              <div className="flex w-full items-center gap-10">
                <li className="hover:underline pointer flex justify-center items-center gap-2">
                  <img src={home} alt="" />
                  <a
                    className="text-white font-body font-medium text-center text-lg"
                    href="/#topo"
                  >
                    home
                  </a>
                </li>
                <li className="hover:underline pointer flex justify-center items-center gap-2">
                  <img src={msg} alt="" />
                  <a
                    className="text-white font-body font-medium text-lg "
                    href="#contato"
                  >
                    contato
                  </a>
                </li>
              </div>

              <li className="max-w-[100px] lg:max-w-[80px] w-full justify-center items-center">
                <img src={logo} alt="" className="w-full" />
              </li>
            </ul>
            <ul className="lg:hidden w-full flex justify-between items-center px-6">
              <a href="/#topo">
                <img src={home} alt="" />
              </a>
              <div>
                <a className="max-w-[80px] w-full block">
                  <img src={logo} alt="" className="w-full" />
                </a>
              </div>

              <a href="#contato">
                <img src={msg} alt="" />
              </a>
            </ul>
          </nav>
        </div>
        <video
          autoPlay
          muted
          loop
          src={hero}
          className="hidden lg:block w-full opacity-70"
        ></video>
        <video
          autoPlay
          muted
          loop
          src={`${heroMobile}#t=12`}
          className="block w-full lg:hidden  min-h-[85vh] opacity-70"
        ></video>
        <div className="lg:pl-16 px-11 w-full absolute bottom-0 top-0 pt-[20vh] lg:top-1/4 lg:bottom-[10%] flex flex-col justify-between text-white">
          <div className="lg:max-w-4xl w-full h-min flex flex-col lg:block">
            <span className="lg:text-6xl leading-none text-5xl font-body ">
              Unimos o passado com o presente em busca de um futuro com mais
            </span>
            {/* <h3 className="font-body lg:text-5xl text-2xl max-w-3xl pt-4">
            Somos um elo de cultura entre o Brasil e a Europa
          </h3> */}
            <span className={`text-5xl lg:text-6xl`}>
              <TypeAnimation
                repeat={Infinity}
                sequence={[
                  "  cultura",
                  1000,
                  "  respeito",
                  1000,
                  "  diversidade",
                  1000,
                  "  inovação",
                  1000,
                  "  tradição",
                  1000,
                ]}
                style={{
                  fontFamily: "MilLight, sans",
                  color: "yellow",
                  width: "100%",
                  display: "inline",
                }}
              />
            </span>
          </div>
          <div className="my-0 lg:mb-8 mx-auto flex flex-col items-center">
            <a
              className="bg-transparent text-sm pb-3 lg:py-3 text-center tracking-widest text-white rounded-xl font-body hover:scale-105 transition-all"
              href="#history"
            >
              CONHEÇA NOSSA HISTÓRIA
            </a>
            <a href="#history" className="pointer">
              <svg
                className="animate-bounce"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M20.9994 5.00002L2.99943 5.00002C2.81718 5.00059 2.63855 5.05085 2.48275 5.1454C2.32695 5.23994 2.19988 5.37518 2.11523 5.53657C2.03058 5.69796 1.99154 5.87938 2.00232 6.0613C2.01311 6.24322 2.0733 6.41876 2.17643 6.56902L11.1764 19.569C11.5494 20.108 12.4474 20.108 12.8214 19.569L21.8214 6.56902C21.9256 6.41907 21.9867 6.24345 21.9981 6.06122C22.0094 5.879 21.9706 5.69714 21.8859 5.53541C21.8012 5.37368 21.6738 5.23826 21.5175 5.14387C21.3612 5.04948 21.182 4.99973 20.9994 5.00002Z"
                  fill="white"
                />
              </svg>
            </a>
          </div>
          <div
            data-aos="fade-down"
            data-aos-delay="500"
            data-aos-once="false"
            data-aos-duration="500"
            className="hidden flex-col absolute right-0 top-[-70vh] overflow-hidden lg:flex"
          >
            <img src={yellowArch} alt="" />
            <img src={grayArch} alt="" />
            <img src={redArch} alt="" />
            <img src={yellowArch} alt="" />
            <img src={grayArch} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionAbout;
