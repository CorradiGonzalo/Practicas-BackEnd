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
registrarEstudiantes("Lucia", 20, "Arquitectura");
registrarEstudiantes("Catalina", 14, "Tercer Ano");

console.log("Registro viejo.");
console.log(estudiantes);

/* 
Usando el mismo array estudiantes que venís trabajando:

1- Crear una función llamada filtrarPorCurso(curso, estudiantes) que:

2- Reciba como parámetro un nombre de curso (por ejemplo "BackEndI").

3- Devuelva un nuevo array que contenga solo los estudiantes que están anotados en ese curso.

4- Mostrar por consola el array resultante.

5- Llamar a la función para filtrar los estudiantes del curso "BackEndI".

*/

function filtrarPorCurso(curso, estudiantes){
    let newArray = estudiantes.filter(estudiante => estudiante.curso === curso);
    if(newArray.length !== 0){
        console.log(`El nuevo array creado con los estudiantes del curso ${curso}, es:`);
        console.log(newArray);
    }
}

filtrarPorCurso("BackEndI", estudiantes);













