  /* Task 1 */

// a)
let x = 1;
let y = 2;

let res1 = x.toString() + y;

console.log(res1); // "12"
console.log(typeof res1); // "string"

// b)
let res2 = Boolean(x) + String(y);

console.log(res2); // "true2"
console.log(typeof res2); // "string"

// c)
let res3 = x < y;

console.log(res3); // true
console.log(typeof res3); // "boolean"

// d)
let res4 = (x + y) * undefined;
console.log(res4); // NaN
console.log(typeof res4); // "number"

  /* Task 2 */

// a)

  let num1;

  do {
      num1 = prompt ("Enter your number, please");
  }
  while(num1 === undefined || num1 === null || num1 === '')


(num1 % 2) === 0 ? console.log("Число четное") : console.log("Число нечетное");


// b)
let num2 = prompt('Enter your number, please');
(num2 % 7) === 0 ? console.log("Число є кратним 7") : console.log("Число не є кратним 7");

  /* Task 3 */

let arr = [];

arr.push(1);
arr[1] = 'Hello';
arr[2] = true;
arr[3] = null;
let forArray = prompt('Enter your number, please');
arr[4] = forArray;

console.log(arr);
console.log(arr[4]);

arr.shift();

console.log(arr);

  /* Task 4 */

let cities = ["Rome", "Lviv", "Warsaw"];

let someVar = cities.join('*');
let resArr = [];
resArr.push(someVar);

console.log(resArr);

  /* Task 5 */

let isAdult = prompt('Are you adult?');

if (isAdult >= 18) {
    console.log('Ви досягли повнолітнього віку');
} else if (isAdult < 10) {
    console.log('Ви ще надто молоді');
} else console.log('Ваш вік від 10 до 18 років');

  /* Task 6 */

let firstSide;
let secondSide;
let thirdSide;

firstSide = prompt(`Введіть першу сторону трикутника`);
if (firstSide === undefined || firstSide === null || firstSide === '') {
    console.log('First side incorrect data');
}

secondSide = prompt(`Введіть другу сторону трикутника`);
if (secondSide === undefined || secondSide === null || secondSide === ''){
    console.log('Second side incorrect data');
}

thirdSide = prompt(`Введіть третю сторону трикутника`);
if (thirdSide === undefined || thirdSide === null || thirdSide === ''){
    console.log('Third side incorrect data');
}

let p = (+firstSide + +secondSide + +thirdSide) / 2;
let square = Math.sqrt(p * (p - firstSide) * (p - secondSide) * (p - thirdSide));

if (Math.pow(+firstSide, 2) + Math.pow(+secondSide, 2) === Math.pow(+thirdSide, 2) ||
    Math.pow(+firstSide, 2) + Math.pow(+thirdSide, 2) === Math.pow(+secondSide, 2) ||
    Math.pow(+thirdSide, 2) + Math.pow(+secondSide, 2) === Math.pow(+firstSide, 2)) {

    console.log('Треугольник является прямоугольным');

} else console.log('Треугольник не является прямоугольным');

console.log(`Площадь треугольника равна ${square.toFixed(3)}`);

  /* Task 7 */

let hours = new Date().getHours();

if (hours >= 5 && hours < 11) {
    console.log('Доброго ранку');
}else if (hours >= 11 && hours < 17) {
    console.log('Доброго дня');
}else if (hours >= 17 && hours < 23) {
    console.log('Доброго вечора');
} else console.log('Доброї ночі');


switch (true) {
    case hours >= 5 && hours < 11:
        console.log('Доброго ранку');
        break;
    case hours >= 11 && hours < 17:
        console.log('Доброго дня');
        break;
    case hours >= 17 && hours < 23:
        console.log('Доброго вечора');
        break;
    default :
        console.log('Доброї ночі');
}
