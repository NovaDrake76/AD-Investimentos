import { FaHandshake } from "react-icons/fa";
import { MdTimeline, MdOutlineMailOutline } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";

import Alvaro from "../../images/alvaro.webp";
import Cripto from "../../images/cripto.webp";
import CriptoMobile from "../../images/cripto.webp";
// import Equip from "../../images/equip.webp"
// import EquipMobile from "../../images/equipMobile.webp"
import Boat from "../../images/barco.webp";
import BoatMobile from "../../images/barco.webp";
import Old from "../../images/old.jpg";

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
      "Assessor de investimentos com mais de 5 anos trabalhando no mercado financeiro. Formado em Ciências Contábeis. Pós graduado em Administração de Empresas. Trabalhou em bancos comerciais e bancos de investimento, atendendo o público alta renda. Atualmente proprietário da AD Investimentos na cidade de Três Lagoas-MS.",
  },
];

export const reviews = [
  {
    name: "Antônio",
    office: "Pecuarista",
    description: (
      <span>
        Conheço o Álvaro há um bom tempo, já que ele me atendia e cuidava dos
        meus investimentos no banco onde eu aplicava. Quando ele comentou que ia
        abrir uma empresa de assessoria, fiquei bastante animado. Ele fez um
        <span className="font-bold text-adblue"> plano personalizado</span> para
        mim, estou bastante{" "}
        <span className="font-bold text-adblue"> contente</span>. Consegui fazer
        algumas aplicações para mim e também fiz uma para a minha neta.
      </span>
    ),
  },
  {
    name: "Sueli",
    office: "Empresária",
    description: (
      <span>
        Aplicava em vários bancos, sempre que sobrava 100, 300mil na conta da
        empresa eu transferia e aplicava em um banco que eu tinha menos. Eu
        fazia aplicações em 4 bancos diferentes com medo de quebrar, rsrs.
        Marquei uma reunião na AD e acabei migrando meus investimentos para lá.
        Tem<span className="font-bold text-adblue"> dado tudo certo </span>.
      </span>
    ),
  },
  {
    name: "Nathan",
    office: "Design Gráfico",
    description: (
      <span>
        Cara, estou bastante
        <span className="font-bold text-adblue"> satisfeito</span>,
        sinceramente. Quando eu fui no banco, queria fazer algumas aplicações
        mensais do meu salário para minha filha, e fizeram uma poupança
        programada. Conversei na AD, fizemos algumas previdências
        complementares. Transferi todo o dinheiro que tinha guardado na minha
        vida e separei metade para minha esposa e metade para minha filha. Acho
        maneiro que posso
        <span className="font-bold text-adblue"> aplicar via aplicativo</span>
        sempre que entra uma graninha a mais. Também deixei um dinheiro pra mim
        em uma aplicação que resgata na hora, que nem me recomendaram. Nunca se
        sabe né?
      </span>
    ),
  },
  {
    name: "Gustavo",
    office: "Advogado",
    description: (
      <span>
        Eu estava deixando o dinheiro parado na conta porque não sabia o
        dinheiro que posso ganhar investindo
        <span className="font-bold text-adblue"> corretamente</span>. Investi na
        AD e estou ganhando um dinheiro legal, estou muito{" "}
        <span className="font-bold text-adblue"> feliz</span>. Pretendo comprar
        um apartamento novo quando chegar chegar a 1 milhão e deixá-lo para meu
        filho.
      </span>
    ),
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
            <span className=" text-adblue"> AQUI VOCÊ PODE.</span>
          </h2>
        </div>
      </div>
    ),
  },
  {
    image: Old,
    imageMobile: Old,
    ButtonChange: false,
    content: (
      <div className="flex flex-col items-center justify-center w-4/5 h-full gap-4">
        <div className="flex flex-col items-center gap-4">
          <span className="flex text-xl md:text-5xl text-white font-extralight text-start font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <h2 className="text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight">
            ANALISE SUAS APLICAÇÕES BANCÁRIAS CONOSCO. DESCUBRA SE É POSSÍVEL
            <span className=" text-adblue"> MELHORAR </span>
            SEUS RESULTADOS.
          </h2>
        </div>
      </div>
    ),
  },
  {
    image: Boat,
    imageMobile: BoatMobile,
    ButtonChange: false,
    content: (
      <div className="flex flex-col items-center justify-center w-4/5 h-full gap-4">
        <div className="flex flex-col gap-4">
          <span className="flex text-xl justify-center md:text-5xl text-white font-extralight font-['Raleway']">
            AD INVESTIMENTOS
          </span>
          <h2 className="flex flex-col gap-5  text-2xl md:text-[64px] font-bold font-['Oswald'] text-white leading-tight ">
            TRANQUILIDADE PARA SUA APOSENTADORIA? INVESTIR PARA COMPRAR UMA
            CASA?
            <span className=" text-adblue">FALE CONOSCO.</span>
          </h2>
        </div>
      </div>
    ),
  },
];
