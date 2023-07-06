// Navigation component
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import data from "../api/data-mock.json";
import Button from "./Button";

const Navigation = () => {
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    setSelectedOption(location.pathname);
  }, [location]);

  return (
    <nav className="p-4 bg-orange-400 sticky top-0 gap-8 flex text-sm font-normal leading-loose z-10">
      {data.navigation.map((option) => (
        <Button text={option.name} link={option.url} isLink={true}
          isSelected={option.url === selectedOption}
          onClick={() => setSelectedOption(option.url)}

        />
      ))}
    </nav>
  );
};

export default Navigation;
