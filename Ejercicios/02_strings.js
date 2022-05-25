/*2. Strings

Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).
Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).
*/

var palabra2="computadora"
var cincoprimeros=palabra2.substring(0,5)
console.log("Cinco primeras letras:",cincoprimeros)

var primermayus=palabra2.substring(0,1).toUpperCase()+palabra2.substring(1,11).toLocaleLowerCase()
console.log("Primer letra mayuscula:",primermayus)

var palabra22="p sicologia"
var espacioblanco=palabra22.indexOf(' ')
console.log("Posicion espacio blanco:",espacioblanco)     