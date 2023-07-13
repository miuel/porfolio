// Navigation component
import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import data from "../api/data-mock.json";
import Button from "./Button";
import useImagePath from "../hooks/useImagePath";


const Navigation = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const imageSrc = useImagePath(data.images.logoOfficial);

  /**
   * logic to responsive
   */
  const width = window.innerWidth;
  const breakpoint = 768;
  const isMobile = width < breakpoint;

  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handlePageSelected = (pageSelected) => {
    setShowMenu(false);
    setSelectedOption(pageSelected)
  }

  return (

    <nav
      className={`bg-orange-400 sticky top-0 z-10 md:mb-20 shadow-lg ${!isScrolling ? 'opacity-100 transition-all duration-300' : ' opacity-0 transition-all duration-300'}`}
    >
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" exact="true">
          <img src={imageSrc} alt="Miguel Rivas Logo" className="w-36 md:w-24" />
        </NavLink>


        {isMobile && (
          <button
            type="button"
            className="text-white hover:text-white focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        )
        }

        <div
          className={`w-full md:w-auto md:flex flex-grow ${showMenu ? 'block ease-out ' : 'hidden'} md:block`}
        >
          <ul className="w-full flex flex-col items-end mt-8 md:mt-0 md:flex-row justify-end gap-2 md:gap-6">
            {data.navigation.map((option, index) => (
              <NavLink
                to={option.url}
                className={`text-sm w-fit hover:bg-white px-1 ${option.url === selectedOption ? "bg-white" : ""}`}
                key={index.toString()}
                onClick={() => handlePageSelected(option.url)}
              >
                {option.name}
              </NavLink>

            ))}
          </ul>
        </div>
      </div>
    </nav>


  );
};

export default Navigation;
