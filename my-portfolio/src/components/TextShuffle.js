import React, { useEffect, useRef } from 'react';
import { shuffle } from 'txt-shuffle';

const TextShuffleComponent = ({ text, glyphs, duration }) => {
    const textRef = useRef(null);
    const isMounted = useRef(true);

    useEffect(() => {
        isMounted.current = true;

        if (textRef.current) {
            shuffle({
                text: text,
                duration: duration,
                fps: 20,
                glyphs: glyphs,
                onUpdate: (output) => {
                    if (isMounted.current && textRef.current) {
                        textRef.current.textContent = output;
                    }
                },
            });
        }

        return () => {
            isMounted.current = false;
        };
    }, [text, glyphs, duration]);

    return <div ref={textRef}>{text}</div>;
};

export default TextShuffleComponent;
