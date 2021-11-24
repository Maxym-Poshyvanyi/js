//Всі функції повинні бути описані стрілочним типом!!!!
//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let minimal = (a, b, c) => {
//    if ((a < b) && (a < c)) {
//        return a;
//    } else if ((b < a) && (b < c)) {
//        return b
//    }
//    if ((c < b) && (a > c)) {
//        return c;
//    } else {
//        return 0
//    }
// }
// console.log(minimal(-90, 0, 0));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// const Maximum = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3) {
//         document.write(num1);
//         console.log(num1);
//     } else if (num2 > num3 && num2 > num1) {
//         console.log(num2);
//         document.write(num2);
//     } else {
//         console.log(num3);
//         document.write(num3);
//     }
// };
// Maximum(40000, 2000, 7000);

//- створити функцію яка повертає найбільше число з масиву
// let arrmax = (arr) => {
//    let max = arr[0];
//    for (const item of arr) {
//        if (item > max) {
//            max = item;
//        }
//    }
//    return max;
// }
//
// console.log(arrmax([-5, 0, 23, 1, 5]))

//- створити функцію яка повертає найменьше число з масиву
//let minimal = (arr) => {
//    let min = arr[0];
//    for (const item of arr) {
//        if (item < min) {
//            min = item;
//        }
//    }
//    return min;
//}
//console.log(minimal([-5, 0, 23, 1, 5]))

//- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//let arrS = (arr) => {
//    let s = 0;
//    for (const item of arr) {
//        s += item;
//    }
//    return s;
//}
//console.log(arrS([1, 2, 3, 4]));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//let ArrS = (arr) => {
//    let s = 0;
//    for (const item of arr) {
//        s += item;
//    }
//    return s/arr.length;
//}
//console.log(ArrS([1, 2, 3, 4]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minimalmaximum = (arr) => {
//    let max = arr[0];
//    let min = arr[0];
//    for (const item of arr) {
//        if (item > max) {
//            max = item;
//        }
//        if (item < min) {
//            min = item;
//        }
//    }
//    console.log(max);
//    return min;
// }
// minimalmaximum([-6, 500, 0, 800, 2])

//- створити функцію яка заповнює масив рандомними числами
//(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// let viewArrayNumbers = (countNumbers) => {
//     let Array = [];
//     for (let i = 0; i < countNumbers; i++) {
//         Array[i] = Math.round(Math.random() * 100);
//     }
//     console.log(Array.join(', '));
// };
//
// viewArrayNumbers(myNumberB);

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let randomarr = (arr, limit) => {
//    for (let i = 0; i < 10; i++) {
//        arr[i] = Math.round(Math.random() * limit);
//    }
//    return arr;
// }
// console.log(randomarr([],74));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let reversearr = (arr) => {
//    let arr_reverse = [];
//    for (let i = 0, j = arr.length - 1; i < arr.length; i++,j--) {
//        arr_reverse[j] = arr[i];
//    }
//    return arr_reverse;
// }
//
// console.log(reversearr([1, 2, 3]));
