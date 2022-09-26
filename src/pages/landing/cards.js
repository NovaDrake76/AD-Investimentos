import React from "react"
import Timeline from "../../images/timeline.png"

export default function Cards() {
  return (
    <div className="flex ">
      <img
        src={Timeline}
        alt="timeline"
        className="hidden md:flex"
        width="100%"
        height="100%"
      />
      <div className="flex md:hidden flex-col gap-4 divide-y divide-[#707070]/50 p-2">
        <p className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-3xl px-5">
          Coletamos suas informações, suas necessidades atuais, seus desejos,
          onde você gosta de aplicar e por quanto tempo deseja aplicar.
        </p>
        <p className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-3xl px-5">
          Desenvolvemos um planejamento personalizado para você, seguindo seus
          desejos e necessidades atuais. Estando de acordo, fazemos as
          aplicações.
        </p>
        <p className="text-start text-lg font-['Raleway'] text-[#4c4c4c] font-bold leading-8 max-w-3xl px-5">
          A AD irá acompanhar as aplicações diariamente e mantê-lo informado
          através do whatsapp ou algum meio de contato de sua preferência.
        </p>
      </div>
    </div>
  )
}
