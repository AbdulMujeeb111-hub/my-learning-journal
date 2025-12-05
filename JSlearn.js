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
const btn = document.querySelector("button");
const txt = document.querySelector("p");

btn.addEventListener("click", ChangeBtn);

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
