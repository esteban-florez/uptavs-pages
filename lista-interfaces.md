# Lista de interfaces del componente

## General:

+ Login. 
+ Registro.
- Recuperar contraseña.



## Administrador

### Cursos:
+ Ver todos los cursos (FSS). Link a editar. Link a registrar nuevo curso.
### Registrar nuevo curso:
* Formulario para registrar nuevo curso, asignar instructor. Link a registrar área de formación. 
### Detalle curso:
* Ver detalles del curso. Editar sus datos. Link a matrícula si es activo.
### Control de matrícula:
- El mismo del instructor (quizas, no estoy seguro) (FSS).
### Clubes:
+ Ver todos los clubes, link a editar (FSS). Link a registrar nuevo club.
### Registrar nuevo club:
- Formulario para registrar nuevo club, asignar instructor.
### Detalle club:
- Ver detalle del club, editar sus datos. Link a inventario y lista de miembros.
### Inventario de club:
- CRUD inventario del club (FSS).
### Lista de miembros club:
- Literalmente eso, con CRUD y FSS i guess, y enlaces a los perfiles de la gente.

### Pagos:
+ Ver todos los pagos, confirmar y rechazar (FSS).
### Estadísticas:
- Ver estadísticas y gráficas de todo el sistema (FSo).
### Configuración:
- CRUD de datos para pagos, CRUD de usuarios (FSS).




## Instructores

### Cursos:
+ Ver todos los cursos. Link a detalles. Link a editar los cursos asignados.
### Detalle curso:
- Ver detalles, editar si es curso propio, iniciar inscripciones, designar fechas, etc. Link a matrícula si es propio y activo.
### Control de matrícula:
- Interfaz pa aprobar y desaprobar gente, y posiblemente subir notas de evaluacion??????? (FSS).
### Clubes:
- Ver clubes, ver y editar clubes asignados.
### Detalle club:
- Editar club asignado, link a inventario del club y listado de miembros.
### Inventario de club:
- CRUD, incidencias de inventario del club asignado (FSS).
### Lista de miembros club:
- Literalmente eso, con CRUD y FSS i guess, y enlaces a los perfiles de la gente.
### Pagos:
- Ver tabla de usuarios pertenecientes a un determinado curso, donde se muestre su solvencia.
### Perfil:
- Perfil de usuario propio, con datos personales, y estadísticas de uso del sistema, editar datos, etc.




## Estudiante:

### Cursos:
+ Ver cursos en período de inscripción (FSS). Link a detalles de cada curso.
### Detalle de curso:
+ Ver detalles de curso, inscribirse.
### Inscripcion:
- Pasos para inscripcion en curso.
### Clubes:
- Ver clubes, link a detalles de club.
##### Detalle de club:
- Ver detalles de club, inscribirse.
### Pagos:
* Dos tabs: la primera con un CRUD de pagos realizados, y la segunda con cuotas pendientes y un link a pagar dichas cuotas.
### Pago de cuotas pendientes:
- Basada en inscripcion, pero solo para pagar una cuota.
### Perfil:
- Perfil de usuario con datos propios y estadísticas de uso del sistema. Editar datos.




















## Esto no lo vamos a hacer pero lo dejo aqui porsia

### admin

#### Eventos:
- Ver todos los eventos (FSS). Link a editar. Registrar nuevo evento.
#### Registrar nuevo evento:
- Formulario para registrar nuevo evento.
#### Detalles eventos:
- Ver detalles del evento, editar sus datos.

### instr

#### Eventos:
- Ver eventos.
#### Detalles de eventos:
- Ver detalle de eventos (duhh).

### estudiante

#### Eventos:
- Ver eventos proximos. Link a detalles de eventos.
#### Detalle eventos:
- Ver detalle de eventos.