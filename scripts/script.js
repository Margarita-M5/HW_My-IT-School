//  Задание 1

let a = [1, 2, 3, 4, 5];
let buffer = " ";

//  Вариант 1

for (let i = 0; i < a.length; i++) {
  console.log(a[i]);
}

//  Вариант 2

for (let elem of a) {
  console.log(elem);
}

//  Задание 2

let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > 0) continue;
  if (arr[i] < 0 && arr[i] >= -10 && arr[i] <= -3) {
    console.log(arr[i]);
  }
}

//  Задание 3

/* let arr1 = [],
  result = 0;

for (let i = 23; i <= 57; i++) {
  arr1.push(i);
  result += i;
}
console.log(arr1);
console.log("Cумма чисел: " + result);

let i = 23;

while (i <= 57) {
  i++;
  arr1.push(i);
  arr1.pop(i);
}
console.log(arr1); */

//  Задание 4

let arr2 = ["10", "20", "30", "50", "235", "3000"];

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i][0] === "1" || arr2[i][0] === "2" || arr2[i][0] === "5") {
    console.log(arr2[i]);
  }
}

//  Задание 5

let arrweek = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

for (let i = 0; i < arrweek.length; i++) {
  if (i > 4) {
    document.write("<b>" + arrweek[i] + "</b>" + " ");
  } else {
    document.write(arrweek[i] + " ");
  }
}

//  Задание 6

let arrnum = new Array(10);
console.log(arrnum);

arrnum[arrnum.length] = 55;
console.log(arrnum);
console.log(arrnum[arrnum.length - 1]);

//  Задание 7

/* let numb = prompt("Введите число");
let arrNumb = [];

while (true) {
  numb = prompt("Введите число");
  arrNumb.push(+numb);
  if (numb === "" || numb === null || isNaN(numb)) break;
  {
    arrNumb.sort((a, b) => a - b);
    console.log(arrNumb);
  }
} */

//  Задание 8

let arrback = [12, false, "Текст", 4, 2, -5, 0];
let i = 0;
let back = 0;

while (i < arrback.length) {
  i++;
  back = arrback.reverse();
}
console.log(back);

//  Задание 9

let arramp = [5, 9, 21, , , 9, 78, , , , 6];
let sum = "";

for (let i = 0; i < arramp.length; i++) {
  if (arramp[i] == undefined) {
    ++sum;
  }
}
console.log("Количество нулевых элементов: " + sum);

//  Задание 10

let arr3 = [48, 9, 0, 4, 21, 2, 1, 0, 8, 84, 76, 8, 4, 13, 2];
let element = 0;
let indexstart = arr3.indexOf(element);
let indexend = arr3.lastIndexOf(element);
let sum1 = 0;

console.log(indexstart, indexend); // узнаеё индексы 0

let arr4 = arr3.slice(3, 7);

console.log(arr4); // достаем из массива необходимые элементы

for (let i = 0; i < arr4.length; i++) {
  sum1 += arr4[i];
}

console.log(sum1);

//  Задание 11

const symdol = "^";
let line = " ";

for (let i = 0; i <= 5; i++) {
  line = symdol;
  document.write(line);
  for (let j = 1; j < i * 2; j++) {
    document.write("</n>" + line);
  }
}
