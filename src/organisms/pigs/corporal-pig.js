import { Pig } from '../../molecules/pig';

class CorporalPig extends Pig {
    constructor(x, y, r) {
        super(x, y, r);
        this.body.render.sprite.texture = '/data/pigs/avax.png';
        this.body.render.sprite.xScale = 0.4;
        this.body.render.sprite.yScale = 0.4;
    };
}

export { CorporalPig };