import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/eventos/significado-dos-sonhos.jpeg";
import imageMobile from "./../../assets/images/eventos/significado-dos-sonhos.jpeg";
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
        desktopImagePosition="object-bottom"
        mobileImagePosition="object-left"
      />
      <div class="lg:pt-10 lg:pb-20 pt-6 px-11 flex flex-col max-w-[1400px] m-auto relative">
        <div class="flex gap-2  lg:text-base text-xs text-gray-700">
          <a href="/">Home </a>
          <span>{">"}</span>
          <a href="/eventos"> Eventos </a>
          <span>{">"}</span>
          <a className="font-bold"> Qual o Significado de Nossos Sonhos </a>
        </div>
        <h1 class="lg:text-5xl text-4xl lg:leading-tight font-bold pt-6 lg:pt-6 font-title max-w-[1000px]">
          Qual o Significado de Nossos Sonhos
        </h1>
        <div class="lg:pt-4 pt-4 flex gap-6 lg:gap-16 items-center">
          <a
            target="_blank"
            href="https://www.sympla.com.br/evento/qual-o-significado-de-nossos-sonhos/2973238"
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
        <div className="pt-8 lg:text-lg text-sm max-w-[900px] w-full">
          <p class="font-bold">
            Uma noite para sonhar, refletir e se conectar.
          </p>
          <br />
          <p>
            O Club Transatlântico convida seus associados e parceiros para uma
            noite especial, com conteúdo relevante, boas conversas e o
            acolhimento de uma mesa bem-posta.
          </p>
          <br />

          <p>
            Nossa convidada é a <b>Prof. Dra. Marion Raucher Gallbach</b>,
            psicoterapeuta, analista junguiana e uma das maiores referências
            brasileiras no estudo dos sonhos. Em sua palestra, ela abordará o
            papel dos sonhos ao longo da história, seus significados simbólicos,
            descobertas científicas e como podem ser utilizados como ferramentas
            de autoconhecimento, cura e transformação.
          </p>
          <br />
          <p className="font-medium">Programação:</p>
          <ul>
            <li>19h - Coquetel de boas-vindas.</li>
            <li>19h30 - Palestra com a Prof. Dra. Marion Raucher Gallbach</li>
            <li>20h30 - Jantar e conversa com a palestrante.</li>
          </ul>
          <br />
          <p className="font-medium">Sobre a palestrante</p>

          <p>
            Psicóloga, mestre e doutora em Psicologia Clínica pela USP, com
            formação pelo Instituto C.G. Jung de Zurique e pela SBPA (Sociedade
            Brasileira de Psicologia Analítica), onde coordena o Núcleo de
            Sonhos. É professora convidada da pós-graduação em estudos
            junguianos da PUC-SP e autora de obras como Aprendendo com os Sonhos
            e Sonhos da Psicologia Junguiana.
          </p>
          <br />

          <div class="flex flex-col gap-1">
            <p>Data: 9 de junho de 2025 </p>
            <p>Horário: 19h às 22h</p>
            <p>
              Local:  Blue Tree Transatlântico Convention Center / Club
              Transatlântico 
            </p>
          </div>
          <br />
          <p className="font-medium">Investimento</p>
          <ul>
            <li>
              Associados e parceiros: <b>Cortesia</b>
            </li>
            <li>
              Convidados de associados e parceiros: <b>R$ 200,00</b>
            </li>
            <li>
              Público geral: <b>R$ 400,00</b>
            </li>
          </ul>
          <br />

          <div class="flex flex-col gap-1">
            <p className="font-medium">Associados e parceiros</p>
            <p>Para garantir seu desconto, entre em contato conosco</p>

            <p>E-mail: atendimento@clubtransatlantico.com.br </p>
            <p>
              WhatsApp: (11)9.9611-6969 para obter{" "}
              <b>o link de acesso exclusivo.</b>
            </p>
            <br />

            <p class="font-medium">Vagas limitadas </p>

            <a
              target="_blank"
              className="underline text-blue-600 pt-2"
              href="https://www.sympla.com.br/evento/qual-o-significado-de-nossos-sonhos/2973238"
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
