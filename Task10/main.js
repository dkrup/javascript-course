// Task 1

function getPromise(message, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then((data) => {
    console.log(data);
});

// Task 2

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        let sum = 1;
        for (let i of arr) {
            if (typeof i === 'number') {
                sum *= i;
            } else {
               reject(`Error! Incorrect array!`);
               break;
            }
        }
        resolve(sum);
    });
}

calcArrProduct([3,4,5]).then(result => console.log(result)); // 60
calcArrProduct([5,"user2", 7,"user1", 12]).then(result => console.log(result));
// "Error! Incorrect array!"

// Task 3

const delay = (i, time) => new Promise(
    resolve => setTimeout(() => resolve(i), time)
);

function showNumbers() {
    const min = 0;
    const max = 5000;

    let i = 0;
    delay(i, getRand(min, max)).then((response) => {
        console.log(response);
        return delay(i + 1, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 2, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 3, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 4, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 5, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 6, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 7, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 8, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 9, getRand(min, max));
    }).then((response) => {
        console.log(response);
        return delay(i + 10, getRand(min, max));
    }).then((response) => {
        console.log(response);
    });
}

function getRand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

showNumbers();

// Task 4

const deLay = (i, time) =>
    new Promise(resolve => setTimeout(() => resolve(console.log(i)), time)
);

async function showNumbers1() {
    const min = 0;
    const max = 5000;

    let i = 0;
    for (i; i <= 10; i++) {
        await deLay(i, getRand(min, max));
    }
}

// showNumbers1().then();
