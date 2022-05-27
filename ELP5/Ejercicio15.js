/* 15) Programa una función para convertir números de 
base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */

const convertirBinarioDecimal = (numero = undefined,base = undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste número a convertir");
    if(typeof numero !== "number") return console.error("El valor no es un numero");
    if(base === undefined) return console.warn("No ingresaste la base");
    if(typeof base !== "number") return console.error("El valor base no es un numero");

    return console.info(`${numero} base ${base} = ${parseInt(numero,base)} base 10`);
}

convertirBinarioDecimal(100,2)