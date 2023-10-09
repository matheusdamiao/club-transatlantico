import React from "react";
import bgReish from "./../assets/images/reishtags-bg-w.webp";
import Aos from "aos";

const ValuesSectionAbout = () => {
  React.useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div>
        <div className="max-w-[1400px] m-auto py-11 px-11 w-full mt-40">
          <div data-aos="fade-top" className="flex flex-col gap-11">
            <h2 className="font-title lg:text-6xl text-3xl">
              Nossa <span className="text-vermelhoEscuro">missão</span>
            </h2>
            <p className="font-body lg:text-3xl text-lg max-w-3xl">
              Reunir pessoas, por meio de agenda social, cultural e esportiva,
              contribuindo para o debate de ideias e promovendo a integração
              entre Brasil e Europa
            </p>
          </div>

          <div
            data-aos="fade-down"
            className="flex flex-col gap-11 mt-40 items-end mb-20"
          >
            <h2 className="font-title lg:text-6xl text-3xl">
              Nossa <span className="text-amarelo">visão</span>
            </h2>
            <p className="font-body lg:text-3xl text-lg text-right max-w-3xl">
              Ser referência como clube de cultura no Brasil e instituição de
              incentivo a cultura Alemã, integrando sócios, frequentadores e
              parceiros, com foco no intercâmbio cultural.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full relative lg:h-screen h-full mb-28">
        <img
          src={bgReish}
          alt=""
          className="object-cover h-full w-full lg:absolute lg:top-0 -z-10"
        />
        <div className="px-11 lg:py-40 py-14 max-w-[1400px] m-auto h-full">
          <h2 data-aos="fade-top" className="font-title lg:text-6xl text-3xl">
            {" "}
            Nossos <span className="text-vermelhoEscuro">valores</span>
          </h2>
          <ul className="h-full flex flex-col flex-wrap justify-center gap-11">
            <li
              data-aos="fade-down"
              className="flex flex-wrap lg:gap-40 sm:gap-10 gap-4 items-center pt-11"
            >
              <h4 className="font-title lg:text-4xl text-2xl">Tradição </h4>
              <p className="font-body lg:text-xl text-lg">
                Preservar relacionamentos, incentivando vínculos duradouros e de
                confiança com sócios e parceiros.{" "}
              </p>
            </li>
            <li
              data-aos="fade-top"
              className="flex flex-wrap lg:gap-40 sm:gap-10 gap-4  items-center"
            >
              <h4 className="font-title lg:text-4xl text-2xl">Respeito </h4>
              <p className="font-body lg:text-xl text-lg">
                Diversidade cultural e convivência harmoniosa entre povos.
              </p>
            </li>
            <li
              data-aos="fade-down"
              className="flex  flex-wrap lg:gap-40 sm:gap-10 gap-4  items-center"
            >
              <h4 className="font-title lg:text-4xl text-2xl">Inovação </h4>
              <p className="font-body lg:text-xl text-lg">
                Promover debates de ideias, criando novos laços entre Brasil e
                Alemanha e Europa como um todo.
              </p>
            </li>
            <li
              data-aos="fade-top"
              className="flex  flex-wrap lg:gap-40  sm:gap-10 gap-4 items-center"
            >
              <h4 className="font-title lg:text-4xl text-2xl">Comunidade </h4>
              <p className="font-body lg:text-xl text-lg">
                Incentivo a iniciativas culturais de diversas áreas que refletem
                a cultura Alemã.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ValuesSectionAbout;
