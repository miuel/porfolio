// About Page
import data from "../api/data-mock.json";

const AboutPage = () => {
  return (
    <section className="overflow-auto max-w-6xl m-auto ">
      <article >
        {data.aboutMe &&
          data.aboutMe.map((about, i) => (
            <div className="flex p-10 gap-8 border-b border-stone-400" key={about.title}>
              <div className="w-1/3" >
                <h1>{about.title}</h1>

                <div className="icon">
                  <img
                    src="../assets/images/logo.png" />
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
          <h1 >{data.skills.title}</h1>
        </div>
        <ul className="w-2/3">
          {data.skills &&
            data.skills.jobs.map((job, index) => (
              <li className="pb-6 mb-6 border-b border-stone-400 last-of-type:border-none " key={job.company + index.toString()}>
                <h2 className="text-2xl">{job.name} • {job.company}</h2>
                <i className="text-sm text-stone-400" >{job.tech}</i>
                <br />
                <small className="font-sans font-semibold">{job.place} • {job.date}</small>
                <p className="paragraph-style text-85rgba">{job.description}</p>
              </li>
            ))}
          <a
            className="bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
            href='../assets/images/cv_en_sw.pdf' download>Download CV in PDF</a>
        </ul>
      </article>
    </section>
  );
};

export default AboutPage;
