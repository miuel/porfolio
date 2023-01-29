// Card component
import React from "react";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="flex gap-4 border rounded-2xl w-56 ">
      <div className="flex flex-col justify-center rounded-2xl w-56">
        <img loading="lazy" src={image} alt={title} className="w-full h-full object-cover rounded-2xl" />        
      </div>
    </div>
  );
};

export default Card;
