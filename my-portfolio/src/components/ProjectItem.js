import React from 'react';
import { Badge } from "flowbite-react";
import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import useImagePath from "../hooks/useImagePath";

const ProjecItem = ({ project }) => {
    
    
    const navigate = useNavigate();
    const imageSrc = useImagePath(project.image);
    return (
        <li className="" >
            <a
                className="cursor-pointer" href={`/projects/${project.id}`}
                onClick={(ev) => {
                    ev.preventDefault();
                    document.startViewTransition(() => {
                        flushSync(() => {
                            navigate(`/projects/${project.id}`);
                        });
                    });
                }}
            >
                <img
                    className="grayscale hover:grayscale-0 transition-all object-cover"
                    alt={project.heading}
                    src={imageSrc}
                    style={{ viewTransitionName : `project-image-${project.id}` }}
                />
                <h3 className="uppercase text-2xl text-center py-4 border-b-[1px] border-y-stone-400" aria-label={project.heading} >{project.heading}</h3>
            </a>
            <div className="" >
                <p className="font-mono text-center py-4 text-85rgba">{project.text}</p>
                <div className="flex flex-wrap gap-2 py-2 mb-12">
                    {project.tech.map((tech, i) => (
                        <Badge
                            className="font-mono uppercase font-normal text-xs"
                            color="gray"
                            size="sm"
                            key={i.toString()}
                        >
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </li>
    )
}

export default ProjecItem;