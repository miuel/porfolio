// Navigation component
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navOptions = ["HOME", "ABOUT", "PROJECTS", "CONTACT"];
  return (
    <nav className="p-4 bg-white sticky top-0 gap-8 flex text-sm font-normal leading-loose z-10">
      {navOptions.map((option) => (
        <Link
          to={option === "HOME" ? '/' : `/${option.toLowerCase()}`}
          className="hover:bg-stone-400 hover:text-white px-1"
          key={option}
        >
          {option}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
