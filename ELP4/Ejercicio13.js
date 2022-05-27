/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */

const parOImpar = (numero=undefined) => {
    if(numero === undefined) return console.warn("No ingresaste ninguna numero");
    if(typeof numero != 'number') return console.warn("No ingresaste un numero");
    numero%2===0? console.info("Es par"):
    console.info("No es par")
}
console.info(parOImpar(0))

