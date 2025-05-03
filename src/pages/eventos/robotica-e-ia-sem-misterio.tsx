import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/eventos/robotica-abril.png";
import imageMobile from "./../../assets/images/eventos/robotica-abril-mobile.png";
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
          <a className="font-bold"> Robótica e IA Sem Mistério </a>
        </div>
        <h1 class="lg:text-5xl text-4xl lg:leading-tight font-bold pt-6 lg:pt-6 font-title max-w-[1000px]">
          Robótica e IA Sem Mistério | Traduções que Trazem o Futuro para o
          Presente
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
          <small>Publicado em 20 de abril de 2025</small>
        </div>
        <div className="pt-8 lg:text-lg text-sm max-w-[900px] w-full">
          <p>
            Em um cenário em que a tecnologia redefine o presente e o futuro, a
            robótica e a inteligência artificial deixaram de ser apenas
            conceitos distantes e tornaram-se ferramentas estratégicas para
            inovação e competitividade.
          </p>
          <br />
          <p>
            Nesta palestra imperdível, vamos explorar dois livros fundamentais
            traduzidos para o português por Hermann Kux, que abordam desde os
            princípios da robótica até as aplicações práticas da IA na indústria
            moderna.
          </p>
          <br />

          <p>
            O Prof. Hermann Kux — pesquisador titular III do Instituto Nacional
            de Pesquisas Espaciais (INPE), referência em geociências e
            sensoriamento remoto — traz uma visão clara, acessível e atual sobre
            como dados, IA e Machine Learning estão revolucionando o setor
            produtivo. Sua abordagem vai além da teoria: apresenta estudos de
            caso reais, orientações práticas e caminhos para que empresas possam
            aplicar esses conhecimentos de forma eficiente e sustentável.
          </p>
          <br />

          <p>
            Mais do que uma palestra, será uma conversa sobre o agora e o que
            vem pela frente. Uma oportunidade única de compreender como a IA
            deixou de ser uma escolha e passou a ser uma necessidade para o
            sucesso empresarial.
          </p>
          <br />

          <p>
            Contamos com sua presença para este momento de conhecimento, troca e
            reflexão sobre os caminhos que conectam tecnologia e desenvolvimento
            sustentável.
          </p>
          <br />

          <div class="flex flex-col gap-1">
            <p>Data: 24 de abril de 2025 </p>
            <p>Horário: 18h às 21h</p>
            <p>
              Local:  Blue Tree Transatlântico Convention Center / Club
              Transatlântico 
            </p>
          </div>
          <br />
          <p className="font-medium">Valores:</p>
          <ul>
            <li>Associados e parceiros: cortesia</li>
            <li>Público geral: R$ 200,00</li>
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

export const Head: HeadFC = () => <SEO />;
