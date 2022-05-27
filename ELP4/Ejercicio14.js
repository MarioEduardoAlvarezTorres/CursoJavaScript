/* 14) Programa una función para convertir grados Celsius a Fahrenheit y 
viceversa, pe. miFuncion(0,"C") devolverá 32°F */

const convertirGrados= (numero=undefined,grados="") => {
    (!grados)? console.warn("No ingresaste una cadena")
    :(numero === undefined || typeof numero != 'number')? console.warn("No ingresaste un numero")
    :(grados === "C" || grados === "c")? console.info(numero*1.8+32):
     (grados === "F" || grados === "f")? console.info((numero-32)+1.8):
     console.warn("Valores no validos")
}

convertirGrados(0,"C");


