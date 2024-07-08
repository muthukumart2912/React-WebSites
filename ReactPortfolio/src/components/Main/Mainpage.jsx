import React from "react";
import Man2 from "../../assets/2.png";
import gitLogo from "../../assets/SocialIcons/gitlogo.png";
import linked from "../../assets/SocialIcons/linked.png";

const socialLogos = [
  {
    id: 1,
    SocialImage: gitLogo,
    links: "https://github.com/muthukumart2912",
  },
  {
    id: 2,
    SocialImage: linked,
    links: "https://www.linkedin.com/in/muthu-kumar-t",
  },
];

const Mainpage = () => {
  return (
    <section id="mainsect">
      <div className="w-full py-10 px-5 bg-gray-200 flex flex-col gap-5 items-center justify-center  md:flex md:flex-row sm:py-14 md:py-16 md:gap-10">
        <div className="content flex flex-col gap-1 md:flex md:gap-2">
          <h4
            className="text-xl tracking-wide font-medium  sm:text-2xl"
            data-aos="fade-right"
          >
            Hey, I'm Muthu <span className="">👋</span>
          </h4>
          <h1
            className="text-5xl sm:text-7xl tracking-widest"
            data-aos="fade-up"
          >
            FRONT<span className="text-green-400">END</span>
          </h1>
          <h1
            className="text-5xl sm:text-7xl tracking-widest"
            data-aos="fade-up"
          >
            DEVELOPER
          </h1>
          <p
            className="text-sm sm:text-[1rem] text-justify font-medium text-gray-800 "
            data-aos="fade-up-right"
          >
            I am frontend developer based in India, I'll help you to build
          </p>
          <p
            className="text-sm sm:text-[1rem] font-medium text-gray-800"
            data-aos="fade-up-right"
          >
            beautiful websites your users will love
          </p>
          <div className="icons flex gap-2 mt-2 ">
            {socialLogos.map((item) => (
              <div
                className="bg-gray-200 shadow-md shadow-black cursor-pointer w-10 h-10  flex items-center justify-center rounded-full hover:bg-slate-100"
                key={item.id}
                data-aos="fade-up-right"
              >
                <a href={item.links} target="blank" >
                  <img src={item.SocialImage} className="w-8 rounded-full" />
                </a>
              </div>

            ))}
          </div>
        </div>
        <div
          className=" bg-green-400 "
          style={{ borderRadius: "30% 70% 58% 42% / 30% 32% 68% 70% " }}
          data-aos="fade-left"
        >
          <img src={Man2} loading="lazy" alt="Man png" className="w-96 " />
        </div>
      </div>
    </section>
  );
};

export default Mainpage;
