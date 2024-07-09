// About Page
import useScrollToTop from "../hooks/useScrollToTop";
import data from "../api/data-mock.json";
import Spline from "@splinetool/react-spline";



const ServicesPage = () => {
  useScrollToTop();

  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="flex flex-col md:flex-row p-8 md:p-10 gap-8 border-b border-stone-400">
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl md:text-6xl" aria-label="Service slogan">
            {data?.processOfCreation.service}
          </h2>
        </div>
        <div className="w-full md:w-2/4 md:-mt-24 -ml-20 md:ml-0 spline-child">
          {/* <Icon icon="logoOfficial" alt="logo" size={8} className="text-black opacity-70 mix-blend-multiply w-[300px]" /> */}
          <Spline scene="https://prod.spline.design/DAuFwf7C-spwxy8E/scene.splinecode" />
        </div>
      </div>
      <article>
        {data &&
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
                <p className="paragraph-style">{service.description}</p>
              </div>
            </div>
          ))}
      </article>
    </section>
  );
};

export default ServicesPage;
