
# Plan de Pruebas - Gestor de Clientes

## Versión 1.1

### Objetivo

Comprobar que la validación del campo teléfono
funcione correctamente.

### Casos de prueba

| ID | Entrada | Resultado esperado | Estado |
|----|---------|--------------------|--------|
| CP01 | 123456 | Aceptado | Aprobado |
| CP02 | zxc123 | Rechazado | Aprobado |
| CP03 | 123-456 | Rechazado | Aprobado |
| CP04 | 12 345 | Rechazado | Aprobado |
| CP05 | Vacío | Rechazado | Aprobado |

### Ejecución

Herramienta: Node.js
Archivo: tests/test_validacion.js

Comando:

node tests/test_validacion.js

### Resultados

Total de pruebas: 5
Pruebas aprobadas: 5
Pruebas fallidas: 0

### Conclusión

La función validarTelefono() cumple con los
criterios de aceptación establecidos.

La corrección está lista para revisión
e integración mediante Pull Request.
