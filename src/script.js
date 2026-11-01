
/*
 * Gestor de Clientes
 * Versión v1.1
 * Ticket #101 - Issue #1
 */

// Función para validar el teléfono
function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

// Este código se ejecuta solamente en el navegador
if (typeof document !== "undefined") {

    document.getElementById("formCliente")
        .addEventListener("submit", function(event) {

            event.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const telefono = document.getElementById("telefono").value;
            const mensaje = document.getElementById("mensaje");

            // Verificamos si el teléfono es válido
            if (!validarTelefono(telefono)) {
                mensaje.textContent =
                    "Error: el teléfono debe contener solo números.";
                return;
            }

            // Registro exitoso
            mensaje.textContent =
                "Cliente registrado: " + nombre +
                " - Teléfono: " + telefono;
        });
}

// Exportamos la función para las pruebas con Node.js
if (typeof module !== "undefined") {
    module.exports = { validarTelefono };
}
