/* 8) Programa una función que elimine cierto patrón de caracteres de 
un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") 
devolverá  "1, 2, 3, 4 y 5 */

const eliminarPatron = (textoDado="",patron="") =>{
    (!textoDado)?
        console.warn("No ingresaste un texto")
    :(!patron)
        ?console.warn("No ingresaste un patron de caracteres")
        :console.info(textoDado.replace(new RegExp(patron,"ig"),""));
}
eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz")
