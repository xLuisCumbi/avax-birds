import { Body } from '../atoms/body';

class Elastic extends Body {
    constructor(x, y, bird) {
        super();
        this.bird = bird;
        const options = {
            pointA: {
                x: x,
                y: y
            },
            bodyB: this.bird,
            stiffness: 0.03,
            damping: 0.01,
            length: 0,
            render: {
                type: "line",
                strokeStyle: '#120E0A',
                lineWidth: 8
            }
        }
        this.body = Matter.Constraint.create(options);
    }
}

export { Elastic }