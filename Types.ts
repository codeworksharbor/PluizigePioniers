export type Food = 'berry' | 'fish' | 'meat' | 'insect' | null;

export type Climate = {
	name: 'tundra' | 'desert' | 'hills' | 'jungle' | 'arctic',
	food: Array<Food>,
};

export type Bird = {
	name: string,
	climate: Climate,
	prefFood: Array<Food>,
	image: `assets/${string}`,
};