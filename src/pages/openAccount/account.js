import React from "react";

import Navbar from "../../components/navbar";
import Happy from "../../images/happy.webp";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="flex flex-col-reverse items-start justify-end w-screen h-screen md:h-[60vh] gap-2 md:items-center md:justify-center md:flex-row">
        <div className="flex flex-col gap-4 mb-2">
          <p className="text-start text-2xl font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-2xl px-5">
            Abra sua conta agora na corretora Guide e tenha acesso a nossa
            assessoria personalizada. Basta clicar no botão abaixo, preencher
            suas informações e você terá sua conta de investimentos pronta.
          </p>
          <a
            href="https://abrasuaconta.guideinvestimentos.com.br/assessor/4194"
            target={"_blank"}
            rel="noreferrer"
          >
            <button className="flex ml-4 border-2 gap-3  font-['Raleway'] font-medium items-center py-4 px-3 text-lg hover:border-adblue hover:text-adblue transition-all duration-500 ease-in-out">
              Abra uma Conta
            </button>
          </a>
        </div>
        <div className="rounded">
          <img
            src={Happy}
            alt="Happy man using a notebook"
            className="max-w-[500px] rounded  object-cover p-2"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
