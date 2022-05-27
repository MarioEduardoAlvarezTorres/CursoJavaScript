/* 23) Programa una función que dado un array de números devuelva un objeto con 
2 arreglos en el primero almacena los números pares y en el segundo los impares, 
pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */

const arrayParesImpares = (inarray=[]) =>{
    
    if(inarray.length === 0) return console.warn("Tu arreglo esta vacio");
    if(typeof inarray!= 'object') return console.warn("No ingresaste un arreglo");
    let pares=[];
    let impares =[];
    for (let i = 0; i < inarray.length; i++) {
        (inarray[i]%2===0)? pares.push(inarray[i]):impares.push(inarray[i]); 
    }
    console.info(`ArrayPares:[${pares}]\nArrayImpares:[${impares}]`)
}
arrayParesImpares([]);
arrayParesImpares(1);
arrayParesImpares([1,4,2,3,67,3,4,9,1,0,100]);

