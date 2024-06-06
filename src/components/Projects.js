import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Yazhtzee",
      shortdesc: "Associated with Illinois Institute of Technology",
      languages: "Flutter",
      desc: "An user-friendly single-player web application game that allows users to play against a computer by handling all math operations in the backend",
      code: "https://github.com/GopiShankarR/Yahtzee"
    },
    {
      title: "Battleships",
      shortdesc: "Associated with Illinois Institute of Technology",
      languages: "Flutter, Flask, MySQL",
      desc: "A responsive UI game across diverse screen sizes with the backend managing user authentication, game listing, and game matching with other logged-in users",
      code: "https://github.com/GopiShankarR/Battleships"
    },
    {
      title: "Chat Application",
      shortdesc: "Personal Project",
      languages: "Node, Flutter, MongoDB, Socket.io",
      desc: "A full-featured chat application using socket.io for real-time bidirectional communication",
      code: "https://github.com/GopiShankarR/flutter_with_rasa/tree/master/flutter_with_rasa"
    },
    {
      title: "Dynamic Pricing for E-Commerce",
      shortdesc: "Associated with Illinois Institute of Technology",
      languages: "Machine Learning using Python",
      desc: "An application to predict Chicago Airbnb listing prices using clustered geographical data, selecting Random Forest for its highest accuracy among five models.",
      code: "https://github.com/GopiShankarR/CS584-Group-29-Dynamic-Pricing-for-E-Commerce/tree/main/DynamicPricingForECommerce"
    },
    {
      title: "Flashcards",
      shortdesc: "Associated with Illinois Institute of Technology",
      languages: "Flutter",
      desc: "A UI-concentrated flashcards app with the ability to take quizzes and refer to answers by flipping the flashcards.",
      code: "https://github.com/GopiShankarR/Flashcards"
    },
    {
      title: "Github Clone",
      shortdesc: "Associated with Illinois Institute of Technology",
      languages: "Flutter, MySQL, RESTApi",
      desc: "A clone of the Github repositories with the ability to display the logged-in users' projects on the home page and have an additional option to search for other repositories through RESTApi.",
      code: "https://github.com/GopiShankarR/GitHub-clone"
    },
    {
      title: "Pizza Delivery App",
      shortdesc: "Personal Project",
      languages: "HTML, CSS, PHP, XAMPP",
      desc: "A user-friendly Pizza Delivery System web application with the option to log in for both admin and user.",
      code: "https://github.com/GopiShankarR/gopi_pizza"
    },
    {
      title: "Mental Stability Recognition in Speech Through Emotion",
      shortdesc: "Associated with Coimbatore Institute of Technology",
      languages: "Machine Learning using Python",
      desc: "A project to detect the mental stability of a person through Analysis of Emotions by extracting relevant features from speech utilizing Machine Learning algorithms such as SVM, MLP, and CNN",
    }
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="projects">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="about-info mb-5">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Projects
          </h2>

          <p className="pb-5">
            These are some of my projects I have done from my undergraduate course until now.
          </p>
        </div>
      </div>

      <div className="projects container mx-auto grid md:grid-cols-4 gap-10">
        {projects.map((project, i) => (
          <div key={i} className="relative group w-full h-96 overflow-hidden bg-white m-auto">
            <div className="absolute w-full h-full flex flex-col items-center justify-center p-5">
              <div className="absolute inset-0 flex flex-col items-center justify-center transform duration-500 group-hover:-translate-y-full">
                <p className="capitalize font-serif font-bold text-2xl text-center text-black">{project.title}</p>
                <p className="font-serif text-center w-4/5 text-black mt-2">{project.languages}</p>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full duration-500 group-hover:translate-y-0">
                <p className="font-serif text-center w-4/5 text-black">{project.shortdesc}</p>
                <br></br>
                <p className="font-serif text-center w-4/5 text-black">{project.desc}</p>
                {project.code && (
                  <a href={project.code && project.code} target="_blank" rel="noopener noreferrer" className="mt-4 bg-indigo-600 text-black font-bold rounded-lg py-2 px-4 hover:bg-indigo-700 transition duration-300 ease-in-out">
                    Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;