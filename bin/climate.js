"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClimateOnY = exports.SearchClimate = exports.CreateBasicClimate = void 0;
const CreateBasicClimate = (name_, food_) => {
    let climate = {
        name: name_,
        food: food_,
    };
    return climate;
};
exports.CreateBasicClimate = CreateBasicClimate;
const SearchClimate = (name, climates) => climates.find((climate) => climate.name === name);
exports.SearchClimate = SearchClimate;
/**
 * Zoek een klimaat die op een specifiek y as punt zit.
 *
 * @param {number} y - y as om te zoeken
 *
 * @returns {ClimateName} ret - de klimaat naam die gevonden is
 */
const getClimateOnY = (y) => {
    let ret = "tundra";
    if (y >= 0 && y <= 150) {
        ret = "tundra";
    }
    else if (y > 150 && y <= 300) {
        ret = "hills";
    }
    else if (y > 300 && y <= 450) {
        ret = "desert";
    }
    else if (y > 450 && y <= 600) {
        ret = "jungle";
    }
    else if (y > 600 && y <= 750) {
        ret = "arctic";
    }
    return ret;
};
exports.getClimateOnY = getClimateOnY;
//# sourceMappingURL=Climate.js.map