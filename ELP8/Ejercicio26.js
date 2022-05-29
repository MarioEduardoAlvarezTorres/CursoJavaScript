/* 26) Programa una función que dado un arreglo de números obtenga el promedio, 
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */

const promedio = (numero = []) =>{
    let sumatoria=0;
    if(numero.length === 0) return console.warn("Tu arreglo esta vacio");
    if(typeof numero!= 'object') return console.warn("No ingresaste un arreglo");
    for (let i = 0; i < numero.length; i++) {
         sumatoria += numero[i];
    }
    console.info(sumatoria/numero.length);
}

promedio([9,8,7,6,5,4,3,2,1,0]);