import React from 'react';
import data from "../api/data-mock.json";
import { useParams } from 'react-router-dom';

const ProjectItemPage = () => {
    const { id } = useParams();
    const imageSrc = process.env.PUBLIC_URL;
    const info = data.projects.items.find(project => project.id === id);

    return (
        <section className="overflow-auto max-w-6xl m-auto p-8 md:p-0">
            <div className="flex md:flex-nowrap gap-8 ">
            <div className="w-full md:w-1/2">
                <img src={imageSrc + info.image} alt={info.heading} 
                 style={{ viewTransitionName : `project-image-${info.id}` }}
                />
            </div>
            <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold uppercase">{info.heading}</h1>
                <p className="mt-4 w-4/5">{info.description}</p>
            </div>
            </div>
        </section>
    )

}

export default ProjectItemPage; 