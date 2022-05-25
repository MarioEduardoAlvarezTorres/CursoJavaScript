/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
import {validacionNum,validacionCadena} from "./validacion.js"

let texto = "Hola Mundo";
let veces = 4;

function repetirTexto(cadena,numVeces) {
    if((validacionCadena(cadena) && validacionNum(numVeces))===1){
        for (let i = 0; i < numVeces; i++) {
            console.log(cadena);
        } 
    }else{
        console.log("Datos Incorrectos")
    }
}

repetirTexto(texto,veces);