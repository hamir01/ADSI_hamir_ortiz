/* operador condicional */
"use strict"

/* condicional simple  */
var edad = 18;
if (edad >= 18) {
    console.log("bienvenido, dirijase a la mesa de votacion")
}
/* condicional completo */
/* ambiente 1 para 20 personas */
/* ambiente 2 para 40 personas */
/* bioauditorio para 100 personas */
/* informar si no hay ambiente con capacidad  suficiente  */
/* informar si ha surgido un error */

var cantidadpersonas = 80;


if (cantidadpersonas <= 20) {
    console.log("bienvenido a hambiente 1 puede seguir");
}
else if (cantidadpersonas > 20 && cantidadpersonas <=40){
console.log("por favor utilice el ambiente 2");
}
else if (cantidadpersonas > 40 && cantidadpersonas <=100){
console.log("por favor utilice el bioauditorio");
}
else if (cantidadpersonas > 100){
console.log("no hay ambientes con la cantidad seleccionada");
}
else{
    console.log("ha surgido un error");
}

/* condicional anidado */
/* sistema para determinar el descuento de usuario */
/* si el usuario es menor de 10 o mayor a 70 años tiene un descuento sobre el valor del tiquete
de 10% , si el destino es cartagena estos usuarios tiene descuento adicional del 10%,
si la aerolina es latam a dicho destino, estos usuarios tienen descuento adicional del 10% */

var edadusuario = 71;
var aerolineausuario = "latam";
var destinousuario = " san andres";
var valortiquete = 250000;
var descuento = .10;
var valordescuento = (valortiquete * .10);

if (edadusuario <= 10 || edadusuario >= 70){
    valortiquete = (valortiquete -(valortiquete * descuento));
    if (destinousuario === "cartagena"){
        valortiquete =(valortiquete -  valordescuento);
        if (aerolineausuario === "latam"){
            valortiquete = (valortiquete - valordescuento);
        }

    }
   
}
console.log(" valor del tiquete $ :" + valortiquete);