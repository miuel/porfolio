// SketchComponent.js
import React, { useRef, useEffect } from 'react';
import canvasSketch from 'canvas-sketch';

const SketchComponent = ({ sketch, settings }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    const manager = canvasSketch(sketch, { ...settings, canvas });

    return () => {
      manager.then(m => m.unload());
    };
  }, [sketch, settings]);

  return <canvas ref={canvasRef}></canvas>;
};

export default SketchComponent;
