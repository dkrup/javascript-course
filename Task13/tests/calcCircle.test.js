import { getCircleLength, getCircleArea } from '../data/calcCircle';

describe('Task 3', () => {
    test('verify circle length equals 138.2', () => {
        const circleLength = getCircleLength(22).toFixed(1);
        expect(+circleLength).toEqual(138.2);
    });

    test('verify circle area equals 254.47', () => {
        const circleArea = getCircleArea(9).toFixed(2);
        expect(+circleArea).toEqual(254.47);
    });

    test('verify functions without arguments', () => {
        const circleLength = getCircleLength();
        const circleArea = getCircleArea();
        expect(circleLength).toBe(NaN);
        expect(circleArea).toEqual(NaN);
    });
});
