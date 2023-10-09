import React from "react";
import history from "./../assets/images/img-history-w.webp";
import yellowArch from "./../assets/images/yellow-arch.png";
import grayArch from "./../assets/images/gray-arch.png";
import redArch from "./../assets/images/red-arch.png";
import Aos from "aos";

const HistorySectionAbout = () => {
  React.useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div id="history" className="bg-white">
      <div className="w-full grid grid-cols-0 grid-rows-12 lg:pt-28 lg:pb-40 lg:grid-cols-2 lg:gap-16 max-w-[1400px] m-auto py-11 ">
        <h1
          data-aos="fade-down"
          className="font-title lg:text-5xl text-4xl py-11 pl-11 w-full"
        >
          O Club Transatlântico
        </h1>
        <div
          data-aos="fade-down"
          className="order-4 flex flex-col gap-16 py-10 lg:py-0"
        >
          {" "}
          <p className="font-sans px-11 text-lg lg:text-xl">
            O Club Transatlântico foi fundado em 1954 com o conceito de ser o
            ponto de encontro da comunidade alemã.{" "}
            <span className="text-vermelhoEscuro font-semibold">
              {" "}
              Conquistou sua primeira sede oficial em 1955
            </span>
            , num palacete em estilo neoclássico na Rua 13 de Maio, onde
            permaneceu durante 36 anos. A história do Club teve uma grande
            ligação ao nome Transatlântico, numa simbologia ao elo cultural,
            social e espiritual entre as nações, oferecendo à sociedade grandes
            eventos.
          </p>
          <p className="font-sans px-11 text-lg lg:text-xl">
            O começo dos anos setenta refletiu sobre a vida do Club
            Transatlântico. A fundação de renomadas empresas, as inúmeras
            visitas de dirigentes de grandes indústrias, presidentes de
            associações e entidades, deputados e jornalistas levaram a um
            considerável enriquecimento das{" "}
            <span className="text-vermelhoEscuro font-semibold">
              relações Brasil - Alemanha.
            </span>{" "}
            Diversos empresários passaram a utilizar as belíssimas instalações
            do Club, para a realização de seus eventos, legando aos seus
            dirigentes a responsabilidade de encontrar uma nova sede para
            ampliar seu espaço físico.
          </p>
          <p className="font-sans px-11 text-lg lg:text-xl">
            A desapropriação de uma parte da sede, em virtude da construção do
            viaduto na Rua 13 de maio e problemas com a localização e trânsito
            crescente na região, contribuiu para a decisão final:{" "}
            <span className="text-vermelhoEscuro font-semibold">
              a aquisição de uma nova sede
            </span>
            . Após diversos estudos mercadológicos, encontrou-se um terreno
            apropriado, na{" "}
            <span className="text-vermelhoEscuro font-semibold">
              Rua José Guerra, 130, Chácara Santo Antônio
            </span>
            . O prédio instalado em uma área 33 mil m², abriga um condomínio
            empresarial, onde desde 1991 está a nova sede do Club
            Transatlântico.
          </p>
        </div>

        <img
          src={history}
          alt=""
          className="row-span-4 m-auto lg:order-2 lg:row-span-2 lg:sticky lg:top-0 max-w-xs sm:max-w-lg lg:max-w-none"
        />
      </div>
      <div className="flex items-center justify-center overflow-hidden">
        <img src={yellowArch} alt="" />
        <img src={grayArch} alt="" />
        <img src={redArch} alt="" />
        <img src={yellowArch} alt="" />
        <img src={grayArch} alt="" />
      </div>
    </div>
  );
};

export default HistorySectionAbout;
