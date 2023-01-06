// Project Page
import data from "../api/data-mock.json";
import { Carousel } from "flowbite-react";

const ProjectPage = () => {
  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="mt-5 py-4 border-y border-y-stone-400">
        <p className="paragraph-style text-85rgba">{data.projects.header}</p>
      </div>
      <h1 className="text-6xl line-height-1-6 font-bold font-bodoni py-5">
        Projects
      </h1>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-600">
        <Carousel>
          <img
            src={data.imgMonkey}
            alt="..."
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
