import React from "react";

const Education = () => {
  const education = [
    {
      institution: "Coimbatore Institute of Technology",
      degree: "Bachelor of Technology in Information Technology",
      period: "2017 - 2021",
      coursework: ["Data Structures and Algorithms", "C Programming", "Databases", "Data Warehousing", "Cloud Virtualization", "Computer Architecture", "Operating Systems"],
    },
    {
      institution: "Illinois Institute of Technology",
      degree: "Master's in Computer Science",
      period: "2023 - 2025",
      coursework: ["Advanced Database Organization", "Computer Networks", "Mobile Applications Development", "Big Data Technologies", "Design and Analysis of Algorithms", "Machine Learning"],
    }
  ];

  return (
    <section className="bg-primary text-white px-5 py-32" id="education">
      <div className="container mx-auto">
        <div className="about-info mb-10">
          <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
            Education
          </h2>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          {education.map((edu, i) => (
            <div key={i} className="bg-black p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-100">
              <h3 className="text-2xl font-sans mb-2">{edu.institution}</h3>
              <p className="text-xl text-sans-600 mb-1">{edu.degree}</p>
              <p className="text-white mb-3">{edu.period}</p>
              <p className="text-white mb-4">Coursework:</p>
              <div className="text-white mb-4 grid grid-cols-1 gap-1">
                {edu.coursework.map((course, index) => (
                  <div key={index} className="border-b border-gray-200 py-1">{course}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Education;