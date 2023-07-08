/**
 * Icon
 */

import React from 'react';
import icons from "../theme/icons"



const getSize = (size) => {
    switch (size) {
        case 1:
            return 'w-4 h-4';
        case 2:
            return 'w-6 h-6';
        case 3:
            return 'w-8 h-8';
        case 4:
            return 'w-10 h-10';
        case 5:
            return 'w-12 h-12';
        case 6:
            return 'w-14 h-14';
        case 7:
            return 'w-16 h-16';
        case 8:
            return 'w-18 h-18';
        case 99:
            return 'w-3 h-3';
        case 77:
            return 'w-5 h-5';
    }
};



/** This is the icon component that handles all the icons in the project. <br /> The user will be able to set the <strong>color</strong>, <strong>size</strong>, <strong>direction</strong> and <strong>animation</strong> for all the icons. */
const Icon = ({
    icon,
    color = '#000',
    className,
    width,
    size,
    height
}) => {
    const IconSvg = icons[icon];

    return (
        <IconSvg
            //width={}
            height={height}
            fill={color}
            className={`inline-block fill-current ${className} ${getSize(size)}`}
        />
    );
};

export default Icon;