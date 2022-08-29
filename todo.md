# Cosas por hacer/bugs por corregir.

- Bug de "registro.html".
- Decidir nomenclatura e idioma para atributos "id, name, value"
- Clase "text" en algunas "p" de los sidebar que no hace nada.
- Agregar "ascen/descen" en ordenar por.
- Ver donde coño ponemos el link hacia el registro de áreas de formación.
- Agregar "name" a las barras de busqueda.
- Hacer que los "label" tengan fw-normal por defecto. Cambiar todos.
- Decidir donde poner el link a los ciclos finalizados. 
- Scrollbar horizontal en "control-matricula.html"
- Margenes y responsive en filtros de algunas paginas.
- Pegar este beta en el navbar en todas las paginas: <img src="assets/img/logo-upta.png" alt="Logo de la UPTA" class="brand-image" width="30"><span class="d-none d-sm-inline-block text-muted h5 ml-1 mb-0 mx-0">Departamento de Vinculación Social</span>


- Arreglar el hecho de que un ciclo esté linkeado a un curso, hace que dicho ciclo pueda cambiar parte de sus datos cuando sea editado dicho curso:
  - Opción 1: hacer que el ciclo no tenga el id del curso, sino que tome todos sus datos dentro de su propia tabla. Lo chimbo es la duplicación de información.
  - Opción 2: hacer que el ciclo tenga el id del curso, y al momento de finalizar se mueva el ciclo a una tabla de ciclos finalizados, teniendo en ese caso si los datos del curso. Igual se duplica la info, pero un poquititititito menos.