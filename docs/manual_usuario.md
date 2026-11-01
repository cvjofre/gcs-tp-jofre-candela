
# Manual de Usuario - Gestor de Clientes

## Versión 1.1

### Objetivo
El sistema permite registrar los datos de un cliente,
validando que el teléfono contenga únicamente números.

### Registrar un cliente

1. Abrir index.html en el navegador.
2. Ingresar el nombre del cliente.
3. Ingresar el número de teléfono.
4. Presionar "Registrar cliente".

### Validación del teléfono

El teléfono debe contener únicamente números del 0 al 9.

Ejemplo válido: 123456
Ejemplo inválido: abc123

Si se ingresan letras, espacios o símbolos, el sistema
muestra el siguiente mensaje:

"Error: el teléfono debe contener solo números."

Si los datos son correctos, se muestra un mensaje
confirmando el registro del cliente.

### Cambio respecto de v1.0

En la versión 1.0 se permitía ingresar letras.
En la versión 1.1 se incorporó la validación.
