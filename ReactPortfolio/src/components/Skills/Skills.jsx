import React from "react";
import { frontEnd, backEnd, tools } from "./AllLogos";

const Skills = () => {
  return (
    <section className="bg-gray-200" id="skills">
      <div className="grid place-items-center py-5 ">
        <h1 className="text-4xl uppercase font-normal tracking-widest text-gray-800 ">
          SKILLS
        </h1>
        <p className="py-3 text-center px-2 text-gray-800 font-light text-xl">I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
        <div className="grid gap-10 py-8 " data-aos="fade-up-right">
          <div className="frontend  flex flex-col items-center gap-10">
            <h1 className="text-2xl text-center uppercase font-light tracking-widest text-gray-800 ">
              FrontEnd
            </h1>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              {frontEnd.map((item) => (
                <img
                  src={item.tech}
                  alt="Images"
                  key={item.id}
                  className="w-24 h-2w-24 bg-gray-100 p-5 rounded-md shadow-xl cursor-pointer transition-all duration-400 ease-linear hover:bg-gray-600 "
                loading="lazy"
                  />
              ))}
            </div>
          </div>
          <div className="backend flex flex-col items-center gap-10" data-aos="fade-up-left">
            <h1 className="text-2xl text-center uppercase font-light tracking-widest text-gray-800">
              BackEnd
            </h1>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              {backEnd.map((item) => (
                <img
                  src={item.tech}
                  alt="Images"
                  key={item.id}
                  className="w-24 h-2w-24 bg-gray-100 p-5 rounded-md shadow-xl cursor-pointer transition-all duration-400 ease-linear hover:bg-gray-600 "
                />
              ))}
            </div>
          </div>
          <div className="tools flex flex-col items-center gap-10" data-aos="fade-up-right">
            <h1 className="text-2xl text-center uppercase font-light tracking-widest text-gray-800">
              Tools
            </h1>
            <div className="flex flex-wrap gap-10 items-center justify-center">
              {tools.map((item) => (
                <img
                  src={item.tech}
                  alt="Images"
                  key={item.id}
                  className="w-24 h-2w-24 bg-gray-100 p-5 rounded-md shadow-xl cursor-pointer transition-all duration-400 ease-linear hover:bg-gray-600"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
