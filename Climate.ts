import { Climate } from './Types';
import { Food } from './Types';
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