import React from "react"
import Logo from "../images/logo3.webp"
import Guide from "../images/guide.webp"

const links = [
  {
    name: "Vantagens",
    href: "#vantagens",
  },
  {
    name: "Como Trabalhamos",
    href: "#produtos",
  },
  {
    name: "Estrutura",
    href: "#estrutura",
  },
  {
    name: "Assessores",
    href: "#assessores",
  },
  {
    name: "Contatos",
    href: "#contatos",
  },
]

const Navbar = () => {
  return (
    <nav className="absolute z-20 flex justify-center w-screen p-2 bg-transparent">
      <div className="flex items-center justify-between w-full max-w-7xl">
        <div className="flex gap-4 divide-x divide-[#808080]/50">
          <img
            src={Logo}
            alt="Logo AD Investimentos"
            className="object-contain h-14"
            width="100%"
            height={56}
          />
          <img
            src={Guide}
            alt="Logo Guide"
            className="object-contain p-2 w-28"
            width={112}
            height="100%"
          />
        </div>
        <div className="gap-6 text-lg font-['Raleway'] hidden md:flex text-white font-bold">
          {links.map((link) => (
            <a
              key={link.name}
              className="transition-all hover:text-adblue hover:border-b-2 hover:border-adblue "
              href={link.href}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
