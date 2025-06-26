import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/fica.png";

const NavBar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const Links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Project", link: "/project" },
    { name: "Blogs", link: "/blogs" },
    { name: "Career", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <div className="w-full mx-auto h-16 md:h-20 bg-white md:px-8 lg:px-8 lg:pr-12">
      <div className="flex items-center justify-between py-4 relative h-full">
        {/* Logo Section */}
        <div className="w-24 lg:w-22 flex-shrink-0">
          <img src={logo} alt="Fica Logo" />
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl mr-5 cursor-pointer lg:hidden"
        >
          {open ? <FaTimes className="text-black" /> : <FaBars className="text-black" />}
        </div>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:items-center text-black lg:pb-0 absolute lg:static bg-white lg:bg-transparent
            lg:z-auto z-20 left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-500 ease-in-out
            ${open ? "top-16 opacity-100" : "top-[-490px]"} lg:opacity-100 opacity-0`}
        >
          {Links.map((item) => {
            const isActive = location.pathname === item.link;
            return (
              <li
                key={item.name}
                className={`lg:ml-8 lg:text-sm xl:text-sm font-Switzer-Medium uppercase lg:my-0 my-7 ${
                  item.name === "Contact" ? "lg:ml-10" : ""
                }`}
              >
                {item.name === "Contact" ? (
                  <Link
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={`py-2 px-4 rounded-md duration-300 ${
                      isActive
                        ? "bg-gray-800 text-white"
                        : "bg-black text-white hover:bg-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setOpen(false)}
                    className={`relative duration-500 group ${
                      isActive ? "text-gray-900" : ""
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute left-0 bottom-[-2px] h-0.5 bg-black transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;