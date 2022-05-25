/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

let cadena = "Hola cuates como estan?";
let caracter = " ";
function split(cadena,caracter) {
    let segmento="";
    const separado=[];
    for (let i = 0; i < cadena.length; i++) {
        segmento+=cadena[i];
        if ((cadena[i] === caracter) || (i+1 === cadena.length)) {
            separado.push(segmento);
            segmento="";
        }
    }
    console.log(separado);
}

split(cadena,caracter);