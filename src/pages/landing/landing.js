import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import MountainBack from "../../images/backMountain.webp"
import MountainBackMobile from "../../images/backMountainMobile.webp"
import History from "../../images/history.webp"
import Zap from "../../images/zap.webp"

import { AiOutlineWhatsApp } from "react-icons/ai"

import {
  advantages,
  cards,
  about,
  contacts,
  advisors,
  messages,
  carouselImages,
} from "./landingInfo"

let renderCarouselImages,
  renderAdvantages,
  renderCards,
  renderAboutUs,
  renderAdvisors,
  renderMessages,
  renderContact

const Landing = () => {
  renderAdvantages = advantages.map((advantage, index) => {
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
    )
  })

  renderCarouselImages = carouselImages.map((item) => {
    return (
      <div key={item.image}>
        <div className="absolute flex items-center justify-center w-full h-full">
          {item.content}
        </div>
        <img
          srcSet={`${item.imageMobile} 500w, ${item.image} 1000w`}
          sizes="(max-width: 500px) 500px, 1000px"
          src={item.image}
          alt={`carousel ${item.image}`}
          className="min-w-screen"
        />
      </div>
    )
  })

  renderCards = cards.map((card, index) => {
    return (
      <div key={index} className="flex flex-col gap-5 md:flex-row">
        <div className="flex items-center justify-center ">
          <img
            src={card.image}
            alt={card.name}
            className="object-cover px-4 h-52 md:h-72 lg:px-0"
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
    )
  })

  renderAboutUs = about.map((item, index) => {
    return (
      <div
        key={index}
        className="flex p-5 justify-center items-center bg-white w-[280px]"
      >
        <div className="w-20 h-20 text-[#2C2F33]">
          <item.Icon className="text-6xl" />
        </div>
        <div className="flex flex-col items-center gap-4">
          <span className="font-['Oswald'] text-3xl">+{item.Number}</span>
          <div className="flex bg-adblue w-[50px] h-[1px]" />
          <span className="font-['Raleway'] font-bold text-lg">
            {item.Description}
          </span>
        </div>
      </div>
    )
  })

  renderContact = contacts.map((contact, index) => {
    return (
      <div key={index} className="flex flex-col items-center gap-1">
        <a
          href={contact.link}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center w-20 h-20 rounded-full bg-[#EDEDED]  hover:text-adblue text-[#2C2F33] transition-all duration-400"
        >
          <contact.icon className="text-4xl " />
        </a>
        <span className="font-['Raleway'] font-bold text-lg">
          {contact.name}
        </span>
      </div>
    )
  })

  renderAdvisors = advisors.map((advisor, index) => {
    return (
      <div key={index} className="flex flex-col items-center max-w-sm gap-4">
        <div className="flex items-center justify-start w-full gap-12">
          <img
            src={advisor.image}
            alt={advisor.name}
            className="w-[100px] h-[100px] rounded-full"
          />
          <span className="font-['Raleway'] font-bold text-xl text-[#4c4c4c]">
            {advisor.name}
          </span>
        </div>
        <p className="font-['Raleway']  text-[#4d4d4d] text-start">
          {advisor.description}
        </p>
      </div>
    )
  })

  renderMessages = messages.map((message, index) => {
    return (
      <div
        className="flex max-w-lg p-5 rounded bg-white/80 text-start"
        key={index}
      >
        <div className="flex flex-col w-full gap-2">
          <div className="flex items-center justify-between gap-2 text-3xl">
            <div className="flex gap-2">
              <AiOutlineWhatsApp />
              <span className="text-lg font-['Raleway'] text-[#4c4c4c]">
                Whatsapp
              </span>
            </div>
            <span className="text-sm font-['Raleway'] text-[#4c4c4c]">
              {message.time}
            </span>
          </div>
          <div className="flex flex-col">
            <span>Letícia - AD Investimentos</span>
            <span className="text-lg font-['Raleway'] text-[#353535]">
              {message.text}
            </span>
          </div>
        </div>
      </div>
    )
  })

  function renderOurTitle(our, title) {
    return (
      <div className="flex flex-col px-5 border-l-2 border-adblue text-start ">
        <span className="text-2xl text-adblue font-['Raleway'] font-semibold">
          {our}
        </span>
        <span className="text-5xl font-['Oswald'] font-bold">{title}</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col ">
      <Carousel
        autoPlay={true}
        interval={3000}
        showStatus={false}
        showArrows={false}
        infiniteLoop={true}
        showThumbs={false}
        className="flex border-b-8 border-adblue"
      >
        {renderCarouselImages}
      </Carousel>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col w-full max-w-6xl gap-20">
          {renderOurTitle("NOSSAS", "VANTAGENS")}
          <div className="flex flex-col justify-center md:flex-row gap-9">
            {renderAdvantages}
          </div>
          {renderOurTitle("NOSSOS", "PRODUTOS")}
          <div className="flex flex-col gap-5 md:flex-row">{renderCards}</div>
          {renderOurTitle("NOSSA", "ESTRUTURA")}
          <p className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-3xl px-5">
            Localizado na cidade de Três Lagoas-MS, contamos com prédio
            comercial no centro da cidade localizado na AV. Olinto Mancini 878,
            para melhor atendê-los. Venha tomar um café conosco e analisar suas
            aplicações. Qualidade garantida!
          </p>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="absolute flex flex-col gap-4 p-4 md:gap-14">
          <div className="flex flex-col items-start max-w-4xl gap-4 h-2/4 mt-14">
            <h2 className="text-2xl md:text-[52px] font-bold font-['Oswald'] text-white leading-tight text-start">
              <span>ACOMPANHAMENTO DOS SEUS INVESTIMENTOS</span>
              <span className="text-adblue"> DIRETAMENTE POR WHATSAPP.</span>
            </h2>
            <div className="flex flex-col justify-start gap-2">
              {renderMessages}
            </div>
          </div>
        </div>
        <img
          src={Zap}
          alt="man in cellphone"
          className="min-h-[650px] md:h-[550px] object-cover w-full"
        />
      </div>

      <div className="flex justify-center mt-20">
        <div className="flex flex-col w-full max-w-6xl gap-20">
          {renderOurTitle("CONTE", "CONOSCO")}
          <div className="flex ">
            <p className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-3xl px-5">
              Nossa missão é ajudar você a realizar os seus sonhos e objetivos
              através de uma assessoria em investimentos de qualidade,
              entregando a confiança e rentabilidade que você merece. A nossa
              sede fica na cidade de Três Lagoas - MS, e atendemos toda a
              região. Entre em contato conosco e marque uma análise de suas
              aplicações com um de nossos especialistas.
            </p>
            <div className=" justify-end hidden lg:flex -mt-[150px] ">
              <img
                src={History}
                alt="Business Woman"
                className="max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="absolute flex flex-col gap-4 md:gap-14">
          <div className="flex flex-col items-center justify-center max-w-4xl gap-4 h-2/4 mt-14">
            <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight ">
              <span>VAMOS TRAZER </span>
              <span className="text-adblue">
                SUCESSO E TRANQUILIDADE PARA SUA VIDA
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-center w-full gap-2 md:items-stretch md:flex-row md:justify-around">
            {renderAboutUs}
          </div>
        </div>
        <img
          srcSet={`${MountainBackMobile} 500w, ${MountainBack} 1000w,`}
          sizes="(max-width: 500px) 500px, 1000px"
          src={MountainBack}
          alt="mountain background"
          className="h-[850px] md:h-[550px] object-cover"
        />
      </div>
      <div className="flex justify-center mt-20 ">
        <div className="flex flex-col justify-start w-full max-w-6xl gap-4">
          <div className="flex flex-col gap-14">
            {renderOurTitle("NOSSOS", "ACESSORES")}
            <div className="flex gap-5 "></div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-4 md:flex-row">
            {renderAdvisors}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 ">
        <div className="flex flex-col justify-start w-full max-w-6xl gap-8">
          <div id="contatos" className="flex flex-col gap-14">
            {renderOurTitle("NOSSOS", "CONTATOS")}
            <div className="flex flex-col gap-5 px-6">
              <div className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold">
                <span>
                  Entre em contato conosco e marque uma análise das suas
                  aplicações
                </span>
                <span className="text-[#000000]"> sem custo.</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 mb-10 md:flex-row md:gap-20">
            {renderContact}
          </div>
        </div>
      </div>
      <div
        className="flex items-center justify-center w-full h-40"
        style={{
          background:
            "linear-gradient(to right, rgba(126, 9, 235, 0.8) 0%, rgba(114, 17, 215, 0.8) 17%, #373873 100%",
        }}
      >
        <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-2 md:flex-row">
          <div className="flex flex-col text-white text-start">
            <h3 className="font-['Raleway'] font-medium  md:text-lg">
              Pare de esperar
            </h3>

            <h3 className="font-['Raleway']  text-lg md:text-3xl">
              Aplique seu dinheiro conosco agora mesmo!
            </h3>
          </div>
          <a
            href="https://api.whatsapp.com/send?phone=5567993466245"
            target="_blank"
            rel="noreferrer"
          >
            <button className="flex text-white border-2 gap-3 border-white font-['Raleway'] font-medium items-center py-4 px-3 text-lg hover:border-adblue hover:text-adblue transition-all duration-500 ease-in-out">
              <AiOutlineWhatsApp /> Fale com um especialista AD
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Landing
