// About Page
import useScrollToTop from "../hooks/useScrollToTop";
import data from "../api/data-mock.json";
import Icon from "../components/Icon";
import TextShuffle from "../components/TextShuffle";

const ServicesPage = () => {
  useScrollToTop();

  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="flex flex-col md:flex-row p-8 md:p-10 gap-8 border-b border-stone-400">
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl md:text-6xl" aria-label="Service slogan">
            <TextShuffle text={data.processOfCreation.service} duration={4} />
          </h2>
        </div>
        <div className="w-full md:w-1/3">
          <Icon icon="logoOfficial" alt="logo" size={8} className="text-black opacity-70 mix-blend-multiply w-[300px]" />
        </div>
      </div>
      <article>
        {data.services &&
          data.services.process.map((service, i) => (
            <div
              className="flex flex-col md:flex-row p-8 md:p-10 gap-8 border-b border-stone-400 last-of-type:border-none"
              key={service.title}
            >
              <div className="w-full md:w-1/3">
                <h3 className="text-3xl" aria-label="Service Title">
                  {service.title}
                </h3>
              </div>
              <div className="w-full md:w-2/3">
                <p className="paragraph-style text-85rgba">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
      </article>
    </section>

  );
};

export default ServicesPage;
