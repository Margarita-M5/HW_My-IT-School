// Задание 1

let str = "aaa@bbb@ccc";

console.log(str.replace(/@/g, "!"));

// Задание 2

let date = " 2025-12-31";
let regDate = /(\d{4})\-(\d{2})\-(\d{2})/g;
console.log(date.replace(regDate, "$3/$2/$1"));

// Задание 3

let str1 = "Я учу javascript!";

console.log(str1.indexOf("у"));
console.log(str1.indexOf("t"));

console.log(str1.substring(2, 16));
console.log(str1.substr(2, 14));
console.log(str1.slice(2, 16));

// Задание 4

let arr = [4, 2, 5, 19, 13, 0, 10];
let arr1 = 0;
let arrSum = 0;

for (let i = 0; i < arr.length; i++) {
  arr1 = arr[i] ** 3;
  arrSum += arr1;
}

console.log("Сумма кубов элементов массива: " + arrSum);
console.log("Корень квадратный: " + Math.sqrt(arrSum));

// Задание 5

let c = 0;

diff = (a, b) => {
  c = a - b;
};

diff(3, 5);
console.log(Math.abs(c));

diff(6, 1);
console.log(Math.abs(c));

// Задание 6

let dateNow = new Date();
let day = dateNow.getDate();
let month = dateNow.getMonth() + 1;
let hours = dateNow.getHours();
let minutes = dateNow.getMinutes();
let seconds = dateNow.getSeconds();

let addZero = (p) => (p < 10 ? "0" + p : p);

addZero(day);
addZero(month);
addZero(hours);
addZero(minutes);
addZero(seconds);

console.log(addZero(day) + "." + addZero(month) + "." + dateNow.getFullYear());
console.log(addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds));

// Задание 7

let str2 = "aa aba abba abbba abca abea";
let regLat = /a(b){1,3}a{1}/gi;

console.log(str2.match(regLat));

// Задание 8

/* validateNumb = (number) => {
  let regNumb = /^\+[0-9]{1,3}\([0-9]{2}\)\d\d\d\-\d\d\-\d\d$/;
  console.log(regNumb.test(number));
};

let n = prompt("Введите номер телефона");
validateNumb(n); */

// Задание 9

/* validateMail = (mail) => {
  let regMail = /^[a-z0-9.?-?_?]{3,}@[a-z]{2,11}\.[a-z]{2,11}$/gi;
  console.log(regMail.test(mail));
};

let m = prompt("Введите почтовый адрес");
validateMail(m); */

// Задание 10 //???????????

validateAddr = (address) => {
  let regAddr =
    /(https\:\/\/[a-z.?]\.by)([a-z0-9-?/?]{2,})([a-z0-9_?=?]{2,})(\#[a-z0-9]{2,})/g;
  console.log(regAddr.exec(address));
};

let addr = prompt("Введите почтовый адрес");
validateAddr(addr);
