/*
1- Escribí una función llamada verificarEdad que reciba una edad por parámetro.

2- Si la edad es menor a 13, devolvé el mensaje: "Sos un niño."

3- Si la edad es entre 13 y 17 (inclusive), devolvé: "Sos un adolescente."

4- Si la edad es 18 o más, devolvé: "Sos un adulto."

5- Llamá a la función 3 veces con diferentes edades y mostrá los resultados por consola. 
*/



function verificarEdad(edad) {
    if(edad < 13){
        console.log("Sos un niño")}
    else if(13 <= edad && edad <= 17){
        console.log("Sos un adolescente")}
    else{
        console.log("Sos un adulto")
    }

}

verificarEdad(12)
verificarEdad(15)
verificarEdad(20)
