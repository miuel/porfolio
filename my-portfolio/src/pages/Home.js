// Home Page
import { Link } from "react-router-dom";
import Card from "../components/Card";
import data from "../api/data-mock.json";
import Marquee from "../components/Marquee";
import useScrollToTop from "../hooks/useScrollToTop";

const HomePage = () => {
useScrollToTop();
  return (
    <>
      <Marquee
        data={data.marqueeHeaderText}
        repeatTimes={3}
        bgColor="bg-stone-400"
        height={"h-14"}
        fontSize={"text-2xl"}
        showBullet={true}
      />

      <section className="relative flex gap-8 m-0 home-section-h pb-4">
        <div className="w-1/2">
          <img
            loading="lazy"
            className="h-[600px] object-cover aspect-video"
            alt="home image"
            // replace this with your own image
            //src="../assets/images/member-feature_1600.jpeg"
            src={data.images.homeMeImg}
          />

        </div>
        <div className=" max-w-3xl pr-8 w-1/2">
          <h1 className="text-6xl line-height-1-6 font-bold font-bodoni py-5">
            {data.home.slogan}
          </h1>
          <p className="break-words paragraph-style mb-12">
            {data.home.homeText}
          </p>

          <Link
            className="justify-end bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
            to="/contact"
          >
            Let's talk{" "}
          </Link>
        </div>
      </section>

      <Marquee
        data={data.images.icons}
        repeatTimes={3}
        bgColor="bg-black"
        height={"h-[200]"}
        showBullet
        isImagesMarquee
      />

      <section className="mt-4 p-5 flex gap-8 m-0 home-section-h">
        <Card image={data.images.headphone} />
        <Card image={data.images.imgMonkey} />
        <Card image={data.images.collageAnimal} />
        <Card image={data.images.grid} />
      </section>

      <span>you should talk about CREATIVE CODE + SPARK AR </span>
    </>
  );
};

export default HomePage;
