import React, { useEffect, useRef } from 'react';
import { shuffle } from 'txt-shuffle';

const TextShuffleComponent = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            shuffle({
                text: text,
                //duration: 4,
                fps: 20,
                glyphs: "▂▄▆",
                //glyphs: "_",
                onUpdate: (output) => {
                    textRef.current.textContent = output;
                },
            });
        }
    }, [text]);

    return <div ref={textRef}>{text}</div>;
};

export default TextShuffleComponent;
