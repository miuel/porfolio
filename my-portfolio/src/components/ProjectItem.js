import React from 'react';

import { flushSync } from 'react-dom';
import { useNavigate } from 'react-router-dom';
import useImagePath from "../hooks/useImagePath";
import Loading from "./Loading";

const ProjecItem = ({ project }) => {


    const navigate = useNavigate();
    const imageSrc = useImagePath(project.image);
    
    return (
        <li className="my-4 md:my-0">
            {!imageSrc ? <Loading /> : (
                <>
                    <a
                        className="cursor-pointer flex justify-center items-center flex-col project-item-container"
                        href={`/projects/${project.id}`}
                        onClick={(ev) => {
                            ev.preventDefault();
                            
                            if (document.startViewTransition) {
                                document.startViewTransition(() => {
                                    flushSync(() => {
                                        navigate(`/projects/${project.id}`);
                                    });
                                });
                            } else {
                                // Fallback for browsers that do not support startViewTransition
                                navigate(`/projects/${project.id}`);
                            }
                        }}
                    >
                        <img
                            className="grayscale transition-all object-cover max-h-60"
                            alt={project.heading}
                            src={imageSrc}
                            style={{ viewTransitionName: `project-image-${project.id}` }}
                        />

                        <h2 className="uppercase text-2xl text-center py-4 md:mt-5 border-y-[1px] border-y-stone-400" aria-label={project.heading} >{project.heading}</h2>
                    </a>
                    <div >
                        <p className="text-center py-4 paragraph-style">{project.text}</p>
                    </div>
                </>)
            }
        </li>
    )
}

export default ProjecItem;