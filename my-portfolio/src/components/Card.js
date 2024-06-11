// Card component
import React from "react";

const Card = ({ title, description, image, link }) => {
  {/* <div className="neumorphism-card">
    <img loading="lazy" src={image} alt={title} className="w-full h-full object-cover rounded-[30px]" />

  </div>
   */}
  return (
    <div className="myCard">
      <div className="innerCard">
        <div className="frontSide">
          <p className="title">FRONT SIDE</p>
          <p>Hover Me</p>
        </div>
        <div className="backSide">
          <p className="title">BACK SIDE</p>
          <p>Leave Me</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
