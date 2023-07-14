import Logo from "../assets/logo.svg";
import { useState } from "react";
import AnimatedComponent from "./AnimatedComponent";
import { fadeInY } from "../utils/animatedVariants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const items = ["Home", " New", "Popular", "Trending", "Categories"];

  return (
    <AnimatedComponent
      tag="header"
      variants={fadeInY}
      initial="hidden"
      whileInView="visible"
      className="lgxl-padding  py-7 lg:pb-12 lg:pt-[5.5rem]">
      <nav className="relative flex justify-between">
        <a href="#" aria-label="Winglet">
          <img src={Logo} alt="Winglet" className="max-w-[2.85rem] lg:max-w-xs" />
        </a>

        <button
          aria-label="Menu button"
          className="relative z-10 transition-all lg:hidden"
          onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? "translate-y-1 rotate-45" : ""}`}></span>
          <span className={`line ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`line ${isMenuOpen ? "-translate-y-[.6rem] -rotate-45" : ""}`}></span>
        </button>

        {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>}

        <ul
          role="list"
          className={`flexed open-menu lg:desk-menu fixed z-[1] gap-5 bg-off-white transition-all duration-500 lg:static lg:gap-[2.3rem] lg:bg-transparent lg:pt-2
          ${isMenuOpen ? "-right-[.625rem]" : "-right-full"}`}>
          {items.map((item, index) => (
            <li
              key={index}
              role="list item"
              className="text-lg text-very-dark-blue transition hover:text-soft-orange lg:text-[1.02rem] lg:text-dark-grayish-blue">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </AnimatedComponent>
  );
}
