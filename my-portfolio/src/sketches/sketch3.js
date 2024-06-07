
import random from 'canvas-sketch-util/random';
import math from 'canvas-sketch-util/math';

export const Sketch3 = ({ context, width, height, settings }) => {
  
  const agents = [];

  for (let i = 0; i < 80; i++) {
    const x = random.range(0, width);
    const y = random.range(0, height);

    agents.push(new Agent(x, y));    
  }

  return ({ context, width, height }) => {
    context.fillStyle = '#ffffff';
    context.fillRect(0, 0, width, height);

    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i];

      for (let j = i + 1; j < agents.length; j++) {
        const element = agents[j];

        const dist = agent.pos.getDistance(element.pos);

        if(dist > 200) continue;

        context.lineWidth = math.mapRange(dist, 0, 200, 0, 1);
        context.beginPath();
        context.strokeStyle = '#000000';
        context.moveTo(agent.pos.x, agent.pos.y);
        context.lineTo(element.pos.x, element.pos.y);
        
        context.stroke();
      }
    }

    agents.forEach(agent => {
      agent.update();
      agent.draw(context);
      agent.bounce(width, height);
    });
  };
};

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  getDistance(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

class Agent {
  constructor(x, y) {
    this.pos = new Vector(x, y);
    this.velocity = new Vector(random.range(-1, 1), random.range(-1, 1));
    this.radius = random.range(1, 6);
  }
  
  bounce(width, height) {
    if (this.pos.x <= 0 || this.pos.x >= width) this.velocity.x *= -1;
    if (this.pos.y <= 0 || this.pos.y >= height) this.velocity.y *= -1;
  }

  update() {
    this.pos.x += this.velocity.x;
    this.pos.y += this.velocity.y;
  }

  draw(context) {
    context.save();
    context.translate(this.pos.x, this.pos.y);

    context.lineWidth = 1;

    context.beginPath();
    context.arc(0, 0, this.radius, 0, Math.PI * 2);
    context.fill();
    context.stroke();

    context.restore();
  }
}