import React, { useState } from "react";
import { Link } from "react-scroll";
import { SiCoffeescript } from "react-icons/si";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer gap-2">
            <span>
              <SiCoffeescript size={25} />
            </span>
            <h1 className=" text-xl font-semibold">CafePulse</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Cardápio
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Sobre Nós
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="products"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Produtos
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="review"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Avaliações
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
          </nav>

          <div className=" px-6 py-1 border-white bg-[#16f406] hover:text-[#5bc936] transition-all rounded-full">
            <a
              href="https://api.whatsapp.com/send/?phone=18981142927&text=Quero%20fazer%20um%20agendamento%20hoje"
              target="_blank"
            >
              <button title="Whatsapp">Whatsapp</button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={30} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="menu"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Cardápio
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Sobre Nós
          </Link>
          <Link
            to="products"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Produtos
          </Link>
          <Link
            to="review"
            spy={true}
            smooth={true}
            duration={500}
            className=" hover:text-brightColor transition-all cursor-pointer"
            onClick={closeMenu}
          >
            Avaliações
          </Link>

          <div>
            <a
              href="https://api.whatsapp.com/send/?phone=18981142927&text=Quero%20fazer%20um%20agendamento%20hoje"
              target="_blank"
            >
              <button
                title="Whatsapp"
                className=" px-6 py-1  border-white bg-[#16f406] hover:text-[#5bc936] transition-all rounded-full"
              >
                Whatsapp
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
