// // - створити функцію яка обчислює та повертає площу прямокутника
//
// const rectangle = (a, b) => {
//     return a * b;
// }
// console.log(rectangle(10, 10));
// document.write('Площа прямокутника: ' + rectangle(10, 10));

// // - створити функцію яка обчислює та повертає площу кола
// let area= (r)=>3.14*(r**2);
// console.log(area(5));

//- створити функцію яка обчислює та повертає площу циліндру
//let area= (h,r)=>2*3.14*h*r;
//console.log(area(5,6));

//- створити функцію яка приймає масив та виводить кожен його елемент
//let f_arr = (arr) => {
//    for (const item of arr) {
//        console.log(item);
//    }
//}
//f_arr([1, 2, 3, 4, 5]);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент
//let p=(text)=>{
//    document.write(`${text}`)
//}
//p(prompt('Введіть текст'));

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//let ul=(text)=>{
//    document.write(`<ul>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`<li>${text}</li>`);
//    document.write(`</ul>`);
//}
//ul('li');

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//let ul = (text, count) => {
//    document.write(`<ul>`);
//    for (let i = 0; i < count; i++) {
//        document.write(`<li>${text}</li>`);
//    }
//    document.write(`</ul>`);
//}
//
//ul('item', 7);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//let list = (arr) => {
//    document.write(`<ul>`);
//    for (const item of arr) {
//        document.write(`<li>${item}</li>`);
//    }
//    document.write(`</ul>`);
//}
//list([1, 'string', 5 > 6, -6]);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arr=(arr)=>{
for (const item of arr) {
    document.write(`<div>`);
    for (const itemKey in item) {
        document.write(`${itemKey} - ${item[itemKey]}, `);
    }
    document.write(`</div>`);
}
}

arr([{id: 1, name: 'Max', age: 19},
    {id: 2, name: 'Vlad', age: 21},
    {id: 3, name: 'Valeriy', age: 43},
    {id: 4, name: 'Oleg', age: 15}]);
