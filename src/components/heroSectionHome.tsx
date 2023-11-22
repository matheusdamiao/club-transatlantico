import React, { useEffect, useState } from "react";
import hero from "./../assets/videos/herovideobig.mp4";
import heroMobile from "./../assets/videos/hero-mobile.mp4";
import logo from "./../assets/images/club-logo-b-r.png";
import logoBranco from "./../assets/images/Logo_branco.png";

import { TypeAnimation } from "react-type-animation";
import yellowArch from "./../assets/images/yellow-arch.png";
import grayArch from "./../assets/images/gray-arch.png";
import redArch from "./../assets/images/red-arch.png";
import Aos from "aos";
import people from "./../assets/images/people-icon.svg";
import msg from "./../assets/images/msg-icon-l.svg";
import useWindowDimensions from "../utils/useWindownDimensions";

const HeroSectionHome = () => {
  const size = useWindowDimensions();
  const [menuHeight, setMenuHeight] = useState(0);
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    if (size !== undefined) {
      setMenuHeight(size.scrollY);
      if (size?.scrollY >= 3000) {
        setIsBottom(true);
      }
      if (size?.scrollY <= 3000) {
        setIsBottom(false);
      }
    }

    console.log(size?.scrollY);
  }, [size?.scrollY, size?.width, size?.height]);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div id="topo">
      <a
        href="#topo"
        className={`${
          isBottom ? "block" : "hidden"
        } bg-[#2B2B2B] flex items-center justify-center text-3xl  rounded-xl px-2 bottom-10 right-4 animate-bounce  fixed text-[#FFCC00]`}
      >
        ^
      </a>
      <div className="bg-black relative">
        <div
          className={`w-full h-16 lg:h-20 ${
            menuHeight > 400 ? "bg-cinza/30" : "bg-transparent"
          }  fixed z-30 lg:top-0 transition-transform ${
            menuHeight > 400 ? "bottom-0 " : "top-0"
          }
          ${isBottom && "hidden"}
          `}
        >
          <nav className=" flex w-full lg:w-[50vw] h-full items-center lg:justify-between z-40 lg:ml-4">
            <ul className="hidden lg:flex gap-6 w-full items-center justify-between h-28 pl-9 lg:pl-11">
              <div className="flex w-full items-center gap-10">
                <li className="hover:underline pointer flex justify-center items-center gap-2">
                  <img src={people} alt="" />
                  <a
                    className="text-white font-body font-medium text-center text-lg"
                    href="/sobre#t"
                  >
                    sobre
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

              <li className="max-w-[100px]  w-full justify-center items-center">
                <img src={logoBranco} alt="" className={`w-full   `} />
              </li>
            </ul>
            <ul className="lg:hidden w-full flex justify-between items-center px-4">
              <a className="flex gap-2" href="/sobre#t">
                <h4
                  className={`${
                    menuHeight > 400
                      ? "text-black border-black font-bold"
                      : "text-white border-white"
                  } rounded bg-transparent border-2  border-solid text-xs px-3 py-1 flex items-center justify-center`}
                >
                  sobre nós
                </h4>
              </a>
              <div className="absolute right-0 m-auto bottom-0 h-full w-[50%] left-0">
                <a
                  href="/#topo"
                  className="max-w-[80px] w-full m-auto h-full flex items-center justify-center"
                >
                  <img
                    src={logo}
                    alt=""
                    className={`w-full ${
                      menuHeight > 400 ? "block" : "hidden"
                    } `}
                  />
                  <img
                    src={logoBranco}
                    alt=""
                    className={`w-full ${
                      menuHeight > 400 ? "hidden" : "block"
                    } `}
                  />
                </a>
              </div>

              <a className="flex gap-2" href="#contato">
                <svg
                  className={`${menuHeight < 400 ? "hidden" : "block"}`}
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 3.5H3C2.73478 3.5 2.48043 3.60536 2.29289 3.79289C2.10536 3.98043 2 4.23478 2 4.5V15.5C2 15.7652 2.10536 16.0196 2.29289 16.2071C2.48043 16.3946 2.73478 16.5 3 16.5H17C17.2652 16.5 17.5196 16.3946 17.7071 16.2071C17.8946 16.0196 18 15.7652 18 15.5V4.5C18 4.23478 17.8946 3.98043 17.7071 3.79289C17.5196 3.60536 17.2652 3.5 17 3.5ZM4 14.5V5.5H16V14.5H4Z"
                    fill="black"
                  />
                  <path
                    d="M17.648 5.261L10.603 11.261C10.4214 11.4156 10.1904 11.5002 9.9518 11.4995C9.71322 11.4988 9.48276 11.4128 9.30204 11.257L2.34704 5.257C1.64504 4.652 2.07304 3.5 3.00004 3.5H17C17.93 3.5 18.356 4.658 17.648 5.261ZM5.69004 5.5L9.96004 9.183L14.282 5.5H5.69004Z"
                    fill="black"
                  />
                </svg>

                <img
                  src={msg}
                  alt=""
                  className={`${menuHeight < 400 ? "block" : "hidden"}`}
                />
              </a>
            </ul>
          </nav>
        </div>

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
          src={`${heroMobile}`}
          className="block w-full lg:hidden min-h-[80vh] opacity-70"
        ></video>
        <div className="px-11 w-full absolute bottom-0 top-0 pt-[20vh] lg:top-1/3 lg:bottom-[10%] flex flex-col justify-between text-white">
          <div className="lg:max-w-4xl max-w-[80%] w-full h-min flex flex-col lg:block">
            <span className="lg:text-6xl leading-tight text-[48px] font-body ">
              Entre o Brasil e a Europa, somos um elo de
            </span>
            <span className={`text-5xl lg:text-6xl`}>
              <TypeAnimation
                repeat={Infinity}
                sequence={[
                  "  cultura",
                  1000,
                  "  tradição",
                  1000,
                  "  inovação",
                  1000,
                  "  respeito",
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
              href="#clube"
            >
              CONHEÇA NOSSO CLUB
            </a>
            <a href="#clube" className="pointer">
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

export default HeroSectionHome;
