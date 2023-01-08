// Project Page
import data from "../api/data-mock.json";
import { Carousel } from "flowbite-react";

const ProjectPage = () => {
  if (window) {
    window.scrollTo(0, 0);
  }
  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="mt-5 py-4 border-y border-y-stone-400">
        <p className="paragraph-style text-85rgba">{data.projects.header}</p>
      </div>
      <h1 className="text-6xl line-height-1-6 font-bold font-bodoni py-5">
        Projects
      </h1>


      <h1 className="text-xl line-height-1-6 font-bold font-bodoni py-5">
        Mobile
      </h1>

      <div className="grid-col-custom">
        <img src={data.ospuncba} className="w-auto " />
        <img src={data.wallet} className="w-auto rounded-md border-stone-400 border " />
      </div>

      <div className="mt-5 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            src={data.intro}
            alt="..."
            className="object-contain"
          />
          <img
            src={data.collageAnimal}
            alt="..."
          />
          <img
            src={data.grid}
            alt="..."
          />
          <img
            src={data.imgMonkey}
            alt="..."
          />
          <img
            src={data.grid}
            alt="..."
          />

        </Carousel>
      </div>
    </section>
  );
};
export default ProjectPage;
