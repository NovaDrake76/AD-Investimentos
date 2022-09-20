import React from "react"

const Navbar = () => {
  return (
    <nav className="flex w-screen p-8 border-b-4 border-adblue justify-center">
      <div className="flex justify-between w-full max-w-7xl">
        <div className="text-lg font-semibold">AD Investimentos</div>
        <div className="flex gap-3">
          <a href="#contatos">Contato</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
