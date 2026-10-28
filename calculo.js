function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc;
}

function calcularIMCV2(peso, altura) {
    if (peso === undefined || altura === undefined) {
        console.log("Error: el peso y la altura son obligatorios");
        return;
    }
    if (typeof peso !== 'number' || typeof altura !== 'number') {
        console.log("Error: los valores para peso y altura deben ser numéricos");
        return;
    }
    const imc = peso / (altura * altura);
    return imc;
}

function calcularIMCV3(peso, altura) {
    if (peso === undefined || altura === undefined) {
        console.log("Error: es obligatorio el peso y la altura");
        return;
    }
    if (typeof peso !== 'number' || typeof altura !== 'number') {
        console.log("Error: los valores para peso y altura deben ser numéricos");
        return;
    }
    const imc = peso / (altura * altura);
    console.log(`El IMC V3 es : ${imc.toFixed(2)}`);
    clasificadorIMC(imc); // <--- Aquí llama a la función de abajo
}

// CORRECCIÓN AQUÍ: Usamos if/else para asegurar que evalúe correctamente los rangos
function clasificadorIMC(imc) {
    let clasificacion = "";

    if (imc < 18.5) {
        clasificacion = "Bajo Peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        clasificacion = "Peso Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        clasificacion = "Sobrepeso";
    } else if (imc >= 30) {
        clasificacion = "Obesidad";
    } else {
        clasificacion = "Valor no válido";
    }

    console.log(clasificacion); // <--- Esto imprimirá "Sobrepeso"
}

module.exports.calcularIMC = calcularIMC;
module.exports.calcularIMCV2 = calcularIMCV2;
module.exports.calcularIMCV3 = calcularIMCV3;
