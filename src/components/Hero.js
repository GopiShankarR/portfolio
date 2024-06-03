import React from "react";
import HeroImg from "../assets/image.jpg";

import {
  AiOutlineLinkedin,
  AiOutlineGithub,
  AiOutlineFilePdf,
} from "react-icons/ai";

const Hero = () => {
  return (
    <section className="bg-primary px-5 text-white py-32">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl">
            Hi, <br />I am Gopi <br />
          </h1>

          <p className="font-serif py-5">
          I'm a Computer Science graduate student at Illinois Tech, with a strong desire for software development. 
          I am currently seeking software developer roles where I can apply my skills and knowledge to create innovative solutions. 
          Let's connect and build something amazing together!
            <br></br>
          </p>

          <div className="flex py-5 ">
            <a
              href="https://www.linkedin.com/in/gopiravady/"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineLinkedin size={40} />
            </a>
            <a
              href="https://github.com/GopiShankarR"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineGithub size={40} />
            </a>
            <a
              href="https://drive.google.com/file/d/1cte-0LUyV-3viRjSSWGqlq6oYkdFuyvH/view?usp=drive_link"
              className="pr-4 inline-block text-accent hover:text-white"
            >
              <AiOutlineFilePdf size={40} />
            </a>
          </div>
          <br></br>
          <a
            href="/#projects"
            className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
          >
            See Projects
          </a>
        </div>

        <div className="hero-img">
          <img
            src={HeroImg}
            alt="coding illustration"
            class="object-scale-down h-58 w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;