/*Arrays

Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11.
Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
Agregar un elemento al principio y al final del array (utilizar unshift y push).
Quitar un elemento del principio y del final del array (utilizar shift y pop).
Invertir el orden del array (utilizar reverse).
Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).
Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var arrayMeses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]
console.log(arrayMeses[4], arrayMeses[10])

var arrayOrdenado=arrayMeses.sort()
console.log(arrayOrdenado)

arrayMeses.unshift("principio")
arrayMeses.push("final")
console.log(arrayMeses)

arrayMeses.shift()
arrayMeses.pop()
console.log(arrayMeses)

arrayMeses.reverse()
console.log(arrayMeses)

var unicoString=arrayMeses.join("-")
console.log(unicoString)


var copiaArray=arrayMeses.slice(4,10)
console.log(copiaArray)