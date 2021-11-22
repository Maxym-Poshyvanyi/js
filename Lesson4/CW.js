// //- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function minimal(a, b, c) {
//     let min = '';
//     if ((a < b) && (a < c)) {
//         min = a;
//     } else if ((b < a) && (b < c)) {
//         min = b;
//     } else if ((c < a) && (c < a)) {
//         min = c;
//     }
//     console.log(min);
// }
// minimal(4, 0, 800);


// //- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function maximal(a, b, c) {
//     if ((a > b) && (a > c)) {
//         maximal = a;
//     } else if ((b > a) && (b > c)) {
//         maximal = b;
//     } else if ((c > a) && (c > a)) {
//         maximal = c;
//     }
//     console.log(maximal);
// }
// maximal(-8, -5, -3);


// //- створити функцію яка повертає найбільше число з масиву
// function arr_maximal(array) {
//     return Math.max.apply(null, array);
// }
// console.log(arr_maximal([-5, -4, -15, -5]));


// //- створити функцію яка повертає найменьше число з масиву
// function arr_minimal(array) {
//     return Math.min.apply(null, array);
// }
// console.log(arr_minimal([-5, -4, -15, -5]));


// //- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// function arr(array) {
//     let sum=0;
//     for (const arrayElement of array) {
//        sum+=arrayElement;
//     }
//     return sum;
// }console.log(arr([1, 2, 65, -5]));


// //- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function arr(array) {
//     let sum=0;
//     for (const arrayElement of array) {
//         sum+=arrayElement;
//     }
//     return sum / array.length;
// }
// console.log(arr([1, 2, 65, -5]));


// //- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minimal_maximal(nums) {
//     let max = nums[0];
//     let min = nums[0];
//     for (const num of nums) {
//         if (num > max) {
//             max = num;
//         }
//         if (num < min) {
//             min = num;
//         }
//     }
//     console.log(max)
//     return min;
// }
// let nums = [5, -4, 18, 0]
// console.log(minimal_maximal(nums));


// //- створити функцію яка заповнює масив рандомними числами
// //(цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// function gen_random() {
//     let array = [];
//     for (let i = 0; i < 5; i++) {
//         array[i] = Math.round(Math.random() * 100);
//     }
//     return array;
// }console.log(gen_random());


// //- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// function number_random(limit) {
//     let array = [];
//     for (let i = 0; i < 5; i++) {
//         array[i] = Math.round(Math.random() * limit + 1) - 1
//     }
//     return array;
// }console.log(number_random(7))


//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
function arr_reverse(array) {
    let array2 = []
    for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
        array2[j] = array[i];
    }return array2;
}
let arr = [1, 2, 3];
console.log(arr);
console.log(arr_reverse(arr));
