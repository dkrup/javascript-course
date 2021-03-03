        /* Task 1 */

        // Variant 1
const arr = [2, 3, 4, 5];
let elem = 1;

for (let i in arr) {
  elem *= arr[i];
}

console.log(elem);

        // Variant 2

const arr2 = [2, 3, 4, 5];
let elem2 = 1;

for (let i of arr2) {
  elem2 *= i;
}

console.log(elem2);

        // Variant 3

const arr3 = [2, 3, 4, 5];
let elem3 = 1;

for (let i = 0; i < arr3.length; i++) {
  elem3 *= arr3[i];
}

console.log(elem3);

        // Variant 4

const arr4 = [2, 3, 4, 5];
let elem4 = 1;

arr4.forEach((i) => elem4 *= i);

console.log(elem4);

        // Variant 5

const arr5 = [2, 3, 4, 5];
let elem5 = 1;

arr5.map((i) => elem5 *= i);

console.log(elem5);

        // Variant 6

const arr6 = [2, 3, 4, 5];
let elem6 = 1;
let i = 0;

while (i < arr6.length) {
    elem6 *= arr6[i];
    i++;
}

console.log(elem6);

        /* Task 2 */

for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0){
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}

        /* Task 3 */

const min = 1;
const max = 500;

function randArray(num) {
    let k = [];
    for (let i = 1; i <= num; i++) {
        let rand = Math.floor(Math.random() * (max - min)) + min;
        console.log(rand);
        k.push(rand);
    }
    return k;
}

console.log(randArray(7));

        /* Task 4 */

        // Variant 1
function raiseToDegree(a, b) {
  let result = a;
  for (let i = 1; i < b; i++){
      result *= a;
  }
  return result;
}

console.log(raiseToDegree(
    prompt ("Введите число"),
    prompt ("Введите степень возведения числа")
));

        // Variant 2
function raiseToDegree1(a, b) {
    if (b === 0) {
        return 1;
    } else if (b === 1) {
        return a;
    }

    return a * raiseToDegree1(a, b - 1);
}

console.log(raiseToDegree1(
    prompt ("Введите число"),
    prompt ("Введите степень возведения числа")
));

        /* Task 5 */

        // Variant 1
function findMin() {
  return Math.min(...arguments);
}

console.log(findMin(5, 2, 7, -4));

        // Variant 2
function findMin1() {
    let num = 0;
    for (let i in arguments) {
        if (+i === 0) {
            num = arguments[i];
            continue;
        }
        if (num > arguments[i]) {
            num = arguments[i];
        }
    }
    return num;
}

console.log(findMin1(5, 2, 7, -4));

        /* Task 6 */

let unique = (arr) => {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }

    return result;
}

function findUnique(arr) {
    let arrString = arr.join('');
    let uniqueString = unique(arr).join('');
    if (arrString === uniqueString) {
        console.log(true);
    } else {
        console.log(false);
    }
}

findUnique([3, 4, 5, 6, 4]);

        /* Task 7 */

function lastElement(array, numberOfLastElements) {
    if (numberOfLastElements === undefined) {
        numberOfLastElements = 1;
    }

    let arr = [];
    for (let i = 0; i < numberOfLastElements; i++) {
        arr.push(array.pop());
    }
    return arr.reverse();
}

console.log(lastElement([2, 3, 7, 9, 12], 2));

        /* Task 8 */

function changeFirstLetters(string) {
    let res;
    let arrFromString = string.split(' ');
    let arrNew = [];

    for (let i of arrFromString) {
        res = i[0].toUpperCase() + i.slice(1);
        arrNew.push(res);
    }

    return arrNew.join(' ');
}

console.log(changeFirstLetters('i love java script'));
