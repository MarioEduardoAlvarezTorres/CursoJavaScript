/* 25) Programa una función que dado un arreglo de elementos, 
elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) 
devolverá ["x", 10, 2, "10", true]  */

const eliminarDuplicados = (arreglo=[]) =>{
    if(arreglo.length === 0) return console.warn("Tu arreglo esta vacio");
    if(typeof arreglo!= 'object') return console.warn("No ingresaste un arreglo");
    const sinDuplicados = new Set(arreglo);
    console.info(sinDuplicados);
}

eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true]);



    