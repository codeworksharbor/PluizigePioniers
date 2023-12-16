import * as PIXI from 'pixi.js';
import desert_landscape from '../assets/desert_landscape.jpg';
import green_hills from '../assets/green_hills.jpg';
import rainforest from '../assets/rainforest.jpg';
import winter from '../assets/winter.jpg';
import taiga from '../assets/taiga.jpg';
import { Climate } from './Types';

const climates: Array<Climate> = [
    {
        name: 'tundra',
        food: ['berry', 'fish', 'meat'],
    },
    {
        name: 'desert',
        food: [ 'meat', 'insect'],
    },
    {
        name: 'hills',
        food: ['berry', 'fish', 'meat', 'insect'],
    },
    {
        name: 'jungle',
        food: ['berry', 'fish', 'meat', 'insect'],
    },
    {
        name: 'arctic',
        food: ['fish'],
    },
];

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
    

}


function Climates() {
    const app = new PIXI.Application<HTMLCanvasElement>({ background: 'white', resizeTo: window });
    document.body.appendChild(app.view);

    renderImages(app);
}

export default Climates;
