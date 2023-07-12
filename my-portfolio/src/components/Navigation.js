// Navigation component
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../api/data-mock.json";
import Button from "./Button";
import useImagePath from "../hooks/useImagePath";
//import useViewport from "../hooks/useViewport";

{/* 
<nav className="p-4 bg-orange-400 sticky top-0 z-10 md:mb-20 shadow-lg">
      <div className="overflow-auto max-w-6xl m-auto flex justify-center items-center">
        <Link to="/porfolio">
          <img src={imageSrc} alt="logo" className="w-36 md:w-36" />
        </Link>
        <div className="w-full flex gap-8 flex-wrap  justify-end items-center md:justify-end pr-0 md:pr-8">
          {data.navigation.map((option, index) => (
            <Button
              key={index.toString()}
              aria-label={option.name}
              className={"text-sm"}
              text={option.name} link={option.url} isLink={true}
              isSelected={option.url === selectedOption}
              onClick={() => setSelectedOption(option.url)}
            />
          ))}
        </div>
      </div>
    </nav> */}


const Navigation = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  //const [isMobile, setIsMobile] = useState(window.innerWidth);
  
  const width = window.innerWidth;
  const breakpoint = 768;
  const isMobile = width < breakpoint;
  
  const imageSrc = useImagePath(data.images.logoMR);
  
  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location]);

  const handlePageSelected = (pageSelected) => {
    setShowMenu(false);
    setSelectedOption(pageSelected)
  }

  return (

    <nav className="p-4 bg-orange-400 sticky top-0 z-10 md:mb-20 shadow-lg">
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/porfolio" >
          <img src={imageSrc} alt="Miguel Rivas Logo" className="w-36 md:w-36" />
        </a>


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
              <Button
                key={index.toString()}
                aria-label={option.name}
                className={"text-sm w-fit"}
                text={option.name} link={option.url} isLink={true}
                isSelected={option.url === selectedOption}
                onClick={() => handlePageSelected(option.url)}
              />
            ))}
          </ul>
        </div>
      </div>

    </nav>


  );
};

export default Navigation;
