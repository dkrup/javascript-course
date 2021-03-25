// Task 1

const string = 'regexp';
const upCase = 'RegExp';

function upperCase(string) {
    let reg = /^[A-Z]+/;

    if (reg.test(string)) {
        console.log(`String starts with uppercase character`);
    } else {
        console.log(`String does not start with uppercase character`);
    }
}

upperCase(upCase);

// Task 2

const email = "Qmail2@gmail.com";

function checkEmail(email) {
    const regExp = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]/;
    console.log(regExp.test(email));
}

checkEmail(email);

// Task 5

const twoWords = 'Java Script';

function changeString(someString) {
    const firstWord = /^\S+/;
    const secondWord = /[^\s]+$/;
    return `${someString.match(secondWord)}, ${someString.match(firstWord)}`;
}

console.log(changeString(twoWords));

// Task 6

function checkEmail1(email) {
    const regExp = /^[a-zA-Z0-9_]+-?[a-zA-Z0-9_]+@[a-z0-9]+\.[a-z]+$/;

    if (regExp.test(email)) {
        console.log(`Email is correct!`);
    }
    else {
        console.log(`Email is not correct!`);
    }
}

checkEmail1('my_mail@gmail.com');

// Task 7

function checkLogin(login) {
    const regExp1 = /^.{2,10}$/;
    const regExp2 = /[a-zA-Z]+([0-9]+\.[0-9]+)?[0-9]*/;
    const regExp3 = /^[a-zA-Z].+/;

    console.log(login.match(/[0-9]+(\.[0-9]+)?/g));

    return regExp1.test(login) && regExp2.test(login) && regExp3.test(login);
}

console.log(checkLogin('ee1.1ret3'));
