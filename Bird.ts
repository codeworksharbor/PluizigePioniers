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
		image: `assets/birds/${name_}.png` // de image wordt op basis van de naam gekozen, is makkelijker en dynamisch
	};
	return newBird;
};

/**
 * Zoek een vogel in de vogels lijst 
 *
 * @param {string} name_ - de naam van de vogel
 * @param {Array<Bird>} birds - de vogels waar je in wilt zoeken
 *
 * @returns {Bird} - de vogel die je wilde zoeken
 */
export const findBird = (name_: string, birds: Array<Bird>): Bird => birds.find((bird: Bird): boolean => bird.name === name_)!;

/**
 * Functie om een vogel te returnen op basis van gegeven klimaat, eten en vogels
 *
 * @param {Climate} climate_ - de klimaat waar de huidige vogel door de gebruiker naartoe is getrokken
 * @param {Array<Bird>} birds - de vogels waar je in wilt Zoeken naar vogels in dat klimaat
 * @param {Bird} bird - de huidige vogel die de gebruiker heeft getrokken
 */
export const getNewBird = (climate_: Climate, birds: Array<Bird>, bird: Bird): Bird => {

	let newBird: Bird = bird;
	if (bird.name === 'Vink') {
		let foodTypes = climate_.food;
		// zoekt het meest voorkomende eten in het klimaat
		let food = Object.keys(foodTypes).reduce((a, b) => foodTypes[a] > foodTypes[b] ? a : b);
		// zoekt alle vogels in het klimaat die het meest voorkomende eten eten
		let birdsInClimate = birds.filter((bird: Bird): boolean => bird.climate === climate_ && bird.prefFood.includes(food as Food));
		newBird = birdsInClimate[Math.floor(Math.random() * birdsInClimate.length)];
	}
	return newBird;
};
