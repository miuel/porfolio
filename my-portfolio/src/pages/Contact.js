// Contact Page
import data from "../api/data-mock.json";
const ContactPage = () => {
  if (window) {
    window.scrollTo(0, 0);
  }

  return (
    <section className="overflow-auto max-w-6xl m-auto ">
      <article>
        <div className="flex p-10 gap-8" key={data.contact.title}>
          <div className="w-1/3">
            <h1>{data.contact.title}</h1>
          </div>
          <div className="w-2/3">
            <h2 className="text-2xl text-85rgba mb-5 pb-5 border-b border-stone-400">
              {data.contact.email}{" "}
            </h2>

            <div className="pb-5 border-b border-stone-400">
              {data.contact.media &&
                data.contact.media.map((media, i) => (
                  <a
                    className="mr-4 cursor-pointer hover:text-stone-400"
                    href={media.url}
                    target="_blank"
                    rel="noreferrer"
                    key={media.name}
                  >
                    <span className="mb-4 pb-1 hover:border-b hover:border-stone-400">
                      {media.name}
                    </span>
                  </a>
                ))}
            </div>

            <div className="pb-5 border-b border-stone-400">
              <p className="mt-5 paragraph-style text-85rgba">
                {data.contact.longText}
              </p>
            </div>

            <div className="pb-5 border-b border-stone-400">
              <p className="mt-5 paragraph-style text-85rgba">{data.contact.address}</p>
            </div>

            <div className="mt-5">
              <img className="w-full mr-0" src="../assets/images/halmstad.png" />
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default ContactPage;
