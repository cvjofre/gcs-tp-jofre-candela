
# Gestor de Clientes

Trabajo Práctico – Gestión de la Configuración del Software

Alumna: Candela Jofre
Carrera: Tecnicatura Universitaria en Desarrollo de Software
Materia: Ingeniería de Software
Profesor: Bruno Hughes

## Descripción del proyecto

Gestor de Clientes es una aplicación sencilla desarrollada
con HTML y JavaScript que permite registrar el nombre y
teléfono de un cliente.

El proyecto tiene como objetivo aplicar el proceso de
Gestión de la Configuración del Software (GCS) utilizando
Git y GitHub.

## Problema detectado

En la versión inicial v1.0, el campo teléfono permitía
ingresar letras y números sin realizar una validación.

Un cliente solicitó que el sistema aceptara únicamente
números en ese campo.

## Solución implementada

En la versión v1.1 se incorporó la función:

function validarTelefono(tel) {
    return /^[0-9]+$/.test(tel);
}

Esta función utiliza una expresión regular para verificar
que el teléfono contenga solamente dígitos del 0 al 9.

Si el usuario ingresa letras, espacios o caracteres
especiales, el sistema muestra un mensaje de error.

## Tecnologías utilizadas

- HTML
- JavaScript
- Node.js
- Git
- GitHub

## Estructura del proyecto

src/
- index.html: formulario de registro de clientes.
- script.js: lógica y validación del teléfono.

tests/
- test_validacion.js: pruebas automáticas.

docs/
- README.md: descripción general del proyecto.
- manual_usuario.md: instrucciones de uso.
- manual_tecnico.md: explicación técnica.
- plan_pruebas.md: casos y resultados de las pruebas.
- registro_cambios.md: historial de versiones.

## Pruebas realizadas

Se implementaron cinco pruebas automáticas:

1. Teléfono con números.
2. Teléfono con letras.
3. Teléfono con guion.
4. Teléfono con espacios.
5. Teléfono vacío.

Para ejecutar las pruebas, utilizar:

node tests/test_validacion.js

Resultados:
- Pruebas ejecutadas: 5
- Pruebas aprobadas: 5
- Pruebas fallidas: 0

## Gestión de versiones

Versión v1.0:
Versión inicial del sistema sin validación del teléfono.

Versión v1.1:
Se incorporó la validación del teléfono, se agregaron
pruebas automáticas y se actualizaron los documentos.

## Control de cambios

Ticket del cliente: #101
Issue de GitHub: #1
Pull Request: #2
Rama de corrección: fix-validacion-telefono

El cambio fue desarrollado en una rama independiente,
verificado mediante pruebas e integrado a main
a través de una Pull Request.

## Estado final

La versión v1.1 fue liberada correctamente y publicada
como Release en GitHub.

El Issue del cliente fue cerrado después de integrar
la corrección.

El trabajo permitió aplicar control de versiones,
control de cambios, documentación y trazabilidad.
