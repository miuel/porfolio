import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge } from "flowbite-react";

const ProjecItem = ({ project }) => {
    const imageSrc = process.env.PUBLIC_URL;
    const navigate = useNavigate();

    const handleClick = (id) => {
      navigate(`/projects/${id}`);
    };
  
    return (
        <li className="" >
            <a className="cursor-pointer" onClick={() => handleClick(project.id)}>
                <img className="grayscale hover:grayscale-0 transition-all object-cover" alt={project.heading} src={imageSrc + project.image} />
                <h3 className="uppercase text-2xl text-center py-4 border-b-[1px] border-y-stone-400" aria-label={project.heading} >{project.heading}</h3>
            </a>
            <div className="">
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