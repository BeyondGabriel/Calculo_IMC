const modulo = require("./calculo.js");

const pesoPrueba = 80;
const alturaPrueba = 1.75;

console.log("========================================");
console.log("SISTEMA DE CONTROL DE IMC");
console.log(`Datos de prueba -> Peso: ${pesoPrueba}kg | Altura: ${alturaPrueba}m`);
console.log("========================================\n");

// --- VERSIÓN 1.0 ---
console.log("[Versión 1.0]: Cálculo Básico");
const alumno = modulo.calcularIMC(pesoPrueba, alturaPrueba);
console.log(`Resultado del IMC: ${alumno.toFixed(2)}`);
console.log("----------------------------------------\n");

// --- VERSIÓN 2.0 ---
console.log("[Versión 2.0]: Cálculo Seguro (Con Validaciones)");
const alumno2 = modulo.calcularIMCV2(pesoPrueba, alturaPrueba);
console.log(`Resultado del IMC: ${alumno2.toFixed(2)}`);
console.log("----------------------------------------\n");

// --- VERSIÓN 3.0 ---
console.log("[Versión 3.0]: Sistema Automático Completo");
console.log("Procesando diagnóstico...");
modulo.calcularIMCV3(pesoPrueba, alturaPrueba);
console.log("========================================");
