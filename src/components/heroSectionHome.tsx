import React from "react";
import hero from "./../assets/videos/herovideobig.mp4";
import heroMobile from "./../assets/videos/hero-mobile.mp4";
// import logo from "./../assets/images/logo_white_club.png";
import logo from "./../assets/images/club-logo-b-r.png";
import { TypeAnimation } from "react-type-animation";
import yellowArch from "./../assets/images/yellow-arch.png";
import grayArch from "./../assets/images/gray-arch.png";
import redArch from "./../assets/images/red-arch.png";
import Aos from "aos";

const HeroSectionHome = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div id="topo">
      <div className="bg-black relative">
        <nav className="flex w-full top-0 items-center lg:justify-between z-40 fixed">
          <ul className="flex gap-6 w-full items-center justify-between h-28 px-9 lg:px-16">
            <li className="hover:underline pointer flex justify-center items-center">
              <a className="text-gray-300 text-center text-sm" href="/sobre#t">
                nossa história
              </a>
            </li>
            <li className="max-w-[100px] lg:max-w-[100px] w-full justify-center items-center">
              <img src={logo} alt="" className="w-full" />
            </li>
            <li className="hover:underline pointer flex justify-center items-center">
              <a className="text-gray-300 text-sm" href="#contato">
                contato
              </a>
            </li>
          </ul>
        </nav>
        <video
          autoPlay
          muted
          loop
          src={hero}
          className="hidden lg:block min-h-screen"
        ></video>
        <video
          autoPlay
          muted
          loop
          src={`${heroMobile}#t=12`}
          className="block w-full lg:hidden min-h-[80vh] opacity-70"
        ></video>
        <div className="lg:pl-16 px-11 w-full absolute bottom-0 top-0 pt-[20vh] lg:top-1/3 lg:bottom-[10%] flex flex-col justify-between text-white">
          <div className="lg:max-w-4xl max-w-[80%] w-full h-min flex flex-col lg:block">
            <span className="lg:text-6xl leading-tight text-5xl font-body ">
              Entre o Brasil e a Europa, somos um elo de
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
