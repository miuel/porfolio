// Navigation component
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../api/data-mock.json";
import Button from "./Button";
import { Link } from "react-router-dom";
//import logoMR2 from '../assets/images/logoMR.png';
/* 
src
  - api
    -data.mock.json
public
  - assets
    -images 
      -logoMR.png
*/

const Navigation = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);
  // to dev env use this approach
  //const imageSrc = process.env.PUBLIC_URL + data.images.logoMR;
  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location]);

  return (
    <nav className="p-4 bg-orange-400 sticky top-0 z-10 md:mb-20">
      <div className="overflow-auto max-w-6xl m-auto flex justify-center items-center">
        <Link to="/porfolio">
          <img src={data.images.logoMR} alt="logo" className="w-36 md:w-28"/>     
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
    </nav>
  );
};

export default Navigation;
