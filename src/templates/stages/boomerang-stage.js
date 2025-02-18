import { HalBird } from '../../organisms/birds/hal-bird';
import { CorporalPig } from '../../organisms/pigs/corporal-pig';
import { Ground } from '../../molecules/ground';
import { Slingshot } from '../../organisms/slingshot/slingshot';
import { SteelSquare } from '../../organisms/obstacles/steel-square';
import { Subject } from '../../pages/subject'
import { MinionPig } from '../../organisms/pigs/minion-pig';
import { KingPig } from '../../organisms/pigs/king-pig';
import { PIG_SIZE_MINION, PIG_SIZE_KING } from '../../atoms/constants';
import { WoodSquare } from '../../organisms/obstacles/wood-square';

import {
    RENDER_WIDTH,
    BIRD_X,
    BIRD_Y,
    BIRD_SIZE_HAL,
    GROUND_HEIGHT,
    GROUND_X,
    GROUND_Y,
    OBSTACLE_SQUARE_LENGTH,
    PIG_SIZE_CORPORAL,
    Composite
} from '../../atoms/constants';

class BoomerangStage extends Subject {
    constructor() {
        super();
        this.composites = [];
        this.remainingBirds = 3;

        this.bird = new HalBird(BIRD_X, BIRD_Y, BIRD_SIZE_HAL);
        this.ground1 = new Ground(GROUND_X, GROUND_Y, RENDER_WIDTH, GROUND_HEIGHT);
        this.slingshot = new Slingshot(this.bird);
        this.pig = new CorporalPig(800, 480, PIG_SIZE_CORPORAL);
        this.pig1 = new MinionPig(990, 300, PIG_SIZE_MINION);
        this.pig2 = new KingPig(960, 170, PIG_SIZE_KING);
        this.pig3 = new MinionPig(930, 300, PIG_SIZE_MINION);
        this.pig4 = new MinionPig(1050, 300, PIG_SIZE_MINION);
        this.pig5 = new KingPig(840, 340, PIG_SIZE_KING);

        this.steelSquare1 = new SteelSquare(800, 400, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        this.steelSquare2 = new SteelSquare(860, 400, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        // this.steelSquare3 = new IceSquare(760, 400, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        this.steelSquare4 = new SteelSquare(600, 540, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        this.steelSquare5 = new SteelSquare(800, 540, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        this.steelSquare6 = new SteelSquare(900, 250, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        this.steelSquare7 = new SteelSquare(960, 250, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        this.steelSquare8 = new SteelSquare(1020, 250, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
        this.pyramid = Matter.Composites.pyramid(840, 400, 5, 5, 0, 0, function (x, y) {
            let box = new WoodSquare(x, y, OBSTACLE_SQUARE_LENGTH, OBSTACLE_SQUARE_LENGTH);
            return box.getBody()
        });

        this.flyingBird = this.bird;
        this.composites.push(this.slingshot.getLeftElastic());
        this.composites.push(this.slingshot.getRightElastic());
        this.composites.push(this.slingshot.getSlingshotBody());
        this.composites.push(this.ground1.getBody());
        this.composites.push(this.bird.getBody());
        this.composites.push(this.pig.getBody());
        this.composites.push(this.pig1.getBody());
        this.composites.push(this.pig2.getBody());
        this.composites.push(this.pig3.getBody());
        this.composites.push(this.pig4.getBody());
        this.composites.push(this.pig5.getBody());

        this.composites.push(this.steelSquare1.getBody());
        this.composites.push(this.steelSquare2.getBody());
        // this.composites.push(this.steelSquare3.getBody());
        this.composites.push(this.steelSquare4.getBody());
        this.composites.push(this.steelSquare5.getBody());
        this.composites.push(this.steelSquare6.getBody());
        this.composites.push(this.steelSquare7.getBody());
        this.composites.push(this.steelSquare8.getBody());
        this.composites.push(this.pyramid);
    }

    getComposites() {
        return this.composites;
    }

    // transmit information to ScoreDisplay
    updateScore(score) {
        this.notifySubscribers('update-score-stage4',
            { remainingBirds: this.remainingBirds },
            { scoreToAdd: score }
        )
    }
    // control bird firing
    firing(world) {
        let slingshot = this.slingshot;
        let bird = this.bird;
        let newBird;

        if (this.remainingBirds == 3) {
            document.getElementById('rb-stage4-hal1').style.display = "none";
            newBird = new HalBird(BIRD_X, BIRD_Y, BIRD_SIZE_HAL);
        } else if (this.remainingBirds == 2) {
            document.getElementById('rb-stage4-hal2').style.display = "none";
            newBird = new HalBird(BIRD_X, BIRD_Y, BIRD_SIZE_HAL);
        } else if (this.remainingBirds == 1) {
            document.getElementById('rb-stage4-hal3').style.display = "none";
        }
        this.remainingBirds -= 1;
        if (this.remainingBirds == 0) {
            slingshot.elastic1.body.bodyB = null;
            slingshot.elastic2.body.bodyB = null;
            Composite.remove(world, slingshot.getLeftElastic());
            Composite.remove(world, slingshot.getRightElastic());
        } else {
            this.bird = newBird;
            bird = this.bird;
            Composite.add(world, bird.getBody());
            slingshot.elastic1.body.bodyB = bird.getBody();
            slingshot.elastic2.body.bodyB = bird.getBody();
        }
    }
}

export { BoomerangStage }