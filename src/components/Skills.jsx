import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import JavaScript from "../assets/JavaScript.png";
import flutterIcon from "../assets/flutterIcon.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import CppLogo from "../assets/CppLogo.png";
import SQLLogo from "../assets/SQLLogo.png";

const Skills = () => {
  const technologies = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: JavaScript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: flutterIcon,
      title: "Flutter",
      style: "shadow-blue-900",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-cyan-300",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      id: 8,
      src: CppLogo,
      title: "C++",
      style: "shadow-blue-800",
    },
    {
      id: 9,
      src: SQLLogo,
      title: "SQL",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen sm: pt-96 md:pt-0 lg:0"
    >
      <div className="pt-40 max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {technologies.map(({ id, src: imgSrc, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={imgSrc} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
