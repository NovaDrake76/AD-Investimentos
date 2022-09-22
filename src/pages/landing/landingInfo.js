import { FaHandshake } from "react-icons/fa"
import { MdTimeline, MdOutlineMailOutline } from "react-icons/md"
import { RiMoneyDollarCircleLine } from "react-icons/ri"
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs"
import { AiOutlineWhatsApp } from "react-icons/ai"

import Alvaro from "../../images/alvaro.webp"
import Cripto from "../../images/cripto.webp"
import CriptoMobile from "../../images/cripto.webp"
import Equip from "../../images/equip.webp"
import EquipMobile from "../../images/equipMobile.webp"
import Boat from "../../images/barco.webp"
import BoatMobile from "../../images/barco.webp"

export const about = [
  {
    Number: "5",
    Description: "Anos de experiência",
    Icon: MdTimeline,
  },
  {
    Number: "500",
    Description: "Clientes investidores atendidos",
    Icon: FaHandshake,
  },
  {
    Number: "300mi",
    Description:
      "Mais de 300 milhões de reais assessorados em bancos comerciais e de investimentos",
    Icon: RiMoneyDollarCircleLine,
  },
]

export const contacts = [
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
    link: "https://www.linkedin.com/company/adinvestimentosoficial/",
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

export const advisors = [
  {
    name: "Álvaro Dias",
    image: Alvaro,
    description:
      "Assessor de investimentos com mais de 5 anos trabalhando no mercado financeiro. Formado em Ciências Contábeis. Pós graduado em Administração de Empresas. Trabalhou em bancos comerciais e bancos de investimento, atendendo o público alta renda. Atualmente proprietário da AD Investimentos na cidade de Três Lagoas-MS.",
  },
]

export const messages = [
  {
    time: "1 min",
    text: "Olá, Bom dia! Tenho ótimas notícias!!",
  },
  {
    time: "Agora",
    text: "Mês passado sua carteira rendeu muito bem! Também temos novas opções para otimizar seus investimentos. Vamos marcar uma reunião para amanhã às 15h? A compra da casa própria está cada vez mais próxima!",
  },
]

export const carouselImages = [
  {
    image: Cripto,
    imageMobile: CriptoMobile,
    ButtonChange: false,
    content: (
      <div className="flex flex-col justify-center w-4/5 h-full gap-4">
        <div className="flex flex-col items-center gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight  font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight">
            INVESTIR NAS MELHORES OPÇÕES DO MERCADO?
            <span className="text-adblue"> AQUI VOCÊ PODE.</span>
          </h2>
        </div>
      </div>
    ),
  },
  {
    image: Equip,
    imageMobile: EquipMobile,
    ButtonChange: false,
    content: (
      <div className="flex flex-col items-center justify-center w-4/5 h-full gap-4">
        <div className="flex flex-col items-center gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight text-start font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight">
            INVISTA COM A AD E CONTE COM ACOMPANHAMENTO{" "}
            <span className="text-adblue"> DIÁRIO</span> DE SUAS APLICAÇÕES
          </h2>
        </div>
      </div>
    ),
  },
  {
    image: Boat,
    imageMobile: BoatMobile,
    ButtonChange: true,
    content: (
      <div className="flex flex-col items-center justify-center w-4/5 h-full gap-4">
        <div className="flex flex-col gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight text-start font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <h2 className="flex flex-col gap-5  text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight text-start">
            TRANQUILIDADE PARA SUA APOSENTADORIA? INVESTIR PARA COMPRAR UMA
            CASA?
            <span className="text-adblue"> FALE CONOSCO.</span>
          </h2>
        </div>
      </div>
    ),
  },
]
