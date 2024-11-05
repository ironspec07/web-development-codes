function calculator(o, num1, num2) {
    switch (o) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            if (num2 === 0) {
                return "Infinity"; // Handle division by zero
            }
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

window.onload = function() {
    var o = prompt("Enter an operator (+, -, *, /)");
    if (o === null || !(o === "+" || o === "-" || o === "*" || o === "/")) {
        alert("Invalid operator. Please enter one of +, -, *, /");
        return;
    }

    var num1 = parseFloat(prompt("Enter first number"));
    if (isNaN(num1)) {
        alert("Invalid input for first number.");
        return;
    }

    var num2 = parseFloat(prompt("Enter second number"));
    if (isNaN(num2)) {
        alert("Invalid input for second number.");
        return;
    }

    var resultEl = document.getElementById('resultEl');
    var result = calculator(o, num1, num2);
    resultEl.textContent = result;
    console.log(result);
}
