// Button component
// This component is used to display a custom button achor tag or Link component
import React from "react";
import { Link } from "react-router-dom";

const Button = (
    { text, link, isSelected, onClick, className, isLink = false }
) => {
    return (
        <>
            {!isLink && (
                <a
                    className="mr-4 p-2 cursor-pointer hover:bg-stone-400 hover:text-white"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Link to ${text}`}
                >
                    {text}
                </a>
            )}
            {isLink && (
                <Link to={link} 
                onClick={onClick}
                className={`${className} hover:bg-white px-1 ${isSelected ? "bg-white" : ""}`}
                 aria-label={`Link to ${text}`}>
                    {text}
                </Link>
            )}
        </>
    );
};

export default Button;
