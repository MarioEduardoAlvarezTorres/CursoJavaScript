 /* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
import {validacionNum,validacionCadena} from "./validacion.js"
let numCaracteres = 3;
let cadena = "HOLA MUNDO QUE TAL ESTAN?"

function textoRecortado(texto,numero) {
    let cadenaRecortada = "";
    if((validacionCadena(texto) && validacionNum(numero))===1){
        for (let i = 0; i < numero; i++) {
            cadenaRecortada+= texto[i];
        }
        console.log(`La cadena ${texto} recortada a ${numero} caracteres es: ${cadenaRecortada}`);
    }else{
        console.log("Datos Incorrectos")
    }
    
}
textoRecortado(cadena,numCaracteres);
