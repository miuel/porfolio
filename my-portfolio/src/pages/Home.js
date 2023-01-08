// Home Page
import { Link } from "react-router-dom";
import Card from "../components/Card";
import data from "../api/data-mock.json";

const HomePage = () => {
  if (window) {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className=" bg-stone-400 text-white py-2 ticker-h ticker--is-animating overflow-x-hidden ">
        <div className="ticker__inner">
          <div className="ticker__groups">
            <div className="ticker__group font-mono letter-spacing-sm text-2xl ">
              {data.home.marqueeText.map((marquee) => (
                <>
                  <span className="uppercase"> {marquee.text}</span>
                  <span className="ticker__bullet">•</span>
                </>
              ))}
            </div>
          </div>
          <div className="ticker__groups">
            <div className="ticker__group font-mono letter-spacing-sm text-2xl ">
              {data.home.marqueeText.map((marquee) => (
                <>
                  <span className="uppercase"> {marquee.text}</span>
                  <span className="ticker__bullet">•</span>
                </>
              ))}
            </div>
          </div>
          <div className="ticker__groups">
            <div className="ticker__group font-mono letter-spacing-sm text-2xl ">
              {data.home.marqueeText.map((marquee) => (
                <>
                  <span className="uppercase"> {marquee.text}</span>
                  <span className="ticker__bullet">•</span>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="relative flex gap-8 m-0 home-section-h">
        <div className="w-1/2">
          <img
            className="object-fill"
            alt="home image"
            // replace this with your own image
            src="../assets/images/member-feature_1600.jpeg"
          />
        </div>
        <div className="py-4 max-w-3xl  pr-8 w-1/2">
          <h1 className="text-6xl line-height-1-6 font-bold font-bodoni py-5">
            {data.home.slogan}
          </h1>
          <p className="break-words paragraph-style mb-12">{data.home.homeText}</p>

          <Link
            className="bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
            to="/contact"
          >
            Let's talk{" "}
          </Link>
        </div>
      </section>

      <section className="mt-4 p-5 flex gap-8 m-0 home-section-h">
        <img src={data.walletSm} className="w-auto " />
        
        <Card image={data.imgMonkey} />
        <Card image={data.collageAnimal} />
        <Card image={data.grid} />
      </section>

      <span>you should talk about CREATIVE CODE + SPARK AR  </span>

    </>
  );
};

export default HomePage;
