"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewBird = exports.findBird = exports.createBasicBird = void 0;
/**
 * Functie om een vogel te maken, dit is met de type Bird uit Types.ts
 *
 * @param {string} name_ - naam van de vogel is ook voor de image
 * @param {string} description_ - de beschrijving van een vogel
 * @param {Climate} climate_ - de klimaat waar de vogel in leeft
 * @param {Array<Food>} food_ - het eten wat de vogel het liefst eet
 *
 * @returns {Bird} newBird - de nieuwe vogel
 */
const createBasicBird = (name_, description_, climate_, food_) => {
    let newBird = {
        name: name_,
        description: description_,
        climate: climate_,
        prefFood: food_,
        image: `assets/birds/${name_}.png` // de image wordt op basis van de naam gekozen, is makkelijker en dynamisch
    };
    return newBird;
};
exports.createBasicBird = createBasicBird;
/**
 * Zoek een vogel in de vogels lijst
 *
 * @param {string} name_ - de naam van de vogel
 * @param {Array<Bird>} birds - de vogels waar je in wilt zoeken
 *
 * @returns {Bird} - de vogel die je wilde zoeken
 */
const findBird = (name_, birds) => birds.find((bird) => bird.name === name_);
exports.findBird = findBird;
/**
 * Functie om een vogel te returnen op basis van gegeven klimaat, eten en vogels
 *
 * @param {Climate} climate_ - de klimaat waar de huidige vogel door de gebruiker naartoe is getrokken
 * @param {Array<Bird>} birds - de vogels waar je in wilt Zoeken naar vogels in dat klimaat
 * @param {Bird} bird - de huidige vogel die de gebruiker heeft getrokken
 */
const getNewBird = (climate_, birds, bird) => {
    let newBird = bird;
    let foodTypes = climate_.food;
    // zoekt het meest voorkomende eten in het klimaat
    let food = Object.keys(foodTypes).reduce((a, b) => foodTypes[a] > foodTypes[b] ? a : b);
    console.log("ChosenFood: ", food);
    // zoekt alle vogels in het klimaat die het meest voorkomende eten eten
    let birdsInClimate = birds.filter((bird) => bird.climate === climate_ && bird.prefFood.includes(food));
    newBird = birdsInClimate[Math.floor(Math.random() * birdsInClimate.length)];
    return newBird;
};
exports.getNewBird = getNewBird;
//# sourceMappingURL=Bird.js.map