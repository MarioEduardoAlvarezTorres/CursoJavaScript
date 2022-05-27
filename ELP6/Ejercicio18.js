/*18) Programa una función que dada una cadena de texto cuente el número de vocales y 
consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */

const contarVocalesConstantes = (cadena="") =>{
    let vocales=0;
    let consonantes=0;
    if(!cadena) return console.warn("No ingresaste ninguna cadena");
    if(typeof cadena!= 'string') return console.warn("No ingresaste una cadena");
    cadena = cadena.replace(/ /g, "")
    for (let i = 0; i < cadena.length; i++) {
        switch (cadena[i]) {
            case "a": vocales++; break;
            case "e": vocales++; break;
            case "i": vocales++; break;
            case "o": vocales++; break;
            case "u": vocales++; break;
        
            default:
                consonantes++;
                break;
        }
    }
    console.log(`Vocales:${vocales} \nConsonates:${consonantes}`)
}

contarVocalesConstantes("Hola Mundo");
