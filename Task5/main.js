/* Task 1 */

function propsCount(currentObject) {
    return Object.entries(currentObject).length;
}

let mentor = {
    course: "JS fundamental",
    duration: 3,
    direction: "web-development",
    group: 24,
};

console.log(propsCount(mentor));

/* Task 2 */

let car = {
    wheel: 4,
    color: 'red',
    size: 'big',
    headlight: 2,
    property: true,
};

console.log(Object.keys(car));
console.log(Object.values(car));

/* Task 3 */

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName = () => `${this.name} ${this.surname}`;
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }
    showCourse() {
        const currentYear = new Date().getFullYear();
        const course = currentYear - this.year;
        if (course > 0 && course < 7) {
            return course;
        } else {
            return 'Already graduated';
        }
    };

    showFullName = (middleName) => `${this.name} ${middleName} ${this.surname}`;
}

let stud1 = new Student('Petro', 'Petrenko', 2015);
console.log(stud1.showFullName('Petrovych'));
console.log('Current course: ' + stud1.showCourse());

/* Task 4 */

class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary = () => this.dayRate * this.workingDays;

    showSalaryWithExperience = () => {
        const salary = this.showSalary();
        return salary * this.#experience;
    }

    get showExp () {
        return this.#experience;
    }

    set setExp (value) {
        return this.#experience = value;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);

console.log(`${worker1.fullName} salary: ${worker1.showSalary()}`);
console.log("New experience: " + worker1.showExp);

console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);
worker1.setExp = 1.5;

console.log("New experience: " + worker1.showExp);
console.log(`${worker1.fullName} salary: ${worker1.showSalaryWithExperience()}`);


let worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);

console.log(`${worker2.fullName} salary: ${worker2.showSalary()}`);
console.log("New experience: " + worker2.showExp);

console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);
worker2.setExp = 1.7;

console.log("New experience: " + worker2.showExp);
console.log(`${worker2.fullName} salary: ${worker2.showSalaryWithExperience()}`);


let worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);

console.log(`${worker3.fullName} salary: ${worker3.showSalary()}`);
console.log("New experience: " + worker3.showExp);

console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);
worker3.setExp = 1.9;

console.log("New experience: " + worker3.showExp);
console.log(`${worker3.fullName} salary: ${worker3.showSalaryWithExperience()}`);


let salary = {};

const firstWorker = worker1.fullName;
salary[firstWorker] = worker1.showSalary();

const secondWorker = worker2.fullName;
salary[secondWorker] = worker2.showSalary();

const thirdWorker = worker3.fullName;
salary[thirdWorker] = worker3.showSalary();

console.log(salary);

let entries = Object.entries(salary);

let sortedArr = entries.sort((a, b) => a[1] - b[1]);

console.log('Sorted salary:');
for (let i of sortedArr) {
    console.log(`${i[0]}: ${i[1]}`);
}

/* Task 5 */

class GeometricFigure {
    constructor() {
    }

    getArea = () => 0;

    toString = () => Object.getPrototypeOf(this).constructor.name;
}

class Triangle extends GeometricFigure {
    constructor(a, h) {
        super();
        this.a = a;
        this.h = h;
    }

    getArea = () => 0.5 * this.a * this.h;
}
class Square extends GeometricFigure {
    constructor(a) {
        super();
        this.a = a;
    }

    getArea = () => Math.pow(this.a, 2);
}

class Circle extends GeometricFigure {
    constructor(r) {
        super();
        this.r = r;
    }

    getArea = () => Math.PI * Math.pow(this.r,2);
}

const triangle = new Triangle(4, 5);
const square = new Square(7);
const circle = new Circle(5);

const figures = [triangle, square, circle];

function handleFigures(figures) {
    let totalArea = 0;
    let outputData = '';

    for (let obj of figures) {
        if (obj instanceof GeometricFigure) {
            let objName = obj.toString();
            let area = obj.getArea();
            totalArea += area;
            outputData += `Geometric figure: ${objName} - area: ${area} \n`;
        } else {
            outputData += 'Is not from Geometric figure \n';
        }
    }
    outputData += `Total area: ${totalArea}`;
    return outputData;
}

console.log(handleFigures(figures));
