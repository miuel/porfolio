// About Page
import { Badge, Timeline } from "flowbite-react";
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

                <div className="icon  bg-yellow-300 rounded-full shadow-md">
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
        </div>

        <div className="w-2/3">
         
        </div>
      </article>
    </section>
  );
};

export default AboutPage;
