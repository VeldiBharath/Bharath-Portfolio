import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Machine Learning Engineer.",
      "Deep Learning Engineer.",
      "GenAI Enthusiast.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">
            Bharath Sri Vardhan Veldi
          </span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I'm Bharath Sri Vardhan Veldi, a passionate Software Engineer with a
          strong commitment to innovation, automation and learning. Currently
          pursuing my Masters in Computer Science at Indiana University
          Bloomington with a CGPA of 3.96/4. I am amazed by how the world is
          growing with Generative AI and its applications. I am excited to see
          how they will further transform our lives and open up new
          possibilities for innovation and problem-solving.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;
