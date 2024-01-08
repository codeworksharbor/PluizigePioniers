"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bird_1 = require("./Bird");
describe('getNewBird', () => {
    it('should return the same bird if the bird name is not "Vink"', () => {
        const bird = { name: 'Merel', climate: climate, prefFood: ['insects'] };
        const newBird = (0, Bird_1.getNewBird)(climate, birds, bird);
        expect(newBird).toBe(bird);
    });
    it('should return a random bird from the same climate and with the preferred food if the bird name is "Vink"', () => {
        const bird = { name: 'Vink', climate: climate, prefFood: ['seeds'] };
        const newBird = (0, Bird_1.getNewBird)(climate, birds, bird);
        expect(birds).toContain(newBird);
        expect(newBird.climate).toBe(climate);
        expect(newBird.prefFood).toContain('seeds');
    });
});
//# sourceMappingURL=Bird.test.js.map