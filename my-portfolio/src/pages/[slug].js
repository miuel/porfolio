import React from 'react';
import data from "../api/data-mock.json";
import { useParams } from 'react-router-dom';

const ProjectItemPage = () => {
    const { id } = useParams();
    const imageSrc = process.env.PUBLIC_URL;
    const info = data.projects.items.find(project => project.id === id);

    return (
        <section className="overflow-auto max-w-6xl m-auto p-8 md:p-0">
            <div className="flex flex-wrap">

            <div className="w-full md:w-1/2">
                <img src={imageSrc + info.image} alt={info.heading} />
            </div>
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold">{info.heading}</h1>
                <p className="mt-4">{info.description}</p>
            </div>
            </div>
        </section>
    )

}

export default ProjectItemPage; 