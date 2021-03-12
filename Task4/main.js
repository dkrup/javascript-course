/* Task 1 */

function calcRectangleArea (width, height) {
    if (typeof width === "number" && typeof height === "number") {
        return 0.5 * width * height;
    }
    throw new Error('Entered values are not numbers');
}

try {
    console.log(calcRectangleArea(5, 8));
} catch (e) {
    console.log(e.name, e.message);
}

/* Task 2 */

function checkAge(num) {
    if (num === null || num === undefined || (typeof num === 'string' && num.trim() === '')) {
        throw new Error ('The field is empty! Please enter your age');
    } else if (typeof num !== "number") {
        throw new Error ('The entered value is not a number');
    } else if (num < 14) {
        throw new Error ('You are younger, than 14');
    }
}

let num = 14;

try {
    checkAge(num);
    alert(`You have access to movies`);
} catch (e) {
    console.log(e.name, e.message);
}

/* Task 3 */

const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

class MonthException {
    constructor(message) {
        this.name = 'MonthException';
        this.message = message;
    }
}

function showMonthName(month){
    if (month > 0 && month < 13) {
        return monthArr[month - 1];
    }
    throw new MonthException(`Incorrect month number`);
}

try {
    console.log(showMonthName(14));
} catch (e) {
    console.log(e.name, e.message);
}

/* Task 4 */

function showUser(id) {
    if (id < 0) {
        throw new Error(`Id must not be negative: ${id}`);
    }
    return {id: id};
}

console.log(showUser(5));

function showUsers(ids) {
    let array = [];
    for (let id of ids) {
        try {
            array.push(showUser(id));
        } catch(e) {
            console.log(`${e.name}: ${e.message}`);
        }
    }
    return array;
}

console.log(showUsers([7, -12, 44, 22]));
