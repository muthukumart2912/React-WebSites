import React, { useState } from "react";
import { RiMenuFold2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  const [open, setIsopen] = useState(false);

  const handleChange = () => setIsopen(!open);
  return (
    <nav className="w-full h-16 bg-gray-100 sticky top-0 left-0  flex justify-around items-center z-50">
      <a
        href="#a"
        className="text-black uppercase font-mono text-2xl font-semibold tracking-wide "
        data-aos="fade-right"
      >
        ᴍᴜᴛʜᴜ<span className="text-green-400">ᴋᴜᴍᴀʀ.</span>
      </a>
      <div
        className="text-gray-800 text-sm font-semibold uppercase tracking-wider md:flex md:items-center gap-10  hidden"
        data-aos="fade-left"
      >
        <a href="#mainsect">Home</a>
        <a href="#about">AboutMe</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
        <a
          href="https://drive.google.com/file/d/1I25-CjtyHqlYQ02rstmUpzwyqYL8JfLf/view?usp=drivesdk"
          className="bg-green-500 px-5 py-2 text-white rounded font-semibold hover:bg-green-600"
          target="_blank"
        >
          Resume
        </a>
      </div>
      <button onClick={handleChange} className="text-xl md:hidden">
        {!open ? <RiMenuFold2Fill /> : <MdOutlineClose />}
      </button>

      <div
        className={`${
          open ? "block" : "left-[-100%]"
        } fixed top-0 left-0 h-full w-[70%] bg-green-400 flex flex-col justify-center items-center gap-8 transition-all ease-in-out duration-500`}
      >
        <div className="text-gray-800 text-sm font-semibold uppercase tracking-wider flex flex-col gap-6">
          <a href="#mainsect" className="">
            Home
          </a>
          <a href="#about">AboutMe</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
          <a
            href="https://drive.google.com/file/d/1I25-CjtyHqlYQ02rstmUpzwyqYL8JfLf/view?usp=drivesdk" target="_blank"
            className="bg-gray-800 px-4 py-2 text-white rounded font-semibold hover:bg-gray-700"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

