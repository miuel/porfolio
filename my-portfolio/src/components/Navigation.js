// Navigation component
import React, { useEffect, useState } from "react";
import { useLocation, NavLink } from "react-router-dom";
import data from "../api/data-mock.json";
import useImagePath from "../hooks/useImagePath";
import Icon from "../components/Icon";
import Marquee from "../components/Marquee";
import Loading from "../components/Loading";

const Navigation = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const imageSrc = useImagePath(data.images.logoOfficial);

  /**
   * logic to responsive
   */
  const width = window.innerWidth;
  const breakpoint = 768;
  const isMobile = width < breakpoint;
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY >= 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handlePageSelected = (pageSelected) => {
    setIsOpen(false);
    setSelectedOption(pageSelected);
  };

  return (
    <nav
      className={`${!isMobile && selectedOption !== "/" && "animated-gradient"} ${isMobile && "animated-gradient"} sticky top-0 z-10 md:mb-20 shadow-lg ${!isScrolling
        ? "opacity-100 transition-all duration-300"
        : " opacity-0 transition-all duration-300"
        }`}
    >
      {/* <Marquee
        data={data.footer}
        repeatTimes={3}
        showBullet={true}
        isLevel1
        className="md:mb-5"
      /> */}
      <div className="max-w-6xl flex flex-wrap items-center justify-between mx-auto p-4">
        {imageSrc ? (
          <NavLink to="/" exact="true">
            <Icon
              icon="logoOfficial"
              alt="Miguel Angel Logo"
              size={8}
              className="text-black opacity-70 mix-blend-multiply w-36 md:w-24 "
            />
          </NavLink>
        ) : (
          <Loading />
        )}

       

        {isMobile && (
          <button
            className="flex flex-col h-12 w-12 justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${isOpen
                  ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                }`}
            />
            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div
              className={`${genericHamburgerLine} ${isOpen
                  ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
                  : "opacity-50 group-hover:opacity-100"
                }`}
            />
          </button>
        )}

        <div
          className={`w-full md:w-auto md:flex flex-grow ${isOpen ? "block ease-out " : "hidden"
            } md:block`}
        >
          <ul className="w-full flex flex-col items-end mt-8 md:mt-0 md:flex-row justify-end gap-2 md:gap-6">
            {data?.navigation.map((option, index) => (
              <NavLink
                to={option.url}
                className={`text-sm w-fit hover:bg-white px-1 ${option.url === selectedOption ? "bg-white" : ""
                  }`}
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
