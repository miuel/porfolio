import SketchComponent from "../components/SketchComponent";
import { Sketch3 } from "../sketches/sketch3";
import { Sketch4 } from "../sketches/sketch4";
import useScrollToTop from "../hooks/useScrollToTop";
import data from "../api/data-mock.json";

const LabPage = () => {
    useScrollToTop();

    const settings = {
        dimensions: [500, 500],
        animate: true,
    };
    return (

        <section className="overflow-auto max-w-6xl m-auto p-8 md:p-0">
            <div className="max-w-6xl  m-auto relative">
                <h1 >
                    {data.lab.title}
                </h1>
                <div className="grid grid-cols-2 mt-5 py-4">
                    <SketchComponent sketch={Sketch3} settings={settings} />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-bodoni py-5">
                            {data.lab.sketchLines.text}
                        </h2>
                        <p className="paragraph-style text-85rgba">
                            {data.lab.sketchLines.description}
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-5 py-4">
                    <SketchComponent sketch={Sketch4} settings={settings} />
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold font-bodoni py-5">
                            {data.lab.sketchFlags.text}
                        </h2>
                        <p className="paragraph-style text-85rgba">
                            {data.lab.sketchFlags.description}
                        </p>
                    </div>
                </div>
            </div >
        </section>
    )
};

export default LabPage;