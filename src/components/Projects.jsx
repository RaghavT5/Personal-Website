import React from "react";
import Fridge2Fork1 from "../assets/projects/Fridge2Fork1.jpg";

import ChatCentral from "../assets/projects/ChatCentral.jpg";
import BMIBuddy from "../assets/projects/BMIBuddy.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Fridge2Fork1,
      demoLink: "",
      codeLink: "https://github.com/RaghavT5/Fridge2Fork",
    },
    {
      id: 2,
      src: ChatCentral,
      demoLink: "",
      codeLink: "https://github.com/RaghavT5/Chat-Central",
    },
    {
      id: 3,
      src: BMIBuddy,
      demoLink: "",
      codeLink: "https://github.com/RaghavT5/BMI-Buddy",
    },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="text-xl py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button
                  onClick={() =>
                    window.open(codeLink, "_blank", "noopener, noreferrer")
                  }
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
