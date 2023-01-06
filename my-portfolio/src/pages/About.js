// About Page
import { Badge, Timeline } from "flowbite-react";
import data from "../api/data-mock.json";

const AboutPage = () => {
  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <article>
        {data.about &&
          data.about.map((about, i) => (
            <div
              className="flex p-10 gap-8 border-b border-stone-400"
              key={about.title}
            >
              <div className="w-1/3">
                <h1>{about.title}</h1>

                <div className="icon">
                  <img src="../assets/images/logo.png" />
                </div>
              </div>
              <div className="w-2/3">
                <p className="paragraph-style text-85rgba">{about.text}</p>
              </div>
            </div>
          ))}
      </article>

      <article className="flex p-10 gap-8">
        <div className="w-1/3">
          <h1>{data.experience.title}</h1>
        </div>
        
        <div className="w-2/3">
          <Timeline>
            {data.experience &&
              data.experience.jobs.map((job, index) => (
                <Timeline.Item key={job.company + index.toString()}>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>{job.date}</Timeline.Time>
                    <Timeline.Title>
                      {job.name} • {job.place}
                    </Timeline.Title>
                    <div className="flex flex-wrap gap-2 py-2">
                      {job.tech.map((tech, index) => (
                        <Badge
                          color="indigo"
                          size="sm"
                          key={tech + index.toString()}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <Timeline.Body>
                      <p className="paragraph-style text-85rgba">
                        {job.description}
                      </p>
                    </Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              ))}
          </Timeline>
          <a
            className="bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
            href={data.cv}
            download
          >
            {data.cvText}
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
