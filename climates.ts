import * as PIXI from 'pixi.js';
import desert_landscape from '../assets/desert_landscape.jpg';
import green_hills from '../assets/green_hills.jpg';
import rainforest from '../assets/rainforest.jpg';
import winter from '../assets/winter.jpg';
import taiga from '../assets/taiga.jpg';
import { CreateBasicClimate } from './Climate';
import { findBird, getNewBird } from './Bird';
import { birds } from './main';
import { Bird, ClimateName, Climate } from './Types';
import { SearchClimate, getClimateOnY } from './Climate';

let dragTarget: PIXI.Sprite | null = null;
let originalBirdPos = 0;

/**
 * XXX: moet eigenlijk in een global dingetje maar boeie
 * Sleep functie zoals die in vele talen zit, slaap voor paar ms.
 * Moet in Async function
 *
 * @param {number} delay - hoeveel ms het moet wachten
 *
 * @returns {Promise} - een promise met een gelijke resolve
 */
const sleep = <T>(delay: number): Promise<T> => {
	return new Promise(resolve => setTimeout(resolve, delay));
}

// sorry sorry sorry voor any maar het kon gewoon niet anders ik wilde mijn haren uittrekken
const dragMove = (evt: any) => {
	if (dragTarget) {
		const globalMousePosition = evt.data.global;
		dragTarget.position.y = globalMousePosition.y - 64;
	}
};

const dragEnd = async () => {
	if (dragTarget) {
		// zoek het klimaat waar de vogel is ingeplaatst
		const climatename = getClimateOnY(dragTarget.position.y + 64);
		// zoek het id van dat klimaat om het te veranderen qua resources
		const idx = climates.indexOf(SearchClimate(climatename, climates));
		const newClimate = removeResource(climatename, findBird("vink", birds));
		console.log(newClimate.food);
		const newBird = getNewBird(newClimate, birds, findBird("vink", birds));
		dragTarget.texture = PIXI.Texture.from(newBird.image);
		dragTarget.accessibleTitle = newBird.name;

		climates[idx] = newClimate; // verwissel de originele met een kopie
		app.stage.off('pointermove', dragMove);
		await sleep(500);
		dragTarget.position.set(dragTarget.position.x, originalBirdPos);
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
    CreateBasicClimate('tundra', {
        berry: 100,
        fish: 100,
        meat: 100,
        insect: 100,
        seed: 100,
    }),
    CreateBasicClimate('desert', {
        insect: 100,
        meat: 100,
        seed: 0,
        berry: 0,
        fish: 0,
    }),
    CreateBasicClimate('hills', {
        berry: 100,
        fish: 100,
        meat: 100,
        insect: 100,
        seed: 100,
    }),
    CreateBasicClimate('jungle', {
        berry: 100,
        fish: 100,
        meat: 100,
        insect: 100,
        seed: 0,
    }),
    CreateBasicClimate('arctic', {
        fish: 100,
        meat: 0,
        insect: 0,
        seed: 0,
        berry: 0,
    }),
];

export function removeResource(climatename_: ClimateName, bird_: Bird): Climate {
    let climate = SearchClimate(climatename_, climates);
    if (climate.food !== null) {
        let foods = bird_.prefFood;
        let food = foods[Math.floor(Math.random() * foods.length)];
        let amount = Math.random() * (30 - 20) + 20;
        if (climate.food[food] >= amount) {
            climate.food[food] -= amount;
        }
    }
    return climate;
}


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
    wintertree.eventMode = 'dynamic';
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

    hills.eventMode = 'dynamic';
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

    desert.eventMode = 'dynamic';
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

    rain.eventMode = 'dynamic';
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

    southpole.eventMode = 'dynamic';
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
	firstBirdSprite.eventMode = 'dynamic';
	firstBirdSprite.cursor = 'pointer';
    firstBirdSprite.anchor.set(0.5);
    firstBirdSprite.x = 0;
    firstBirdSprite.y = southpole.y + 128;
	originalBirdPos = southpole.y + 128;
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
