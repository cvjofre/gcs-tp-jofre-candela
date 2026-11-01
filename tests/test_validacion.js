
const assert = require("node:assert/strict");

const { validarTelefono } = require("../src/script.js");

// Prueba 1: teléfono válido
assert.equal(validarTelefono("123456"), true);
console.log("CP01 - Teléfono numérico: OK");

// Prueba 2: teléfono con letras
assert.equal(validarTelefono("zxc123"), false);
console.log("CP02 - Teléfono con letras: OK");

// Prueba 3: teléfono con guion
assert.equal(validarTelefono("123-456"), false);
console.log("CP03 - Teléfono con guion: OK");

// Prueba 4: teléfono con espacios
assert.equal(validarTelefono("12 345"), false);
console.log("CP04 - Teléfono con espacios: OK");

// Prueba 5: teléfono vacío
assert.equal(validarTelefono(""), false);
console.log("CP05 - Teléfono vacío: OK");

console.log("Todas las pruebas pasaron correctamente.");
