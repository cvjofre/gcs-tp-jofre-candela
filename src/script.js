
document.getElementById("formCliente")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;

        document.getElementById("mensaje").textContent =
            "Cliente registrado: " + nombre +
            " - Teléfono: " + telefono;
    });
