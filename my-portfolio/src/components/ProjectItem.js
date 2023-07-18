import React from 'react';

import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import useImagePath from "../hooks/useImagePath";

const ProjecItem = ({ project }) => {


    const navigate = useNavigate();
    const imageSrc = useImagePath(project.image);
    return (
        <li>
            <a
                className="cursor-pointer flex justify-center items-center flex-col" 
                href={`/projects/${project.id}`}
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
                    className="grayscale hover:grayscale-0 transition-all object-cover max-h-60"
                    alt={project.heading}
                    src={imageSrc}
                    style={{ viewTransitionName: `project-image-${project.id}` }}
                />

                <h2 className="uppercase text-2xl text-center py-4 md:mt-5 border-y-[1px] border-y-stone-400" aria-label={project.heading} >{project.heading}</h2>
            </a>
            <div >
                <p className="font-mono text-center py-4 text-85rgba ">{project.text}</p>
            </div>
        </li>
    )
}

export default ProjecItem;