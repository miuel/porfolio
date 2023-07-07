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
        fontSize={"text-4xl "}
        showBullet={true}
      />



      <Marquee
        data={data.footer}
        repeatTimes={5}
        bgColor="bg-black"
        fontSize={"text-xl font-bold"}
        height={"h-[80px]"}
        showBullet
      />


      {/* {data.footer.map((item, i) => (
          <div key={i.toString()} className="max-w-75 flex flex-col justify-center" >
            <h3 className="font-bold grid-cols-1 pl-4 font-monospace">
              {item.title}
            </h3>
            <p className="pl-4 font-monospace w-52">
              {item.data}
            </p>
          </div>
        ))}  */}

    </footer>
  );
};

export default Footer;
