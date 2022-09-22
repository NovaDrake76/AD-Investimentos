import React from "react";
import { FaMedal, FaUserGraduate } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";

const advantages = [
  {
    name: "Qualidade",
    description:
      "Invista nas melhores oportunidades de todo o mercado, com a confiança e expertise de uma equipe que está há anos cuidando do dinheiro de milhares de clientes.",
    icon: FaMedal,
  },
  {
    name: "Segurança",
    description:
      "Somos representantes autorizados pela Guide Investimentos - uma das maiores e melhores corretoras de investimentos do país. Nós prezamos pela transparência, honestidade e confiança em nossas relações.",
    icon: MdSecurity,
  },
  {
    name: "Competência",
    description:
      "Possuímos mais de 5 anos de experiência no mercado financeiro. Nossos assessores são especialistas em investimentos (CEA), com carreiras consolidadas em grandes bancos comerciais e de investimentos.",
    icon: FaUserGraduate,
  },
  {
    name: "Velocidade",
    description:
      "Seu assessor estará analisando o mercado e sugerindo ajustes que precisa serem feitos para que você possa aproveitar as melhores oportunidades em investimentos.",
    icon: IoRocketSharp,
  },
];

export default function Advantages() {
  return advantages.map((advantage, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center gap-4 p-4  text-[#4D4D4D] hover:text-adblue hover:border-adblue md:border-white md:border-[1px] transition-all duration-500"
      >
        <div className="flex items-center justify-center w-20 h-20">
          <advantage.icon className="text-5xl " />
        </div>
        <span className="text-2xl font-bold text-[#4c4c4c] font-['Raleway']  ">
          {advantage.name}
        </span>
        <div className="flex bg-adblue w-[50px] h-[1px]" />
        <span className="text-lg font-semibold font-['Raleway'] text-[#4c4c4c] ">
          {advantage.description}
        </span>
      </div>
    );
  });
}
