// Contact Page
import data from "../api/data-mock.json";
import Button from "../components/Button";
import useScrollToTop from "../hooks/useScrollToTop";
import useImagePath from "../hooks/useImagePath";
import Loading from "../components/Loading";

const ContactPage = () => {
  useScrollToTop();

  const imageSrc = useImagePath(data.images.map);
  return (
    <section className="overflow-auto max-w-6xl m-auto">
      <div className="flex flex-col md:flex-row p-8 md:p-10 gap-8">
        <div className="w-full md:w-1/3">
          <h1>{data?.contact.title}</h1>
        </div>
        <div className="w-full md:w-2/3">
          <div className="flex flex-col pb-5 border-b border-stone-400">
            <a
              className="paragraph-style mt-5"
              href={`mailto:${data?.contact.email}`}
              aria-label="Email"
            >
              {data?.contact.email}
            </a>
            <p className="paragraph-style mt-5">
              {data?.contact.phone}
            </p>
          </div>

          <div className="pb-5 border-b border-stone-400 mt-5">
            {data&&
              data?.contact?.media.map((media, i) => (
                <Button text={media.name} link={media.url} key={i} />
              ))}
          </div>

          <div className="pb-5 border-b border-stone-400">
            <p className="mt-5 paragraph-style">
              {data?.contact.shortText}
            </p>
          </div>

          <div className="pb-5 border-b border-stone-400">
            <p className="mt-5 paragraph-style">{data?.contact.address}</p>
          </div>

          {imageSrc ? (
            <div className="mt-5">
              <img className="w-full mr-0" src={imageSrc} alt={data?.mapText} />
            </div>) :
            <Loading />
          }
        </div>
      </div>

    </section >
  );
};

export default ContactPage;
