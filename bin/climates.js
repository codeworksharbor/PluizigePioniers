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
exports.removeResource = exports.climates = void 0;
const PIXI = __importStar(require("pixi.js"));
const desert_landscape_jpg_1 = __importDefault(require("../assets/desert_landscape.jpg"));
const green_hills_jpg_1 = __importDefault(require("../assets/green_hills.jpg"));
const rainforest_jpg_1 = __importDefault(require("../assets/rainforest.jpg"));
const winter_jpg_1 = __importDefault(require("../assets/winter.jpg"));
const taiga_jpg_1 = __importDefault(require("../assets/taiga.jpg"));
const Climate_1 = require("./Climate");
const Bird_1 = require("./Bird");
const main_1 = require("./main");
const Climate_2 = require("./Climate");
let dragTarget = null;
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
const sleep = (delay) => {
    return new Promise(resolve => setTimeout(resolve, delay));
};
// sorry sorry sorry voor any maar het kon gewoon niet anders ik wilde mijn haren uittrekken
const dragMove = (evt) => {
    if (dragTarget) {
        const globalMousePosition = evt.data.global;
        dragTarget.position.y = globalMousePosition.y - 64;
    }
};
const dragEnd = async () => {
    if (dragTarget) {
        // zoek het klimaat waar de vogel is ingeplaatst
        const climatename = (0, Climate_2.getClimateOnY)(dragTarget.position.y + 64);
        // zoek het id van dat klimaat om het te veranderen qua resources
        const idx = exports.climates.indexOf((0, Climate_2.SearchClimate)(climatename, exports.climates));
        const newClimate = removeResource(climatename, (0, Bird_1.findBird)("vink", main_1.birds));
        console.log(newClimate.food);
        const newBird = (0, Bird_1.getNewBird)(newClimate, main_1.birds, (0, Bird_1.findBird)("vink", main_1.birds));
        dragTarget.texture = PIXI.Texture.from(newBird.image);
        dragTarget.accessibleTitle = newBird.name;
        exports.climates[idx] = newClimate; // verwissel de originele met een kopie
        app.stage.off('pointermove', dragMove);
        await sleep(500);
        dragTarget.position.set(dragTarget.position.x, originalBirdPos);
        dragTarget.alpha = 1;
        dragTarget = null;
    }
};
const dragStart = function () {
    if (!this)
        return;
    this.alpha = 0.5;
    dragTarget = this;
    app.stage.on('pointermove', dragMove);
};
var app = new PIXI.Application({ background: 'white', resizeTo: window });
app.stage.eventMode = 'static';
app.stage.hitArea = app.screen;
app.stage.on('pointerup', dragEnd);
app.stage.on('pointerupoutside', dragEnd);
exports.climates = [
    (0, Climate_1.CreateBasicClimate)('tundra', {
        berry: 100,
        fish: 100,
        meat: 100,
        insect: 100,
        seed: 100,
    }),
    (0, Climate_1.CreateBasicClimate)('desert', {
        insect: 100,
        meat: 100,
        seed: 0,
        berry: 0,
        fish: 0,
    }),
    (0, Climate_1.CreateBasicClimate)('hills', {
        berry: 100,
        fish: 100,
        meat: 100,
        insect: 100,
        seed: 100,
    }),
    (0, Climate_1.CreateBasicClimate)('jungle', {
        berry: 100,
        fish: 100,
        meat: 100,
        insect: 100,
        seed: 0,
    }),
    (0, Climate_1.CreateBasicClimate)('arctic', {
        fish: 100,
        meat: 0,
        insect: 0,
        seed: 0,
        berry: 0,
    }),
];
function removeResource(climatename_, bird_) {
    let climate = (0, Climate_2.SearchClimate)(climatename_, exports.climates);
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
exports.removeResource = removeResource;
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
    wintertree.eventMode = 'dynamic';
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
    hills.eventMode = 'dynamic';
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
    desert.eventMode = 'dynamic';
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
    rain.eventMode = 'dynamic';
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
    southpole.eventMode = 'dynamic';
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
exports.default = RenderClimates;
//# sourceMappingURL=climates.js.map