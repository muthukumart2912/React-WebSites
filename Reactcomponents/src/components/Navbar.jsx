import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [open, setIsopen] = useState(false);
  const handleChange = () => setIsopen(!open);

  const Bars = 
    <>
      <div
        className="flex flex-col gap-2 cursor-pointer relative transition-all ease duration-500"
      >
        <span className="text-white bg-white w-10 h-1  block"></span>
        <span className="text-white bg-white w-10 h-1  block"></span>
        <span className="text-white bg-white w-10 h-1  block"></span>
      </div>
    </>
  

  const Close = 
    <>
      <div
        className="flex flex-col gap-2 cursor-pointer relative transition-all ease duration-500"
        >
        <span className="text-white bg-white w-10 h-1 block rotate-45"></span>
        <span className="text-white bg-white w-10 h-1  block -rotate-45"></span>
      </div>
    </>
  

  return <div className="h-screen bg-black grid place-items-center" onClick={handleChange}>
    {open ? Bars : Close}
  </div>;

  
};

export default Navbar;
