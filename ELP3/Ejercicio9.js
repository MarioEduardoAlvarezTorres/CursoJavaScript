/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */

const numAleatorio = () =>{
    return Math.round(Math.random() * (600 - 501) + 501);
}

console.info(numAleatorio());
console.info(numAleatorio());
console.info(numAleatorio());
console.info(numAleatorio());
console.info(numAleatorio());

    