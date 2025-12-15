const num1 = 20;
const num2 = 15;
const num3 = 10;

// DAY 1 to test comparison, value will bring true or false on console.
const test1 = num1 > num2; // logs true
const test2 = num3 > num2; // logs false
const test3 = num1 === num2; //obv false

// to test operators
const math1 = num2 * num1; //logs 300 obv
const math2 = num2 + num3 * num1; // to show operator precedence, ans is 215
const math3 = num1 % num2; //logs 5
const math4 = (num1 / num3) * num2; //logs 30;

// console log to test correct values
console.log(test1);
console.log(test2);
console.log(test3);
console.log(math1);
console.log(math2);
console.log(math3);
console.log(math4);

// DAY2 simple conditionals
const btn = document.querySelector(".button");
btn.addEventListener("click", ChangeBtn);
const txt = document.querySelector(".p");

function ChangeBtn() {
    if (btn.textContent === "Start machine") {
        btn.textContent = "Stop machine";
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
        txt.textContent = "The machine has started!";
    } else {
        btn.textContent = "Start machine";
        btn.style.backgroundColor = "gray";
        btn.style.color = "black";
        txt.textContent = "The machine is stopped.";
    }
}

//DAY 3 FUNCTIONS
/* function Calculate(number) {
  return number + number;
}
let calcresult = Calculate(4);
console.log(calcresult);  */

// SIMPLE ARROW FXN
const Calculate = number => number + number;
let calcresult = Calculate(4);
console.log(calcresult);

const input = document.querySelector("#input");
const container = document.querySelector("#container");
const text = document.createElement("p");
const check = document.querySelector("#check");
const clear = document.querySelector("#clear");

function evenCheck() {
    const toCheck = parseFloat(input.value);
    if (toCheck % 2 === 0) {
        text.textContent = "You typed an even number";
        container.appendChild(text);
    } else if (toCheck % 2 > 0 || toCheck % 2 < 0) {
        text.textContent = "You typed an odd number";
        container.appendChild(text);
    } else {
        text.textContent =
            "Invalid input, Click the clear button and try again.";
        text.style.backgroundColor = "Blue";
        text.style.color = "white";
    }
}

check.addEventListener("click", evenCheck);

function toClear() {
    input.value = "";
    text.textContent = "";
}
clear.addEventListener("click", toClear);

// ARRAY map and filter
function lCat(lol) {
    return lol.startsWith("L");
}

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);
console.log(filtered);

function catsToUp(up) {
    return up.toUpperCase();
}
const upCats = cats.map(catsToUp);
console.log(upCats);

// Objects
const Developer = {
    firstName: "Abdulmujeeb",
    lastName: "Morakinyo",
    age: 18,
    stack: {
        stack1: "html",
        stack2: "css",
        stack3: "js",
        stack4: "inProgress"
    }
};
Developer.age = 25;
console.log(Developer.age);
console.log(Developer.stack.stack2);
