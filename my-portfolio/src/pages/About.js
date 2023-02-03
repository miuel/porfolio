// About Page
import data from "../api/data-mock.json";

const AboutPage = () => {

  if (window) {
    window.scrollTo(0, 0);
  }

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

                <div className="icon bg-yellow-300 rounded-full shadow-md">
                  <img loading="lazy" src="../assets/images/logo.png" />
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
          <h1>{data.processOfCreation.heading}</h1>
          <h2 className="text-xl" >{data.processOfCreation.service}</h2>
        </div>

        <div className="w-2/3">
          <ul>
          <p className="paragraph-style text-85rgba">Process</p>
            {data.processOfCreation.process && data.processOfCreation.process.map((process, index) => (
              <li key={index.toString()} className="py-4">
                <h3 className="text-2xl">0{index + 1} ⟛ <i>
                  {process.subheading}
                  </i>
                  </h3>
                <p className="paragraph-style text-85rgba">{process.description}</p>
              </li>

            ))}
          </ul>
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
