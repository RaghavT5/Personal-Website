import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      title: "home",
      offset: 0,
      offsetMobile: 0,
    },
    {
      id: 2,
      title: "about",
      offset: -110,
      offsetMobile: -240,
    },
    {
      id: 3,
      title: "projects",
      offset: 0,
      offsetMobile: 130,
    },
    {
      id: 4,
      title: "skills",
      offset: -140,
      offsetMobile: 85,
    },
    {
      id: 5,
      title: "resume",
      offset: 0,
      offsetMobile: 0,
    },
    {
      id: 6,
      title: "contact",
      offset: 70,
      offsetMobile: 330,
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-24 px-4 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">Raghav</h1>
      </div>
      <ul className="hidden md:flex">
        {links
          .slice(0, 4)
          .concat(links.slice(5))
          .map((link) => (
            <li
              key={link.id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link.title} smooth offset={link.offset} duration={700}>
                {link.title}
              </Link>
            </li>
          ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.slice(0, 5).map((link) => (
            <li
              key={link.id}
              className="px-4 capitalize cursor-pointer py-6 text-4xl"
            >
              {link.id === 5 ? (
                <a href={"http://bit.ly/3ZDIMvu"} target="_blank">
                  {link.title}
                </a>
              ) : (
                <Link
                  onClick={() => setNav(!nav)}
                  to={link.title}
                  smooth
                  offset={link.offsetMobile}
                  duration={700}
                >
                  {link.title}
                </Link>
              )}
            </li>
          ))}
          {links.slice(5).map((link) => (
            <li
              key={link.id}
              className="px-4 capitalize cursor-pointer py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link.title}
                smooth
                offset={link.offsetMobile}
                duration={700}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
