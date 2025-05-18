import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import FormSection from "../components/formSection";
import SocialSection from "../components/socialSection";
import FooterSection from "../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../components/seo";
import HeroSectionEvents from "../components/heroSectionEvents";
import yellowArch from "./../assets/images/yellow-arch.png";
import grayArch from "./../assets/images/gray-arch.png";
import redArch from "./../assets/images/red-arch.png";
import marketingia from "./../assets/images/eventos/marketing-ia-marco.png";
import schedule from "./../assets/images/schedule.svg";
import location from "./../assets/images/local-icon.svg";
import trumpEvent from "./../assets/images/eventos/geopolitica-maio.png";
import roboticaIA from "./../assets/images/eventos/robotica-abril.png";
import eleicoes2025 from "./../assets/images/eventos/eleicoes-fevereiro.png";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const allEvents = [
    {
      id: 1,
      title: "Jantar-Debate com o Prof. HOC - Geopolítica em Transição",
      description: "Desafios para Brasil e Europa na Era Trump.",
      date: "06 de Maio de 2025",
      time: "19h às 22h",
      location:
        "Blue Tree Transatlântico Convention Center / Club Transatlântico, São Paulo - SP",
      image: trumpEvent,
      link: "/eventos/geopolitica-em-transicao",
    },
    {
      id: 2,
      title: "Robótica e IA Sem Mistério",
      description: "Traduções que Trazem o Futuro para o Presente.",
      date: "23 de Abril de 2025",
      time: "18h às 21h",
      location:
        "Blue Tree Transatlântico Convention Center / Club Transatlântico, São Paulo - SP",
      image: roboticaIA,
      link: "/eventos/robotica-e-ia-sem-misterio",
    },
    {
      id: 3,
      title: "O Futuro dos Eventos e Live Marketing com IA - Com Colja Dams",
      description: "Explorando o impacto da IA no marketing e eventos.",
      date: "25 de Março de 2025",
      time: "09h às 11h30",
      location:
        "Blue Tree Transatlântico Convention Center / Club Transatlântico, São Paulo - SP",
      image: marketingia,
      link: "/eventos/o-futuro-dos-eventos",
    },
    {
      id: 4,
      title: "Eleições Federais Alemãs",
      description: "Discussão sobre o impacto das eleições na Alemanha.",
      date: "23 de Fevereiro de 2025",
      time: "12h30 às 16h30",
      location:
        "Blue Tree Transatlântico Convention Center / Club Transatlântico, São Paulo - SP",
      image: eleicoes2025,
      link: "/eventos/eleicoes-federais-alemas-2025",
    },
  ];

  return (
    <main>
      <HeroSectionEvents
        opacity={"opacity-40"}
        paddingTopHeroText="!pt-[150px]"
        heroSize="h-[400px]"
        // imageDesktop={imageDesktop}
        // imageMobile={imageMobile}
        // mobileImagePosition="object-[60%_70%]"
        // heroText="Navegue pelos Eventos do Club"
        heroText="Conheça os eventos que moldaram a história do Club"
      />
      <div class="lg:pt-10 lg:pb-20 pt-6  flex  flex-col max-w-[1400px] m-auto relative">
        <div class="flex gap-2 px-11  lg:text-base text-xs text-gray-700">
          <a href="/">Home </a>
          <span>{">"}</span>
          <a>
            {" "}
            <b> Timeline </b>
          </a>
        </div>
        <h1 class="lg:text-5xl text-4xl px-11 lg:leading-tight font-bold pt-6 lg:pt-6 font-title max-w-[1000px]">
          Navegue pela linha do tempo
        </h1>
        <h2 class="text-base lg:text-xl pt-4  px-11">
          Décadas de tradição, cultura e conexão — um passeio pelos eventos que
          moldaram o nosso clube.
        </h2>
        <h3 className="text-4xl font-bold pt-16 lg:pt-24 pl-5">2025</h3>
        <div className="h-full mt-8 pl-4">
          <div class="flex items-center gap-4">
            <div class="flex flex-col flex-0 flex-shrink-0 border-4 border-yellow-400  justify-center items-center  relative rounded-full  w-24 h-24">
              <p className="text-3xl font-bold text-center">27</p>
              <p className="text-lg font-bold">Maio</p>
              <div class="absolute bottom-[-61px] left-1/2 transform -translate-x-1/2 w-1 h-[60px] bg-gray-600"></div>
              <div class="absolute left-[110px] lg:left-[150px]  w-[200px] min-[400px]:w-[250px] min-[500px]:w-[300px] sm:w-[500px] lg:w-[700px] flex gap-2 items-center">
                <a
                  href="/eventos/coquetel-de-71-aniversario-do-club-transatlantico"
                  class="text-[#2b2b2b] text-lg lg:text-2xl hover:underline hover:text-gray-900 transition-all"
                >
                  Coquetel de 71º Aniversário do Club Transatlântico
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full mt-[54px] pl-4">
          <div class="flex items-center gap-4">
            <div class="flex flex-col flex-0 flex-shrink-0 border-4 border-yellow-400  justify-center items-center  relative rounded-full  w-24 h-24">
              <p className="text-3xl font-bold">6</p>
              <p className="text-lg font-bold">Maio</p>
              <div class="absolute bottom-[-61px] left-1/2 transform -translate-x-1/2 w-1 h-[60px] bg-gray-600"></div>
              <div class="absolute left-[110px] lg:left-[150px]  w-[200px] min-[400px]:w-[250px] min-[500px]:w-[300px] sm:w-[500px] lg:w-[700px] flex gap-2 items-center">
                <a
                  href="/eventos/geopolitica-em-transicao"
                  class="text-[#2b2b2b] text-lg lg:text-2xl hover:underline hover:text-gray-900 transition-all"
                >
                  Jantar-Debate com o Prof. HOC - Geopolítica em Transição:
                  Desafios para Brasil e Europa na Era Trump
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="h-full mt-[54px] pl-4">
          <div class="flex items-center gap-4">
            <div class="flex flex-col flex-0 flex-shrink-0 border-4 border-yellow-400  justify-center items-center  relative rounded-full  w-24 h-24">
              <p className="text-3xl font-bold">24</p>
              <p className="text-lg font-bold">Abril</p>
              <div class="absolute bottom-[-61px] left-1/2 transform -translate-x-1/2 w-1 h-[60px] bg-gray-600"></div>
              <div className="absolute left-[110px] lg:left-[150px]  w-[200px] min-[400px]:w-[250px] min-[500px]:w-[300px] sm:w-[500px] lg:w-[700px]  flex gap-2 items-center">
                <a
                  href="/eventos/robotica-e-ia-sem-misterio/"
                  class="text-[#2b2b2b] text-lg lg:text-2xl"
                >
                  Robótica e IA Sem Mistério | Traduções que Trazem o Futuro
                  para o Presente
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="h-full mt-[54px] pl-4">
          <div class="flex items-center gap-4">
            <div class="flex flex-col flex-0 flex-shrink-0 border-4 border-yellow-400  justify-center items-center  relative rounded-full  w-24 h-24">
              <p className="text-3xl font-bold">25</p>
              <p className="text-lg font-bold">Mar</p>
              <div class="absolute bottom-[-61px] left-1/2 transform -translate-x-1/2 w-1 h-[60px] bg-gray-600"></div>
              <div className="absolute left-[110px] lg:left-[150px] w-[200px] min-[400px]:w-[250px] min-[500px]:w-[300px] sm:w-[500px] lg:w-[700px]  flex gap-2 items-center">
                <a
                  href="/eventos/o-futuro-dos-eventos"
                  class="text-[#2b2b2b] text-lg lg:text-2xl"
                >
                  O Futuro dos Eventos e Live Marketing com IA - Com Colja Dams
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="h-full mt-[54px] pl-4">
          <div class="flex items-center gap-4">
            <div class="flex flex-col flex-0 flex-shrink-0 border-4 border-yellow-400  justify-center items-center  relative rounded-full  w-24 h-24">
              <p className="text-3xl font-bold">23</p>
              <p className="text-lg font-bold">Fev</p>
              {/* <div class="absolute bottom-[-61px] left-1/2 transform -translate-x-1/2 w-1 h-[60px] bg-gray-600"></div> */}
              <div className="absolute left-[110px] lg:left-[150px]  w-[200px] min-[400px]:w-[250px] min-[500px]:w-[300px] sm:w-[500px] lg:w-[700px] flex gap-2 items-center">
                <a
                  href="/eventos/eleicoes-federais-alemas-2025"
                  class="text-[#2b2b2b] text-lg lg:text-2xl"
                >
                  Eleições Federais Alemãs 2025
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ARCOSSSSSS */}
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-once="false"
        data-aos-duration="500"
        class="hidden flex-col absolute right-0 top-[60vh] overflow-hidden lg:flex"
      >
        <img src={yellowArch} alt="" />
        <img src={grayArch} alt="" />
        <img src={redArch} alt="" />
        <img src={yellowArch} alt="" />
        <img src={grayArch} alt="" />
      </div>
      <FormSection />
      <SocialSection />
      <FooterSection />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <SEO
    title="Timeline do Club Transatlântico"
    description="Descubra os momentos que definiram nossa trajetória e conectaram culturas."
  />
);
