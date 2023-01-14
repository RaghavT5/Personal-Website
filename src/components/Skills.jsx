import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascriptIcon from "../assets/javascriptIcon.png";
import flutterIcon from "../assets/flutterIcon.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import python from "../assets/python.png";
import CppLogo from "../assets/python.png";
import SQLLogo from "../assets/python.png";

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
      src: javascriptIcon,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: flutterIcon,
      title: "Flutter",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-white",
    },
    {
      id: 8,
      src: CppLogo,
      title: "C++",
      style: "shadow-pink-400",
    },
    {
      id: 9,
      imgSrc: SQLLogo,
      title: "SQL",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div className="relative">
      <div
        name="skills"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
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
    </div>
  );
};

export default Skills;
