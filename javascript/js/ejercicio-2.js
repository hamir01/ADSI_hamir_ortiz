"use strict"

console.log("contando caracteres");
console.log("   ");

var texto = " Este es un texto con mas de 50 caracteres El amor es una experiencia universal que nos conmueve a todos, pero a veces no hallamos las palabras adecuadas para expresarlo. A lo largo de la historia los poetas han sabido decir aquello que todos sentimos de formas creativas y elocuentes." ;


console.log("el texto que usted ingreso es: " + texto);
console.log("   ");
console.log("numero de caracteres: "+texto.length);
console.log("   ");
 if (texto.length>50){
     console.log("advertencia: ha excedido el numero de caracteres");
 }

 console.log(" ")

 console.log("busqueda de coincidencia");
 console.log("   ");
var celulares = ["Samsung","Apple","Xiaomi","LG","ZTE","Blu","Sony"];
var Nombrecelular="Apple";
console.log("El celular buscado es: "+ Nombrecelular);
if(celulares.includes(Nombrecelular)){
    console.log("El celular se encontro");
}else {
    console.log("El celular no se encontro encontrada");
}


console.log("   ");
console.log("listado de aprendices")
console.log("   ");
var Aprendices=["yolanda bermeo","hamir ortiz","edison useche","Yoan estiven", "sebastian Rivera", "andres mendez", "hames santiago","mildreth pamija","karen macias", "manuel macias" ];
for(i=1;i<Aprendices.length;i++){
    console.log(i+" "+ Aprendices[i] )
}
