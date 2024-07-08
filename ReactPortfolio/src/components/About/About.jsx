import Man1 from "../../assets/1.png";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center py-20 gap-14 bg-gray-200">
        <div className="flex items-center justify-center flex-col gap-3 px-3" data-aos="fade-right">
          <h1 className="text-4xl uppercase font-normal tracking-widest text-gray-800 ">
            About Me
          </h1>
          <p className="text-gray-800 font-normal  tracking-wide text-sm text-justify md:text-xl">
            Learn more about me ,my background and what motivates me
          </p>
        </div>

        <div className="grid place-items-center md:items-center gap-5 md:grid-cols-2 md:gap-0 md:w-[80%] md:py-7" data-aos="fade-left">
          <div
            className=" bg-gray-800 w-72"
            style={{ borderRadius: "50% 50% 69% 31% / 49% 58% 42% 51% " }}
          >
            <img src={Man1} loading="lazy" alt="Man png" className=" w-96 " />
          </div>

          <div className="flex px-5 flex-col items-center md:items-start justify-center gap-5 md:px-2">
            <h1 className=" text-sm text-gray-800 font-semibold md:text-2xl">"The expert in anything was once a beginner." – <span>Helen Hayes</span> </h1>
            <p className="text-justify text-md font-normal text-gray-800">
              Enthusiastic and dedicated aspiring frontend developer with two
              years of experience in Oracle ERP. Passionate about creating
              seamless user experiences and ready to transition to a Frontend
              development role. Experienced in HTML, CSS, JavaScript, and modern
              frontend frameworks. Eager to leverage my skills and contribute to
              dynamic, collaborative projects.
            </p>
            <a className="bg-green-500 hover:bg-green-600 text-white px-5 shadow-lg rounded-sm shadow-black py-2 uppercase font-semibold cursor-pointer text-sm" href="#skills">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
