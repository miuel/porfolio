import React from 'react';
import data from "../api/data-mock.json";
import { useParams } from 'react-router-dom';
import { Badge } from "flowbite-react";
import { Link } from "react-router-dom";
import useImagePath from "../hooks/useImagePath";
import useScrollToTop from '../hooks/useScrollToTop';

const ProjectItemPage = () => {
    useScrollToTop();
    const { id } = useParams();
    const info = data.projects.items.find(project => project.id === id);
    const imageSrc = useImagePath(info.image);

    return (
        <section className="overflow-auto max-w-6xl m-auto p-8 md:p-0 h-auto">
            <div className="flex flex-wrap md:flex-nowrap gap-8 my-16">
                <div className="w-full md:w-1/2">
                    <img src={imageSrc} alt={info.heading}
                        style={{ viewTransitionName: `project-image-${info.id}` }}
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-bold uppercase mb-2">{info.heading}</h1>
                    <a href={info.url} target="_blank" rel="noreferrer" className="cursor-pointer font-mono" >{info.url}</a>
                    <div className="flex flex-wrap gap-2 py-2 ">
                        {info.tech.map((tech, i) => (
                            <Badge
                                className="font-mono uppercase font-normal text-xs"
                                color="indigo"
                                size="sm"
                                key={i.toString()}
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <p className="py-4 w-4/5 my-16">{info.frontendDeveloperTask}</p>
                    <Link
                        className="justify-end bg-stone-400 text-white font-bold p-4 rounded hover:bg-white hover:text-stone-400 hover:border hover:border-stone-400"
                        to="/projects"
                        aria-label="Back to projects page"
                    >
                        {data?.projects.backTxt}{" "}
                    </Link>
                </div>
            </div>
        </section>
    )

}

export default ProjectItemPage; 