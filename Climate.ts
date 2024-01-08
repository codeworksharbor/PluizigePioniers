import { Climate } from './Types';
import { ClimateName } from './Types';
import { DictionaryFood } from './Types';

export const CreateBasicClimate = (name_: ClimateName, food_: DictionaryFood): Climate => {
    let climate: Climate = {
        name: name_,
        food: food_,
    }
    return climate;
}

export const SearchClimate = (name: ClimateName, climates: Array<Climate>): Climate =>
	climates.find((climate: Climate): boolean => climate.name === name)!;

/**
 * Zoek een klimaat die op een specifiek y as punt zit.
 *
 * @param {number} y - y as om te zoeken
 *
 * @returns {ClimateName} ret - de klimaat naam die gevonden is
 */
export const getClimateOnY = (y: number): ClimateName => {
	let ret: ClimateName = "tundra";
	if (y >= 0 && y <= 150) {
		ret = "tundra";
	} else if (y > 150 && y <= 300) {
		ret = "hills";
	} else if (y > 300 && y <= 450) {
		ret = "desert";
	} else if (y > 450 && y <= 600) {
		ret = "jungle";
	} else if (y > 600 && y <= 750) {
		ret = "arctic";
	}
	return ret;
};