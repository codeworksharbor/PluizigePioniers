"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findBird = exports.createBasicBird = void 0;
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
//# sourceMappingURL=Bird.js.map