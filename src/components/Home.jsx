import React, { useRef } from "react";
import Avatar3 from "../assets/Avatar3.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect/dist/core";

const titles = ["Flutter Developer.", "Web Enthusiast.", "Python Programmer."];

const Home = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  const typewriterRef = useRef();
  useEffect(() => {
    typewriterRef.current = new Typewriter(
      document.getElementById("typewriter"),
      {
        loop: true,
        delay: 300,
      }
    );
    titles.forEach((title) => {
      typewriterRef.current.typeString(title).pauseFor(1000).deleteAll();
    });
    typewriterRef.current.start();
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <div className="sm: pt-12">
            <p className="text-4xl sm:text-7xl font-bold text-white">
              {" "}
              Hi! I'm Raghav.
            </p>
            <p className="text-4xl sm:text-7xl font-bold text-white">
              {" "}
              I am a <span id="typewriter"></span>
            </p>
          </div>
          <p className="text-gray-500 py-2 max-w-md"></p>
          <div>
            <Link
              to="projects"
              duration={700}
              offset={130}
              smooth
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Projects
              <span className="group-hover:rotate-90 duration-500">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="pl-4 md:pt-40 lg:pt-0 ml-4 sm: pb-40 lg:pb-0">
          <img
            src={Avatar3}
            className="rounded-2xl mx-auto w-56 h-56 md:w-full"
            alt="My Avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
