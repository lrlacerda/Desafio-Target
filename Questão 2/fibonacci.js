function pertenceFibonacci(numero) {
    let a = 0;
    let b = 1;
    let c = 0;

    while (c < numero) {
        c = a + b;
        a = b;
        b = c;
    }

    return c === numero || numero === 0;
}

function verificarFibonacci() {
    let numero = parseInt(document.getElementById("numeroInput").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(numero)) {
        resultado.textContent = "Insira um número válido.";
        return;
    }

    if (pertenceFibonacci(numero)) {
        resultado.textContent = numero + " pertence à sequência de Fibonacci.";
    } else {
        resultado.textContent = numero + " não pertence à sequência de Fibonacci.";
    }
}

