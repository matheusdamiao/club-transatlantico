import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/eventos/bolao-alemao.png";
import imageMobile from "./../../assets/images/eventos/bolao-alemao.png";
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
        desktopImagePosition="object-[80%_70%]"
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
            Primeiro Happy Hour Bolão Alemão Transatlântico{" "}
          </a>
        </div>
        <h1 class="lg:text-5xl text-4xl lg:leading-tight font-bold pt-6 lg:pt-6 font-title max-w-[1000px]">
          Primeiro Happy Hour Bolão Alemão Transatlântico
        </h1>
        <div class="lg:pt-4 pt-4 flex gap-6 lg:gap-16 items-center">
          <a
            target="_blank"
            href="https://www.sympla.com.br/evento/primeiro-happy-hour-bolao-alemao-transatlantico/2981276"
            className="flex gap-3 font-medium pt-2 text-gray-800"
          >
            <img src={link} alt="icon" className="w-[16px]" />
            Link para evento no Sympla
          </a>
          {/* <a className="flex gap-3 font-medium pt-2 text-gray-800 items-center">
            <img src={shareLink} alt="icon" className="w-[20px]" />
            Compartilhe este evento
          </a> */}
        </div>
        <div class="pt-6">
          <small>Publicado em 5 de junho de 2025</small>
        </div>
        <div className="pt-8 lg:text-lg text-sm max-w-[800px] w-full">
          <p class="font-bold">
            Prepare-se para uma noite leve, divertida e cheia de tradição!
          </p>
          <br />
          <p>
            Estamos lançando o nosso Happy Hour de Bolão Alemão, o tradicional
            jogo de origem germânica que mistura habilidade, descontração e boas
            risadas.
          </p>
          <br />
          <p>
            E o melhor: é para todos! Amadores, curiosos e apaixonados por
            cultura alemã estão convidados a participar.
          </p>
          <br />
          <p>
            A partir de junho, o Bolão Alemão passa a acontecer toda 2ª
            sexta-feira do mês aqui no clube.
          </p>
          <br />
          <p>
            E para começar com tudo, o primeiro encontro será gratuito e contará
            com participação especial de <b> Vera Lucia Sanchez </b> — nossa
            capitã, guardiã do bolão e apaixonada pelo Transatlântico.
          </p>
          <br />

          <p className="font-medium">Vem viver essa experiência com a gente:</p>
          <ul>
            <li>Esporte típico da cultura germânica</li>
            <li>Ambiente descontraído e acolhedor</li>
            <li>Boa conversa, petiscos e bebidas.</li>
          </ul>
          <br />

          <div class="flex flex-col gap-1">
            <p>
              Data: <b> Toda 2ª sexta-feira do mês </b>{" "}
            </p>

            <p>Horário: 19h às 22h</p>
            <p>
              Local: Blue Tree Transatlântico Convention Center / Club
              Transatlântico
            </p>
          </div>
          <br />
          <p className="font-medium">Valores:</p>
          <ul>
            <li>Associados e parceiros: Cortesia</li>
            <li>Convidados de Sócios: R$ 50,00</li>
            <li>Público geral: R$ 100,00</li>
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

            <p class="font-medium">Garanta sua vaga e convide seus amigos!</p>

            <a
              target="_blank"
              className="underline text-blue-600 pt-2"
              href="https://www.sympla.com.br/evento/primeiro-happy-hour-bolao-alemao-transatlantico/2981276"
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
    title="Robótica e IA Sem Mistério | Traduções que Trazem o Futuro para o Presente"
    og={imageMobile}
  />
);
