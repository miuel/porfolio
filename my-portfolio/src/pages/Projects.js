// Project Page
import data from "../api/data-mock.json";

const ProjectPage = () => {
  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="py-1 border border-y-stone-400">
        <p className="paragraph-style text-85rgba">{data.projects.header}</p>
      </div>
      <h1 className="text-6xl line-height-1-6 font-bold font-bodoni py-5">
        Projects
      </h1>
    </section>
  );
};
export default ProjectPage;
