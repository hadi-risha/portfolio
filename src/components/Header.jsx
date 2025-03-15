import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";



const Header = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="mainContainer mx-20 max-w-screen h-20 py-4 px-8 flex flex-wrap items-center bg-white rounded-2xl justify-between gap-6">
      <div className="leftContainer flex space-x-6 sm:space-x-4">
        <Link to="/">
          <p className="logoName font-[Inter] font-bold text-lg sm:text-sm">
            HADI RISHA
          </p>
        </Link>

        <div className="linkTextContainer flex space-x-6 sm:space-x-4">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={(e) => {
                if (item.action?.current) {
                  e.preventDefault();
                  item.action.current();
                }
              }}
              className="relative cursor-pointer group"
            >
              {/* Active & Hover Effect */}
              <span
                className={`absolute -top-2 left-0 bg-black transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-full h-[1px]" // Active state
                    : "w-0 h-[1px] group-hover:w-full group-hover:h-[1.5px]" // Hover effect
                }`}
              ></span>
              <p className="text-gray-800 text-base sm:text-xs">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="rightContainer flex space-x-6 items-center">
        {/* LinkedIn icon */}
        <div
          className="cursor-pointer"
          onClick={() =>
            window.open("https://www.linkedin.com/in/hadi-risha/", "_blank")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M17.303 2.25H6.697A4.447 4.447 0 0 0 2.25 6.697v10.606a4.447 4.447 0 0 0 4.447 4.447h10.606a4.447 4.447 0 0 0 4.447-4.447V6.697a4.447 4.447 0 0 0-4.447-4.447m-8.46 15.742a.4.4 0 0 1-.4.423h-1.78a.41.41 0 0 1-.4-.412V10.6a.4.4 0 0 1 .4-.411h1.78a.4.4 0 0 1 .4.411zM7.52 8.632a1.467 1.467 0 1 1 .022-2.935A1.467 1.467 0 0 1 7.52 8.63m10.817 9.35a.39.39 0 0 1-.378.388H16.08a.39.39 0 0 1-.378-.389v-3.424c0-.511.156-2.223-1.356-2.223c-1.179 0-1.412 1.2-1.457 1.734v3.991a.39.39 0 0 1-.378.39h-1.823a.39.39 0 0 1-.389-.39v-7.493a.39.39 0 0 1 .39-.378h1.822a.39.39 0 0 1 .39.378v.645a2.59 2.59 0 0 1 2.434-1.112c3.035 0 3.024 2.835 3.024 4.447z"
              strokeWidth={0.5}
              stroke="#000"
            ></path>
          </svg>
        </div>

        {/* GitHub icon */}
        <div
          className="cursor-pointer"
          onClick={() =>
            window.open("https://github.com/hadi-risha/", "_blank")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M12.001 2c-5.525 0-10 4.475-10 10a9.99 9.99 0 0 0 6.837 9.488c.5.087.688-.213.688-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.337 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.687c-.1-.25-.45-1.275.1-2.65c0 0 .837-.263 2.75 1.024a9.3 9.3 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337c1.913-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.02 10.02 0 0 0 22 12c0-5.525-4.475-10-10-10"
              strokeWidth={0.5}
              stroke="#000"
            ></path>
          </svg>
        </div>

        <Link to="/contact">
          <div className="secondContact py-3 px-6 border border-gray-500 rounded-lg flex items-center space-x-2">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            <p>Available for Projects</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
