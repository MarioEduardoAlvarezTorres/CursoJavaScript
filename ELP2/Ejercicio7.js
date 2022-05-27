/* 7) Programa una función que valide si una palabra o frase dada, 
es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true */

const palindromo = (cadena="") => {
    if(!cadena) return console.warn("No ingresaste ninguna cadena");
    if(typeof cadena!= 'string') return console.warn("No ingresaste una cadena");
    if(cadena.trim().length % 2 === 0) return console.info(`No es palindromo,la cadena es par `);
    cadena.split("").reverse().join("").replace(/\s+/g, '') != cadena.replace(/\s+/g, '')? 
        console.log(`No es palindormo`)
        :console.log("Si es palindormo");
    
}

palindromo("dabale arroz a la zorra el abad");