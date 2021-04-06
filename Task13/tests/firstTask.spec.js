const sum = require('../data/sum');

describe('Task 1', () => {
    test('verify 0.1 plus 0.2 equals 0.3', () => {
        expect(sum(0.1, 0.2)).toEqual(0.3);
    });
});
