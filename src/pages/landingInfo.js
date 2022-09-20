import { FaMedal, FaUserGraduate, FaHandshake } from "react-icons/fa";
import { MdSecurity, MdTimeline, MdOutlineMailOutline } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import Card1 from "../images/card1.webp";
import Card2 from "../images/card2.webp";
import Alvaro from "../images/alvaro.webp";
import Mountain from "../images/mountain.webp";
import MountainMobile from "../images/mountainMobile.webp";
import Equip from "../images/equip.webp";
import EquipMobile from "../images/equipMobile.webp";
import Office from "../images/office.webp";
import OfficeMobile from "../images/officeMobile.webp";

export const advantages = [
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
];

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
      "Acompanhamento de investimentos, planejamento financeiro e muito mais.",
    image: Card2,
  },
];

export const about = [
  {
    Number: "5",
    Description: "Anos de experiência",
    Icon: MdTimeline,
  },
  {
    Number: "500",
    Description: "Clientes investidores atendidos em bancos",
    Icon: FaHandshake,
  },
  {
    Number: "300",
    Description:
      "Milhões de reais acessorados em bancos comerciais e de investimentos",
    Icon: RiMoneyDollarCircleLine,
  },
];

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
];

export const advisors = [
  {
    name: "Álvaro Dias",
    image: Alvaro,
    description:
      "Especialista/assessor de investimentos, formado em ciências contábeis, pós-graduado em administração de empresas. Trabalhei em banco de investimentos e em banco comercial-público alta renda, atualmente proprietário da AD Investimentos na cidade de Três Lagoas-MS.",
  },
];

export const messages = [
  {
    time: "1 min",
    text: "Olá, Bom dia! Tenho ótimas notícias!!",
  },
  {
    time: "Agora",
    text: "Mês passado sua carteira rendeu muito bem! Também temos novas opções para otimizar seus investimentos. Vamos marcar uma reunião para amanhã às 15h? A compra da casa própria está cada vez mais próxima!",
  },
];

export const carouselImages = [
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
      <div className="flex flex-col items-center w-4/5 gap-4">
        <span className="flex text-xl md:text-5xl text-white font-extralight font-['Raleway']">
          AD INVESTIMENTOS
        </span>
        <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight">
          INVISTA COM ASSESSORES QUE SÃO ESPECIALISTAS EM INVESTIMENTOS.
          <span className="text-adblue"> SEM CUSTO.</span>
        </h2>
      </div>
    ),
  },
  {
    image: Office,
    imageMobile: OfficeMobile,
    content: (
      <div className="flex flex-col items-center w-4/5 gap-4">
        <h2 className="flex flex-col gap-10 text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight text-start">
          NÓS ANALISAMOS INVESTIMENTOS TODOS OS DIAS PARA TE ENTREGAR APENAS
          <span className="text-adblue"> O MELHOR.</span>
        </h2>
      </div>
    ),
  },
];
