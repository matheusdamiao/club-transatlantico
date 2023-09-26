import React from "react";
import logo from "./../assets/images/club-logo-com-bg.png";

const FooterSection = () => {
  return (
    <div className="px-11 pt-20 bg-black text-white">
      <div className="grid grid-cols-1 lg:gap-0 gap-16 lg:grid-cols-3 pb-20 lg:px-20">
        <div className="max-w-2xl lg:m-auto">
          <img src={logo} alt="" />
          <div className="flex flex-col gap-4 mt-6">
            <div className="flex max-w-md items-center justify-center gap-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g>
                  <path
                    d="M15.6016 9.16196C15.6016 7.17356 13.99 5.56196 12.0016 5.56196C10.0132 5.56196 8.40156 7.17356 8.40156 9.16196C8.40156 11.1504 10.0132 12.762 12.0016 12.762C13.99 12.762 15.6016 11.1504 15.6016 9.16196ZM20.4016 8.40024C20.4016 13.0394 16.6408 24.0002 12.0016 24.0002C7.36236 24.0002 3.60156 13.0394 3.60156 8.40024C3.60156 3.76104 7.36236 0.000244141 12.0016 0.000244141C16.6408 0.000244141 20.4016 3.76104 20.4016 8.40024ZM13.2016 9.16196C13.2016 9.82316 12.6628 10.362 12.0016 10.362C11.3404 10.362 10.8016 9.82316 10.8016 9.16196C10.8016 8.50076 11.3404 7.96196 12.0016 7.96196C12.6628 7.96196 13.2016 8.50076 13.2016 9.16196Z"
                    fill="white"
                  />
                </g>
              </svg>

              <p className="text-[#B1B1B1]">
                Av. Cecília Lottenberg, 130 - Chácara Santo Antônio, São Paulo
              </p>
            </div>
            <div className="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <g>
                  <path
                    d="M18.9852 16.9453C18.696 17.764 17.5464 18.4412 16.6296 18.6393C16.002 18.7725 15.1836 18.8779 12.426 17.7352C9.3288 16.452 5.028 11.8812 5.028 8.83945C5.028 7.29099 5.9208 5.48789 7.482 5.48789C8.2332 5.48789 8.3988 5.50254 8.646 6.09551C8.9352 6.79412 9.64081 8.51535 9.7248 8.6918C10.0716 9.41561 9.37199 9.83934 8.86439 10.4695C8.70239 10.6592 8.51881 10.8643 8.72401 11.2172C8.92801 11.5629 9.6336 12.7129 10.6704 13.6359C12.0096 14.8291 13.0956 15.21 13.4844 15.3721C13.7736 15.4921 14.1192 15.4641 14.3304 15.2385C14.598 14.9492 14.9304 14.4692 15.2688 13.9963C15.5076 13.6578 15.8112 13.6155 16.1292 13.7355C16.344 13.81 19.074 15.0778 19.1892 15.2807C19.2744 15.4283 19.2744 16.1267 18.9852 16.9453ZM12.0024 0H11.9964C5.38079 0 0 5.38242 0 12C0 14.624 0.846008 17.0584 2.28481 19.033L0.789606 23.492L5.40121 22.0184C7.29841 23.2739 9.5628 24 12.0024 24C18.618 24 24 18.6176 24 12C24 5.38242 18.618 0 12.0024 0Z"
                    fill="white"
                  />
                </g>
              </svg>
              <p className="text-[#B1B1B1]">+55 (11) 99611-6969</p>
            </div>
          </div>
          <div className="mt-[80px]">
            <h4 className="font-medium">Horário de Funcionamento</h4>
            <p className="mt-8 text-[#B1B1B1]">
              Segunda-feira à sexta-feira: 12:00 às 18:00
            </p>
            <p className="text-[#B1B1B1]">Terça-feira: 12:00 às 22:00</p>
            <p className="text-[#B1B1B1]">
              Sábados, Domingos e feriados: fechado
            </p>
            <p className="mt-4 text-[#B1B1B1]">
              *Reservas de almoços todos os dias e jantares na terça-feira.
              Exclusivo para sócio.{" "}
            </p>
            <div className="flex items-center mt-2">
              <svg
                width="18"
                height="14"
                viewBox="0 0 23 18"
                fill="none"
                className="mr-4 flex-0"
              >
                <path
                  d="M20.7 2.63467L11.5 10.7157L2.3 2.62316V2.3H20.7V2.63467ZM2.3 14.95V5.68676L11.5 13.777L20.7 5.69595V14.95H2.3ZM0 17.25H23V0H0V17.25Z"
                  fill="white"
                />
              </svg>
              <a href="mailto:atendimento@clubtransatlantico.com.br">
                atendimento@clubtransatlantico.com.br
              </a>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-6 max-w-[200px] lg:my-0 lg:mx-auto">
          <h4 className="font-medium">Site </h4>
          <div className="flex flex-col gap-4">
            <a className="text-[#B1B1B1]" href="/">
              Home
            </a>
            <a className="text-[#B1B1B1]" href="/about">
              Quem somos
            </a>
            <a className="text-[#B1B1B1]" href="#contato">
              Contato
            </a>
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col gap-6 ">
          <h4 className="font-medium">Contato </h4>
          <div className="flex flex-col gap-4">
            <p className="text-[#B1B1B1]">+55 (11) 99611-6969</p>
            <a
              className="text-[#B1B1B1]"
              href="mailto:atendimento@clubtransatlantico.com.br"
            >
              atendimento@clubtransatlantico.com.br
            </a>
          </div>
        </div>
      </div>
      <div className="pt-6 lg:px-20 lg:py-6 flex items-center gap-6 lg:justify-between justify-center flex-wrap ">
        <small className="text-center">
          Club Transatlântico - 2023 - Todos os direitos reservados
        </small>
        <small className="text-center pb-2 text-xs text-gray-500 hover:text-gray-300 transition-all">
          <span className="hover:animate-pulse hover:cursor-help">Design</span>{" "}
          + <span className="hover:animate-pulse hover:cursor-help">Code</span>{" "}
          by <a href="https://matheusdamiao.com.br">Matheus Damião</a>
        </small>
      </div>
    </div>
  );
};

export default FooterSection;
