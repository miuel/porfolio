// Button component
// This component is used to display a custom button achor tag or Link component
import React from "react";
import { Link } from "react-router-dom";

const Button = ({ text, link, className, isLink = false }) => {
    return (
        <>
            {!isLink && (
                <a
                    className="mr-4 p-2 cursor-pointer hover:bg-stone-400 hover:text-white"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                >
                    {text}
                </a>
            )}
            {isLink && (
                <Link to={link} className="hover:bg-stone-400 hover:text-white px-1">
                    {text}
                </Link>
            )}
        </>
    );
};

export default Button;
