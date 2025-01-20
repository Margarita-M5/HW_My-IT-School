let name = prompt("Ваше имя"),
  age = prompt("Ваш возраст"),
  city = prompt("Город проживания"),
  phone = prompt("Меня зовут"),
  email = prompt("Меня зовут"),
  company = prompt("Меня зовут");

document.write(
  "Меня зову ",
  name,
  ". Мне ",
  age,
  " лет. Я проживаю в городе ",
  city,
  " и работаю в компании ",
  company,
  ". Мои контактные данные: ",
  phone,
  ", ",
  email,
  ". "
);

let year = 2025 - age;

document.write(name, " родился в ", year, " году.");

2 + 0 + 2 == 5 + 2 + 8 ? console.log("Да") : console.log("Нет");

let a1 = 1,
  a2 = 0,
  a3 = -3;

if (a1 > 0) {
  console.log("Верно");
} else {
  console.log("Не верно");
}

if (a2 > 0) {
  console.log("Верно");
} else {
  console.log("Не верно");
}

if (a3 > 0) {
  console.log("Верно");
} else {
  console.log("Не верно");
}

let A = 10,
  B = 2,
  sum = A + B,
  sub = A - B,
  mult = A * B,
  div = A / B;

console.log(sum, sub, mult, div);

if (sum > 1) {
  console.log(sum ** 2);
}

(A > 2 && A < 11) || (B >= 6 && B < 14)
  ? console.log("Верно")
  : console.log("Не верно");

let n = 35;

if (n > 0 && n <= 15) {
  console.log("Число попадает в первую четверть часа");
} else if (n >= 16 && n <= 30) {
  console.log("Число попадает во вторую четверть часа");
} else if (n >= 31 && n <= 45) {
  console.log("Число попадает в третью четверть часа");
} else if (n >= 46 && n <= 59) {
  console.log("Число попадает в третью четверть часа");
} else {
  console.log("Значение выходит за рамки заданного диапазона");
}

let day = prompt("Число месяца");

if (day >= 1 && day <= 11) {
  console.log("Первая декада месяца");
} else if (day > 11 && day <= 21) {
  console.log("Вторая декада месяца");
} else if (day > 21 && day <= 31) {
  console.log("Третья декада месяца");
} else {
  console.log("Ошибочное значение");
}

let day1 = prompt("Количество дней");

let oneyear = day1 / 365,
  month = day1 / 31,
  week = day1 / 7,
  hour = day1 * 24,
  min = day1 * 24 * 60,
  second = day1 * 24 * 60 ** 2;

console.log(oneyear, month, week, hour, min, second);

if (oneyear < 1) {
  alert("Меньше года");
} else if (month < 31) {
  alert("Меньше месяца");
} else if (week < 7) {
  alert("Меньше недели");
}

let test = 0;
console.log(test);

if (day1 >= 1 && day1 <= 31) {
  test = "Месяц 1";
} else if (day1 > 31 && day1 <= 31 + 28) {
  test = "Месяц 2";
} else if (day1 > 31 + 28 && day1 <= 31 * 2 + 28) {
  test = "Месяц 3";
} else if (day1 > 31 * 2 + 28 && day1 <= 31 * 2 + 28 + 30) {
  test = "Месяц 4";
} else if (day1 > 31 * 2 + 28 + 30 && day1 <= 31 * 3 + 28 + 30) {
  test = "Месяц 5";
} else if (day1 > 31 * 3 + 28 + 30 && day1 <= 31 * 3 + 28 + 30 * 2) {
  test = "Месяц 6";
} else if (day1 > 31 * 3 + 28 + 30 * 2 && day1 <= 31 * 4 + 28 + 30 * 2) {
  test = "Месяц 7";
} else if (day1 > 31 * 4 + 28 + 30 * 2 && day1 <= 31 * 5 + 28 + 30 * 2) {
  test = "Месяц 8";
} else if (day1 > 31 * 5 + 28 + 30 * 2 && day1 <= 31 * 5 + 28 + 30 * 3) {
  test = "Месяц 9";
} else if (day1 > 31 * 5 + 28 + 30 * 3 && day1 <= 31 * 6 + 28 + 30 * 3) {
  test = "Месяц 10";
} else if (day1 > 31 * 6 + 28 + 30 * 3 && day1 <= 31 * 6 + 28 + 30 * 4) {
  test = "Месяц 11";
} else if (day1 > 31 * 6 + 28 + 30 * 4 && day1 < 31 * 7 + 28 + 30 * 4) {
  test = "Месяц 12";
}

console.log(test);

switch (test) {
  case "Месяц 12":
  case "Месяц 1":
  case "Месяц 2":
    console.log("Зима");
    break;
  case "Месяц 3":
  case "Месяц 4":
  case "Месяц 5":
    console.log("Весна");
    break;
  case "Месяц 6":
  case "Месяц 7":
  case "Месяц 8":
    console.log("Лето");
    break;
  case "Месяц 9":
  case "Месяц 10":
  case "Месяц 11":
    console.log("Осень");
    break;
}
