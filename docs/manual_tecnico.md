
# Manual Técnico - Gestor de Clientes

## Versión 1.1

### Tecnologías utilizadas
- HTML
- JavaScript
- Node.js para las pruebas
- Git y GitHub

### Estructura del sistema

- src/index.html: formulario de registro.
- src/script.js: lógica y validación.
- tests/test_validacion.js: pruebas automáticas.

### Función de validación

function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

### Explicación de la expresión regular

- ^ indica el inicio de la cadena.
- [0-9] permite números del 0 al 9.
- + exige uno o más dígitos.
- $ indica el final de la cadena.
- test() devuelve true o false.

### Funcionamiento

Cuando el usuario envía el formulario,
JavaScript obtiene los valores ingresados.

Si validarTelefono() devuelve false,
se muestra un mensaje de error y se detiene el registro.

Si devuelve true, se muestra el mensaje de registro exitoso.

### Pruebas automáticas

Se utiliza Node.js con el módulo assert
para verificar los resultados de la función.

Comando de ejecución:

node tests/test_validacion.js

### Compatibilidad

El código del formulario se ejecuta solo cuando
existe el objeto document.

La función se exporta mediante module.exports
para permitir su ejecución en Node.js.

### Control del cambio

Ticket del cliente: #101
Issue de GitHub: #1
Rama: fix-validacion-telefono
Versión de destino: v1.1
