import React from "react";

const Experience = () => {
  const experiences = {
    "Software Engineer": [
      {
        company: "CaratLane Trading Pvt. Ltd.",
        location: "Chennai, Tamil Nadu, India",
        years: "June 2021 - July 2023",
        experience: [
          "•  Developed scalable, high-efficiency features for a high-traffic jewelry e-commerce site using Nest.js with TypeScript, significantly enhancing performance by 20% and reducing memory usage by 30% during peak sales",
          "•	Created synchronization automation modules with Ruby on Rails to seamlessly integrate vendor products, improving efficiency by 60%, and ensuring data accuracy",
          "•	Led the oversight of a crucial microservice, operating delivery date and time prediction using Node.js, collaborating with team members to ensure code quality, security standards, and continuous monitoring via Sonarqube",
          "•	Guided the transition of sync architectures from a repository to distributed microservices with a 4-member team, increasing system flexibility and dependability",
          "•	Engaged in internal Tech Talks, contributing insights, and staying updated on latest technology trends"
        ]
      },
    ],
    "Software Engineer Intern": [
      {
        company: "CaratLane Trading Pvt. Ltd.",
        location: "Chennai, Tamil Nadu, India",
        years: "March 2021 - May 2021",
        experience: [
          "•	Engineered an intuitive and user-friendly interface adopting Vue.js, integrating dynamic options, auto filters, and seamless linkage with Ruby on Rails backend, enhancing user experience and system efficiency by 70%",
          "•	Initiated technical documentation for easy team onboarding for smooth setup, thereby saving developers 80% of setup time",
        ] 
      }
    ]
  };

  return (
    <section className="bg-primary text-white px-5 py-32" id="experience">
      <div className="container mx-auto">
        <div className="about-info mb-10">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Experience
          </h2>
        </div>

        {Object.keys(experiences).map((category, i) => (
          <div key={i} className="bg-white p-6 rounded-lg shadow-2xl hover:shadow-xl text-black transition-shadow duration-100 border border-solid-black mb-8">
            <h3 className="text-2xl font-serif mb-2">{category}</h3>
            {experiences[category].map((exp, j) => (
              <div key={j} className="mb-6">
                <p className="text-xl font-serif mb-1">{exp.company}</p>
                <p className="text-sans font-normal">{exp.location}</p>
                <p className="text-black mb-3">{exp.years}</p>
                <div className="text-black mb-4 grid grid-cols-1 gap-1">
                  {exp.experience.map((e, index) => (
                    <div key={index} className="border-b border-gray-200 py-1">{e}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;