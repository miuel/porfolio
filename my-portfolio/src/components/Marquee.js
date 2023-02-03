// Marquee component
// This component is used to display a custom marquee

import React from "react";

const Marquee = ({ data, bgColor, repeatTimes = 3, height, fontSize, showBullet, isImagesMarquee = false }) => {
  const arrRepeatTimes = Array.from({ length: repeatTimes });

  return (
    <div className={`${bgColor} text-white py-2 ${height} marquee--is-animating overflow-x-hidden`}>
      <div className="marquee__inner">
        {arrRepeatTimes &&
          arrRepeatTimes.map(
            (item, index) =>
              index <= repeatTimes && (
                <div className="marquee__groups">
                  <div className={`marquee__group font-mono letter-spacing-sm ${fontSize}`}>
                    {isImagesMarquee && data.map((marquee, index) => {
                      return <div className="flex">
                        <img key={index.toString()} width={80} height={40} src={`../assets/images/techIcons/${marquee.name}`} />
                        {showBullet && <span className="marquee__bullet">•</span>}
                      </div>
                    })}

                    {!isImagesMarquee && data.map((marquee) => {
                      return <>
                        <span className="uppercase">{marquee.text}</span>
                        {showBullet && <span className="marquee__bullet">•</span>}
                      </>

                    })}
                  </div>
                </div>
              )
          )}
      </div>
    </div>
  );
};

export default Marquee;
