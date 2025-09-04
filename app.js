let inputBox = document.querySelector("#input-box"); 
let buttons = document.querySelectorAll("button");

let string = "";
let lastWasOperator = false;
let justEvaluated = false;

const operators = ["+", "-", "*", "/", "%"];

buttons.forEach(button => {
    button.addEventListener("click", (evt) => {
        let value = evt.target.innerText;

        if (value === "=") {
            try {
                string = eval(string).toString();
                inputBox.value = string;
                if (inputBox.value === "Infinity" || inputBox.value === "NaN") {
                    inputBox.value = "error";
                    string = "";
                }
                justEvaluated = true;
            } catch {
                inputBox.value = "error";
                string = "";
            }
        }

        else if (value === "AC") {
            string = "";
            inputBox.value = "";
            justEvaluated = false;
        }

        else if (value === "x²") {
            string = (inputBox.value * inputBox.value).toString();
            inputBox.value = string;
            justEvaluated = true;
        }

        else if (value === "x³") {
            string = (inputBox.value * inputBox.value * inputBox.value).toString();
            inputBox.value = string;
            justEvaluated = true;
        }

        else if (value === "1/x") {
            string = (1 / inputBox.value).toString();
            inputBox.value = string;
            justEvaluated = true;
        }

        else if (value === "√") {
            string = Math.sqrt(inputBox.value).toString();
            inputBox.value = string;
            justEvaluated = true;
        }

        else if (value === "DEL") {
            string = string.toString().slice(0, -1);
            inputBox.value = string;
            lastWasOperator = operators.includes(string.slice(-1));
        }

        else {
            if (operators.includes(value)) {
                if (lastWasOperator) {
                    
                    string = string.slice(0, -1) + value;
                } else {
                    
                    if (justEvaluated) justEvaluated = false;
                    string += value;
                }
                lastWasOperator = true;
            } else {
            
                if (justEvaluated) {
                    string = "";
                    justEvaluated = false;
                }
                string += value;
                lastWasOperator = false;
            }
            inputBox.value = string;
        }
    });
});


document.addEventListener('keydown', (e) => {
    e.preventDefault();
    let key = e.key;

    if (key === "Enter" || key === "=") {
        try {
            string = eval(string).toString();
            inputBox.value = string;
            if (inputBox.value === "Infinity" || inputBox.value === "NaN") {
                inputBox.value = "error";
                string = "";
            }
            justEvaluated = true;
        } catch {
            inputBox.value = "error";
            string = "";
        }
    }

    else if (key === "Delete") {
        string = "";
        inputBox.value = "";
        justEvaluated = false;
    }

    else if (key === "Backspace") {
        string = string.toString().slice(0, -1);
        inputBox.value = string;
        lastWasOperator = operators.includes(string.slice(-1));
    }

    else {
        if (operators.includes(key)) {
            if (lastWasOperator) {
                string = string.slice(0, -1) + key; 
            } else {
                if (justEvaluated) justEvaluated = false;
                string += key;
            }
            lastWasOperator = true;
        } else if (!isNaN(key) || key === ".") { 
            
            if (justEvaluated) {
                string = "";
                justEvaluated = false;
            }
            string += key;
            lastWasOperator = false;
        }
        inputBox.value = string;
    }
});

