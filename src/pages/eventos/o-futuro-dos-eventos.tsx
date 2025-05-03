import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/eventos/marketing-ia-marco.png";
import imageMobile from "./../../assets/images/eventos/marketing-ia-marco.png";
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
        mobileImagePosition="object-[60%_70%]"
      />
      <div class="lg:pt-10 lg:pb-20 pt-6 px-11 flex flex-col max-w-[1400px] m-auto relative">
        <div class="flex gap-2  lg:text-base text-xs text-gray-700">
          <a>Home </a>
          <span>{">"}</span>
          <a> Eventos </a>
          <span>{">"}</span>
          <a className="font-bold"> O Futuro dos Eventos </a>
        </div>
        <h1 class="lg:text-5xl text-4xl lg:leading-tight font-bold pt-6 lg:pt-6 font-title max-w-[1000px]">
          O Futuro dos Eventos e Live Marketing com IA - Com Colja Dams
        </h1>
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
          <small>Publicado em 18 de março de 2025</small>
        </div>
        <div className="pt-8 lg:text-lg text-sm max-w-[900px] w-full">
          <p>Caros associados e amigos,</p>
          <br />
          <p>
            Junte-se a Colja M. Dams, CEO da VOK DAMS, a maior agência de
            eventos da Europa, para uma sessão imperdível sobre as tendências
            que estão redefinindo a indústria de eventos.
          </p>
          <br />
          <p>
            Com mais de 50 anos de atuação global, a VOK DAMS tem sido pioneira
            no uso da Inteligência Artificial (IA) na criação de eventos – desde
            a estratégia até a execução.
          </p>
          <br />
          <p>
            Colja compartilhará insights inovadores sobre como a IA está
            personalizando experiências, otimizando a gestão e ampliando o
            impacto dos eventos ao vivo.
          </p>
          <br />
          <p>
            Prepare-se para transformar sua abordagem em live marketing e levar
            seus eventos a um novo nível!
          </p>
          <br />
          <p>
            Faremos uma sessão híbrida: nosso convidado participará online,
            enquanto nos reuniremos presencialmente para acompanhar e debater
            essa conversa de alto nível sobre as oportunidades que a IA já
            proporciona.
          </p>
          <br />
          <p>
            E para tornar o encontro ainda mais especial, ofereceremos um
            delicioso café da manhã a partir das 9h00.
          </p>
          <br />
          <p>
            Às 10h00, Colja entra ao vivo para um bate-papo transformador,
            trazendo sua visão sobre o futuro dos eventos.
          </p>
          <br />
          <p>
            Participe desse encontro exclusivo e inspire-se com quem está
            moldando o futuro da indústria de eventos!
          </p>
          <br />

          <div class="flex flex-col gap-1">
            <p>Data: 25 de março de 2025 </p>
            <p>Horário: 9h às 11h30</p>
            <p>
              Local:  Blue Tree Transatlântico Convention Center / Club
              Transatlântico 
            </p>
          </div>
          <br />
          <br />

          <p className="font-medium">Valor:</p>
          <ul>
            <li>Evento gratuito</li>
          </ul>
          <br />

          <br />

          <p className="font-medium">Esperamos por você</p>
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
