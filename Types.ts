export type ClimateName = 'tundra' | 'desert' | 'hills' | 'jungle' | 'arctic';

export type Food = 'berry' | 'fish' | 'meat' | 'insect' | 'seed' | null;

export type Climate = {
	name: ClimateName,
	food: Array<Food>,
};

export type Bird = {
	name: string,
	description: string,
	climate: Climate,
	prefFood: Array<Food>,
	image: `assets/${string}`,
};

export type CollectionBook = {
	progress: number,
	birds: Array<Bird>,
};