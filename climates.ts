import * as PIXI from 'pixi.js';
import desert_landscape from '../assets/desert_landscape.jpg';
import green_hills from '../assets/green_hills.jpg';
import rainforest from '../assets/rainforest.jpg';
import winter from '../assets/winter.jpg';
import taiga from '../assets/taiga.jpg';
import { CreateBasicClimate } from './Climate';
import { Food } from './Types';

export const climates = [
    CreateBasicClimate('tundra', ['berry', 'fish', 'meat', 'seed']),
    CreateBasicClimate('desert', ['insect', 'meat']),
    CreateBasicClimate('hills', ['berry', 'fish', 'meat', 'insect', 'seed']),
    CreateBasicClimate('jungle', ['berry', 'fish', 'meat', 'insect']),
    CreateBasicClimate('arctic', ['fish']),
];

export function removeResource(climatename_: string, food_: Food): boolean {
    const climate = climates.find(climate => climate.name === climatename_);
    if (climate) {
        const index = climate.food.indexOf(food_);
        if (index > -1) {
            climate.food.splice(index, 1);
            return true;
        }
        return false;
    }
    return false;
}

// TODO: Create a function that gets the smallest image width and height
// and makes all other images the same size
function renderImages(app: PIXI.Application) {
    const container = new PIXI.Container();
    container.x = app.screen.width / 2;
    container.y = 100;
    container.height = 150 * 5;
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
    

}


function RenderClimates() {
    const app = new PIXI.Application<HTMLCanvasElement>({ background: 'white', resizeTo: window });
    document.body.appendChild(app.view);

    renderImages(app);
}

export default RenderClimates;
