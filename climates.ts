import * as PIXI from 'pixi.js';
import desert_landscape from '../assets/desert_landscape.jpg';
import green_hills from '../assets/green_hills.jpg';
import rainforest from '../assets/rainforest.jpg';
import winter from '../assets/winter.jpg';
import taiga from '../assets/taiga.jpg';
import { CreateBasicClimate } from './Climate';
import { findBird } from './Bird';
import { birds } from './main';
import { Bird } from './Types';

let dragTarget: PIXI.Sprite | null = null;

// sorry sorry sorry voor any maar het kon gewoon niet anders ik wilde mijn haren uittrekken
const dragMove = (evt: any) => {
	console.log(dragTarget);
	if (dragTarget) {
		const globalMousePosition = evt.data.global;
		dragTarget.position.y = globalMousePosition.y - 5;
	}
};

const dragEnd = () => {
	if (dragTarget) {
		app.stage.off('pointermove', dragMove);
		dragTarget.alpha = 1;
		dragTarget = null;
	}
};

const dragStart = function(this: PIXI.Sprite) {
	if (!this) return;
	this.alpha = 0.5;
	dragTarget = this;
	app.stage.on('pointermove', dragMove);
};

var app = new PIXI.Application<HTMLCanvasElement>({ background: 'white', resizeTo: window });
app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;
app.stage.on('pointerup', dragEnd);
app.stage.on('pointerupoutside', dragEnd);


export const climates = [
    CreateBasicClimate('tundra', ['berry', 'fish', 'meat', 'seed']),
    CreateBasicClimate('desert', ['insect', 'meat']),
    CreateBasicClimate('hills', ['berry', 'fish', 'meat', 'insect', 'seed']),
    CreateBasicClimate('jungle', ['berry', 'fish', 'meat', 'insect']),
    CreateBasicClimate('arctic', ['fish']),
]; 


// TODO: Create a function that gets the smallest image width and height
// and makes all other images the same size
function renderImages(app: PIXI.Application) {
	const firstBird: Bird = findBird("vink", birds);
    const container = new PIXI.Container();
    container.x = app.screen.width / 2;
    container.y = 100;
    container.height = 150 * 6;
    container.width = 200;
    app.stage.addChild(container);

    const wintertree = PIXI.Sprite.from(taiga);
    wintertree.anchor.set(0.5);
    wintertree.x = 0;
    wintertree.y = 0;
    wintertree.height = 150;
    wintertree.width = 200;
    container.addChild(wintertree);   


    // assign taiga to wintertree
    wintertree.interactive = true;
    wintertree.accessibleType = climates[0].name;
    wintertree.accessibleTitle = climates[0].name;
    wintertree.onclick = () => {
        console.log(wintertree.accessibleTitle);
    }

    const hills = PIXI.Sprite.from(green_hills);
    hills.anchor.set(0.5);
    hills.x = 0;
    hills.y = 150;
    hills.height = 150;
    hills.width = 200;
    container.addChild(hills);

    hills.interactive = true;
    hills.accessibleType = climates[2].name;
    hills.accessibleTitle = climates[2].name;
    hills.onclick = () => {
        console.log(hills.accessibleTitle);
    }

    const desert = PIXI.Sprite.from(desert_landscape);
    desert.anchor.set(0.5);
    desert.x = 0;
    desert.y = 300;
    desert.height = 150;
    desert.width = 200;
    container.addChild(desert);

    desert.interactive = true;
    desert.accessibleType = climates[1].name;
    desert.accessibleTitle = climates[1].name;
    desert.onclick = () => {
        console.log(desert.accessibleTitle);
    }

    const rain = PIXI.Sprite.from(rainforest);
    rain.anchor.set(0.5);
    rain.x = 0;
    rain.y = 450;
    rain.height = 150;
    rain.width = 200;
    container.addChild(rain);

    rain.interactive = true;
    rain.accessibleType = climates[3].name;
    rain.accessibleTitle = climates[3].name;
    rain.onclick = () => {
        console.log(rain.accessibleTitle);
    }

    const southpole = PIXI.Sprite.from(winter);
    southpole.anchor.set(0.5);
    southpole.x = 0;
    southpole.y = 600;
    southpole.height = 150;
    southpole.width = 200;
    container.addChild(southpole);

    southpole.interactive = true;
    southpole.accessibleType = climates[4].name;
    southpole.accessibleTitle = climates[4].name;
    southpole.onclick = () => {
        console.log(southpole.accessibleTitle);
    }

	const birdBar = new PIXI.Graphics();
	birdBar.x = -100;
	birdBar.y = 650;
	birdBar.beginFill(0x7B481C);
	birdBar.lineStyle({color: 0xffffff});
	birdBar.drawRect(0, 0, 200, 150);
	birdBar.endFill();
	birdBar.zIndex = -1;
	container.addChild(birdBar);

	const firstBirdSprite = PIXI.Sprite.from(firstBird.image);
	firstBirdSprite.interactive = true;
	firstBirdSprite.cursor = 'pointer';
    firstBirdSprite.anchor.set(0.5);
    firstBirdSprite.x = 0;
    firstBirdSprite.y = southpole.y + 128;
    firstBirdSprite.height = 128;
    firstBirdSprite.width = 128;
	firstBirdSprite.zIndex = 10000;
	firstBirdSprite.on("pointerdown", dragStart, firstBirdSprite);
	container.addChild(firstBirdSprite);
}


function RenderClimates() {
    document.body.appendChild(app.view);
    renderImages(app);
}

export default RenderClimates;
