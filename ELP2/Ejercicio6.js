/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */
let texto = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Adipisci qui qui qui fuga pariatur maiores minus minus deleniti, maxime perferendis. Necessitatibus, illo. Optio, fuga eligendi. Explicabo ullam minus quos illum nam placeat possimus.";
const palabraRepetida = (cadena="", palabra="") => {
    let contador =0;
    if(!cadena || !palabra) return console.warn("No ingresaste ninguna cadena");
    if((typeof cadena || typeof palabra)!= 'string') return console.warn("No ingresaste una cadena");
    let arreglo = cadena.split(" ");
    for (let i = 0; i < arreglo.length; i++) {
        if(arreglo[i] === palabra) contador++;
    }
    console.info(`Las veces que se repite ${palabra} son: ${contador} veces`)
}

palabraRepetida(texto,"sit")