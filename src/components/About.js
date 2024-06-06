import React from "react";

const About= () => {
  return (
    <section className="bg-primary text-white px-5 py-32" id="about">
      <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between">
        <div className="about-info">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-1">About Me</h2>
          <p className="font-serif pb-5">
            Hi, My Name Is Gopi Shankar Ravady. I am a
            Full Stack Developer with a zest to learn new tech and get updated with technology every day.
          </p>
          <p className="font-serif pb-5">
            I am proficient in Frontend skills like Vue.js, Flutter, HTML, CSS, JavaScript, Tailwind CSS and currently I'm learning React.js.
          </p>

          <p className="font-serif pb-2">In the Backend, I have learned Node.js, Nest.js, Ruby, C++, MySQL, and MongoDB</p>
        </div>
      </div>

    </section>
  )
};

export default About;