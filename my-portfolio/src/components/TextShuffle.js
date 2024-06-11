import React, { useEffect, useRef } from 'react';
import { shuffle } from 'txt-shuffle';

const TextShuffleComponent = ({ text, glyphs, duration }) => {
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            shuffle({
                text: text,
                duration: duration,
                fps: 20,
                glyphs: glyphs,
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
