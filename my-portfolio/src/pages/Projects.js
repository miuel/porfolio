// Project Page
import data from "../api/data-mock.json";
import { Carousel } from "flowbite-react";

const ProjectPage = () => {
  if (window) {
    window.scrollTo(0, 0);
  }
  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="p-10 gap-8">

        <h1 className="">{data.projects.title}</h1>
        <div className="mt-5 py-4 border-y border-y-stone-400">
          <p className="paragraph-style text-85rgba">{data.projects.description}</p>
        </div>



        <h2 className="text-2xl text-85rgba py-5">
          Professional
        </h2>

        <h3 className="text-xl text-85rgba py-5">
          Mobile
        </h3>

        <div className="grid-col-custom">
          <div>
            <img src={data.ospuncba} className="w-auto" alt="" loading="lazy" />
            <small>mobile developer - react native</small>
          </div>
          <div>
            <img
              src={data.wallet}
              className="w-auto rounded-md border-stone-400 border "
              alt=""
              loading="lazy"
            />
            <small>mobile developer - react native</small>
          </div>
        </div>

        <h2 className="text-2xl text-85rgba py-5">
          Personal
        </h2>

        <div className="grid-col-custom">
          <img src={data.letters} className="w-auto max-w-lg" alt="" loading="lazy" />
          <video loop autoPlay={true} controls >
            <source src={data.organic} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <iframe width="100%" height="100" className="py-4 mx-auto" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/203273530&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style={{ "fontSize": "10px", "color": "#cccccc", "lineBreak": "anywhere", "wordBreak": "normal", "overflow": "hidden", "whiteSpace": "nowrap", "textOverflow": "ellipsis", "fontFamily": "Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif", "fontWeight": "100" }}>
            <a href="https://soundcloud.com/miguel-rivas-62" title="Miguel Rivas" target="_blank" >Miguel Rivas</a> · <a href="https://soundcloud.com/miguel-rivas-62/breaks-officce" title="office break" target="_blank" style={{ "color": "#cccccc", "textDecoration": "none" }}>office break</a></div>
        </div>
        <div className="py-5 border-b border-y-stone-400 h-56 sm:h-64 xl:h-80 2xl:h-96">
          <Carousel>
            <img loading="lazy" src={data.intro} alt="..." className="object-contain" />
            <img loading="lazy" src={data.collageAnimal} alt="..." />
            <img loading="lazy" src={data.grid} alt="..." />
            <img loading="lazy" src={data.imgMonkey} alt="..." />
            <img loading="lazy" src={data.grid} alt="..." />
          </Carousel>
        </div>

      </div>
    </section>
  );
};
export default ProjectPage;
