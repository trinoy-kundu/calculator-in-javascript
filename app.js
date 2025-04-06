let display = document.querySelector(".display input");

function appendToDisplay(input) {
    display.value += input;
}

function allClear() {
    display.value = "";
}

function deleteOne() {
    display.value = display.value.toString().slice(0, -1);
}

function Calculate() {
    // display.value = eval(display.value);
    display.value = Function(`return ${display.value}`)();

}
