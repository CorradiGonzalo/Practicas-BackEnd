/*
1- Declarar una variable llamada nombre que contenga tu nombre.

2- Declarar una variable edad que contenga tu edad.

3- Crear una variable mayorDeEdad que sea true si tenés 18 años o más, y false en caso contrario.

4- Crear una variable mensaje que use template strings (``) y diga:
   "Hola, me llamo [nombre], tengo [edad] años y soy mayor de edad: [mayorDeEdad]"

5- Mostrar el mensaje por consola.

*/

const nombre = "Gonzalo Corradi";
const edad = 23;
let mayorEdad = edad>18;
const mensaje = `Hola, me llamo ${nombre}, tengo ${edad} años y soy mayor de edad: ${mayorEdad}`

console.log(mensaje)
