import * as React from "react";
import { Script, type HeadFC, type PageProps } from "gatsby";
import FormSection from "../../components/formSection";
import SocialSection from "../../components/socialSection";
import FooterSection from "../../components/footerSection";
import "aos/dist/aos.css";
import Aos from "aos";
import SEO from "../../components/seo";
import HeroSectionEvents from "../../components/heroSectionEvents";
import imageDesktop from "./../../assets/images/background-eventos.png";
import imageMobile from "./../../assets/images/background-eventos.png";
import link from "./../../assets/images/link.svg";
import shareLink from "./../../assets/images/share-event.svg";
import yellowArch from "./../../assets/images/yellow-arch.png";
import grayArch from "./../../assets/images/gray-arch.png";
import redArch from "./../../assets/images/red-arch.png";
import marketingia from "./../../assets/images/eventos/marketing-ia-marco.png";
import schedule from "./../../assets/images/schedule.svg";
import location from "./../../assets/images/local-icon.svg";
import trumpEvent from "./../../assets/images/eventos/geopolitica-maio.png";
import roboticaIA from "./../../assets/images/eventos/robotica-abril.png";
import eleicoes2025 from "./../../assets/images/eventos/eleicoes-fevereiro.png";

const IndexPage: React.FC<PageProps> = () => {
  React.useEffect(() => {
    Aos.init();
  }, []);

  const events = [
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
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredEvents, setFilteredEvents] = React.useState(events);

  const [selectedMonth, setSelectedMonth] = React.useState("");
  const [selectedYear, setSelectedYear] = React.useState("2025");

  const handleSearch = () => {
    const filtered = events.filter((event) => {
      // Verifica se o termo de busca corresponde ao título, descrição ou data
      const matchesSearchTerm =
        searchTerm !== "" &&
        (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          event.date.toLowerCase().includes(searchTerm.toLowerCase()));

      // Verifica se o mês selecionado corresponde ao mês do evento
      const matchesMonth =
        selectedMonth !== "" && event.date.includes(selectedMonth);

      // Verifica se o ano selecionado corresponde ao ano do evento
      const matchesYear =
        selectedYear !== "" && event.date.includes(selectedYear);

      console.log("matchesMonth", selectedMonth, "matchesYear", selectedYear);

      // Retorna true se qualquer uma das condições for verdadeira
      return matchesSearchTerm || matchesMonth || matchesYear;
    });

    setFilteredEvents(filtered);
  };
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    console.log("value de month", e.target.value);
    // handleSearch();
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(e.target.value);
    // handleSearch();
  };

  React.useEffect(() => {
    const filtered = events.filter((event) => {
      // Verifica se o termo de busca corresponde ao título, descrição ou data
      const matchesSearchTerm =
        searchTerm === "" ||
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.date.toLowerCase().includes(searchTerm.toLowerCase());

      // Verifica se o mês selecionado está presente na string da data
      const matchesMonth =
        selectedMonth === "" ||
        event.date.toLowerCase().includes(selectedMonth.toLowerCase());

      // Verifica se o ano selecionado está presente na string da data
      const matchesYear =
        selectedYear === "" || event.date.includes(selectedYear);

      // Retorna true se o evento corresponder a todos os filtros aplicados
      return matchesSearchTerm && matchesMonth && matchesYear;
    });

    setFilteredEvents(filtered);
  }, [searchTerm, selectedMonth, selectedYear]); // Dependências
  return (
    <main>
      <HeroSectionEvents
        opacity={"opacity-40"}
        imageDesktop={imageDesktop}
        imageMobile={imageMobile}
        mobileImagePosition="object-[60%_70%]"
        // heroText="Navegue pelos Eventos do Club"
        heroText="Fique por dentro dos eventos do Club"
      />
      <div class="lg:pt-10 lg:pb-20 pt-6 px-11 flex  flex-col max-w-[1400px] m-auto relative">
        <div class="flex gap-2  lg:text-base text-xs text-gray-700">
          <a href="/">Home </a>
          <span>{">"}</span>
          <a>
            {" "}
            <b> Eventos </b>
          </a>
        </div>
        <h1 class="lg:text-5xl text-4xl lg:leading-tight font-bold pt-6 lg:pt-6 font-title max-w-[1000px]">
          Últimos Eventos
        </h1>

        <div id="cards-wrapper" class="flex flex-wrap gap-16 lg:gap-8 pt-12">
          <div
            id="card"
            className="flex flex-col w-full h-full justify-between pb-12"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
              <div className="lg:w-[80%] lg:h-[300px]">
                <img
                  src={trumpEvent}
                  alt=""
                  className="object-cover lg:w-full h-full"
                />
              </div>
              <div className=" flex flex-col gap-2">
                <h5 className="font-title text-3xl ">
                  Jantar-Debate com o Prof. HOC - Geopolítica em Transição:
                  Desafios para Brasil e Europa na Era Trump
                </h5>
                <div class="bg-green-100 border-2  border-green-300 text-gray-700 text-[12px] w-fit rounded-[12px] py-1 px-3">
                  Presencial
                </div>
                <p className="flex gap-3 font-medium pt-2 text-gray-800">
                  <img src={schedule} alt="icon" /> 06 de Maio de 2025 • 19h às
                  22h
                </p>
                <div class="flex gap-2 font-medium pt-2 text-sm items-center ">
                  <img src={location} alt="icon" className="self-start pt-1" />
                  <p className="text-gray-800">
                    Blue Tree Transatlântico Convention Center / Club
                    Transatlântico , São Paulo - SP
                  </p>
                </div>
                <div className="flex">
                  <a
                    className="py-2 mt-2 px-4 text-[16px] w-full lg:w-[60%] text-center bg-white border-[1px] border-black rounded-[12px]"
                    href="/eventos/geopolitica-em-transicao"
                    // href="https://www.sympla.com.br/evento/jantar-debate-com-o-prof-hoc-geopolitica-em-transicao-desafios-para-brasil-e-europa-na-era-trump/2914009"
                  >
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            id="card"
            className="flex flex-col w-full xl:max-w-[400px] xl:h-[450px]  justify-between"
          >
            <div className="h-full flex flex-col gap-2">
              <div className="w-full">
                <img
                  src={roboticaIA}
                  alt=""
                  className="object-cover w-full sm:max-h-[400px] xl:max-w-[400px]"
                />
              </div>
              <h5 className="font-title text-xl ">
                Robótica e IA Sem Mistério | Traduções que Trazem o Futuro para
                o Presente
              </h5>
              <div class="bg-green-100 border-2  border-green-300 text-gray-700 text-[12px] w-fit rounded-[12px] py-1 px-3">
                Presencial
              </div>
              <p className="flex gap-3 font-medium pt-2 text-gray-800">
                <img src={schedule} alt="icon" /> 23 de abril de 2025 • 18h às
                21h
              </p>
              <div className="flex gap-2 font-medium pt-2 text-sm ">
                <img src={location} alt="icon" className="self-start pt-1" />
                <p className="text-gray-800">
                  Blue Tree Transatlântico Convention Center / Club
                  Transatlântico , São Paulo - SP
                </p>
              </div>
              <div className="flex">
                <a
                  className="py-2 mt-2 px-4 text-[16px] w-full text-center bg-white border-[1px] border-black rounded-[12px]"
                  href="/eventos/robotica-e-ia-sem-misterio"
                  // href="https://www.sympla.com.br/evento/jantar-debate-com-o-prof-hoc-geopolitica-em-transicao-desafios-para-brasil-e-europa-na-era-trump/2914009"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col w-full xl:max-w-[400px] xl:h-[450px]  justify-between"
          >
            <div className="h-full flex flex-col gap-2">
              <div className="w-full">
                <img
                  src={marketingia}
                  alt=""
                  className="object-cover w-full sm:max-h-[400px] xl:max-w-[400px]"
                />
              </div>
              <h5 className="font-title text-xl ">
                O Futuro dos Eventos e Live Marketing com IA - Com Colja Dams
              </h5>
              <div class="bg-green-100 border-2  border-green-300 text-gray-700 text-[12px] w-fit rounded-[12px] py-1 px-3">
                Presencial
              </div>
              <p className="flex gap-3 font-medium pt-2 text-gray-800">
                <img src={schedule} alt="icon" /> 25 mar - 2025 • 09:00 às 11:30
              </p>
              <div className="flex gap-2 font-medium pt-2 text-sm ">
                <img src={location} alt="icon" className="self-start pt-1" />
                <p className="text-gray-800">
                  Blue Tree Transatlântico Convention Center / Club
                  Transatlântico , São Paulo - SP
                </p>
              </div>
              <div className="flex">
                <a
                  className="py-2 mt-2 px-4 text-[16px] w-full text-center bg-white border-[1px] border-black rounded-[12px]"
                  href="/eventos/o-futuro-dos-eventos"
                  // href="https://www.sympla.com.br/evento/jantar-debate-com-o-prof-hoc-geopolitica-em-transicao-desafios-para-brasil-e-europa-na-era-trump/2914009"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
          <div
            id="card"
            className="flex flex-col w-full xl:max-w-[400px] xl:h-[450px] justify-between"
          >
            <div className="h-full flex flex-col gap-2">
              <div className="w-full">
                <img
                  src={eleicoes2025}
                  alt=""
                  className="object-cover w-full sm:max-h-[400px] xl:max-w-[400px]"
                />
              </div>

              <h5 class="font-title text-xl">Eleições Federais Alemãs </h5>
              <h5 class="font-extrabold text-xl">2025</h5>
              <div class="bg-green-100 border-2  border-green-300 text-gray-700 text-[12px] w-fit rounded-[12px] py-1 px-3">
                Presencial
              </div>
              <p className="flex gap-3 font-medium pt-2 text-gray-800">
                <img src={schedule} alt="icon" /> 23 de fevereiro de 2025 •
                12:30 às 16:30
              </p>
              <div className="flex gap-2 font-medium pt-2 text-sm ">
                <img src={location} alt="icon" className="self-start pt-1" />
                <p className="text-gray-800">
                  Blue Tree Transatlântico Convention Center / Club
                  Transatlântico , São Paulo - SP
                </p>
              </div>
              <div className="flex">
                <a
                  className="py-2 mt-2 px-4 text-[16px] w-full text-center bg-white border-[1px] border-black rounded-[12px]"
                  href="/eventos/eleicoes-federais-alemas-2025"
                  // href="https://www.sympla.com.br/evento/jantar-debate-com-o-prof-hoc-geopolitica-em-transicao-desafios-para-brasil-e-europa-na-era-trump/2914009"
                >
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>

        <h1 class="lg:text-5xl text-4xl lg:leading-tight font-bold pt-32 font-title max-w-[1000px]">
          Todos os Eventos
        </h1>

        <div className="flex gap-4 pt-8">
          <select name="mês" value={selectedMonth} onChange={handleMonthChange}>
            <option value="">Todos</option>
            <option value="Janeiro">Janeiro</option>
            <option value="Fevereiro">Fevereiro</option>
            <option value="Março">Março</option>
            <option value="Abril">Abril</option>
            <option value="Maio">Maio</option>
          </select>
          <select name="ano" value={selectedYear} onChange={handleYearChange}>
            <option value="">Todos</option>
            <option value="2025">2025</option>
            <option value="2024">2024</option>
          </select>
          <div>
            <input
              class="bg-gray-200 pr-3 p-2 rounded-[12px]"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                handleSearch();
              }}
              placeholder="Buscar eventos..."
              type="text"
            />
          </div>
        </div>

        <div id="cards-wrapper" class="flex flex-wrap gap-16 lg:gap-24 pt-12">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              id="card"
              className="flex flex-col w-full h-full justify-between"
            >
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <div className="lg:w-full max-w-[700px] lg:h-[300px]">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="object-cover lg:w-full h-full"
                  />
                </div>
                <div className="flex  flex-col gap-2">
                  <h5 className="font-title text-3xl">{event.title}</h5>
                  <p className="flex gap-3 font-medium pt-2 text-gray-800">
                    <img src={schedule} alt="icon" /> {event.date} •{" "}
                    {event.time}
                  </p>
                  <p className="text-gray-800 flex gap-2">
                    <img
                      src={location}
                      alt="icon"
                      className="self-start pt-1"
                    />
                    {event.location}
                  </p>
                  <div className="flex">
                    <a
                      className="py-2 mt-2 px-4 text-[16px] w-full lg:w-[60%] text-center bg-white border-[1px] border-black rounded-[12px]"
                      href={`${event.link}`}
                    >
                      Saiba mais
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ARCOSSSSSS */}
      <div
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-once="false"
        data-aos-duration="500"
        class="hidden flex-col absolute right-0 top-[30vh] overflow-hidden lg:flex"
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

export const Head: HeadFC = () => <SEO />;
