// Project Page description of this page
// this page is a list of projects that I have worked on
import data from "../api/data-mock.json";
import { Carousel } from "flowbite-react";
import Card from "../components/Card";
import useScrollToTop from "../hooks/useScrollToTop";

const ProjectPage = () => {
  useScrollToTop();


  return (
    <div className="overflow-auto max-w-6xl m-auto">
      <div className="p-10 gap-8">
        <section>
          <h1 className="">{data.projects.title}</h1>
          <div className="mt-5 py-4 border-y border-y-stone-400">
            <p className="paragraph-style text-85rgba">
              {data.projects.description}
            </p>
          </div>

          <div className="py-5 border-b border-y-stone-400 h-64 lg:h-[500px]">
            <Carousel>
              <img
                fetchpriority="high"
                loading="lazy"
                src={data.images.naturvardsverket}
                // onClick={() => window.open("https://www.naturvardsverket.se/")}
                alt="natur vards verket"
              />
              <img
                fetchpriority="low"
                loading="lazy"
                src={data.images.sverigesnationalparker}
                // onClick={() => window.open("https://www.sverigesnationalparker.se/")}
                alt="sveriges national parker"
              />
              <img
                fetchpriority="low"
                loading="lazy"
                src={data.images.lavinprognoser}
                // onClick={() => window.open("https://www.lavinprognoser.se/")}
                alt="lavin prognoser"
              />
              <img
                fetchpriority="low"
                loading="lazy"
                src={data.images.agrosty}
                // onClick={() => window.open("http://agrosty.com/")}
                alt="agrosty"
              />
            </Carousel>
          </div>

          <h2 className="text-2xl text-85rgba py-5">Professional</h2>

          <h3 className="text-xl text-85rgba py-5">Mobile</h3>
          <div className="grid  ">
            <div className=" grid gap-4 grid-cols-2">
              <img
                src={data.images.ospuncba}
                className="w-auto"
                alt="ospuncba"
                loading="lazy"
              />
              <p>
                mobile developer - react native
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Sed euismod, nisl vel tincidunt lacinia, nunc est
                consectetur nunc, vitae aliquet nisl nisl et nisl. Nulla facilisi.
                Sed euismod, nisl vel tincidunt lacinia, nunc est consectetur nunc,
                vitae aliquet nisl nisl et nisl. Nulla facilisi. Sed euismod, nisl
              </p>
            </div>
            <div className="flex">
              <img
                src={data.images.wallet}
                className="w-auto rounded-md border-stone-400 border"
                alt="itr digita wallet"
                loading="lazy"
              />
              <small>mobile developer - react native</small>
            </div>
            <div className="flex">
              <img
                src={data.images.hospitalBritanico}
                className="w-auto rounded-md border-stone-400 border"
                alt="itr digita wallet"
                loading="lazy"
              />
              <small>mobile developer - react + phonegap </small>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl text-85rgba py-5">Personal</h2>
          <div className="grid-col-custom">
            <img src={data.images.headphone} loading="lazy" />
            <img
              src={data.images.letters}
              className="w-auto max-w-lg"
              alt="letters colors"
              loading="lazy"
            />
            <video loop autoPlay={true} controls>
              <source src={data.images.organic} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>


          <section className="mt-4 p-5 flex gap-8 m-0 home-section-h">
            <Card image={data.images.imgMonkey} />
            <Card image={data.images.collageAnimal} />
            <Card image={data.images.rembrandt} />
          </section>

          {/* sound cloud block */}

          <div className=" bg-black mt-4">
            <div className="flex" >
              <img src={data.images.handsome} alt={"handsome"} loading="lazy" width={320} />
              <h2 className="text-2xl text-white py-5">Some music</h2>
            </div>
            <iframe
              width="100%"
              height="100"
              className="py-4 mx-auto"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/203273530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div
              style={{
                fontSize: "10px",
                color: "#cccccc",
                lineBreak: "anywhere",
                wordBreak: "normal",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                fontFamily:
                  "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif",
                fontWeight: "100",
              }}
            >
              <a
                href="https://soundcloud.com/miguel-rivas-62"
                title="Miguel Rivas"
                target="_blank"
              >
                Miguel Rivas
              </a>{" "}
              ·{" "}
              <a
                href="https://soundcloud.com/miguel-rivas-62/breaks-officce"
                title="office break"
                target="_blank"
                style={{ color: "#cccccc", textDecoration: "none" }}
              >
                office break
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectPage;
