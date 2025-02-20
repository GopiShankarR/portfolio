import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from 'react-router-hash-link'; // Use HashLink for smooth scrolling

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex justify-between px-5 py-3 bg-primary text-white fixed w-full z-10">
      <Link smooth to="/#" className="logo text-2xl font-bold text-accent">
        GOPI SHANKAR RAVADY
      </Link>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link smooth to="/#skills">Skills</Link>
          </li>
          <li>
            <Link smooth to="/#education">Education</Link>
          </li>
          <li>
            <Link smooth to="/#experience">Professional Experience</Link>
          </li>
          <li>
            <Link smooth to="/#projects">Projects</Link>
          </li>
          <li>
            <Link smooth to="/#contact">Contact</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1-pEyZq39dXwzz1mARyEnjN-Xyz_COp55/view?usp=sharing">
              Resume
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}
      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className="flex flex-col">
          <li>
            <Link smooth to="/#about" onClick={handleToggle}>About</Link>
          </li>
          <li>
            <Link smooth to="/#skills" onClick={handleToggle}>Skills</Link>
          </li>
          <li>
            <Link smooth to="/#education" onClick={handleToggle}>Education</Link>
          </li>
          <li>
            <Link smooth to="/#experience" onClick={handleToggle}>Professional Experience</Link>
          </li>
          <li>
            <Link smooth to="/#projects" onClick={handleToggle}>Projects</Link>
          </li>
          <li>
            <Link smooth to="/#contact" onClick={handleToggle}>Contact</Link>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1-pEyZq39dXwzz1mARyEnjN-Xyz_COp55/view?usp=sharing" onClick={handleToggle}>Resume</a>
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
