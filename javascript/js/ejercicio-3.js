console.log("Cadenas de texto en javascript");

console.log(" ");

console.log("1. Cambiando todo a Mayusculas");

console.log(" ");
var NombreEnminuscula= "leo messi";
console.log("el nombre que usted ingreso es :" + NombreEnminuscula);
console.log("el nombre luego de usar la propiedad ToUpperCase :" + NombreEnminuscula.toUpperCase());
console.log(" ");
console.log("2.cambiando todo a minusculas");
var NombreMayuscula= "LEO MESSI";
console.log("el nombre que usted ingreso es :" + NombreMayuscula);
console.log("el nombre luego de usar la propiedad ToLowercase :" + NombreEnminuscula.toLowerCase());
console.log(" ");
console.log("3.Primera letra en mayuscula y el resto en minuscula");

console.log(" ");
var NombreEnminuscula= "ronaldo";
console.log("el nombre que usted ingreso es :" + NombreEnminuscula);
console.log("el nombre luego de usar la propiedad ToUpperCase y concatenar con slice :" + NombreEnminuscula[0].toUpperCase() + NombreEnminuscula.slice(1));
console.log(" ");
console.log("4.Extrayendo partes de la cadena de texto");

var saiyan= "cristiano";
console.log("el texto que usted ingreso es :" + saiyan);
console.log("el texto luego de usar el metodo slice :" + saiyan.slice(0,6));
console.log(" ");

console.log("5. Contando caracteres");

var saiyan2= "Messi gano balon de oro ahora tiene 7 ";
console.log("el texto que usted ingreso es :" + saiyan2);
console.log("el texto tiene una dimension de :" + saiyan2.length);
console.log(" ");

console.log("6.Hallando espacios dobles");

var saiyan3= "cristi   ano";
console.log("el texto que usted ingreso es :" + saiyan3);
for(i = 0;i<saiyan3.length;i++){
    if(saiyan3.slice(i,(i+2))==="  "){
        console.log("El texto tiene espacios dobles ");
    }
}
console.log(" ");
console.log("7.Reemplazando texto");

var trabajo= "recolectar cafe en coco";
var newlang= "balde";
console.log("el texto que usted ingreso es :" + trabajo);
for(i=0;i<trabajo.length;i++){
    if(trabajo.slice(i, i + 5) === "coco"){
        trabajo= trabajo.slice(0,i);
    }
}
console.log(trabajo+newlang);

console.log(" ");
console.log("8.Reemplazando texto con indexof");

var trabajo1="riden mas recolectar cafe en coco";
console.log("el texto que usted ingreso es :" + trabajo1);
var firstchar= trabajo1.indexOf("coco")
if(firstchar !== -1){
    console.log(firstchar);
    trabajo1 = trabajo1.slice(0,firstchar)+"balde";
    console.log(trabajo1);
}

console.log(" ");
console.log("9.Extraer el primer caracter");

var nombre1="Hamir";
var primerCaracter=nombre1.charAt(0);
console.log("El nombre ingresado es :"+ nombre1);
console.log( "El primer caracter de este nombre es :"+ primerCaracter);

console.log(" ");

console.log("10.Extraer el ultimo caracter");
ultimoCaracter=nombre1.charAt(nombre1.length - 1);
console.log( "El ultimo caracter de este nombre es :"+ ultimoCaracter);

console.log(" ");

console.log("11.buscando caracteres especiales");

var frase = "siiiuuu !!";
console.log("La frase es: "+frase);
for(var i=0;i<frase.length;i++){
    if(frase.charAt(i)==="!"){
        console.log("Se encontraron caraceres especiales de signos de admiracion")
    }
}
console.log(" ");
console.log("12.reemplazando texto con el metodo replace");

var pais= "Una potencia mundial es Estados Unidos ";
console.log( "El texto ingresado  es : "+ pais);
console.log( "El nuevo que se ingreso texto es : " +pais.replace("Estados Unidos","EE.UU"))