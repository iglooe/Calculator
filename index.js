var displayVal = "0"; // Current display value
var pendingVal; // Value waiting for a second operand
var evalStringArray = []; // Array to store the operators and operands

// Function to update the display
function display(val) {
    if(val === "C") {
        clearDisplay();
    } else if (val === "x" || val === "÷" || val === "+" || val === "-") {
        pendingVal = displayVal;
        displayVal = "0";
        evalStringArray.push(pendingVal);
        evalStringArray.push(val);
    } else {
        if (displayVal === "0")
            displayVal = val;
        else
            displayVal += val;
    }
    document.getElementById("display").value = displayVal;
}

// Function to calculate the result
function calculate() {
    evalStringArray.push(displayVal);
    var evaluation = eval(evalStringArray.join(" "));
    displayVal = evaluation + "";
    document.getElementById("display").value = displayVal;
    evalStringArray = [];
}

// Function to clear the display
function clearDisplay() {
    displayVal = "0";
    pendingVal = undefined;
    evalStringArray = [];
    document.getElementById("display").value = displayVal;
}
