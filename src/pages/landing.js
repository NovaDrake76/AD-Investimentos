import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Mountain from "../images/mountain.webp"
import MountainMobile from "../images/mountainMobile.webp"
import Equip from "../images/equip.webp"
import EquipMobile from "../images/equipMobile.webp"
import Office from "../images/office.webp"
import OfficeMobile from "../images/officeMobile.webp"
import MountainBack from "../images/backMountain.webp"
import MountainBackMobile from "../images/backMountainMobile.webp"
import Card1 from "../images/card1.webp"
import Card2 from "../images/card2.webp"
import History from "../images/history.webp"
import { FaMedal, FaUserGraduate, FaHandshake } from "react-icons/fa"
import { MdSecurity, MdTimeline, MdOutlineMailOutline } from "react-icons/md"
import { IoRocketSharp } from "react-icons/io5"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs"

let renderCarouselImages,
  renderAdvantages,
  renderCards,
  renderAboutUs,
  renderContact

const Landing = () => {
  const carouselImages = [
    {
      image: Mountain,
      imageMobile: MountainMobile,
      content: (
        <div className="flex flex-col w-3/4 gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <h1 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white text-start leading-tight">
            INVESTIR NAS MELHORES OPÇÕES DO MERCADO?
            <span className="text-adblue"> AQUI VOCÊ PODE.</span>
          </h1>
        </div>
      ),
    },
    {
      image: Equip,
      imageMobile: EquipMobile,
      content: (
        <div className="flex flex-col w-4/5 items-center gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight">
            INVISTA COM ACESSORES EM INVESTIMENTOS QUE SÃO ESPECIALISTAS.
            <span className="text-adblue"> SEM CUSTO.</span>
          </h2>
        </div>
      ),
    },
    {
      image: Office,
      imageMobile: OfficeMobile,
      content: (
        <div className="flex flex-col w-4/5 items-center gap-4">
          <h2 className="flex flex-col gap-10 text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight text-start">
            NÓS ANALISAMOS INVESTIMENTOS TODOS OS DIAS PARA TE ENTREGAR APENAS
            <span className="text-adblue"> O MELHOR.</span>
          </h2>
        </div>
      ),
    },
  ]

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
        "Seu especialista estará constantemente analisando o mercado, sugerindo ajustes que precisam ser feitos para acompanhar as melhores oportunidades do mercado.",
      icon: IoRocketSharp,
    },
  ]

  const cards = [
    {
      name: "Consultoria Financeira",
      description:
        "Conte com o acompanhamento de um especialista AD para te ajudar a melhorar seus resultados.",
      image: Card1,
    },
    {
      name: "Assessoria de Investimentos",
      description:
        "Acompanhamento de investimentos, planejamento financeiro e muito mais.",
      image: Card2,
    },
  ]

  const about = [
    {
      Number: "5",
      Description: "Anos de experiência",
      Icon: MdTimeline,
    },
    {
      Number: "500",
      Description: "Clientes atendidos",
      Icon: FaHandshake,
    },
    {
      Number: "R$300",
      Description: "Milhões investidos",
      Icon: RiMoneyDollarCircleLine,
    },
  ]

  const contacts = [
    {
      name: "WhatsApp",
      icon: AiOutlineWhatsApp,
      link: "https://api.whatsapp.com/send?phone=5567993466245",
    },
    {
      name: "Email",
      icon: MdOutlineMailOutline,
      link: "mailto: alvaro@adinvestimentos.com.br",
    },
    {
      name: "LinkedIn",
      icon: BsLinkedin,
      link: "https://www.linkedin.com/in/ad-investimentos-9b51bb249/",
    },
    {
      name: "Facebook",
      icon: BsFacebook,
      link: "https://www.facebook.com/Adinvestimentos.oficial",
    },
    {
      name: "Instagram",
      icon: BsInstagram,
      link: "https://www.instagram.com/adinvestimentos.oficial/",
    },
  ]

  renderAdvantages = advantages.map((advantage, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center gap-4 p-4  text-[#4D4D4D] hover:text-adblue hover:border-adblue md:border-white border-[1px] transition-all duration-500"
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
        <div className="absolute h-full flex justify-center items-center">
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
      <div key={index} className="flex flex-col md:flex-row gap-5">
        <div className="flex items-center justify-center ">
          <img
            src={card.image}
            alt={card.name}
            className="object-cover h-52 md:h-72 px-4 lg:px-0"
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
        <div className="flex flex-col gap-4 items-center">
          <span className="font-['Oswald'] text-2xl">+{item.Number}</span>
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

  function renderOurTitle(our, title) {
    return (
      <div className="flex flex-col border-adblue border-l-2 px-5 text-start ">
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
        interval={4000}
        showStatus={false}
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        className="border-adblue border-b-8"
      >
        {renderCarouselImages}
      </Carousel>
      <div className="flex justify-center mt-20">
        <div className="flex flex-col gap-20 w-full max-w-6xl">
          {renderOurTitle("NOSSAS", "VANTAGENS")}
          <div className="flex flex-col md:flex-row gap-9 justify-center">
            {renderAdvantages}
          </div>
          {renderOurTitle("NOSSOS", "PRODUTOS")}
          <div className="flex flex-col md:flex-row gap-5">{renderCards}</div>
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
          <div className=" h-2/4 flex flex-col gap-4 justify-center items-center max-w-4xl mt-14">
            <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight ">
              <span>VAMOS TRAZER </span>
              <span className="text-adblue">
                SUCESSO E TRANQUILIDADE PARA SUA VIDA
              </span>
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-stretch md:flex-row gap-2 md:justify-around w-full">
            {renderAboutUs}
          </div>
        </div>
        <img
          srcSet={`${MountainBackMobile} 500w, ${MountainBack} 1000w,`}
          sizes="(max-width: 500px) 500px, 1000px"
          src={MountainBack}
          alt="mountain background"
          className="h-[550px] object-cover"
        />
      </div>
      <div className="flex justify-center mt-20 ">
        <div className="flex flex-col justify-start  max-w-6xl w-full gap-4">
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
          <div className="flex flex-col md:flex-row gap-15 md:gap-20 justify-center items-center mb-10">
            {renderContact}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
