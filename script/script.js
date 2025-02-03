// Задание 1

/* function calc(a, b, c) {
  return (a - b) / c;
}

let c = calc(5, 8, 2);

console.log(c); */

let c = (a, b, c) => (a - b) / c;

console.log(c(5, 8, 2));

// Задание 2

degree = (a) => {
  result3 = a ** 3;
  result2 = a ** 2;
};

degree(5);

console.log("Куб числа: " + result3 + " Квадрат числа: " + result2);

// Задание 3

let max, min;

comp = (a, b) => {
  if (a > b) {
    max = a;
    min = b;
  } else {
    max = b;
    min = a;
  }
};

comp(6, 3);

console.log("Большее число: " + max + " Меньшее чизло: " + min);

// Задание 4

/* eateArray = () => {
  let number = prompt("Введите первое число");
  let number2 = prompt("Введите последнее число ");
  let arr = [];
  for (let i = number; i <= number2; i++) {
    arr.push(+i);
  }
  console.log(arr);
};

createArray(); */

// Задание 5

isEven = (even) => {
  let message = even % 2 == 0 ? true : false;
  console.log(message);
};

isEven(356);

// Задание 6

let arr2 = [];

array = (arr1) => {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
      arr2.push(+arr1[i]);
    } else {
      continue;
    }
  }
};

array([-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]);

console.log(arr2);

// Задание 7

let marker = "*";
let line = " ";

pyr = (height) => {
  for (let i = 1; i <= height; i++) {
    for (let j = i; j < i + 1; j++) {
      line += marker;
    }
    document.write('<pre style="margin: 0">' + line + "</pre>");
  }
};

pyr(9);

document.write("-----------------------");

let marker1 = " ";
let line1 = " ";

pyr = (height) => {
  for (let i = 1; i <= height; i++) {
    marker1 = i;
    for (let j = i; j < i + 1; j++) {
      line1 += marker1;
    }

    document.write('<pre style="margin: 0">' + line1 + "</pre>");
  }
};

pyr(9);

document.write("-----------------------");

/* let marker = prompt("Введите символ");
let line = " ";

pyr = (height) => {
  for (let i = 1; i <= height; i++) {
    for (let j = i; j < i + 1; j++) {
      line += marker;
    }
    document.write(
      '<pre style="margin: 0">' + "<br>" + line + "<br/>" + "</pre>"
    );
  }
};

pyr(9); */

// Задание 8

let line2, space;

pyr = (height) => {
  for (let i = 1; i <= height; i++) {
    let line2 = " ";
    let space = " ";
    for (let j = 0; j < i * 2 - 1; j++) {
      line2 += marker;
    }
    for (let j = i; j <= height; j++) {
      space += " ";
    }
    document.write('<pre style="margin: 0">' + space + line2 + "</pre>");
  }
};

let h = prompt("Введите высоту пирамиды");

pyr(h);

// Задание 8 / Перевернутая пирамида

document.write("-----------------------");

pyr = (height) => {
  for (let i = height; i >= 1; i--) {
    let line2 = " ";
    let space = " ";
    for (let j = 0; j < i * 2 - 1; j++) {
      line2 += marker;
    }
    for (let j = i; j <= height; j++) {
      space += " ";
    }
    document.write('<pre style="margin: 0">' + space + line2 + "</pre>");
  }
};

pyr(5);

// Задание 9

let f = [];

fib = (n) => {
  for (i = 0; i <= n; i++) {
    if (i === 0 || i === 1) {
      f[i] = 1;
    } else {
      f[i] = f[i - 1] + f[i - 2];
    }
  }
};

let result = f;

fib(100);

console.log(result);

// Задание 10

let s = prompt("Введите число");
let sum = 0;
let sum1 = 0;

console.log("Введено значение: " + s);

summ = (s) => {
  let s1 = [].map.call(s, (item) => Number(item));
  s1.forEach((item) => {
    sum += item;
  });
  if (sum <= 9) {
    console.log("Итоговое значение: " + sum);
  } else {
    s = sum.toString();
    s1 = [].map.call(s, (item) => Number(item));
    s1.forEach((item) => {
      sum1 += item;
    });
    console.log("Итоговое значение: " + sum1);
  }
};

summ(s);

// Задание 11

func = (arr3) => {
  console.log(arr3[0]);
  arr3.splice(0, 1);
  if (arr3.length > 0) {
    func(arr3);
  }
};

func([48, 9, 4, 21, 2, 1, 0, 14]);

// Задание 12

let name = prompt("Введите имя студента: "),
  lastName = prompt("Введите фамилию студента: "),
  surname = prompt("Введите отчество студента: "),
  group = prompt("Введите номер группы: ");

let info1 = " Домашняя работа: «Функции»";
let info2 = " Выполнил: студент гр. " + group;
let info3 = " " + lastName + " " + name + " " + surname;

let line3 = " ";

person = (info1, info2, info3) => {
  let amount = Math.max(info1.length, info2.length, info3.length);
  for (let i = 0; i <= amount; i++) {
    line3 += marker;
  }
  console.log(marker + new Array(amount).join(marker) + marker + marker);
  console.log(marker + info1.padEnd(amount) + marker);
  console.log(marker + info2.padEnd(amount) + marker);
  console.log(marker + info3.padEnd(amount) + marker);
  console.log(marker + new Array(amount).join(marker) + marker + marker);
};

person(info1, info2, info3);
