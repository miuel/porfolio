// Home Page
import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import data from "../api/data-mock.json";
import useScrollToTop from "../hooks/useScrollToTop";
const HomePage = () => {
  useScrollToTop();

  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimated(true), 100); // Slight delay to start the animation
  }, []);

  const renderAnimatedText = (text) => {
    return text.split("").map((char, index) => {
      const delay = Math.random() * 4; // Random delay between 0 and 4 seconds
      return (
        <span
          key={index}
          style={{
            animation: animated
              ? `animateLetter 2s ease-out ${delay}s`
              : "none",
          }}
          onAnimationEnd={(e) => e.target.classList.add("visible")}
        >
          {char}
        </span>
      );
    });
  };

  return (
    <>
      <div className="animated-gradient grad-filter w-screen h-[1000px] absolute -top-[200px] left-0 z-[-1]"></div>
      <section className="relative px-8 md:px-0 flex gap-8 m-0 home-section-h pb-8">
        <div className="max-w-75 pr-0 md:pr-8 mx-auto mt-8">

          <h1 className="text-3xl md:text-6xl font-bold font-bodoni py-5 text-transparent">
            {renderAnimatedText(data?.home.slogan || "")}
          </h1>

          <h2 className="text-4xl md:text-9xl font-bold font-bodoni pt-5 pb-10 md:py-20 text-end">
            <i>
              <span className="text-sm">by</span>
            </i>{" "}
            {data?.home.author}
          </h2>
          <div
            className="break-words paragraph-style mb-12"
            dangerouslySetInnerHTML={{ __html: data?.home.text }}
          />
          <Link
            className="justify-end bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
            to="/contact"
            aria-label="Contact us"
          >
            Let's talk{" "}
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
