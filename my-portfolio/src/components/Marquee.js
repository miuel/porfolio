// Marquee component
// This component is used to display a custom marquee

import React from "react";
import Icon from "./Icon";


const Marquee = ({ data, repeatTimes = 3, showBullet, className, logo }) => {
  const arrRepeatTimes = Array.from({ length: repeatTimes });

  return (
    <>
      {!logo &&
        <div className={` py-2 marquee--is-animating overflow-x-hidden ${className}`}>
          <div className="marquee__inner" key={data.id}>
            {arrRepeatTimes &&
              arrRepeatTimes.map(
                (item, index) =>
                  index <= repeatTimes && (
                    <div className="marquee__groups" key={index.toString() + data.id}>
                      <div className={`marquee__group font-mono letter-spacing-sm`}>
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

      {logo && (
        <div className={`${className} py-2 marquee--is-animating overflow-x-hidden`}>
          <div className="marquee__inner__icons" key={data.id}>
            {arrRepeatTimes &&
              arrRepeatTimes.map((item, index) =>
                index <= repeatTimes ? (
                  <div className="marquee__groups" key={index.toString() + data.id}>
                    <div className="marquee__group font-mono text-base font-bold letter-spacing-sm flex items-center space-x-[50px]">
                      <Icon icon="logoOfficial" alt="logo" size={8} className=" mix-blend-multiply w-12" />
                    </div>
                    <span className="marquee__bullet">•</span>
                  </div>
                ) : null
              )}
          </div>
        </div>
      )}



    </>)



};

export default Marquee;
