import React from "react";
import { Link } from "react-scroll";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-12">
          Welcome to my corner of the internet! My name is Raghav and I am a
          recent BCA graduate with a passion for technology and a knack for
          problem-solving. I specialize in a variety of programming languages
          and frameworks. My ultimate goal is to utilize my skills and make a
          positive impact in the tech industry.
        </p>
        <br />
        <p className="text-xl">
          On this website, you'll get to know me a little better and see some of
          the projects I've been working on. From{" "}
          <em>
            <strong>Fridge2Fork</strong>, my food recipe suggestion website
          </em>
          , &{" "}
          <em>
            <strong>Chat Central</strong>, my very own messaging app
          </em>
          , to{" "}
          <em>
            <strong>Destini</strong>, a text-based "choose your own adventure"
            style game built using Flutter
          </em>
          . I've been busy creating and coding away.
        </p>
        <br />
        <p className="text-xl">
          I’m an ambivert and a naturally curious person so when I am not
          coding, I am usually Googling random stuff, thinking about new
          projects and searching for new things to learn.
          <br />I also like reading up legal articles, familiarizing myself with
          the important ongoing legal battles and court cases (yeah, you read
          that right, I’ve varied non-tech interests too, go figure), and of
          course, binge-watching shows and movies on Netflix, Prime Video, etc.
        </p>
        <br />
        <p className="text-xl">
          So, take a look around, stay awhile and{" "}
          <b>
            <Link to="contact" smooth={true} offset={230} duration={700}>
              let's connect!
            </Link>
          </b>{" "}
          I'm always open to chat about the latest tech trends, grab a coffee,
          or just shoot the breeze.
        </p>
      </div>
    </div>
  );
};

export default About;
