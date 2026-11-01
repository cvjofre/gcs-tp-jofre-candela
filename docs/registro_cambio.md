
# Registro de Cambios - Gestor de Clientes

## Elementos de Configuración del Software (ECS)

| ECS | Archivo | Descripción |
|-----|---------|-------------|
| ECS-01 | src/index.html | Formulario de clientes |
| ECS-02 | src/script.js | Lógica y validación |
| ECS-03 | tests/test_validacion.js | Pruebas automáticas |
| ECS-04 | docs/README.md | Descripción del proyecto |
| ECS-05 | docs/manual_usuario.md | Manual de usuario |
| ECS-06 | docs/manual_tecnico.md | Manual técnico |
| ECS-07 | docs/plan_pruebas.md | Plan de pruebas |
| ECS-08 | docs/registro_cambios.md | Historial de cambios |
| ECS-09 | .gitignore | Configuración de exclusiones |

## Historial de versiones

| Versión | Fecha | Ticket | Descripción | Responsable |
|---------|-------|--------|-------------|-------------|
| v1.0 | 01/11/2026 | - | Versión inicial | Candela Jofre |
| v1.1 | 01/11/2026 | #101 | Validación de teléfono | Candela Jofre |

## Detalle del cambio v1.1

### Solicitud
El cliente informó que el campo teléfono aceptaba letras.

### Identificación
Ticket: #101
Issue de GitHub: #1

### Modificación
Se agregó la función validarTelefono(tel)
que utiliza una expresión regular para
aceptar solamente números.

### Archivos modificados
- src/script.js
- docs/manual_usuario.md
- docs/manual_tecnico.md
- docs/plan_pruebas.md
- docs/registro_cambios.md

### Pruebas
Se crearon cinco pruebas automáticas en
tests/test_validacion.js.

Resultados: 5 aprobadas, 0 fallidas.

### Control de versiones
Versión original: v1.0
Versión de destino: v1.1
Rama: fix-validacion-telefono

### Estado
Implementado y probado.
Pendiente de revisión, integración y liberación.
