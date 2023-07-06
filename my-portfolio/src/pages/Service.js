// About Page
import useScrollToTop from "../hooks/useScrollToTop";
import data from "../api/data-mock.json";

const ServicePage = () => {
  useScrollToTop();

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
                <h1 aria-label="about-title"
                >{about.title}</h1>

                <div className="icon neumorphism-coin">
                  <img loading="lazy" src={data.images.logo} alt="miguel logo" />
                </div>
              </div>
              <div className="w-2/3">
                <p className="paragraph-style text-85rgba">{about.text}</p>
              </div>
            </div>
          ))}
      </article>

      <article className="flex p-10 gap-8" aria-label=" process of creation " >
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

export default ServicePage;
