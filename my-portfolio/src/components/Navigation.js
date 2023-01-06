// Navigation component
import React from "react";
import { Link } from "react-router-dom";
import data from "../api/data-mock.json";

const Navigation = () => {  
  return (
    <nav className="p-4 bg-white sticky top-0 gap-8 flex text-sm font-normal leading-loose z-10">
      {data.navigation.map((option) => (
        <Link
          to={option.url}
          className="hover:bg-stone-400 hover:text-white px-1"
          key={option.name}
        >
          {option.name}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
