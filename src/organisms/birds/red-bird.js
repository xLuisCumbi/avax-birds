import { Bird } from '../../molecules/bird';

class RedBird extends Bird {
    constructor(x, y, r) {
        super(x, y, r);
        this.body.render.sprite.texture = '/data/birds/blub.png';
        this.body.render.sprite.xScale = 0.4;
        this.body.render.sprite.yScale = 0.4;
    };

    // red bird ability
    ability() {
        if (this.isAbility) {
            console.log("I'm cute!!")
            this.isAbility = false;
        }
    }
}

export { RedBird };