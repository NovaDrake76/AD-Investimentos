import React, { useState } from "react"
import { BsChevronDown } from "react-icons/bs"

const questions = [
  {
    title: "Afinal, o que faz a AD?",
    content:
      "A Ad é uma empresa de assessoria em investimentos. Nossa equipe qualificada e especializada em investimentos trabalha diariamente para que nossos clientes possam ganhar o máximo de dinheiro possível investindo de modo seguro no mercado financeiro.",
  },
  {
    title: "O que seria Guide?",
    content:
      "Guide é uma das maiores e melhores corretoras independentes do país. Altamente premiada, a AD trabalha junto com a Guide para entregar a melhor experiência em investimentos para nossos clientes.",
  },
  {
    title: "Quais os custos para investir com a AD?",
    content:
      "Não cobramos nenhum valor, nenhuma taxa, tarifa, ou algo assim do cliente para ser assessorado pela AD. Nosso recebimento é feito diretamente pela Guide. Para o cliente, trabalhar com assessoria só possui vantagens. Ao invés de perder dinheiro, contará com uma equipe qualificada com o objetivo de fazê-lo ganhar mais.",
  },
  {
    title: "Qual o valor mínimo para investir na AD?",
    content:
      "Nós iremos atendê-lo e ajudá-lo da melhor forma possível independente do valor que você possuir. Entretanto, nossa assessoria exclusiva é focada em clientes com acima de 1 milhão já investidos. Somos especialistas em clientes entre 1MM-50MM.",
  },
  {
    title:
      "Qual a experiência da AD? Quais são as competências dos especialistas?",
    content:
      "Nossos assessores estão no mercado há mais de 5 anos trabalhando no mercado financeiro para que possamos garantir para você a melhor experiência, com passagens renomadas por bancos de investimentos e bancos comerciais.  Nossos assessores são especialistas em investimentos e atenderam mais de 500 clientes investidores ao longo dos anos.",
  },
  {
    title: "Quais as vantagens de investir com a AD?",
    content:
      "Através da Guide, podemos investir nos principais bancos e empresas do país, escolhendo sempre as melhores opções e com isso garantindo assim rentabilidade acima da média todos os meses.",
  },
  {
    title: "Qual a metodologia de trabalho da AD?",
    content:
      "A nossa metodologia de trabalho é entregar segurança e rentabilidade para os nossos clientes, buscando sempre a satisfação dos nossos clientes acima de tudo.",
  },
  {
    title: "Quantos clientes a AD possui hoje?",
    content:
      "Nossos clientes são formados por médicos, advogados, pecuaristas, empresários e entre outros, sendo grande parte na cidade de Três Lagoas e região, que querem ganhar mais dinheiro do que ganham atualmente nos bancos. Com isso, preferem manter seus investimentos na gestão de uma equipe profissional e qualificada.",
  },
  {
    title: "Como faço para investir com a AD?",
    content: (
      <span>
        Para investir com a AD Investimentos é muito fácil, basta clicar
        <a
          target={"_blank"}
          rel="noreferrer"
          href="https://abrasuaconta.guideinvestimentos.com.br/assessor/4194"
          className="text-[#0000EE]"
        >
          {" "}
          nesse link{" "}
        </a>
        e abrir sua conta na corretora. Com a conta aberta, basta transferir
        seus recursos, e um de nossos especialistas entrará em contato para
        marcarem uma reunião. Na reunião, o especialista irá anotar suas
        necessidades e desejos para desenvolver investimentos personalizados
        para você. A AD se responsabiliza a acompanhar e avaliar seus
        investimentos diariamente para que você possa ter a melhor experiência
        em investimentos todos os dias.
      </span>
    ),
  },
]

export default function Faq() {
  const [activeCurrentIndex, setActiveCurrentIndex] = useState()

  const toggleShowAccordion = (index) => {
    if (activeCurrentIndex === index) {
      setActiveCurrentIndex()
    } else {
      setActiveCurrentIndex(index)
    }
  }

  return questions.map((question, index) => (
    <div
      key={index}
      className="flex flex-col p-5 border border-[#9b9b9b] rounded-lg shadow-2xl min-w-full  transition-all"
    >
      <div className="flex">
        <span className="font-['Raleway'] font-bold text-xl text-[#4c4c4c]">
          {question.title}
        </span>
        <button
          onClick={() => toggleShowAccordion(index)}
          className="ml-auto transition-all"
        >
          <BsChevronDown />
        </button>
      </div>
      {activeCurrentIndex === index && (
        <span
          className={`font-['Raleway'] mt-4  text-[#4d4d4d] text-start transition-all`}
        >
          {question.content}
        </span>
      )}
    </div>
  ))
}
