import data from "../api/data-mock.json";
import useScrollToTop from "../hooks/useScrollToTop";
import SketchComponent from "../components/SketchComponent";
import { Sketch3 } from "../sketches/sketch3";
import { Sketch4 } from "../sketches/sketch4";
import { Sketch2 } from "../sketches/sketch2";

const LabPage = () => {
    useScrollToTop();

    const settings = {
        dimensions: [500, 500],
        animate: true,
    };

    const settingsSketch2 = {
        dimensions: [500, 500],
        //name: seed,
        animate: true,
        duration: 20,
        fps: 30, // Frames per second
        playbackRate: 'throttle'
    };



    return (
        <>
            <section className="overflow-auto max-w-6xl m-auto p-8 md:p-0">
                <div className="max-w-6xl  m-auto relative">
                    <h1 >
                        {data?.lab.title}
                    </h1>

                    <div className="grid  md:grid-cols-2 mt-5 py-4 border-b border-stone-400 md:border-none">
                        <SketchComponent sketch={Sketch3} settings={settings} />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold font-bodoni py-5">
                                {data?.lab.sketchLines.text}
                            </h2>
                            <p className="
                            paragraph-style">
                                {data?.lab.sketchLines.description}
                            </p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 mt-5 py-4 border-b border-stone-400 md:border-none">
                        <SketchComponent sketch={Sketch4} settings={settings} />
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold font-bodoni py-5">
                                {data?.lab.sketchFlags.text}
                            </h2>
                            <p className="
                            paragraph-style">
                                {data?.lab.sketchFlags.description}
                            </p>
                        </div>
                    </div>
                    <div className="bg-black grid md:grid-cols-2 mt-5 py-4 border-b border-stone-400 md:border-none pr-8">
                        <SketchComponent sketch={Sketch2} settings={settingsSketch2} />
                        <div className="px-2 md:px-0">
                            <h2 className="text-2xl md:text-3xl font-bold font-bodoni py-5 text-white">
                                {data?.lab.sketchTriangle.text}
                            </h2>
                            <p className="
                            text-white font-mono text-base">
                                {data?.lab.sketchTriangle.description}
                            </p>
                        </div>
                    </div>
                </div >
            </section>
        </>
    )
};

export default LabPage;