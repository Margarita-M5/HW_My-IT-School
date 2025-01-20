// + Задание 1 + //

let a = 1;

for (let a = 1; a <= 50; a++) {
  console.log(a);
}

for (let b = 35; b >= 8; b--) {
  console.log(b);
}

// + Задание 2 + //

let c = 89;

while (c >= 11) {
  document.write("<br />" + c);
  c--;
}

// + Задание 3 + //

let sum = 0;

for (let d = 1; d <= 100; d++) {
  console.log(sum);
  sum += d;
}

// + Задание 4 + //

let sum1 = 0;

for (let f = 1; f <= 5; f++) {
  sum1 = 0;
  for (let g = 1; g <= f; g++) {
    sum1 += g;
  }
  console.log("Sum " + f + " = " + sum1);
}

// + Задание 5 + //

for (let m = 8; m <= 56; m++) {
  if (m % 2 == 0) continue;
  console.log(m);
}

// + Задание 6 + //

for (let k = 2; k <= 10; k++) {
  for (let l = 1; l <= 10; l++) {
    document.write(k + "*" + l + "=" + k * l + "<br />");
  }
}

// + Задание 7 + //

let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  ++num;
  console.log(n);
  console.count("Итерация №");
}
n--;
console.log(num);

// + Задание 8 + //

let numb = prompt("Введите число", 0),
  p = 0,
  r = 0;

while (numb != 0 && numb != null) {
  ++p;
  r += +numb;
  numb = prompt("Введите число", 0);
}
document.write(
  "Количество введенных данных: " +
    p +
    "; Cумма чисел: " +
    r +
    "; Среднее арифметическое: " +
    r / p +
    "."
);

// + Задание 9 + //

let str = "4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57",
min = Infinity,
max = -Infinity,
buffer = " ";

for (i = 0; i < str.length; i++) {
  if (str[i] === " ") {
     buffer += str[i];
  } else{
    if (min > +buffer) min = +buffer;
    if (max < +buffer) max = +buffer;
    buffer = '';
};