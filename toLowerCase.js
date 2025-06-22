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

console.log("Array viejo.")
console.log(estudiantes);

/*
Usando el mismo array estudiantes que venís utilizando.

1- Creá una función llamada buscarPorNombre(nombre, estudiantes) que:

2- Reciba un nombre como parámetro (por ejemplo "lucia").

3- Busque un estudiante cuyo nombre coincida con el ingresado sin importar mayúsculas o minúsculas.

4- Si lo encuentra, lo muestra por consola.

5- Si no lo encuentra, muestra el mensaje: "No se encontró ningún estudiante con ese nombre."

6- Llamá a la función para buscar "lucia".
*/


function buscarPorNombre(nombre, estudiantes){
    let index = -1
    index = estudiantes.findIndex(estudiante => estudiante.nombre.toLowerCase() === nombre.toLowerCase());

    if(index !== -1){
        console.log(estudiantes[index]);
        console.log("Se encontro el nombre.")
    }
    else{
        console.log("No se encontro el estudiante.")
    }
}

buscarPorNombre("LUCIA", estudiantes)