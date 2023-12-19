"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.climates = void 0;
const PIXI = __importStar(require("pixi.js"));
const desert_landscape_jpg_1 = __importDefault(require("../assets/desert_landscape.jpg"));
const green_hills_jpg_1 = __importDefault(require("../assets/green_hills.jpg"));
const rainforest_jpg_1 = __importDefault(require("../assets/rainforest.jpg"));
const winter_jpg_1 = __importDefault(require("../assets/winter.jpg"));
const taiga_jpg_1 = __importDefault(require("../assets/taiga.jpg"));
const Climate_1 = require("./Climate");
const Bird_1 = require("./Bird");
const main_1 = require("./main");
exports.climates = [
    (0, Climate_1.CreateBasicClimate)('tundra', ['berry', 'fish', 'meat', 'seed']),
    (0, Climate_1.CreateBasicClimate)('desert', ['insect', 'meat']),
    (0, Climate_1.CreateBasicClimate)('hills', ['berry', 'fish', 'meat', 'insect', 'seed']),
    (0, Climate_1.CreateBasicClimate)('jungle', ['berry', 'fish', 'meat', 'insect']),
    (0, Climate_1.CreateBasicClimate)('arctic', ['fish']),
];
// TODO: Create a function that gets the smallest image width and height
// and makes all other images the same size
function renderImages(app) {
    const firstBird = (0, Bird_1.findBird)("vink", main_1.birds);
    const container = new PIXI.Container();
    container.x = app.screen.width / 2;
    container.y = 100;
    container.height = 150 * 6;
    container.width = 200;
    app.stage.addChild(container);
    const wintertree = PIXI.Sprite.from(taiga_jpg_1.default);
    wintertree.anchor.set(0.5);
    wintertree.x = 0;
    wintertree.y = 0;
    wintertree.height = 150;
    wintertree.width = 200;
    container.addChild(wintertree);
    // assign taiga to wintertree
    wintertree.interactive = true;
    wintertree.accessibleType = exports.climates[0].name;
    wintertree.accessibleTitle = exports.climates[0].name;
    wintertree.onclick = () => {
        console.log(wintertree.accessibleTitle);
    };
    const hills = PIXI.Sprite.from(green_hills_jpg_1.default);
    hills.anchor.set(0.5);
    hills.x = 0;
    hills.y = 150;
    hills.height = 150;
    hills.width = 200;
    container.addChild(hills);
    hills.interactive = true;
    hills.accessibleType = exports.climates[2].name;
    hills.accessibleTitle = exports.climates[2].name;
    hills.onclick = () => {
        console.log(hills.accessibleTitle);
    };
    const desert = PIXI.Sprite.from(desert_landscape_jpg_1.default);
    desert.anchor.set(0.5);
    desert.x = 0;
    desert.y = 300;
    desert.height = 150;
    desert.width = 200;
    container.addChild(desert);
    desert.interactive = true;
    desert.accessibleType = exports.climates[1].name;
    desert.accessibleTitle = exports.climates[1].name;
    desert.onclick = () => {
        console.log(desert.accessibleTitle);
    };
    const rain = PIXI.Sprite.from(rainforest_jpg_1.default);
    rain.anchor.set(0.5);
    rain.x = 0;
    rain.y = 450;
    rain.height = 150;
    rain.width = 200;
    container.addChild(rain);
    rain.interactive = true;
    rain.accessibleType = exports.climates[3].name;
    rain.accessibleTitle = exports.climates[3].name;
    rain.onclick = () => {
        console.log(rain.accessibleTitle);
    };
    const southpole = PIXI.Sprite.from(winter_jpg_1.default);
    southpole.anchor.set(0.5);
    southpole.x = 0;
    southpole.y = 600;
    southpole.height = 150;
    southpole.width = 200;
    container.addChild(southpole);
    southpole.interactive = true;
    southpole.accessibleType = exports.climates[4].name;
    southpole.accessibleTitle = exports.climates[4].name;
    southpole.onclick = () => {
        console.log(southpole.accessibleTitle);
    };
    const birdBar = new PIXI.Graphics();
    birdBar.x = -100;
    birdBar.y = 650;
    birdBar.beginFill(0x7B481C);
    birdBar.lineStyle({ color: 0xffffff });
    birdBar.drawRect(0, 0, 200, 150);
    birdBar.endFill();
    birdBar.zIndex = -1;
    container.addChild(birdBar);
    const firstBirdSprite = PIXI.Sprite.from(firstBird.image);
    firstBirdSprite.eventMode = "static";
    firstBirdSprite.cursor = "pointer";
    firstBirdSprite.anchor.set(0.5);
    firstBirdSprite.x = 0;
    firstBirdSprite.y = southpole.y + 128;
    firstBirdSprite.height = 128;
    firstBirdSprite.width = 128;
    firstBirdSprite.zIndex = 10000;
    container.addChild(firstBirdSprite);
}
function RenderClimates() {
    const app = new PIXI.Application({ background: 'white', resizeTo: window });
    document.body.appendChild(app.view);
    renderImages(app);
}
exports.default = RenderClimates;
//# sourceMappingURL=climates.js.map