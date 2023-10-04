import React, { useState } from "react";
import msg from "./../assets/images/msg-icon.svg";
import zap from "./../assets/images/zap-icon.svg";
import location from "./../assets/images/local-icon.svg";
import WrapperMaps from "./wrapperMaps";
import { navigate } from "gatsby";

const FormSection = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [inputs, setInputs] = useState({ nome: "", phone: "", email: "" });
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleFormRequest = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);
    console.log(inputs);

    const form = event.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...inputs,
      }),
    })
      .then(() =>
        setTimeout(() => {
          setIsSent(true);
          setIsLoading(false);
        }, 2000)
      )
      .catch((error) => alert(error));
  };

  // const handleFormChange = (event: any) => {
  //   if (event.target.name === "name") {
  //     setName(event.target.value);
  //   }
  //   if (event.target.name === "email") {
  //     setEmail(event.target.value);
  //   }

  //   if (event.target.name === "phone") {
  //     setPhone(event.target.value);
  //   }
  // };

  const handleFormChange = (event: any) => {
    let nome = event.target.name;
    let value = event.target.value;
    setInputs({
      ...inputs,
      [nome]: value,
    });
  };

  return (
    <div
      id="contato"
      className="max-w-[1400px] m-auto grid lg:grid-cols-2 grid-cols-1 px-11 py-20"
    >
      <div>
        <h2 className="font-title lg:text-5xl text-4xl">Venha fazer parte</h2>
        <h4 className="font-body lg:text-2xl text-xl my-6 max-w-xl">
          Preencha o formulário abaixo e nossa equipe entrará em contato com
          você
        </h4>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <img
              src={location}
              alt=""
              className="flex-shrink-0 max-h-[25px] max-w-[25px] w-full"
            />
            <p className="">
              Av. Cecília Lottenberg, 130 - Chácara Santo Antônio, São Paulo
            </p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={zap}
              alt=""
              className="flex-shrink-0 max-h-[20px] max-w-[20px] w-full"
            />
            <p>(11) 99611-6969</p>
          </div>

          <div className="flex items-center gap-4">
            <img
              src={msg}
              alt=""
              className="flex-shrink-0 max-h-[20px] max-w-[20px] w-full"
            />
            <p className="break-all">atendimento@clubtransatlantico.com.br</p>
          </div>
        </div>
        <form
          className="py-6 w-full group lg:row-span-4 "
          noValidate
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={(e) => handleFormRequest(e)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label className="mb-2 block">Nome</label>
          <input
            className="peer mb-2 w-full max-w-sm pl-4 py-3 border-[2px] focus:border-lightBlue invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-400 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
            type="text"
            placeholder="Nome"
            value={inputs.nome}
            name="nome"
            onChange={(e) => handleFormChange(e)}
            required
            pattern="^[\p{L} ']+$"
          />
          <span className="hidden w-full text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
            Insira seu nome
          </span>
          <label className="mb-2 block">E-mail</label>
          <input
            className="peer w-full max-w-sm mb-2 pl-4 py-3 border-[2px] focus:border-lightBlue invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-400 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
            type="text"
            placeholder="E-mail"
            value={inputs.email}
            name="email"
            onChange={(e) => handleFormChange(e)}
            required
            pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
          />
          <span className="hidden mb-4 w-full text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
            Insira um e-mail válido
          </span>
          <label className="mb-2 block">Telefone</label>
          <input
            className="peer w-full  max-w-sm pl-4 mb-2 py-3 border-[2px] focus:border-lightBlue invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500 focus:outline-none rounded-lg empty:border-gray-400 border-solid bg-transparent valid:[&:not(:placeholder-shown)]:border-green"
            placeholder="Telefone"
            value={inputs.phone}
            name="phone"
            onChange={(e) => handleFormChange(e)}
            required
            pattern="^[^A-Za-z]*$"
          />
          <span className="mb-4 hidden w-full text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block ">
            Insira seu telefone
          </span>
          <button
            className={`items-center flex justify-center mt-2 font-title  text-xl w-full max-w-sm disabled:opacity-40 text-black  bg-amarelo hover:bg-gradient-to-br focus:ring-4 focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center mb-2 group-invalid:pointer-events-none group-invalid:opacity-40 group-valid:shadow-2xl group-valid:hover:shadow-none`}
            type="submit"
          >
            {isLoading && (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#FFFFF"
                  d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                >
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    dur="0.75s"
                    values="0 12 12;360 12 12"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            )}
            {isSent ? "Mensagem enviada!" : isLoading ? "" : "ENVIAR MENSAGEM"}
          </button>
        </form>
      </div>
      <div>
        <WrapperMaps />
      </div>
    </div>
  );
};

export default FormSection;
