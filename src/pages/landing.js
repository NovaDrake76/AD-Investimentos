import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import Mountain from "../images/mountain.webp"
import Equip from "../images/equip.webp"
import Office from "../images/office.webp"
import { FaMedal, FaUserGraduate } from "react-icons/fa"
import { MdSecurity } from "react-icons/md"
import { IoRocketSharp } from "react-icons/io5"

let renderCarouselImages, renderAdvantages

const Landing = () => {
  const carouselImages = [
    {
      image: Mountain,
      content: (
        <div className="flex flex-col w-3/4 gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <div className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white text-start leading-tight">
            INVESTIR NAS MELHORES OPÇÕES DO MERCADO?
            <span className="text-adblue"> AQUI VOCÊ PODE.</span>
          </div>
        </div>
      ),
    },
    {
      image: Equip,
      content: (
        <div className="flex flex-col w-4/5 items-center gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <div className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight">
            INVISTA COM ACESSORES EM INVESTIMENTOS QUE SÃO ESPECIALISTAS.
            <span className="text-adblue"> SEM CUSTO.</span>
          </div>
        </div>
      ),
    },
    {
      image: Office,
      content: (
        <div className="flex flex-col w-4/5 items-center gap-4">
          <div className="flex flex-col gap-10 text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight text-start">
            NÓS ANALISAMOS INVESTIMENTOS TODOS OS DIAS PARA TE ENTREGAR APENAS
            <span className="text-adblue"> O MELHOR.</span>
          </div>
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

  renderAdvantages = advantages.map((advantage, index) => {
    return (
      <div
        key={index}
        className="flex flex-col items-center gap-4 p-4  text-[#4D4D4D] hover:text-adblue hover:border-adblue border-white border-[1px] transition-all duration-500"
      >
        <div className="flex items-center justify-center w-20 h-20 rounded-full ">
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
          src={item.image}
          alt={`carousel ${item.image}`}
          className="min-w-screen"
        />
      </div>
    )
  })

  return (
    <div className="flex flex-col gap-20">
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
      <div className="flex  justify-center ">
        <div className="flex flex-col gap-14 w-full max-w-6xl">
          <div className="flex flex-col border-adblue border-l-2 px-5 text-start ">
            <span className="text-2xl text-adblue font-['Raleway'] font-semibold">
              NOSSAS
            </span>
            <span className="text-5xl font-['Oswald'] font-bold">
              VANTAGENS
            </span>
          </div>
          <div className="flex flex-col md:flex-row gap-9 justify-center">
            {renderAdvantages}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing