// Contact Page
import data from "../api/data-mock.json";
import Button from "../components/Button";
import useScrollToTop from "../hooks/useScrollToTop";

const ContactPage = () => {
  useScrollToTop();

  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="flex p-10 gap-8">
        <div className="w-1/3">
          <h1>{data.contact.title}</h1>
        </div>
        <div className="w-2/3">
          <h2 className="text-2xl text-85rgba mb-5 pb-5 border-b border-stone-400">
            {data.contact.email}
          </h2>
          <h2 className="text-xl text-85rgba mb-5 pb-5 border-b border-stone-400">
            {data.contact.phone}
          </h2>

          <div className="pb-5 border-b border-stone-400">
            {data.contact.media &&
              data.contact.media.map((media, i) => (
                <Button text={media.name} link={media.url} key={i} />
              ))}
          </div>

          <div className="pb-5 border-b border-stone-400">
            <p className="mt-5 paragraph-style text-85rgba">
              {data.contact.shortText}
            </p>
          </div>

          <div className="pb-5 border-b border-stone-400">
            <p className="mt-5 paragraph-style text-85rgba">{data.contact.address}</p>
          </div>

          <div className="mt-5">
            <img loading="lazy" className="w-full mr-0" src={data.images.map} alt={data.mapText} />
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactPage;
