// About Page
import useScrollToTop from "../hooks/useScrollToTop";
import data from "../api/data-mock.json";
import Icon from "../components/Icon";


const ServicesPage = () => {
  useScrollToTop();

  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="flex flex-col md:flex-row p-8 md:p-10 gap-8 border-b border-stone-400">
        {/* <div className="w-full md:w-1/3">
            <h2 aria-label="Service Title">{data.processOfCreation.heading}</h2>
          <div className="hidden md:block relative h-[120px] -ml-52">
            <div className="coin">
              <div className="side heads">
                <img className="img_back" loading="lazy" src={data.images.logo} alt="miguel logo" />
              </div>
              <div className="side tails">
                <img className="img_back" loading="lazy" src={data.images.logo} alt="miguel logo back side" />
              </div>
            </div>
          </div>
        </div> */}


        <div className="w-full md:w-2/3">
          <h3 className="text-4xl md:text-6xl" aria-label="Service slogan">{data.processOfCreation.service}</h3>
        </div>
        <div className="w-full md:w-1/3">
          <Icon icon="logoMR" alt="logo" size={8} className="text-orange-400 mix-blend-multiply w-[300px]" />
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
        {/* <p className="paragraph-style text-85rgba">{data.services.contact}</p> */}
      </article>
    </section>

  );
};

export default ServicesPage;
