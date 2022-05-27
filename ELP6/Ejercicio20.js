/* 20) Programa una función que valide que un texto sea un email válido, 
pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */
const validarEmail = (email="") => {
    if(!email) return console.warn("No ingresaste ninguna cadena");
    if(typeof email!= 'string') return console.warn("No ingresaste una cadena");
    let expReg=/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);
    return(expReg)
    ?console.info("Es un email válido")
    :console.log("No es un email válido");
}

validarEmail();
validarEmail(3);
validarEmail("Mario_Eduardo@gmail.com");
validarEmail("Mario Eduardo,");