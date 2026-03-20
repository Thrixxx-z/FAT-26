var operandoA = "";
var operacion = "";

function agregar(valor) {
    document.getElementById("display").innerHTML += valor;
}

function operar(op) {
    operandoA = document.getElementById("display").innerHTML;
    operacion = op;
    document.getElementById("display").innerHTML = "";
}

function resultado() {
    var operandoB = document.getElementById("display").innerHTML;
    var res = 0;

    if (operacion == "+") res = parseFloat(operandoA) + parseFloat(operandoB);
    if (operacion == "-") res = parseFloat(operandoA) - parseFloat(operandoB);
    if (operacion == "*") res = parseFloat(operandoA) * parseFloat(operandoB);
    if (operacion == "/") res = parseFloat(operandoA) / parseFloat(operandoB);

    document.getElementById("display").innerHTML = res;
}

function borrar() {
    document.getElementById("display").innerHTML = "";
}