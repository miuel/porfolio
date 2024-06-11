// Experience Page
import { Badge, Timeline } from "flowbite-react";
import data from "../api/data-mock.json";
import useScrollToTop from "../hooks/useScrollToTop";
const ExperiencePage = () => {
  useScrollToTop();
  const pdfPath = `${process.env.PUBLIC_URL}/assets/images/cv_en.pdf`;
  return (
    <section className="overflow-auto max-w-6xl m-auto">      
      <article className="flex flex-col md:flex-row p-8 md:p-10 gap-8">
        <div className="w-full md:w-1/3">
          <h1>{data.experience.title}</h1>
        </div>

        <div className="w-full md:w-2/3">
          <Timeline>
            {data.experience &&
              data.experience.jobs.map((job, index) => (
                <Timeline.Item key={job.company + index.toString()}>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time className="text-sm">{job.date}</Timeline.Time>
                    <Timeline.Title>
                      {job.name} • {job.place}
                    </Timeline.Title>

                    <Timeline.Body className="mb-1">
                      {job.company}
                    </Timeline.Body>
                    <div className="flex flex-wrap gap-2 py-2">
                      {job.tech.map((tech, index) => (
                        <Badge
                          className="font-mono uppercase font-normal text-xs"
                          color="indigo"
                          size="sm"
                          key={tech + index.toString()}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Timeline.Body className="paragraph-style font-serif-bodoni text-85rgba">
                      {job.description}
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
          </Timeline>
          <a
            className="bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400 cursor-pointer"
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.cvText}
          </a>
        </div>
      </article>
    </section>
  );
};

export default ExperiencePage;
