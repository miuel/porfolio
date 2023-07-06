// About Page
import useScrollToTop from "../hooks/useScrollToTop";
import data from "../api/data-mock.json";


const ServicesPage = () => {
  useScrollToTop();

  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="flex p-10 gap-8 border-b border-stone-400">
        <div className="w-1/3">
          <h2>{data.processOfCreation.heading}</h2>
          <div className="relative h-[120px] -ml-52">
            <div class="coin">
              <div class="side heads">
                <img className="img_back" loading="lazy" src={data.images.logo} alt="miguel logo" />
              </div>
              <div class="side tails">
                <img className="img_back" loading="lazy" src={data.images.logo} alt="miguel logo" />
              </div>
            </div>
          </div>
          {/* <div className="icon neumorphism-coin">
            <img loading="lazy" src={data.images.logo} alt="miguel logo" />
          </div> */}
        </div>
        <div className="w-2/3">
          <h3 className="text-xl">{data.processOfCreation.service}</h3>
        </div>
      </div>
      <article>
        {data.services &&
          data.services.process.map((service, i) => (
            <div
              className="flex p-10 gap-8 border-b border-stone-400"
              key={service.title}
            >
              <div className="w-1/3">
                <h3 className="text-3xl" aria-label="Service Title">
                  {service.title}
                </h3>
              </div>
              <div className="w-2/3">
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
