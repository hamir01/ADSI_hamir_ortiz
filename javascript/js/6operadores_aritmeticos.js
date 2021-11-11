"use strict"

/* hallar el total */
var producto1 = 2560;
var producto2 = 3560;
var producto3 = 4560;
var totalSuma = producto1 + producto2 +producto3;
console.log("la suma de los productos es:" +totalSuma);

//hallar el descuento//
var producto4 = 15600;
var descuento = 3000;
var totalConDescuento = producto4 - descuento;
console.log("el valor total con descuneto es de :" +totalConDescuento)

/*hallar el total con multiplicsaciom*/
var producto5 = 2500;
var cantidadProductos = 5;
var totalMultiplicacion = producto5 * cantidadProductos;
console.log("el valor tootal de los 5 productos es:" + totalMultiplicacion); 

/*hallar el promedio de calificacion*/
var calificacion1 = 9.5 ;
var calificacion2 = 8.2;
var calificacion3 = 5.2;
var totalCalificaciones = 3;
var promedioFinal = (calificacion1 + calificacion2 + calificacion3) / totalCalificaciones;
/*esto es para que quede dos decimales*/
promedioFinal = promedioFinal.toFixed(2);
console.log("el  promedio final de calificaciones es :" + promedioFinal)

/*hallar el residuo*/
var ahorros = 25011;
var cantidadAportantes = 102;
var montonIndividual = 0;
var sobrante = 0;

/*cuanto dinero le corresponde a cada uno*/
var montoIndividual = parseInt(ahorros /cantidadAportantes);
console.log("el monto individual es de :" + montoIndividual);
/*el signo de residuo es % */
var montoSobrante = (ahorros % cantidadAportantes);
console.log("el monto sobrante es de:" + montoSobrante);
console.log();
console.log("el monto sobrante es :" +(ahorros -(montoIndividual *cantidadAportantes)));



