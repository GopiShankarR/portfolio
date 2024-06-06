import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-3 bg-primary text-white fixed w-full z-10">
      <a href="/#portfolio" className="logo text-2xl font-bold text-accent">
        GOPI SHANKAR RAVADY
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/portfolio/#about">About</a>
          </li>
          <li>
            <a href="/portfolio/#skills">Skills</a>
          </li>
          <li>
            <a href="/portfolio/#education">Education</a>
          </li>
          <li>
            <a href="/portfolio/#experience">Professional Experience</a>
          </li>
          <li>
            <a href="/portfolio/#projects">Projects</a>
          </li>
          <li>
            <a href="/portfolio/#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1tgSVKP7x6ncs6MzxoKcRzF96zgJm_yLL/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
        <li>
            <a href="/portfolio/#about">About</a>
          </li>
          <li>
            <a href="/portfolio/#skills">Skills</a>
          </li>
          <li>
            <a href="/portfolio/#education">Education</a>
          </li>
          <li>
            <a href="/portfolio/#experience">Professional Experience</a>
          </li>
          <li>
            <a href="/portfolio/#projects">Projects</a>
          </li>
          <li>
            <a href="/portfolio/#contact">Contact</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1tgSVKP7x6ncs6MzxoKcRzF96zgJm_yLL/view?usp=sharing">Resume</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;