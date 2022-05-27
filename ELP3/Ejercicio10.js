/* 10) Programa una función que reciba un número y 
evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
pe. miFuncion(2002) devolverá true  */

const capicua = (numero = undefined) => {
    if(numero === undefined) return console.warn("No ingresaste ninguna numero");
    if(typeof numero != 'number') return console.warn("No ingresaste un numero");
    if(numero.toString().split("").reverse().join("") != numero.toString()) return false
    else return true
    
}

console.info(capicua(1001));



    