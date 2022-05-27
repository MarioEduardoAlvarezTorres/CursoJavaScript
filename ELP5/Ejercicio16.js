/* 16) Programa una función que devuelva el monto final después de 
aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */


const montoFinal = (monto=undefined,descuento=undefined) =>{
    if(monto === undefined) return console.warn("El monto no esta definido");
    if(descuento === undefined) return console.warn("El descuento no esta definido");
    if(typeof monto !== "number") return console.warn("El monto no es un numero");
    if(typeof descuento !== "number") return console.warn("El descuento no es un numero");
    if(Math.sign(monto) === -1) return console.error("El monto no puede ser negativo"); 
    if(Math.sign(descuento) === -1 || descuento > 100) return console.error("El descuento no puede ser negativo o mayor a 100"); 
    console.info(monto-descuento*(monto/100));
}
    
montoFinal(1000,25)