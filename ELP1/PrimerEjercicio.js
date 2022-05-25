//Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10

let cadena = "esternocleidomastoideo";
function contadorCaracteres(dato){
    if (typeof dato != 'string') {
        console.log(`El valor igresado no es una cadena, ingresaste tipo de dato ${typeof dato}`);
    }else
        console.log(`El numero de caracteres de la cadena: ${dato} es ${dato.length} caracteres`)
}
contadorCaracteres(cadena);