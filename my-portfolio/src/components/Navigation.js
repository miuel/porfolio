// Navigation component
import React from "react";
import data from "../api/data-mock.json";
import Button from "./Button";

const Navigation = () => {
  return (
    <nav className="p-4 bg-white sticky top-0 gap-8 flex text-sm font-normal leading-loose z-10">
      {data.navigation.map((option) => (
        <Button text={option.name} link={option.url} isLink={true} />
      ))}
    </nav>
  );
};

export default Navigation;
