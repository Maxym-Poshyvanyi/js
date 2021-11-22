// //- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function xx (a,b) {
//     return a*b;
// }
// let x=xx(5,10);
// console.log(x);

// //- створити функцію яка обчислює та повертає площу кола з радіусом r
// const pi=3.14;
// function sq(r) {
//     let s=pi*(r**2);
//     return s;
// }
// console.log(sq(3));

// //- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// const pi=3.14;
// function sq(h,r) {
//     let s=2*pi*h*r;
//     return s;
// }
// console.log(sq(5,3));

// //- створити функцію яка приймає масив та виводить кожен його елемент
// function arr(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
// arr([1,2,3,4]);

// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function paragraph(p) {
//     document.write(`<p>${p}</p>`);
// }
// paragraph('hello');
// paragraph('World');

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function list(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
// list('item');

// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function list(text, i) {
//     document.write(`<ul>`);
//     for (let j = 0; j < i; j++) {
//         document.write(`<li>${text} ${j + 1}</li>`);
//     }
//     document.write(`</ul>`);
// }
// list('item', 3);

// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function arr(array) {
//     document.write(`<ul>`);
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`);
//     }
//     document.write(`</ul>`);
// }
// arr([1, '2', 5 > 7, 'hello', true]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arruser(array) {
    for (const item of array) {
        document.write(`<div>`)
        for (const itemKey in item) {
            document.write(`${itemKey} - ${item[itemKey]}, `);
        }
        document.write(`</div>`);
    }
}
arruser([{id: 1, name: 'Vlad', age: 21},
           {id: 2, name: 'Vitaliy', age: 20},
           {id: 3, name: 'Oleh', age: 20},
           {id: 4, name: 'Valeriy', age: 20}]);

