import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/eventos/geopolitica-maio.png";
import imageMobile from "./../../assets/images/eventos/geopolitica-maio-mobile.png";
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
      />
      <div class="lg:pt-10 lg:pb-20 pt-6 px-11 flex flex-col max-w-[1400px] m-auto relative">
        <div class="flex gap-2  lg:text-base text-xs text-gray-700">
          <a>Home </a>
          <span>{">"}</span>
          <a> Eventos </a>
          <span>{">"}</span>
          <a className="font-bold"> Geopolítica em Transição </a>
        </div>
        <h1 class="lg:text-5xl text-4xl lg:leading-tight font-bold pt-6 lg:pt-6 font-title max-w-[1000px]">
          Jantar-Debate com o Prof. HOC - Geopolítica em Transição: Desafios
          para Brasil e Europa na Era Trump
        </h1>
        <div class="lg:pt-4 pt-4 flex gap-6 lg:gap-16 items-center">
          <a className="flex gap-3 font-medium pt-2 text-gray-800">
            <img src={link} alt="icon" className="w-[16px]" />
            Link do evento no Sympla
          </a>
          <a className="flex gap-3 font-medium pt-2 text-gray-800 items-center">
            <img src={shareLink} alt="icon" className="w-[20px]" />
            Compartilhe este evento
          </a>
        </div>
        <div class="pt-6">
          <small>Publicado em 03 de maio de 2025</small>
        </div>
        <div className="pt-8 lg:text-lg text-sm max-w-[900px] w-full">
          <p>
            Em um mundo marcado por transformações geopolíticas aceleradas,
            convidamos você para uma noite exclusiva de reflexão e diálogo com
            Professor Heni Ozi Cukier — cientista político, professor de
            Relações Internacionais e uma das vozes mais respeitadas na análise
            de riscos globais.
          </p>
          <br />
          <div class="flex flex-col gap-1">
            <p>Data: 6 de maio de 2025 </p>
            <p>Horário: das 19h às 22h</p>
            <p>
              Local:  Blue Tree Transatlântico Convention Center / Club
              Transatlântico 
            </p>
          </div>
          <br />

          <p className="font-medium">Programação:</p>
          <ul>
            <li>Coquetel de boas-vindas.</li>
            <li>
              Palestra sobre os impactos da era Trump na geopolítica global, com
              foco nas relações Brasil-Europa.
            </li>
            <li>Sessão interativa de perguntas e respostas.</li>
            <li>Jantar de alto padrão com networking estratégico.</li>
          </ul>
          <br />

          <p className="font-medium">Investimento:</p>
          <ul>
            <li>Sócios do Club Transatlântico: Cortesia</li>
            <li>Convidados de Sócios e Parceiros: R$ 200</li>
            <li>Público Geral: R$ 450</li>
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
            <p>
              Participe deste encontro único com líderes, pensadores e
              formadores de opinião — um jantar que promete provocar reflexões
              profundas e conexões duradouras.
            </p>
            <br />
            <p class="font-medium">Vagas limitadas </p>

            <p>
              Um ambiente pensado para troca qualificada e conexão entre
              tomadores de decisão.
            </p>
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
    title="Jantar-Debate com o Prof. HOC - Geopolítica em Transição: Desafios
          para Brasil e Europa na Era Trump"
    og={imageMobile}
  />
);
