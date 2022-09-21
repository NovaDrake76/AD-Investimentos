import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import Logo from "../images/logo2.webp";
import Guide from "../images/guide.webp";

const social = [
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

const contact = [
  {
    name: "WhatsApp | +55 (67) 99346-6245",
    icon: AiOutlineWhatsApp,
    link: "https://api.whatsapp.com/send?phone=5567993466245",
  },
  {
    name: "Email | alvaro@adinvestimentos.com.br",
    icon: MdOutlineMailOutline,
    link: "mailto: alvaro@adinvestimentos.com.br",
  },
];

const Footer = () => {
  return (
    <footer className="flex w-screen p-8 border-t-4 border-[#202737] bg-[#0D131D] justify-center text-white">
      <div className="flex flex-col w-full max-w-7xl ">
        <div className="flex justify-around flex-col md:flex-row">
          <div className="flex flex-col md:border-t-[1px] md:border-white w-[250px] lg:w-[350px] gap-2">
            <span className="mt-8 text-lg font-['Raleway']  text-start font-bold">
              ACESSE
            </span>
            {social.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-adblue transition-all "
              >
                <contact.icon className="mr-2" />
                <span>{contact.name}</span>
              </a>
            ))}
          </div>
          <div className="flex flex-col md:border-t-[1px] md:border-white w-[250px] lg:w-[350px] gap-2">
            <span className="mt-8 text-lg font-['Raleway']  text-start font-bold">
              CONTATO
            </span>
            {contact.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center hover:text-adblue transition-all"
              >
                <contact.icon className="mr-2" />
                <span className="text-start">{contact.name}</span>
              </a>
            ))}
          </div>{" "}
          <div className="flex flex-col md:border-t-[1px] md:border-white w-[250px] lg:w-[350px] gap-2">
            <span className="mt-8 text-lg font-['Raleway']  text-start font-bold">
              LOCALIZAÇÃO
            </span>
            <span className="text-start">
              AV. CAPITÃO OLINTO MANCINI, 878 - CENTRO, TRÊS LAGOAS - MS
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-3 mt-8 flex-col md:flex-row">
          <p className="mt-5 text-sm text-start max-w-[600px] lg:max-w-[800px]">
            A AD Investimentos é uma empresa de agentes autônomos de
            investimento devidamente registrada na comissão de valores
            mobiliários (CVM), na forma da instrução normativa nº 497/11. Atua
            no mercado financeiro credenciada à Guide Investimentos SA, o que
            pode ser verificado através do site da CVM (www.cvm.gov.br). O
            investimento em ações é um investimento de risco e rentabilidade
            passada não é garantia de rentabilidade futura. Na realização de
            operações com derivativos existe a possibilidade de perdas dos
            valores investidos, podendo resultar em significativas perdas
            patrimoniais. Para informações e dúvidas, favor contatar seu agente
            de investimentos. Para reclamações, favor contatar a ouvidoria da
            Guide investimentos no telefone nº 0800-704-0418. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-col gap-3 items-center divide-y divide-[#808080]/50">
            <img src={Logo} alt="logo" className="w-[150px] object-contain" />
            <img src={Guide} alt="logo" className="w-[200px] p-3" />
          </div>
        </div>
        <div className="flex justify-center w-full mt-4">
          © 2022 AD INVESTIMENTOS. TODOS OS DIREITOS RESERVADOS
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <div className="flex flex-col items-start justify-between w-full gap-3 max-w-7xl">
//   <div className="flex justify-between w-full">
//     <div className="flex flex-col gap-1">
//       <div className="text-lg font-semibold text-start">
//         AD Investimentos
//       </div>

//       <div className="flex items-center gap-2">
//         <AiOutlineWhatsApp />
//         <a href="mailto:ALVARO@ADINVESTIMENTOS.COM.BR">
//           alvaro@adinvestimentos.com.br
//         </a>
//       </div>
//       <div className="flex items-center gap-2">
//         <MdOutlineMailOutline />
//         <a href="https://api.whatsapp.com/send?phone=5567993466245">
//           <span>+55 (67) 99346-6245</span>
//         </a>
//       </div>
//     </div>
//     <div className="flex flex-col gap-4 md:flex-row">
//       <img
//         src={Logo}
//         alt="Logo AD Investimentos"
//         className="object-contain w-20 h-20"
//       />
//       <img
//         src={Guide}
//         alt="Logo Guide"
//         className="object-contain w-20 h-20"
//       />
//     </div>
//   </div>

//   <div className="flex justify-center w-full">
//     © 2022 AD INVESTIMENTOS. TODOS OS DIREITOS RESERVADOS
//   </div>
// </div>
