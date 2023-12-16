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
const PIXI = __importStar(require("pixi.js"));
const desert_landscape_jpg_1 = __importDefault(require("../assets/desert_landscape.jpg"));
const green_hills_jpg_1 = __importDefault(require("../assets/green_hills.jpg"));
const rainforest_jpg_1 = __importDefault(require("../assets/rainforest.jpg"));
const winter_jpg_1 = __importDefault(require("../assets/winter.jpg"));
const taiga_jpg_1 = __importDefault(require("../assets/taiga.jpg"));
const climate_1 = require("./climate");
const climates = [
    (0, climate_1.CreateBasicClimate)('tundra', ['berry', 'fish', 'meat']),
    (0, climate_1.CreateBasicClimate)('desert', ['insect', 'meat']),
    (0, climate_1.CreateBasicClimate)('hills', ['berry', 'fish', 'meat', 'insect']),
    (0, climate_1.CreateBasicClimate)('jungle', ['berry', 'fish', 'meat', 'insect']),
    (0, climate_1.CreateBasicClimate)('arctic', ['fish']),
];
// TODO: Create a function that gets the smallest image width and height
// and makes all other images the same size
function renderImages(app) {
    const container = new PIXI.Container();
    container.x = app.screen.width / 2;
    container.y = 100;
    container.height = 150 * 5;
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
    wintertree.accessibleType = climates[0].name;
    wintertree.accessibleTitle = climates[0].name;
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
    hills.accessibleType = climates[2].name;
    hills.accessibleTitle = climates[2].name;
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
    desert.accessibleType = climates[1].name;
    desert.accessibleTitle = climates[1].name;
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
    rain.accessibleType = climates[3].name;
    rain.accessibleTitle = climates[3].name;
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
    southpole.accessibleType = climates[4].name;
    southpole.accessibleTitle = climates[4].name;
    southpole.onclick = () => {
        console.log(southpole.accessibleTitle);
    };
}
function Climates() {
    const app = new PIXI.Application({ background: 'white', resizeTo: window });
    document.body.appendChild(app.view);
    renderImages(app);
}
exports.default = Climates;
//# sourceMappingURL=climates.js.map