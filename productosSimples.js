/* 
1- Creá una función llamada crearProducto que reciba los siguientes parámetros:

-title (string)

-price (number)

-stock (number)

2- La función debe devolver un objeto con la siguiente estructura:

{
  id: (autogenerado, empieza en 1 y se incrementa por cada producto nuevo),
  title: ...,
  price: ...,
  stock: ...
}

3- Creá un array llamado productos donde vayas almacenando los productos creados con la función crearProducto.

4- Agregá al menos 3 productos diferentes y mostralos por consola con console.log(productos).

*/
let c = 0;
let productos = [];

function crearProducto(title, price, stock){
    c ++;
    const objeto = {
        id:c,
        title:title,
        price:price,
        stock:stock,
    };

    productos.push(objeto)
}

crearProducto("Zapatillas", 1500, 100);
crearProducto("Celualar", 2600, 100);
crearProducto("Notebook", 2000, 200);

console.log(productos);
