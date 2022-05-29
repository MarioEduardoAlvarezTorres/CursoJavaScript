/* 24) Programa una función que dado un arreglo de números devuelva un 
objeto con dos arreglos, el primero tendrá los numeros ordenados en forma 
ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) 
devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/

const ordenArreglo = (arreglo=[]) =>{
    if(arreglo.length === 0) return console.warn("Tu arreglo esta vacio");
    if(typeof arreglo!= 'object') return console.warn("No ingresaste un arreglo");
    dosArreglos.asc=arreglo.sort((a, b) => a - b ).slice();
    dosArreglos.desc=arreglo.sort((a, b) => a - b ).reverse().slice();
    console.log(dosArreglos);
}

let dosArreglos ={
    asc:[],
    desc:[]
}

ordenArreglo([1, 10, 2, 21])



    