import * as PIXI from 'pixi.js';
import desert_landscape from '../assets/desert_landscape.jpg';
import green_hills from '../assets/green_hills.jpg';
import rainforest from '../assets/rainforest.jpg';
import winter from '../assets/winter.jpg';
import taiga from '../assets/taiga.jpg';

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

    const hills = PIXI.Sprite.from(green_hills);
    hills.anchor.set(0.5);
    hills.x = 0;
    hills.y = 150;
    hills.height = 150;
    hills.width = 200;
    container.addChild(hills);

    const desert = PIXI.Sprite.from(desert_landscape);
    desert.anchor.set(0.5);
    desert.x = 0;
    desert.y = 300;
    desert.height = 150;
    desert.width = 200;
    container.addChild(desert);

    const rain = PIXI.Sprite.from(rainforest);
    rain.anchor.set(0.5);
    rain.x = 0;
    rain.y = 450;
    rain.height = 150;
    rain.width = 200;
    container.addChild(rain);

    const southpole = PIXI.Sprite.from(winter);
    southpole.anchor.set(0.5);
    southpole.x = 0;
    southpole.y = 600;
    southpole.height = 150;
    southpole.width = 200;
    container.addChild(southpole);

}


function Climates() {
    const app = new PIXI.Application<HTMLCanvasElement>({ background: 'white', resizeTo: window });
    document.body.appendChild(app.view);

    renderImages(app);
    // render this in the middle of the screen in a div
}

export default Climates;
