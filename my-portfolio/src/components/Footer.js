// Footer component
import React from "react";
import data from "../api/data-mock.json";
import Marquee from "../components/Marquee";

const Footer = () => {

  return (
    <footer className="w-full py-10 gap-8">
      <Marquee
        data={data.marqueeHeaderText}
        repeatTimes={3}
        bgColor="bg-stone-400"
        height={"h-14"}
        fontSize={"text-2xl"}
        showBullet={true}
      />
      <div className="flex ">

        {data.footer.map((item, i) => (
          <div key={i.toString()} className="max-w-75 flex flex-col justify-center" >
            <h3 className="font-bold grid-cols-1 pl-4 font-monospace">
              {item.title}
            </h3>
            <p className="pl-4 font-monospace w-52">
              {item.data}
            </p>
          </div>
      ))}
      </div>
    </footer>
  );
};

export default Footer;
