import Saludar,{saludar,PI,usuario} from "./constantes.js";
import {aritmetica as arit} from "./aritmetica.js"
console.log("Archivo modulo.js");
console.log(PI,usuario);
//LOS ALIAS SE USAN PARA CAMBIAR EL NOMBRE QUE SE USARÁ EN ESTE ARCHIVO (NOMBREORIGINAL AS NUEVONOMBRE)
console.log(arit.sumar(5,3));
console.log(arit.restar(10,7));
//saludar();
saludar();
let saludo = new Saludar();
saludo;