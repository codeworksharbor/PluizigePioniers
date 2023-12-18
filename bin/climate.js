"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchClimate = exports.CreateBasicClimate = void 0;
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
//# sourceMappingURL=Climate.js.map