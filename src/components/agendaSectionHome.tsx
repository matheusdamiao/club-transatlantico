import React from "react";
import schedule from "./../assets/images/schedule-black.svg";
import location from "./../assets/images/local-icon.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import arrow from "./../assets/images/arrow-right-thin.svg";
import fototimeline from "./../assets/images/timeline-foto-home.png";
import trumpEvent from "./../assets/images/eventos/geopolitica-maio.png";
import robotic from "./../assets/images/eventos/robotica-marco.png";
import marketingia from "./../assets/images/eventos/marketing-ia-marco.png";

const AgendaSectionHome = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div id="agenda" className="max-w-[1400px] mx-auto w-full my-[100px] px-11">
      <section className="flex flex-col mt-14 gap-6">
        <div className="flex  lg:flex-row flex-col justify-between lg:items-center relative">
          <div className="flex flex-col gap-6">
            <h3
              data-aos="fade-down"
              data-aos-once="true"
              className="font-title lg:text-5xl text-4xl"
            >
              Próximos eventos
            </h3>
            <p
              data-aos="fade-down"
              className="font-body lg:text-2xl text-xl text-left w-full max-w-[458px]"
            >
              Fique por dentro do eventos que acontecem no Club Transatlântico
            </p>
          </div>
          <button className="flex mt-4 lg:mt-0 gap-2 hove:rbg-gray-300 transition-all delay-[30ms] rounded-sm p-2 sm:absolute right-0 top-0 items-center text-sm lg:text-lg font-medium text-[#4F4F4F]">
            VER TODOS
            <img src={arrow} />
          </button>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap gap-24 lg:gap-12  items-center pt-6">
          <div
            id="card"
            className="flex flex-col w-full xl:max-w-[400px] xl:h-[500px] justify-between"
          >
            <div className="h-full flex flex-col gap-2">
              <div className="w-full">
                <img
                  src={trumpEvent}
                  alt=""
                  className="object-cover w-full sm:max-h-[400px] xl:max-w-[400px]"
                />
              </div>
              <h5 className="font-title text-xl ">
                Jantar-Debate com o Prof. HOC - Geopolítica em Transição:
                Desafios para Brasil e Europa na Era Trump
              </h5>
              <div class="bg-red-700 border-2 border-gray-400 text-white text-[9px] w-fit rounded-[12px] py-2 px-4">
                PRESENCIAL
              </div>
              <p className="flex gap-3 font-medium pt-2 text-gray-800">
                <img src={schedule} alt="icon" /> 06 mai - 2025 • 19:00 às 22:00
              </p>
              <div className="flex gap-2 font-medium pt-2 text-sm ">
                <img src={location} alt="icon" className="self-start pt-1" />
                <p className="text-gray-800">
                  Blue Tree Transatlântico Convention Center / Club
                  Transatlântico , São Paulo - SP
                </p>
              </div>
            </div>
            <div className="flex">
              <a
                className="py-2 mt-2 px-4 text-[16px] w-full text-center bg-white border-[1px] border-black rounded-[12px]"
                href="/evento/geopolitica-em-transicao"
                // href="https://www.sympla.com.br/evento/jantar-debate-com-o-prof-hoc-geopolitica-em-transicao-desafios-para-brasil-e-europa-na-era-trump/2914009"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div
            id="card"
            className="flex flex-col w-full xl:max-w-[400px] xl:h-[500px] justify-between"
          >
            <div className="h-full flex flex-col gap-2">
              <div className="w-full">
                <img
                  src={robotic}
                  alt=""
                  className="object-cover w-full sm:max-h-[400px] xl:max-w-[400px]"
                />
              </div>
              <h5 className="font-title text-xl ">
                Robótica e IA Sem Mistério | Traduções que Trazem o Futuro para
                o Presente
              </h5>
              <div class="bg-red-700 border-2 border-gray-400 text-white text-[9px] w-fit rounded-[12px] py-2 px-4">
                PRESENCIAL
              </div>
              <p className="flex gap-3 font-medium pt-2 text-gray-800">
                <img src={schedule} alt="icon" /> 24 abr - 2025 • 18:00 às 21:00
              </p>
              <div className="flex gap-2 font-medium pt-2 text-sm ">
                <img src={location} alt="icon" className="self-start pt-1" />
                <p className="text-gray-800">
                  Blue Tree Transatlântico Convention Center / Club
                  Transatlântico , São Paulo - SP
                </p>
              </div>
            </div>
            <div className="flex">
              <a
                className="py-2 mt-2 px-4 text-[16px] w-full text-center bg-white border-[1px] border-black rounded-[12px]"
                href="https://www.sympla.com.br/evento/jantar-debate-com-o-prof-hoc-geopolitica-em-transicao-desafios-para-brasil-e-europa-na-era-trump/2914009"
                target="_blank"
              >
                Saiba mais
              </a>
            </div>
          </div>

          <div
            id="card"
            className="flex flex-col w-full xl:max-w-[400px] xl:h-[500px] justify-between"
          >
            <div className="h-full flex flex-col gap-2">
              <div className="w-full">
                <img
                  src={marketingia}
                  alt=""
                  className="object-cover w-full sm:max-h-[400px] xl:max-w-[400px]"
                />
              </div>
              <h5 className="font-title text-xl ">
                O Futuro dos Eventos e Live Marketing com IA - Com Colja Dams
              </h5>
              <div class="bg-green-100 border-2  border-green-300 text-gray-700 text-[12px] w-fit rounded-[12px] py-1 px-3">
                Presencial
              </div>
              <p className="flex gap-3 font-medium pt-2 text-gray-800">
                <img src={schedule} alt="icon" /> 25 mar - 2025 • 09:00 às 11:30
              </p>
              <div className="flex gap-2 font-medium pt-2 text-sm ">
                <img src={location} alt="icon" className="self-start pt-1" />
                <p className="text-gray-800">
                  Blue Tree Transatlântico Convention Center / Club
                  Transatlântico , São Paulo - SP
                </p>
              </div>
            </div>
            <div className="flex">
              <a
                className="py-2 mt-2 px-4 text-[16px] w-full text-center bg-white border-[1px] border-black rounded-[12px]"
                href="https://www.sympla.com.br/evento/jantar-debate-com-o-prof-hoc-geopolitica-em-transicao-desafios-para-brasil-e-europa-na-era-trump/2914009"
                target="_blank"
              >
                Saiba mais
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col mt-24 gap-6 bg-black text-white px-8 py-10 rounded-[12px]">
        <div className="flex flex-wrap justify-between items-center relative w-full">
          <div className="flex flex-col gap-6">
            <h3
              data-aos="fade-down"
              data-aos-once="true"
              className="font-title lg:text-5xl text-4xl"
            >
              Timeline da nossa história
            </h3>
            <p
              data-aos="fade-down"
              className="font-light lg:text-2xl text-xl text-left w-full max-w-[458px]"
            >
              Descubra os eventos que moldaram a história do Club Transatlântico
            </p>
            <a
              href="/sobre#t"
              className=" text-center bg-amarelo px-8 py-3 max-w-sm text-black rounded-xl font-title hover:scale-105 transition-all"
            >
              Ver Timeline
            </a>
          </div>
          <img
            className="xl:max-w-[500px] lg:pt-0 mt-6 lg:mt-0 border-[1px] w-full object-cover h-[300px] border-white"
            src={fototimeline}
            alt=""
          />
        </div>
      </section>
    </div>
  );
};

export default AgendaSectionHome;
