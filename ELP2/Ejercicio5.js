/* 5) Programa una función que invierta las palabras de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

const cadenaReversa = (cadena="") => {
    if(!cadena) return console.warn("No ingresaste ninguna cadena");
    if(typeof cadena!= 'string') return console.warn("No ingresaste una cadena");
    console.info(`Cadena invertida ${cadena.split("").reverse().join("")}`);
}

cadenaReversa("Hola")

