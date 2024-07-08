import React from "react";
import { cardData } from "./Data";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <section className="bg-gray-200">
      <div className="myworks grid place-items-center gap-10 px-2">
        <div
          className="content flex flex-col items-center justify-center gap-2"
          data-aos="fade-up"
        >
          <h1 className="text-4xl uppercase font-normal tracking-widest text-gray-800 ">
            Work
          </h1>
          <p className="text-xl font-light text-gray-800">
            Check out some of my recent works.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {cardData.map((item) => (
            <div
              className=" xs:w-[200px]  sm:w-[300px] sm:h-[260px] bg-gray-100  rounded-sm shadow-md hover:-translate-y-1 duration-100 ease-in"
              key={item.id}
              data-aos="fade-up"
            >
              <a href={item.links} target="_blank">
                <img
                  className="rounded-t-sm"
                  src={item.img}
                  alt="Card Images"
                  loading="lazy"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-xl font-ligth uppercase tracking-tight text-gray-800 ">
                    {item.title}
                  </h5>
                </a>

                <a
                  href={item.links}
                  className="inline-flex items-center text-white bg-green-500 text-xs py-2 px-3 mt-2 rounded-sm hover:bg-green-600"
                  target="blank"
                >
                  Github
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
