// Footer component
import React from "react";
import data from "../api/data-mock.json";
import Marquee from "../components/Marquee";
import Button from "../components/Button";

const Footer = () => {
  return (
    <footer className="relative h-[650px] md:h-[530px] bg-[#f0f8ff]"
    style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
      <div className="fixed h-[650px] md:h-[530px] w-full bottom-0">
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
        <div className="flex flex-col md:flex-row p-8 md:p-10  max-w-6xl m-auto">
          <div className="w-full md:w-1/3">
            <h1>{data?.contact.title}</h1>
          </div>
          <div className="w-full md:w-2/3">
            <div className="flex flex-col pb-5 border-b border-stone-400">
              <a
                className="paragraph-style mt-5"
                href={`mailto:${data?.contact.email}`}
                aria-label="Email"
              >
                {data?.contact.email}
              </a>
              <p className="paragraph-style mt-5">{data?.contact.phone}</p>
            </div>

            <div className="pb-5 border-b border-stone-400 mt-5">
              {data &&
                data?.contact?.media.map((media, i) => (
                  <Button text={media.name} link={media.url} key={i} />
                ))}
            </div>

            <div className="pb-5 border-b border-stone-400">
              <p className="mt-5 paragraph-style">{data?.contact.shortText}</p>
            </div>

            <div className="pb-5 border-b border-stone-400">
              <p className="mt-5 paragraph-style">{data?.contact.address}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
