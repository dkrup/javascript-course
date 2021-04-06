import {filterFoodPrice} from '../data/food';

const min = 12;
const max = 40;
const food = [
    { kind: 'potato', price: 10 },
    { kind: 'bred', price: 16 },
    { kind: 'pepper', price: 27 },
    { kind: 'banana', price: 32 },
    { kind: 'lemon', price: 50 }
];

describe('Task 4', () => {
    test('verify array length equals 3', () => {
        expect(filterFoodPrice(food, min, max).length).toEqual(3);
    });

    test('verify if array includes { kind: "pepper", price: 27 }', () => {
        expect(filterFoodPrice(food, min, max)).toContainEqual({ "kind": "pepper", "price": 27 });
    });

    test('verify if array includes 2,3,4 elements', () => {
        expect(filterFoodPrice(food, min, max)).toContainEqual(food[1]);
        expect(filterFoodPrice(food, min, max)).toContainEqual(food[2]);
        expect(filterFoodPrice(food, min, max)).toContainEqual(food[3]);
    });

    test('verify if 1st element value is greater than min', () => {
        expect(filterFoodPrice(food, min, max)[0].price).toBeGreaterThan(min);
    });

    test('verify if 3rd element value is less than max', () => {
        expect(filterFoodPrice(food, min, max)[2].price).toBeLessThan(max);
    });

    test('verify if array does not include { kind: "lemon", price: 50 }', () => {
        expect(filterFoodPrice(food, min, max)).not.toContainEqual({ "kind": "lemon", price: 50 });
    });

    test('do not know what else to test:)', () => {
        expect(filterFoodPrice(food, min, max)).not.toBeUndefined();
    });

    test('do not know what else to test:))', () => {
        expect(filterFoodPrice(food, min, max)).not.toBeNull();
    });
});
