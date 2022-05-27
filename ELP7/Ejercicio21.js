/* 21) Programa una función que dado un array numérico devuelve otro array 
con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) 
devolverá [1, 16, 25] */

const arrayAlCuadrado = (inarray=[]) =>{
    
    if(inarray.length === 0) return console.warn("Tu arreglo esta vacio");
    if(typeof inarray!= 'object') return console.warn("No ingresaste un arreglo");
    let outarray=[];
    for (let i = 0; i < inarray.length; i++) {
        outarray[i] = inarray[i]**2;
    }
    console.info(`ArrayEntrada:[${inarray}]\nArraySalida:[${outarray}]`)
}

arrayAlCuadrado([1,2,3]);



    
