import React from "react";

const Experience = () => {
  const experiences = {
    "Software Engineer Intern": [
      {
        company: "Anokhii, Inc.",
        location: "Remote, USA",
        years: "August 2024 - October 2024",
        experience: [
          "•	Developed a React Native application with a video interface to record and assess children’s task performance, improving task evaluation efficiency by 40%",
          "•	Implemented video recording functionality with direct upload to S3, improving upload efficiency by 30% through optimized compression and asynchronous handling"
        ]
      }
    ],
    "Software Engineer": [
      {
        company: "CaratLane Trading Pvt. Ltd.",
        location: "Chennai, Tamil Nadu, India",
        years: "June 2021 - July 2023",
        experience: [
          "•  Developed scalable, high-efficiency features for a high-traffic jewelry e-commerce site using Nest.js with TypeScript, significantly enhancing performance by 20% and reducing memory usage by 30% during peak sales",
          "•	Created synchronization automation modules with Ruby on Rails to seamlessly integrate vendor products, improving efficiency by 60%, and ensuring data accuracy",
          "•	Led the oversight of a crucial microservice, operating delivery date and time prediction using Node.js, collaborating with team members to ensure quality code, security standards, and continuous monitoring via Sonarqube",
          "•	Guided the transition of sync architectures from a repository to distributed microservices, increasing system flexibility and dependability",
          "•	Engaged in internal Tech Talks, contributing insights, and staying updated on latest technology trends like AWS Quicksight"
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
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[190px] border-indigo-600 pb-2">
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