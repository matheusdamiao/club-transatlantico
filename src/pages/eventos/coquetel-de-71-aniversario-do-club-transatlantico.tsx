import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/eventos/coquetel-aniversario-club.png";
import imageMobile from "./../../assets/images/eventos/coquetel-aniversario-club.png";
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
        desktopImagePosition="object-top"
        mobileImagePosition="object-left"
      />
      <div class="lg:pt-10 lg:pb-20 pt-6 px-11 flex flex-col max-w-[1400px] m-auto relative">
        <div class="flex gap-2  lg:text-base text-xs text-gray-700">
          <a href="/">Home </a>
          <span>{">"}</span>
          <a href="/eventos"> Eventos </a>
          <span>{">"}</span>
          <a className="font-bold">
            {" "}
            Coquetel de 71º Aniversário do Club Transatlântico{" "}
          </a>
        </div>
        <h1 class="lg:text-5xl text-4xl lg:leading-tight pt-6 lg:pt-6 font-extrabold max-w-[1000px]">
          Coquetel de 71º Aniversário do Club Transatlântico
        </h1>
        <div class="lg:pt-4 pt-4 flex gap-6 lg:gap-16 items-center">
          <a
            target="_blank"
            href="https://www.sympla.com.br/evento/coquetel-de-71-aniversario-do-club-transatlantico/2959817"
            className="flex gap-3 font-medium pt-2 text-gray-800"
          >
            <img src={link} alt="icon" className="w-[16px]" />
            Link para o evento no Sympla
          </a>
          {/* <a className="flex gap-3 font-medium pt-2 text-gray-800 items-center">
            <img src={shareLink} alt="icon" className="w-[20px]" />
            Compartilhe este evento
          </a> */}
        </div>
        <div class="pt-6">
          <small>Publicado em 18 de maio de 2025</small>
        </div>
        <div className="pt-8 lg:text-lg text-sm max-w-[900px] w-full">
          <p>
            Celebre conosco os 71 anos do Club Transatlântico em um evento
            especial repleto de confraternização, tradição e elegância.
          </p>
          <br />
          <p>
            O coquetel será uma oportunidade única para reunir associados,
            parceiros e amigos em um ambiente acolhedor, com uma seleção de
            bebidas e um cardápio cuidadosamente preparado para marcar essa data
            tão significativa.
          </p>
          <br />
          <p>
            Venha brindar conosco esta trajetória de sucesso, fortalecendo os
            laços que unem a comunidade do Club Transatlântico e celebrando o
            legado cultural e social que nos acompanha ao longo dessas sete
            décadas.
          </p>
          <br />
          <p>Esperamos por você para um momento inesquecível!</p>
          <br />

          <div class="flex flex-col gap-1">
            <p className="font-medium">Data e horário:</p>
            <p>Data: 27 de maio de 2025 </p>
            <p>Horário: de 17h30 às 20h30</p>
            <p>
              Local:  Blue Tree Transatlântico Convention Center / Club
              Transatlântico 
            </p>
          </div>
          <br />

          <p className="font-medium">Investimento:</p>
          <ul>
            <li>Associados CT e Parceiros Especiais: Cortesia</li>
            <li>Convidados de Sócios e Parceiros: R$ 100</li>
            <li>Público Geral: R$ 150</li>
          </ul>
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

            <p class="font-medium">Vagas limitadas </p>
            <br />

            <a
              target="_blank"
              className="underline text-blue-600 pt-2"
              href="https://www.sympla.com.br/evento/coquetel-de-71-aniversario-do-club-transatlantico/2959817"
            >
              Link do evento no Sympla
            </a>
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

export const Head: HeadFC = () => (
  <SEO
    title="Coquetel de 71º Aniversário do Club Transatlântico"
    og={imageMobile}
  />
);
