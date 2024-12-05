import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/Images/fica.png";

const NavBar = () => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "News", link: "/news" },
    { name: "Career", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="w-full top-0 left-0 z-10">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 relative">
        {/* Logo Section */}
        <div className="w-20 lg:w-20 flex-shrink-0">
          <img src={logo} alt="Fica Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute  right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? <FaTimes className="text-black" /> : <FaBars className="text-black" />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center text-black lg:pb-0 absolute lg:static bg-white lg:bg-transparent
            lg:z-auto z-20 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out
            ${open ? "top-16 opacity-100" : "top-[-490px]"} lg:opacity-100 opacity-0`}
        >
          {Links.map((item) => (
            <li
              key={item.name}
              className="lg:ml-8 lg:text-sm xl:text-sm font-Switzer-Medium uppercase lg:my-0 my-7"
            >
              <Link
                to={item.link}
                className="text-black hover:text-gray-400 duration-500"
                onClick={() => setOpen(false)} // Close menu after clicking a link
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
