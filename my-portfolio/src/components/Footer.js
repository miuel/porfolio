// Footer component
import React from "react";
import data from "../api/data-mock.json";
import Marquee from "../components/Marquee";

const Footer = () => {
  return (
    <footer className="w-full pt-20 gap-8">
      {/* <Marquee
        data={data.footer}
        repeatTimes={3}
        showBullet={true}
        className="bg-black text-white "
      /> */}
      <Marquee
        data={data.footer}
        repeatTimes={100}
        className={"bg-black opacity-80 text-white h-20 text-xl font-bold"}
        showBullet
        logo={true}
      />

    </footer>
  );
};

export default Footer;
