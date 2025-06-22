/*
1- Crear una función que permita registrar estudiantes con los siguientes datos:

nombre (string)

edad (número)

curso (string)

2- Y guardarlos en un array global llamado estudiantes.

Requisitos:

- El ID de cada estudiante debe generarse automáticamente (secuencial).

- Cada vez que se llama a la función, se debe agregar un nuevo estudiante al array.

- Mostrar todos los estudiantes registrados al final del código con console.log.
*/
let estudiantes = [];
let id = 0;

function registrarEstudiantes(nombre, edad, curso) {
    id ++    
    let estudiante = {
        id:id,
        nombre:nombre,
        edad:edad,
        curso:curso,
    }

    estudiantes.push(estudiante);

}


registrarEstudiantes("Gonzalo", 23, "BackEndI");
registrarEstudiantes("Lucia", 21, "Arquitectura");
registrarEstudiantes("Catalina", 14, "Tercer Ano");

console.log(estudiantes);


