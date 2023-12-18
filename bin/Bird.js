"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBird = exports.createBasicBird = void 0;
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
        image: `assets/${name_}.png` // de image wordt op basis van de naam gekozen, is makkelijker en dynamisch
    };
    return newBird;
};
exports.createBasicBird = createBasicBird;
const returnBird = (bird_, birds_, climate_, availableFood_) => {
    if (bird_.name !== 'vink') {
        return null;
    }
    let birdsInClimate = birds_.filter((bird) => bird.climate === climate_);
    let birdsInClimateWithFood = birdsInClimate.filter((bird) => bird.prefFood.some((food) => availableFood_.includes(food)));
    let bird = birdsInClimateWithFood[Math.floor(Math.random() * birdsInClimateWithFood.length)];
    return bird;
};
exports.returnBird = returnBird;
//# sourceMappingURL=Bird.js.map