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
    case "понеділок":
    case "вівторок":
    case "середа":
    case "четвер":
    case "п'ятниця":
        console.log("робочий день");
        break;

    case "субота":
    case "неділя":
        console.log("вихідний");
        break;

    default:
        console.log("помилка");
        break;
}


let month = prompt("month")

switch (month) {
    case '12':
    case '1':
        case '2':
        console.log("winter");
        break;

    case '3':
    case '4':
    case '5':
        console.log("spring");
        break;

    case '6':
    case'7':
    case '8':
        console.log("summer");
        break;

    case '9':
    case '10':
    case '11':
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



let a = Number(prompt("a"))
let b = Number(prompt("b"))
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



