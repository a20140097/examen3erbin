var nombre = prompt("Coloca tu nombre");
var c = 0;
var i = 0;
alert=("Bienvenido/a al cuestionario sobre los mares" + nombre)
var p1 = prompt("¿Cuánta agua hay en la Tierra?\nA: ¿Cuánta agua hay en la Tierra?\nB: ¿Cuánta agua hay en la Tierra?\nC:"
A. Alrededor de un 41% de la superficie terrestre es agua.
B. Alrededor de un 51% de la superficie terrestre es agua
C. Alrededor de un 71% de la superficie terrestre es agua)
if(p1 == "B"){
 c = c + 1;
}else if (p1 == "A"){
    i = + 1;
}else if (p1 == "C"){
    i = i + 1;
}else{
alert}("Opción no valida")
var p2 = prompt("¿Qué océano es el más grande?\nA: ¿Qué océano es el más grande?\nB: ¿Qué océano es el más grande?\nC:"
A. El Pacífico 
B. El Atlántico
C. El Índico)
if(p2 == "B"){
 c = c + 1;
}else if (p2 == "A"){
    i = + 1;
}else if (p2 == "C"){
    i = i + 1;
}else{
alert}("Opción no valida")
var p3 = prompt("¿Cuánto mide la parte más profunda de los Océanos?\nA: ¿Cuánto mide la parte más profunda de los Océanos?\nB: ¿Cuánto mide la parte más profunda de los Océanos?\nC:"
A. 11 Km 
B. 23 Km
C. 31 Km)
if(p3 == "B"){
 c = c + 1;
}else if (p3 == "A"){
    i = + 1;
}else if (p3 == "C"){
    i = i + 1;
}else{
alert}("Opción no valida")
if(c > i){
document.write(nombre + ", lo has hecho bien<br>");
document.write("Correctas:" + c + "<br>");
document.write("Incorrectas" + i + "<br>");

}else if (c < i){
document.write(nombre + ", lo has hecho bien<br>");
document.write("Correctas:" + c + "<br>");
document.write("Incorrectas" + i + "<br>");

}else{
document.write(nombre + ", lo has hecho bien<br>");
document.write("Correctas:" + c + "<br>");
document.write("Incorrectas" + i + "<br>");
}
var = 
