const userList = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];

describe('Task 2', () => {
    test('verify if element "admin" exists', () => {
        const element = 'admin';
        expect(userList.includes(element)).toBe(true);
    });

    test('verify first elem is "Nick"', () => {
        const firstElem = 'Nick';
        expect(userList[0]).toEqual(firstElem);
    });

    test('verify last elem is "new_user_2"', () => {
        const array = ['Nick', 'Kate', 'quest123', 'admin', 'new_user_2'];
        const lastElem = 'new_user_2';
        expect(array.pop()).toEqual(lastElem);
    });

    test('verify if array length equals 5', () => {
        const arrLength = userList.length;
        expect(arrLength).toEqual(5);
    });

    test('verify the type of 3rd element is "string"', () => {
        const thirdElemType = typeof userList[2];
        expect(thirdElemType).toBe('string');
    });

    test('verify there is no 8th elem in array', () => {
        const eigthElem = userList[7];
        expect(eigthElem).toEqual(undefined);
    });
})
