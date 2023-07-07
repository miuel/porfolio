// Marquee component
// This component is used to display a custom marquee

import React from "react";
import Icon from "./Icon";

const Marquee = ({ data, bgColor, repeatTimes = 3, height, fontSize, showBullet, isImagesMarquee = false }) => {
  const arrRepeatTimes = Array.from({ length: repeatTimes });

  return (
    <>
      {!isImagesMarquee &&
        <div className={`${bgColor} text-white py-2 ${height} marquee--is-animating overflow-x-hidden`}>
          <div className="marquee__inner">
            {arrRepeatTimes &&
              arrRepeatTimes.map(
                (item, index) =>
                  index <= repeatTimes && (
                    <div className="marquee__groups" key={index.toString()}>
                      <div className={`marquee__group font-mono letter-spacing-sm ${fontSize}`}>
                        {data.map((marquee, i) => {
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
      }

      {isImagesMarquee && <div className={`${bgColor} text-white py-2 ${height} marquee--is-animating overflow-x-hidden`}>
        <div className="marquee__inner__icons">
          {arrRepeatTimes &&
            arrRepeatTimes.map(
              (item, index) =>
                index <= repeatTimes && (
                  <div className="marquee__groups">
                    <div className={`marquee__group font-mono letter-spacing-sm`}>
                      <div className="flex w-[7000px] items-center justify-around">
                        {data.map((name, i) => (
                        <>
                        <Icon key={i.toString()} icon={name.icon} size={6} className="" />
                        {/* {showBullet && <span className="marquee__bullet text-5xl">+</span>} */}
                        </>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
        </div>

      </div>}

    </>)



};

export default Marquee;
