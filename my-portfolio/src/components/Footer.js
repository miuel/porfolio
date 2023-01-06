// Footer component
import React from "react";
import data from "../api/data-mock.json";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <footer className="bg-white w-full flex mt-10 py-10 gap-8 border-top-1">
      {data.footer.map((item) => (
        <div >
          <h3 className="font-bold grid-cols-1 pl-4 font-monospace" key={item}>
            {item.title}
          </h3>
            <p className="grid-cols-1 pl-4 font-monospace w-52 " key={item}>
                {item.data}
            </p>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
