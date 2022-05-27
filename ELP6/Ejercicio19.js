/* 19) Programa una función que valide que un texto sea un nombre válido, 
pe. miFuncion("Jonathan MirCha") devolverá verdadero */

const validarNombre = (nombre="") => {
    if(!nombre) return console.warn("No ingresaste ninguna cadena");
    if(typeof nombre!= 'string') return console.warn("No ingresaste una cadena");
    let expReg=/^[A-Za-zÑnÁáÉéÍíÓóÚú\s]+$/g.test(nombre)
    return(expReg)
    ?console.info("Es un nombre válido")
    :console.log("No es un nombre válido");
}

validarNombre();
validarNombre(3);
validarNombre("Mario Eduardo");
validarNombre("Mario Eduardo,");