/* 
- Crear una función que reciba un id y un objeto con los campos a actualizar de un estudiante 
(por ejemplo: nombre, edad o curso). La función debe buscar el estudiante por id en el array estudiantes y
actualizar solo los campos indicados.

Requisitos:
- El array estudiantes debe seguir siendo el mismo que usamos antes (global).

- Si no encuentra el estudiante, mostrar un mensaje por consola.

- No debe actualizar el id.

- Mostrar el array completo después de actualizar.
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

console.log("Este es el array viejo");
console.log(estudiantes);

function crearObjeto(nombre, edad, curso){
    let objeto = {nombre, edad, curso 
    }
    return objeto;
} 

function actualizarEstudiante(id, objeto, estudiantes){
    let estudiante = estudiantes.find(estudiante => estudiante.id === id);
    if (estudiante){
        if(objeto.nombre) estudiante.nombre = objeto.nombre;
        if(objeto.edad) estudiante.edad = objeto.edad;
        if(objeto.curso) estudiante.curso = objeto.curso;
    }
    else{
        console.log("No se encontro el objeto.")
    }
}

let gonzalo = crearObjeto("Gonzalo Corradi", 24, "Ingenieria en Sistemas");

actualizarEstudiante(1, gonzalo, estudiantes);

console.log("Este es el array luego de actualizar.");
console.log(estudiantes);
