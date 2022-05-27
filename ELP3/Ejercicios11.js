/* 11) Programa una función que calcule el factorial de un número 
(El factorial de un entero positivo n, se define como el producto de 
todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) 
devolverá 120 */

const factorial = (numero=undefined) =>{
    if(numero === undefined) return console.warn("No ingresaste ninguna numero");
    if(typeof numero != 'number') return console.warn("No ingresaste un numero");
    if(Math.sign(numero)===-1) return console.error("No puedes ingresar numero negativos");
    if(numero === 0) return 1
    else return numero * factorial(numero-1)
}

console.info(factorial(0));