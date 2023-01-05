// Card component
import React from "react";

const Card = ({ title, description, image, link }) => {
  return (
    <div className="flex gap-4 border rounded-2xl ">
      <div className="flex flex-col justify-center rounded-2xl">
        <img src={image} alt={title} className="w-full h-64 object-cover rounded-2xl" />
        
      </div>
    </div>
  );
};

export default Card;
