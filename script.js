// Traer el peso del input
let peso = document.getElementById("peso").value;

// Verificar peso
let resultado;

if (peso <= 30) {
    // Aplicar Holliday Segar
    if (peso <= 10) {
        resultado = peso * 100;
    } else if (peso > 10 && peso <= 20) {
        resultado = 1000 + ((peso - 10) * 50);
    } else if (peso > 20) {
        resultado = 1500 + ((peso - 20) * 20);
    }
} else {
    // Aplicar superficie corporal
    resultado = ((peso * 4) + 7) / (peso + 90);
}

// Mostrar por pantalla el resultado del cálculo
console.log("El resultado del cálculo es: " + resultado);