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
Usá el mismo array estudiantes que ya venís utilizando.

1- Creá una función llamada eliminarEstudiante(id, estudiantes) que:

2- Busque al estudiante con el ID proporcionado.

3- Si existe, lo elimine del array.

4- Si no existe, imprima por consola "No se encontró el estudiante.".

5- Llamá a la función para eliminar al estudiante con id = 2.

6- Mostrá el array actualizado por consola.

*/

function eliminarEstudiante(id, estudiantes){
    let index = estudiantes.findIndex(estudiante => estudiante.id === id);
    if(index !== -1){
        estudiantes.splice(index,1);
    }
    else{
        console.log("No se encontro el estudiante.")
    }
}

eliminarEstudiante(1, estudiantes);
console.log("Array con el estudiante eliminado")
console.log(estudiantes)