// Калькулятор

let Culc = function () {
  this.on = false;
  this.a = null;
  this.b = null;
  this.oper = null;
  this.result = null;

  this.turn = function () {
    if (this.on) {
      this.on = !this.on;
    } else {
      console.log("Калькулятор выключен");
    }
  };

  this.setOperand = (operand) => {
    if (this.a === null) {
      this.a = operand;
    } else if (this.b === null) {
      this.b = operand;
    }
  };

  this.setOperation = (operation) => {
    this.oper = operation;
  };

  this.calculations = function () {
    switch (this.oper) {
      case "+":
        this.result = this.a + this.b;
        break;
      case "-":
        this.result = this.a - this.b;
        break;
      case "*":
        this.result = this.a * this.b;
        break;
      case "/":
        this.result = this.a / this.b;
        break;
    }
  };

  this.view = function () {
    this.calculations();
    console.log(this.a + " " + this.oper + " " + this.b + " = " + this.result);
  };
};

let culc = new Culc();

// Книжная полка

let Shelf = function () {
  this.name = null;
  this.author = null;
  this.year = null;
  this.pages = null;
  this.readPages = null;
  this.day = null;

  this.setRead = function (read) {
    if (this.readPages === null) {
      this.readPages = read;
    } else if (read <= 0) {
      console.log("Книга не прочитана");
    }
  };

  this.display = function () {
    this.day = this.pages / this.readPages;
    console.log(
      "Название книги: " +
        this.name +
        "\n" +
        "Автор: " +
        this.author +
        "\n" +
        "Год издания: " +
        this.year +
        "\n" +
        "Необходимое количество дней для прочтения: " +
        Math.ceil(this.day)
    );
  };
};

let book1 = new Shelf(),
  book2 = new Shelf(),
  book3 = new Shelf();

book1.name = "Портрет Дориана Грея";
book2.name = "Демиан";
book3.name = "Щегол";

book1.author = "Оскар Уайльд";
book2.author = "Герман Гессе";
book3.author = "Донна Тартт";

book1.year = "1890";
book2.year = "1919";
book3.year = "2013";

book1.pages = 320;
book2.pages = 224;
book3.pages = 828;

console.log(book1);
console.log(book2);
console.log(book3);
