export type ClimateName = 'tundra' | 'desert' | 'hills' | 'jungle' | 'arctic';
export type Food = 'berry' | 'fish' | 'meat' | 'insect' | 'seed';
export type DictionaryFood = {
    [food in Food]: number;
};
export type Climate = {
    name: ClimateName;
    food: DictionaryFood;
};
export type Bird = {
    name: string;
    description: string;
    climate: Climate;
    prefFood: Array<Food>;
    image: `assets/birds/${string}`;
};
export type CollectionBook = {
    progress: number;
    birds: Array<Bird>;
};
//# sourceMappingURL=Types.d.ts.map