// --створити масив з:
// - з 5 числових значень
// - з 5 стрічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ['master', 'git', 'web', 'storm', 'project'];
let arrayThree = ['good', true, 'bad', false, 4];
console.log(arrayOne.toString());
console.log('' + arrayTwo);
console.log(arrayThree.join(', '));

// Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
// Вивести в консоль
let Array = [];
Array[0] = 11;
Array[1] = '22';
Array[2] = 33;
console.log(Array.join(' '));

// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> Передаю </div>`);
}
// За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div> ${i} Привіт </div>`);
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let itemCount = 20;
let item = 1;
while (item <= itemCount) {
    document.write(`<h1> студентам </h1>`);
    item++;
}
// За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
item = 1;
while (item <= itemCount) {
    document.write(`<h1> ${item} Октену </h1>`);
    item++;
}

// Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let vNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const item of vNumber) {
    console.log(item);
}
// Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
let vString = ['i9', 'i8', 'i7', 'i6', 'i5', 'i4', 'i3', 'i2', 'i1', 'i0'];
for (let item of vString) {
    console.log(item);
}
// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let vAny = ['9', [], {}, 6, true, '4', 3, 'McD', false, 'car'];
for (let item of vAny) {
    console.log(item);
}
// Створити масив з 10 елементів числового, стрічкового і булевого типу.
// За допомогою if та typeof вивести тільки булеві елементи
let vTarget = [1, false, 'white', 9, true, 'else', 3, 'if', 'step', false];
for (let xItem of vTarget) {
    if (typeof xItem === "boolean") {
        console.log(xItem);
    }
}
// За допомогою if та typeof вивести тільки числові елементи
for (let yItem of vTarget) {
    if (typeof yItem === "number") {
        console.log(yItem);
    }
}
// За допомогою if та typeof вивести тільки рядкові елементи
for (let element of vTarget) {
    if (typeof element === "string") {
        console.log(element);
    }
}

// Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.
let zIndex = [];
zIndex[0] = 'string';
zIndex[1] = true;
zIndex[2] = 'Lviv';
zIndex[3] = 999;
zIndex[4] = 'blue';
zIndex[5] = false;
zIndex[6] = 'green';
zIndex[7] = 'we';
zIndex[8] = 'black';
zIndex[9] = 'orange';
for (let item of zIndex) {
    console.log(item);
}
// Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(` ${i}`);
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(` ${i}`);
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(` ${i}`);
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// Вообще-то энциклопедия вкладывает иной смысл в слово ПАРА.
// Наверно имелись ввиду четные.
for (let i = 1; i <= 100; i++) {
    if (!(i % 2)) {
        console.log(i);
        document.write(` ${i}`);
    }
}
document.write(`<br>`);
// Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// Наверно имелись ввиду нечетные.
for (let i = 1; i <= 100; i++) {
    if (i % 2) {
        console.log(i);
        document.write(` ${i}`);
    }
}
document.write(`<br>`);
