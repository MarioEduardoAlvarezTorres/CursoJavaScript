export function validacionNum(numero) {
    let esNumero = (typeof numero === 'number')?1:0;
    return esNumero;
}
export function validacionCadena(cadena) {
    let esCadena = (typeof cadena === 'string')?1:0;
    return esCadena;
}