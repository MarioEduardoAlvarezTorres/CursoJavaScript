/* 22) Programa una función que dado un array devuelva el número mas alto y 
el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) 
devolverá [99, -60] */

const masAltoMasBajo= (inarray=[]) =>{
    if(inarray.length === 0) return console.warn("Tu arreglo esta vacio");
    if(typeof inarray!= 'object') return console.warn("No ingresaste un arreglo");
    let array = []
    let mayor,menor;
    mayor = inarray[0];
    menor = inarray[0];
    for (let i = 0; i < inarray.length; i++) {
        if(inarray[i]>mayor) mayor = inarray[i];
        if(inarray[i]<menor) menor = inarray[i];
    }
    console.info(`Mayor ${mayor}\nMenor ${menor}`)
}

masAltoMasBajo([4, 5, 99, -60])
masAltoMasBajo();

    