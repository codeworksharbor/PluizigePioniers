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
export declare const createBasicBird: (name_: string, description_: string, climate_: Climate, food_: Array<Food>) => Bird;
/**
 * Zoek een vogel in de vogels lijst
 *
 * @param {string} name_ - de naam van de vogel
 * @param {Array<Bird>} birds - de vogels waar je in wilt zoeken
 *
 * @returns {Bird} - de vogel die je wilde zoeken
 */
export declare const findBird: (name_: string, birds: Array<Bird>) => Bird;
//# sourceMappingURL=Bird.d.ts.map