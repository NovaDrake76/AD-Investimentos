import React from "react"
import { MdOutlineMailOutline } from "react-icons/md"
import { AiOutlineWhatsApp } from "react-icons/ai"
import Logo from "../images/AD.png"

const Footer = () => {
  return (
    <footer className="flex w-screen p-8 border-t-4 border-[#202737] bg-[#0D131D] justify-center text-white">
      <div className="flex flex-col justify-between items-start w-full max-w-7xl gap-3">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <div className="text-lg font-semibold text-start">
              AD Investimentos
            </div>
            <span className="text-start">
              AV. CAPITÃO OLINTO MANCINI, 878 - CENTRO, TRÊS LAGOAS - MS
            </span>
            <div className="flex gap-2 items-center">
              <AiOutlineWhatsApp />
              <a href="mailto:ALVARO@ADINVESTIMENTOS.COM.BR">
                alvaro@adinvestimentos.com.br
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <MdOutlineMailOutline />
              <a href="https://api.whatsapp.com/send?phone=5567993466245">
                <span>+55 (67) 99346-6245</span>
              </a>
            </div>
          </div>
          <img src={Logo} alt="Logo AD Investimentos" className="w-20 h-20" />
        </div>
        <p className="text-start text-sm mt-5">
          A AD Investimentos é uma empresa de agentes autônomos de investimento
          devidamente registrada na comissão de valores mobiliários (CVM), na
          forma da instrução normativa nº 497/11. Atua no mercado financeiro
          credenciada à Guide Investimentos SA, o que pode ser verificado
          através do site da CVM www.cvm.gov.br). O investimento em ações é um
          investimento de risco e rentabilidade passada não é garantia de
          rentabilidade futura. Na realização de operações com derivativos
          existe a possibilidade de perdas dos valores investidos, podendo
          resultar em significativas perdas patrimoniais. Para informações e
          dúvidas, favor contatar seu agente de investimentos. Para reclamações,
          favor contatar a ouvidoria da Guide investimentos no telefone nº
          0800-704-0418. Todos os direitos reservados.
        </p>

        <div className="flex w-full justify-center">
          © 2022 AD INVESTIMENTOS. TODOS OS DIREITOS RESERVADOS
        </div>
      </div>
    </footer>
  )
}

export default Footer
