/*let dato = 20;
switch(dato) {
    case 10 :
        document.write("El valor es 10");
        break;
    case 20 :
        document.write("El valor es 20");
        break;
    default:
        document.write("El valor de la variable no coincide");
}*/

/*let v= 'a', ,mensaje = '';

switch(v) {
    case 'a':
        mensaje = 'La Letra " ${v}": es una vocaañ';
    break;
    case 'e':
        mensaje = 'La Letra " ${v}": Es una vocal';
    break ;
    case 'i':
        mensaje = 'La Letra " ${v}": es una vocaañ';
    break;
    case 'o':
        mensaje = 'La Letra " ${v}": es una vocaañ';
    break;
    case 'u':
        mensaje = 'La Letra " ${v}": es una vocaañ';
    break;
    default:
        mensjae = "El valor de la variable no coincide";


}
document.write(mensaje);*/
let v = 'a', mensaje = '';
switch (v){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
        mensaje = `La Letra " ${v} "Es una VOCAL`;
    default:
        mensaje = `La Letra " ${v} "No es una VOCAL`;

}
Document.while (mensaje);
