import React from "react";
import sp from "./../assets/images/bg-sp-w.webp";
import Aos from "aos";

const AboutSectionHome = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="lg:relative w-full lg:h-[75vh] h-full flex flex-col mb-28 ">
      <img
        src={sp}
        alt=""
        className="object-cover lg:w-full h-[50vh] lg:h-full"
      />
      <div className="lg:absolute top-[20%] grid grid-cols-1 gap-16 lg:grid-cols-2 max-w-[1400px] m-auto left-0 right-0 ">
        <div data-aos="fade-down" className="flex flex-col px-11">
          <h3 className="font-title lg:text-5xl text-4xl mt-11 lg:mt-0">
            Nossa missão é integrar cada vez mais a cultura do Brasil e da
            Europa
          </h3>
          <a
            href="/sobre#t"
            className=" text-center bg-amarelo px-8 py-3 mt-10 max-w-sm text-black rounded-xl font-title hover:scale-105 transition-all"
          >
            CONHEÇA NOSSA HISTÓRIA
          </a>
        </div>
        <div>
          <p data-aos="fade-top" className="font-sans px-11 text-xl ">
            Fundado em 1954 pela comunidade alemã residente em São Paulo, o Club
            Transatlântico transformou-se, ao longo dos anos, em um importante
            pólo multicultural e um clube de negócios. A história do Club teve
            uma grande ligação ao nome Transatlântico, numa simbologia ao elo
            cultural, social e espiritual entre Brasil e Alemanha, oferecendo à
            sociedade grandes eventos
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSectionHome;
