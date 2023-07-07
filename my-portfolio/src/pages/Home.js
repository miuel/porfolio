// Home Page
import { Link } from "react-router-dom";
import data from "../api/data-mock.json";
import Marquee from "../components/Marquee";
import useScrollToTop from "../hooks/useScrollToTop";

const HomePage = () => {
  useScrollToTop();
  return (
    <>
      <section className="relative px-8 md:px-0 flex gap-8 m-0 home-section-h pb-8">
        {/* <div className="w-1/2 p-12 flex items-start justify-center">
          <img
            loading="lazy"
            className="h-[400px] object-contain"
            alt="home image"
            // replace this with your own image
            //src="../assets/images/member-feature_1600.jpeg"
            src={data.images.me}
          />

        </div> */}
        <div className="max-w-75 pr-0 md:pr-8 mx-auto mt-8">
          <h1 className="text-3xl md:text-6xl font-bold font-bodoni py-5">
            {data.home.slogan}
          </h1>
          <h2 className="text-4xl md:text-9xl font-bold font-bodoni pt-5 pb-10 md:py-20 text-end">
            <i>
              <span className="text-sm">by</span>
            </i>{" "}
            {data.home.author}
          </h2>
          <div className="break-words paragraph-style mb-12"
           dangerouslySetInnerHTML={{ __html: data.home.text }} />

          <Link
            className="justify-end bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
            to="/contact"
            aria-label="Contact us"
          >
            Let's talk{" "}
          </Link>
        </div>
      </section>

      {/* <Marquee
        data={data.images.icons}
        repeatTimes={3}
        bgColor="bg-stone-400"
        height={"h-[200]"}
        showBullet
        isImagesMarquee
      /> */}
    </>
  );
};

export default HomePage;
