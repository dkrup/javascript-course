// Task 2
console.log('Krupchenko');

// Task 3
const firstVariable = 'age';
let secondVariable = '30';
console.log(firstVariable);
console.log(secondVariable);

secondVariable = firstVariable;
console.log(firstVariable);
console.log(secondVariable);

// Task 4
const obj = {
    'String': 'Hello',
    'Number': 5,
    'Boolean': true,
    'Undefined': undefined,
    'Null': null,
}
console.log(obj);

// Task 5
let isAdult = confirm('Are you adult?');
console.log(isAdult);

// Task 6
let name = 'Denys';
let surname = 'Krupchenko';
let group = 'JavaScript Retraining for QA';
let myAge = 34;
let isMarried = false;

console.log(typeof name);
console.log(typeof surname);
console.log(typeof group);
console.log(typeof myAge);
console.log(typeof isMarried);

console.log(myAge);
console.log(typeof isMarried);
console.log(typeof name);

let nullVar = null;
let undefinedVar = undefined;
console.log(typeof nullVar);
console.log(typeof undefinedVar);

// Task 7
let data = {
    login: 'Admin',
    email: '123@gmail.com',
    pass: 'qwerty',
}

for (let key in data) {
    window.prompt('Dear User, your ' + key + ' is', data[key]);
}

// Task 8
function countSeconds (hours, days, months) {
    const secondsInOneMinute = 60;
    const secondsInOneHour = secondsInOneMinute * 60;
    const secondsInOneDay = secondsInOneHour * 24;
    const secondsInOneMonth = secondsInOneDay * 31;

    const secondsInHours = hours * secondsInOneHour;
    const secondsInDays = secondsInOneDay * days;
    const secondsInMonths = secondsInOneMonth * months;

   return {
       secondsInHours: `${secondsInHours} seconds in ${hours} hour(s)`,
       secondsInDays: `${secondsInDays} seconds in ${days} day(s)`,
       secondsInMonths: `${secondsInMonths} seconds in ${months} month(s)`,
   };
}

console.log(countSeconds(3, 3, 3));
