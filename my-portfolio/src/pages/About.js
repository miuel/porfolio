// About Page
import data from "../api/data-mock.json";

const AboutPage = () => {
  return (
    <section className="overflow-auto">
      <div>
        {data.aboutMe &&
          data.aboutMe.map((about, i) => (
            <div className="grid grid-flow-col columns-12 p-5 gap-8">
              <div className=" col-start-1 col-end-4" >
                <h1>{about.title}</h1>

                <img
                  src="../assets/images/logo.png"
                  width={120}
                  className="mt-4 ml-4"
                />
              </div>
              <p className=" col-start-4 col-end-10 paragraph-style text-85rgba ">{about.text}</p>
            </div>
          ))}
      </div>

      <div className=" p-5  gap-8">
        {data.skills.title}
        {data.skills &&
          data.skills.jobs.map((job) => (
            <div className="mt-4 p-5 gap-8">
              <h2 className="font-bold text-2xl ">{job.name}</h2>
              <h3 className=" text-xl">{job.company}</h3>
              <small className=" font-sans ">{job.place}</small> •{" "}
              <small className=" font-sans ">{job.date}</small>
              <p>{job.tech}</p>
              <p className="text-lg">{job.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default AboutPage;
