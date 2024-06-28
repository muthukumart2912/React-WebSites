import React, { useState } from "react";

const Header = () => {
  const navItems = [
    {
      id: 1,
      name :"Home",
      navLink : "#home",
  },
    {
      id: 2,
      name :"About",
      navLink : "#about",
  },
    {
      id: 3,
      name :"Plans",
      navLink : "#plan",
  },
    {
      id: 4,
      name :"Contact",
      navLink : "#contact",
  },
    
  ];
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  return (
    <header className="fixed top-0 w-full bg-white text-black p-5 font-mono transition-colors duration-200 ease-linear shadow-md z-50">
      <nav className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-wider">TRAVEL ART</h2>
        <div
          className={`${
            open ? "flex" : "hidden"
          } md:flex flex-col md:flex-row md:gap-10 items-center w-full md:w-auto md:static absolute  top-0 left-0 md:h-auto h-screen bg-white md:bg-transparent transition-all duration-500 ease-in-out`}
        >
          {navItems.map((item) => (
            <a
              href={item.navLink}
              key={item.id}
              className="text-lg tracking-widest navLinks font-semibold uppercase md:mt-0 mt-10"
            >
              {item.name}
            </a>
          ))}
          <div className="btns flex flex-col md:flex-row gap-5 md:gap-8 md:mt-0 mt-10">
            <button className="border border-gray-800 text-gray-800 px-6 py-2 rounded-md uppercase hover:bg-gray-700 hover:text-white">
              Sign up
            </button>
            <button className="bg-gray-800 text-white px-8 py-2 rounded-md uppercase">
              Login
            </button>
          </div>
        </div>
        <button
          onClick={handleChange}
          className="md:hidden text-inherit z-20"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
