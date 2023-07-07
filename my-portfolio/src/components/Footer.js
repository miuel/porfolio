// Footer component
import React from "react";
import data from "../api/data-mock.json";
import Marquee from "../components/Marquee";

const Footer = () => {
  return (
    <footer className="w-full pt-20 gap-8">
      <Marquee
        data={data.marqueeHeaderText}
        repeatTimes={3}
        bgColor="bg-stone-400"
        height={"h-[100px]"}
        fontSize={"text-4xl"}
        showBullet={true}
        isLevel1
      />

      <Marquee
        data={data.footer}
        repeatTimes={5}
        bgColor="bg-black"
        fontSize={"text-xl font-bold"}
        height={"h-[80px]"}
        showBullet
      />

    </footer>
  );
};

export default Footer;
