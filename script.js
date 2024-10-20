// 1 ci tapsiriq for ile
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
// }
// while ile
// let i = 1;
// while (i <= 100) {
//     console.log(i);
//     i++;
// }
// 2 ci tapsiriq
// let arr = [5, 3, 8, 1, 4];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log("Ən kiçik ədəd:", min);
// 3 cu tapsiriq
// let arr = [5, 3, 8, 1, 4];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log("Ən böyük ədəd:", max);
// 4 cu tapsiriq
// let num = 54;
// let sadelik = true;
// if (num < 2) {
//     sadelik = false;
// } else {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sadelik = false;
//             break;
//         }
//     }
// }
// if (sadelik) {
//     console.log(num + " sadə ədəddir.");
// } else {
//     console.log(num + " mürəkkəb ədəddir.");
// }
// 5 ci tapsiriq
// let arr = [5, 3, 8, 1, 4];
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//     let minindeks = i;
//     for (let j = i + 1; j < n; j++) {
//         if (arr[j] < arr[minindeks]) {
//             minindeks = j;
//         }
//     }
//     if (minindeks !== i) {
//         let c = arr[i];
//         arr[i] = arr[minindeks];
//         arr[minindeks] = c;
//     }
// }
// console.log("Artan sırada:", arr);
// 6 ci tapsiriq
// let n = 15
// let sadeler = [];
// for (let num = 2; num <= n; num++) {
//     let sadelik = true;
//     for (let i = 2;  i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             sadelik = false;
//             break;
//         }
//     }
//     if (sadelik) {
//         sadeler.push(num);
//     }
// }
// console.log("1-dən " + n + " ədədinə qədər sadə ədədlər:", sadeler);
