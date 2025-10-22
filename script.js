let drink = prompt("Кава, чай або сік?")

switch (drink) {
    case "кава":
        console.log("Вибрана кава");
        break;
    case "сік":
        console.log("Вибрана сік");
        break;
    case "чай":
        console.log("Вибрана чай");
        break;

    default:
        console.log("помилка");
}



let week = prompt("День тижня")

switch (week) {
    case "понеділок", "вівторок", "середа", "четвер", "п'ятниця":
        console.log("робочий день");
        break;

    case "субота", "неділя":
        console.log("вихідний");
        break;

    default:
        console.log("помилка");
        break;
}


let month = prompt("month")

switch (month) {
    case '12', '1', '2':
        console.log("winter");
        break;

    case '3', '4', '5':
        console.log("spring");
        break;

    case '6', '7', '8':
        console.log("summer");
        break;

    case '9', '10', '11':
        console.log("fall");
        break;

    default:
        console.log("помилка");
        break;
}

let color = prompt("кольор")

switch (color) {
    case "червоний":
        console.log("стоп");
        break;

     case "жовтий":
        console.log("чекати");
        break;

     case "зелений":
        console.log("йти");
        break;

    default:
        break;
}



let a = prompt("a")
let b = prompt("b")
let select = prompt("-, +, /, *")

switch (select) {
    case "-":
        console.log(a - b);
        break;
    case "+":
        console.log(a + b);
        break;
    case "/":
        console.log(a / b);
        break;
    case "*":
        console.log(a * b);
        break;

    default:
        break;
}



