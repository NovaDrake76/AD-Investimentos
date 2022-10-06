import React, { useState, useEffect } from "react"
import Logo from "../images/logo2.webp"
import Guide from "../images/guide.webp"
import { Link } from "react-router-dom"

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
  const [isConta, setIsConta] = useState(false)

  useEffect(() => {
    if (window.location.pathname === "/conta") {
      setIsConta(true)
    }
  }, [])

  return (
    <nav
      className={
        isConta
          ? "flex justify-center w-screen p-2 bg-[#333333] border-b-4 border-adblue"
          : "absolute z-20 flex justify-center w-screen p-2 bg-transparent"
      }
    >
      <div className="flex items-center justify-between w-full max-w-7xl">
        <Link to="/">
          <div className="flex  gap-2 divide-x divide-[#808080]/50">
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
        </Link>
        <div className="gap-6 text-lg font-['Raleway'] hidden md:flex text-white font-bold">
          {links.map((link) => (
            <a
              key={link.name}
              className="transition-all hover:text-adblue hover:border-b-2 hover:border-adblue "
              href={"/" + link.href}
            >
              {link.name}
            </a>
          ))}
          <Link
            to={"/conta"}
            className="transition-all hover:text-adblue hover:border-b-2 hover:border-adblue "
          >
            Abra sua Conta
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
