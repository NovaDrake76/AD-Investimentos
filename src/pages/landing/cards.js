import React from "react";
import Card1 from "../../images/card1.webp";
import Card2 from "../../images/card2.webp";

export const cards = [
  {
    name: "Análise das Aplicações ",
    description:
      "Analise suas aplicações em outros bancos sem custo, e descubra se é possível melhorar seus resultados.",
    image: Card1,
  },
  {
    name: "Assessoria de Investimentos",
    description:
      "Recomendação das melhores aplicações do mercado, visando melhorar os resultados e ajudar os clientes a ganharem mais.",
    image: Card2,
  },
];

export default function Cards() {
  return cards.map((card, index) => {
    return (
      <div key={index} className="flex flex-col gap-5 md:flex-row">
        <div className="flex items-center justify-center ">
          <img
            src={card.image}
            alt={card.name}
            className="object-cover px-4 h-52 md:h-72 lg:px-0"
            width="100%"
            height="100%"
          />
        </div>
        <div className="flex flex-col p-4 gap-5 md:max-w-[260px] ">
          <h3 className="text-2xl text-[#262626] font-['Oswald'] md:text-start">
            {card.name}
          </h3>
          <span className="text-lg font-semibold font-['Raleway'] text-[#4c4c4c] md:text-start">
            {card.description}
          </span>
        </div>
      </div>
    );
  });
}
