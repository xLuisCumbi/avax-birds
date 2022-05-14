import { Bird } from '../../molecules/bird';

class RedBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.body.render.sprite.texture = '../../../data/red.png';
        this.body.render.sprite.xScale = 0.35;
        this.body.render.sprite.yScale = 0.35;
    };
}

export { RedBird };