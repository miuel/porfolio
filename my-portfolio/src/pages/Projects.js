// Project Page description of this page
// this page is a list of projects that I have worked on
import data from "../api/data-mock.json";
import useScrollToTop from "../hooks/useScrollToTop";
import ProjecItem from "../components/ProjectItem";


const ProjectPage = () => {
  useScrollToTop();

  return (
    <section className="overflow-auto max-w-6xl m-auto p-8 md:p-0">
      <h1 className="">{data.projects.title}</h1>
      <div className="mt-5 py-4 border-y border-y-stone-400">
        <p className="paragraph-style text-85rgba">
          {data.projects.description}
        </p>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 md:gap-16 my-16 md:place-items-center">
        {data.projects.items &&
          data.projects.items.map((item, index) => {
            return (
              <ProjecItem key={index.toString()} project={item} />
            )
          })
        }

      </ul>

    </section>
  )
};

export default ProjectPage;
