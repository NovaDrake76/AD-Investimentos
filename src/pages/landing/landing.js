import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Family from "../../images/family.jpg";
// import History from "../../images/history.webp"
import Handshake from "../../images/handshake.png";
import BackgroundVideo from "../../components/video";
import LandingVideo from "../../components/landingVideo";
import Logo from "../../images/logo2.webp";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Advantages from "./advantages";
import Cards from "./cards";
import Structure from "./structure";

import {
  about,
  contacts,
  advisors,
  messages,
  reviews,
  // carouselImages,
} from "./landingInfo";

let renderAboutUs, renderAdvisors, renderReviews, renderMessages, renderContact;

const ADHelp = [
  <span>
    COMO A <span className="text-adblue">AD INVESTIMENTOS</span> PODE AJUDÁ-LO A
    REALIZAR SEUS SONHOS?
  </span>,
  "INVESTIR NAS MELHORES OPÇÕES DO MERCADO?",
  "TRANQUILIDADE PARA A SUA APOSENTADORIA?",
  "INVESTIR PARA A COMPRA DE UM IMÓVEL?",
  <span>
    AQUI VOCÊ<span className="text-adblue"> CONSEGUE.</span>
  </span>,
  <img src={Logo} alt="AD Investimentos" className="w-60 h-60" />,
];

const Landing = () => {
  renderAboutUs = about.map((item, index) => {
    return (
      <div
        key={index}
        className="flex flex-col p-2 justify-center items-center bg-white w-[280px]"
      >
        <div className="w-20 h-20 text-[#2C2F33] flex justify-center">
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
    );
  });

  renderContact = contacts.map((contact, index) => {
    return (
      <div key={index} className="flex flex-col items-center gap-1">
        <a
          href={contact.link}
          target="_blank"
          rel="noreferrer"
          aria-label={contact.name}
          className="flex items-center justify-center w-20 h-20 rounded-full bg-[#EDEDED]  hover:text-adblue text-[#2C2F33] transition-all duration-400"
        >
          <contact.icon className="text-4xl " />
        </a>
        <span className="font-['Raleway'] font-bold text-lg">
          {contact.name}
        </span>
      </div>
    );
  });

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
    );
  });

  renderReviews = reviews.map((review, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center w-[550px] min-h-[280px] shadow-lg gap-4 mt-6  p-4 rounded border-t-4 border-t-adblue transition-all duration-400 hover:shadow-2xl hover:-mt-[1px]"
      >
        <div className="flex flex-col items-center justify-start w-full gap-1">
          <span className="font-['Raleway'] font-bold text-xl text-[#4c4c4c]">
            {review.name}
          </span>
          <span className="font-['Raleway']  text-[#616060]">
            {review.office}
          </span>
        </div>
        <p className="font-['Raleway']  leading-7  text-[#4d4d4d] text-start">
          {review.description}
        </p>
      </div>
    );
  });

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
    );
  });

  function renderOurTitle(our, title) {
    return (
      <div className="flex flex-col px-5 border-l-2 border-adblue text-start ">
        <span className="text-2xl text-adblue font-['Raleway'] font-semibold">
          {our}
        </span>
        <span className="text-5xl font-['Oswald'] font-bold">{title}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col ">
      <div className="absolute h-[700px] bg-[#000000]/40 w-screen md:w-[98.9vw]">
        <Carousel
          autoPlay={true}
          interval={4000}
          showStatus={false}
          showArrows={false}
          infiniteLoop={true}
          showThumbs={false}
          showIndicators={false}
          transitionTime={2000}
          swipeable={false}
          animationHandler="fade"
        >
          {ADHelp.map((item, index) => {
            return (
              <div
                key={index}
                className="z-10 flex items-center justify-center h-full"
              >
                <div className="flex flex-col  h-[700px] justify-center items-center gap-4  max-w-5xl">
                  <h2 className="text-4xl p-3 md:p-0 md:text-[64px] font-bold font-['Oswald'] text-white leading-tight">
                    {item}
                  </h2>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      <LandingVideo />
      {/* <div className="flex flex-col">
        <BackgroundVideo className="absolute" />
       
      </div> */}
      <div className="flex justify-center mt-20">
        <div id="vantagens" className="flex flex-col w-full max-w-6xl gap-28">
          {renderOurTitle("NOSSAS", "VANTAGENS")}
          <div className="flex flex-col justify-center md:flex-row gap-9">
            <Advantages />
          </div>
          <div id="produtos" className="flex flex-col gap-6">
            {renderOurTitle("COMO", "TRABALHAMOS")}
            <div className="flex flex-col gap-5 md:flex-row">
              <Cards />
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-8" id="estrutura">
            {renderOurTitle("NOSSA", "ESTRUTURA")}
            <Structure />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <div className="absolute flex justify-center  gap-4 p-4 md:gap-14 h-[650px] w-full bg-[#000000]/70">
          <div className="flex flex-col items-start max-w-[1100px] gap-4 h-2/4 mt-14">
            <h2 className="text-2xl md:text-[52px] font-bold font-['Oswald'] text-white leading-tight text-start">
              <span>ACOMPANHAMENTO DOS SEUS INVESTIMENTOS</span>
              <span className="text-adblue"> DIRETAMENTE POR WHATSAPP.</span>
            </h2>
            <div className="flex flex-col justify-start gap-2">
              {renderMessages}
            </div>
          </div>
        </div>
        <BackgroundVideo />
      </div>

      <div className="flex justify-center mt-20">
        <div className="flex flex-col w-full max-w-6xl gap-8">
          {renderOurTitle("OPINIÃO DOS", "CLIENTES")}
          <div className="flex flex-wrap items-start justify-around gap-10">
            {renderReviews}
          </div>
          <div className="flex flex-col gap-4 mt-14">
            {renderOurTitle("SOBRE", "NÓS")}
            <div className="flex flex-col md:flex-row">
              <p className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-2xl px-5">
                Hoje cuidamos do patrimônio de incontáveis famílias na cidade de
                três lagoas e região. Possuímos mais de 5 anos de experiência
                atendendo o público alta renda, com nossos assessores com
                passagens por bancos comerciais e bancos de investimentos.
                Iremos atendê-lo da melhor forma possível e analisar suas
                aplicações diariamente, para que possamos melhorar seus
                resultados e garantir a sua satisfação.
              </p>
              <div className=" justify-end flex p-2 md:-mt-[100px] ">
                <img
                  src={Handshake}
                  alt="Business man shaking hands with woman at office "
                  className="max-h-[500px] rounded  object-cover "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-14">
        <div className="md:absolute md:bg-[#000000]/60 w-full h-[800px] flex justify-center items-center">
          <div className="flex flex-col max-w-4xl gap-8">
            <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight ">
              <span className="text-[#000000] md:text-white">
                VAMOS TRAZER{" "}
              </span>
              <span className="text-adblue">
                SUCESSO E TRANQUILIDADE PARA SUA VIDA
              </span>
            </h2>
            <div className="flex flex-col items-center w-full gap-12 md:items-stretch md:flex-row md:justify-around">
              {renderAboutUs}
            </div>
          </div>
        </div>
        <picture className="hidden md:flex">
          <source media="(min-width: 800px)" srcSet={Family} />
          <img
            src={Family}
            alt="mountain background"
            className="object-cover h-[800px] w-screen"
            width="100%"
            height="100%"
          />
        </picture>
      </div>
      <div className="flex justify-center mt-20 ">
        <div className="flex flex-col justify-start w-full max-w-6xl gap-4">
          <div className="flex flex-col gap-14" id="assessores">
            {renderOurTitle("NOSSOS", "ASSESSORES")}
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
  );
};

export default Landing;
