import React from "react";
import img1 from "../assets/3.jpg";

const About = () => {
  return (
    <section id="about" className="bg-slate-50  py-10">
      <div className="flex flex-col-reverse sm:flex-wrap md:flex-row md:flex-nowrap  justify-center items-center gap-5 py-10 w-[90%] mx-auto">
        <div className="xl:w-[35%] ">
          <img src={img1} alt="travel image" />
        </div>
        <div className="xl:w-[65%]  flex flex-col gap-5 p-5  "> 
          <h2 className="font-semibold text-5xl text-gray-800 text-center md:text-left">About us</h2>
          <h4 className="text-xl font-semibold text-gray-800 text-center md:text-left">"Making Dreams Come True, One Trip at a Time"</h4>
          <p className="text-justify  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            eos hic voluptas autem molestiae pariatur exercitationem natus
            molestias quos eius voluptates ducimus delectus, incidunt nulla
            aperiam quasi? In, at labore. Dignissimos illo repudiandae fuga
            reiciendis tempora iusto provident soluta vel quasi, numquam culpa
            rerum odio ipsa explicabo mollitia? Explicabo consectetur,
            voluptates omnis aliquid maxime sint possimus natus reprehenderit
            iure incidunt?
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
