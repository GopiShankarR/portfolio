import React from "react";
import CLanguage from "../assets/C-language.png";
import CPlusPlus from "../assets/c++.png";
import Ruby from "../assets/ruby-on-rails.png";
import Java from "../assets/java.png";
import Dart from "../assets/dart.jpeg";
import Python from "../assets/python.png";
import HTML from "../assets/html.webp";
import CSS from "../assets/css.webp";
import JavaScript from "../assets/javascript.png";
import PHP from "../assets/php.png";
import VueJS from "../assets/vue.jpeg";
import NestJS from "../assets/nest.png";
import Flutter from "../assets/flutter.png";
import ReactJS from "../assets/react.png";
import MySQL from "../assets/mysql.png";
import MongoDB from "../assets/mongodb.png";
import S3 from "../assets/s3.png";
import EMR from "../assets/emr.png";
import Lambda from "../assets/lambda.jpg";
import CloudWatch from "../assets/cloudwatch.jpg";
import CodePipeline from "../assets/codepipeline.png";
import Git from "../assets/git.png";
import RestAPI from "../assets/restapi.jpeg";
import GraphQL from "../assets/graphql.png";
import Kafka from "../assets/kafka.jpg";
import Linux from "../assets/linux.jpeg";

const Skills = () => {
  const skills = {
      "Programming Languages": [
        {
          name: "C",
          imageSource: CLanguage
        },
        {
          name: "C++",
          imageSource: CPlusPlus
        },
        {
          name: "Ruby on Rails",
          imageSource: Ruby
        },
        {
          name: "Java",
          imageSource: Java
        },
        {
          name: "Dart",
          imageSource: Dart
        },
        {
          name: "Python",
          imageSource: Python
        }
      ],
      "Scripting Languages": [
        {
          name: "HTML",
          imageSource: HTML
        },
        {
          name: "CSS",
          imageSource: CSS
        },
        {
          name: "JavaScript",
          imageSource: JavaScript
        },
        {
          name: "PHP",
          imageSource: PHP
        },
      ],
      "Frameworks": [
        {
          name: "Vue.js",
          imageSource: VueJS
        },
        {
          name: "Nest.js",
          imageSource: NestJS
        },
        {
          name: "Flutter",
          imageSource: Flutter
        },
        {
          name: "React.js",
          imageSource: ReactJS
        }
      ],
      "Database": [
        {
          name: "MySQL",
          imageSource: MySQL
        },
        {
          name: "MongoDB",
          imageSource: MongoDB
        }
      ],
      "Cloud Services": [
        {
          name: "AWS S3",
          imageSource: S3
        },
        {
          name: "Amazon EMR",
          imageSource: EMR
        },
        {
          name: "AWS Lambda",
          imageSource: Lambda
        },
        {
          name: "AWS CloudWatch",
          imageSource: CloudWatch
        },
        {
          name: "AWS CodePipeline",
          imageSource: CodePipeline
        }
      ],
      "Other": [
        {
          name: "Git",
          imageSource: Git
        },
        {
          name: "Linux",
          imageSource: Linux
        },
        {
          name: "RestAPI",
          imageSource: RestAPI
        },
        {
          name: "GraphQL",
          imageSource: GraphQL
        },
        {
          name: "Kafka",
          imageSource: Kafka
        }
      ]
    };

    return (
      <section className="bg-primary text-white px-5 py-32" id="skills">
        <div className="container mx-auto">
          <div className="about-info mb-10">
            <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
              Skills
            </h2>
          </div>
  
          {Object.keys(skills).map((category, i) => (
            <div key={i} className="mb-10">
              <h3 className="text-3xl font-semibold mb-5">{category}</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
                {skills[category].map((skill, j) => (
                  <div key={j} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-2xl border border-black">
                    <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg bg-clip-border rounded-xl h-40">
                      <img src={skill.imageSource} alt={skill.name} className="object-contain w-full h-full" />
                    </div>
                    <div className="p-6 text-center">
                      <h4 className="block mb-2 font-serif text-xl font-serif leading-snug tracking-normal text-black">
                        {skill.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
};

export default Skills;