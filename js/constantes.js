export const PI = Math.PI;
export let usuario = "Eduardo";
let password = "qwerty";
//export default password; 
//export default:cuando se exporte se hara automaticamente  
export function  saludar(){
    console.log("hola modulos emascript")
}
//NO SE PUEDEN TENER DOS O MAS FUNCIONES DEFAULT!!!

//EN LAS CLASES TAMBIEN SE PUEDE DEFINIR COMO EN LA FUNCIONES EL DEFAULT
export default class Saludar{
    constructor(){
        console.log("Hola");
    }
}