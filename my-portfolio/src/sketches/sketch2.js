
import random from 'canvas-sketch-util/random';
import math from 'canvas-sketch-util/math';
import Color from 'canvas-sketch-util/color';
import risoColors from 'riso-colors';

const seed = "1718025885431" 

/* const settings = {
    dimensions: [1080, 1080],
    name: seed,
    animate: true,
    duration: 10,
    fps: 30, // Frames per second
    playbackRate: 'throttle'
};
 */
export const Sketch2 = ({ context, width, height }) => {
    random.setSeed(seed);

    let x, y, w, h, fill, stroke, blend, speed, angle, direction;

    const num = 20;
    const degrees = -30;

    const rects = [];

    const rectColors = [
        random.pick(risoColors),
        random.pick(risoColors),
    ];

    const bgColor = "black" // random.pick(risoColors).hex;

    const mask = {
        radius: width * 0.5,
        sides: 3, // 3 sides as triangle
        x: width * 0.5,
        y: height * 0.58,
    };

    for (let i = 0; i < num; i++) {
        x = random.range(0, width);
        y = random.range(0, height);
        w = random.range(600, width);
        h = random.range(40, 200);

        fill = random.pick(rectColors).hex;
        stroke = random.pick(rectColors).hex;

        blend = (random.value() > 0.5) ? 'overlay' : 'source-over';
        speed = random.range(1, 5);
        angle = -45;
        direction = (random.value() > 0.5) ? 1 : -1; // 1 for forward, -1 for backward

        rects.push({ x, y, w, h, fill, stroke, blend, speed, angle, direction });
    }


    // this function will be used to draw the rectangles

    return ({ context, width, height }) => {
        context.fillStyle = bgColor;
        context.fillRect(0, 0, width, height);

        context.save();
        context.translate(mask.x, mask.y);

        drawPolygon({ context, radius: mask.radius, sides: mask.sides });

        context.clip();

        rects.forEach(rect => {
            const { x, y, w, h, fill, stroke, blend, speed, angle, direction } = rect;
            let shadowColor;

            const angleRad = math.degToRad(angle);
            rect.x += speed * direction * Math.cos(angleRad);
            rect.y += speed * direction * Math.sin(angleRad);

            // Wrap around logic
            if (rect.x > width || rect.x + w < 0 || rect.y > height || rect.y + h < 0) {
                rect.x = random.range(0, width);
                rect.y = random.range(0, height);
            }

            context.save();
            context.translate(-mask.x, -mask.y);
            context.translate(rect.x, rect.y);

            context.strokeStyle = stroke;
            context.fillStyle = fill;
            context.lineWidth = 10;

            context.globalCompositeOperation = blend;

            drawSkewedRect({ context, w, h, degrees });

            shadowColor = Color.offsetHSL(fill, 0, 0, -20);
            shadowColor.rgba[3] = 0.5;

            context.shadowColor = Color.style(shadowColor.rgba);
            context.shadowOffsetX = -10;
            context.shadowOffsetY = 20;

            context.fill();

            context.shadowColor = null;
            context.stroke();

            context.globalCompositeOperation = 'source-over';

            context.lineWidth = 2;
            context.strokeStyle = 'black';
            context.stroke();

            context.restore();
        });

        context.restore();

        // polygon outline
        context.save();
        context.translate(mask.x, mask.y);
        context.lineWidth = 20;

        drawPolygon({ context, radius: mask.radius - context.lineWidth, sides: mask.sides });

        context.globalCompositeOperation = 'overlay';
        context.strokeStyle = "white" //rectColors[0].hex;
        context.stroke();

        context.restore();
    };
};

const drawSkewedRect = ({ context, w = 600, h = 200, degrees = -45 }) => {
    const angle = math.degToRad(degrees);
    const rx = Math.cos(angle) * w;
    const ry = Math.sin(angle) * w;

    context.save();
    context.translate(rx * -0.5, (ry + h) * -0.5);

    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(rx, ry);
    context.lineTo(rx, ry + h);
    context.lineTo(0, h);
    context.closePath();

    context.restore();
};

// this function will be used to draw the polygon
// the polygon will be used to create the mask
const drawPolygon = ({ context, radius = 150, sides = 3 }) => {
    const slice = Math.PI * 2 / sides;

    context.beginPath();
    context.moveTo(0, -radius);

    for (let i = 1; i < sides; i++) {
        const theta = i * slice - Math.PI * 0.5;
        context.lineTo(Math.cos(theta) * radius, Math.sin(theta) * radius);
    }

    context.closePath();
};
