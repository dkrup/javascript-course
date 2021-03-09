/* Task 1 */

function calcRectangleArea (width, height) {
    if (typeof width === "number" && typeof height === "number") {
        console.log (0.5 * width * height); // return
    }
    throw new Error('Entered values are not numbers');
}

try {
    calcRectangleArea(5, 8);
} catch (e) {
    console.log(e.name, e.message);
}

/* Task 2 */

function checkAge(num) {
    if (num === null || num === undefined) {
        alert('The field is empty! Please enter your age');
    } else if (typeof num !== "number") {
        alert('The entered value is not a number');
    } else if (num < 14) {
        alert('You are younger, than 14');
    } else {
        throw new Error('Something went wrong! Please, try one more time');
    }
}

let num = '';

try{
    checkAge(num);
} catch (e) {
    console.log(e.name);
    console.log(e.message);
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
    if (id >= 0) {
        return {id: id};
    }
    throw new Error(`Id must not be negative: ${id}`);
}

console.log(showUser(5));

function showUsers(ids) {
    let array = [];
    for (let id of ids) {
        if (id >= 0) {
            array.push(showUser(id));
        }
    }
    return array;
}

console.log(showUsers([7, -12, 44, 22]));
