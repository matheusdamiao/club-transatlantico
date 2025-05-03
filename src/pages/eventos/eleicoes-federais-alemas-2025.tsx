import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/eventos/eleicoes-fevereiro.png";
import imageMobile from "./../../assets/images/eventos/eleicoes-fevereiro.png";
import link from "./../../assets/images/link.svg";
import shareLink from "./../../assets/images/share-event.svg";
import yellowArch from "./../../assets/images/yellow-arch.png";
import grayArch from "./../../assets/images/gray-arch.png";
import redArch from "./../../assets/images/red-arch.png";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  return (
    <main>
      <HeroSectionEvents
        imageDesktop={imageDesktop}
        imageMobile={imageMobile}
        mobileImagePosition="object-[5%_70%]"
      />
      <div class="lg:pt-10 lg:pb-20 pt-6 px-11 flex flex-col max-w-[1400px] m-auto relative">
        <div class="flex gap-2  lg:text-base text-xs text-gray-700">
          <a>Home </a>
          <span>{">"}</span>
          <a> Eventos </a>
          <span>{">"}</span>
          <a className="font-bold"> Eleições Federais Alemãs 2025 </a>
        </div>
        <div className="flex flex-wrap gap-3 items-center pt-6 lg:pt-6">
          <h1 class="lg:text-5xl  text-4xl lg:leading-tight font-bold  font-title max-w-[1000px]">
            Eleições Federais Alemãs
          </h1>
          <h1 class="lg:text-5xl text-4xl font-bold pb-[9px] ">2025</h1>
        </div>
        <div class="lg:pt-4 pt-4 flex gap-16">
          <a className="flex gap-3 font-medium pt-2 text-gray-800">
            <img src={link} alt="icon" className="w-[16px]" />
            Link do evento no Sympla
          </a>
          <a className="flex gap-3 font-medium pt-2 text-gray-800">
            <img src={shareLink} alt="icon" className="w-[20px]" />
            Compartilhe este evento
          </a>
        </div>
        <div class="pt-6">
          <small>Publicado em 18 de fevereiro de 2025</small>
        </div>
        <div className="pt-8 lg:text-lg text-sm max-w-[900px] w-full">
          <p>Caros associados e amigos,</p>
          <br />
          <p>
            Convidamos vocês para um evento especial no dia 23 de fevereiro de
            2025, no Club Transatlântico, onde acompanharemos juntos as eleições
            federais alemãs em um ambiente agradável e interativo. O encontro
            será um almoço exclusivo com transmissão ao vivo.
          </p>
          <br />
          <p className="font-medium">Programação:</p>
          <ul>
            <li>12h30 – Recepção e boas-vindas.</li>
            <li>
              13h00 – Almoço especial com pratos alemães, incluindo entrada,
              prato principal e sobremesa.
            </li>
            <li>
              14h00 – Transmissão ao vivo das projeções dos resultados em uma
              grande tela, seguida de debates e troca de ideias sobre o cenário
              político.
            </li>
          </ul>
          <br />

          <p className="font-medium">Valores:</p>
          <ul>
            <li>Associados e parceiros: R$ 100,00</li>
            <li>Público geral: R$ 200,00</li>
          </ul>
          <br />

          <div class="flex flex-col gap-1">
            <p>Data: 23 de fevereiro de 2025 </p>
            <p>Horário: 12h30 às 16h30</p>
            <p>
              Local:  Blue Tree Transatlântico Convention Center / Club
              Transatlântico 
            </p>
          </div>
          <br />

          <div class="flex flex-col gap-1">
            <p className="font-medium">
              Ingressos para associados e parceiros:
            </p>
            <p>Para garantir seu desconto, entre em contato conosco</p>

            <p>E-mail: atendimento@clubtransatlantico.com.br </p>
            <p>
              WhatsApp: (11)9.9611-6969 para obter{" "}
              <b>o link de acesso exclusivo.</b>
            </p>
            <br />
            <p>
              Venha vivenciar esse momento político crucial conosco e debater os
              desdobramentos das eleições em um encontro enriquecedor.
            </p>
            <br />
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          data-aos-once="false"
          data-aos-duration="500"
          class="hidden flex-col absolute right-0 top-28 overflow-hidden lg:flex"
        >
          <img src={yellowArch} alt="" />
          <img src={grayArch} alt="" />
          <img src={redArch} alt="" />
          <img src={yellowArch} alt="" />
          <img src={grayArch} alt="" />
        </div>
      </div>

      <FormSection />
      <SocialSection />
      <FooterSection />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <SEO />;
