import React from "react"
import Logo from "../images/AD.webp"
import Guide from "../images/guide.webp"

const Navbar = () => {
  return (
    <nav className="flex justify-center w-screen p-2 border-b-4 border-adblue">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex gap-4 ">
          <img
            src={Logo}
            alt="Logo AD Investimentos"
            className="object-contain h-14"
          />
          <img
            src={Guide}
            alt="Logo Guide"
            className="object-contain w-20 h-14"
          />
        </div>
        <div className="flex gap-3 text-lg font-['Raleway'] text-[#4c4c4c] font-bold">
          <a href="#contatos">Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
