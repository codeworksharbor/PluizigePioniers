import { Bird, Food, Climate } from './Types';

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
export const createBasicBird = (name_: string, description_: string, climate_: Climate, food_: Array<Food>): Bird => {
	let newBird: Bird = {
		name: name_,
		description: description_,
		climate: climate_,
		prefFood: food_,
		image: `assets/${name_}.png` // de image wordt op basis van de naam gekozen, is makkelijker en dynamisch
	};
	return newBird;
};

export const returnBird = (bird_: Bird, birds_: Array<Bird>, climate_: Climate, availableFood_: Array<Food>): Bird | null => {
	if (bird_.name !== 'vink') {
		return null;
	}
	
	let birdsInClimate = birds_.filter((bird: Bird): boolean => bird.climate === climate_);
	let birdsInClimateWithFood = birdsInClimate.filter((bird: Bird): boolean => bird.prefFood.some((food: Food): boolean => availableFood_.includes(food)));
	let bird = birdsInClimateWithFood[Math.floor(Math.random() * birdsInClimateWithFood.length)];
	return bird;
}