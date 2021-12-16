"use strict"


/* imprimir fecha y hora del navegador */


var currenTime = new Date();
console.log(currenTime);


/* desglosando fecha y hora */

var anyo = currenTime.getFullYear();
console.log("año :" + anyo);

var mes = currenTime.getMonth();
console.log("mes :" + (mes + 1));

var diaSemana = currenTime.getDay();
console.log("dia de la semana:" + diaSemana);

var dia = currenTime.getDate();
console.log("dia del mes  :" + dia);

var hora = currenTime.getHours();
console.log("hora :" + hora);

var minutos = currenTime.getMinutes();
console.log("minutos :" + minutos);

var segundos = currenTime.getSeconds();
console.log("segundos :" + segundos);


var milisecon = currenTime.getMilliseconds();
console.log("milisegundos :" + milisecon);

var milisecon1970 = currenTime.getTime();
console.log("milisegundos 1 enero 1970 :" + milisecon1970);

/* cammbiar numero del dia por texto */
var diaSemanaStr = ["Domingo","Lunes" ,"Martes", "Miercoles", "Jueves", "viernes","Sabado"];
console.log("hoy es :" + diaSemanaStr[diaSemana]);

/* Fecha: Juves, 2 de Diciembre del año 2021 */

var mesesStr = ["Enero","Febrero" ,"Marzo", "Abril", "Mayo", "Junio","Juilo", "Agosto","Septiembre" ,"Octubre", "Noviembre", "Diembre"];
console.log ("fecha: " +diaSemanaStr[diaSemana] +", " +  dia + " de " + mesesStr[mes] +" del año " + anyo);



var fechaFutura = new Date("May 19, 2022");

/* obtengo los milesegundos transcurridos hasta el dia de hoy */

var msCurrent = currenTime.getTime();
var msFechaFutura = fechaFutura.getTime();
console.log(msCurrent, msFechaFutura)
var diffMsFechaFutura = (msFechaFutura- msCurrent);
console.log(diffMsFechaFutura);



/* determinar si ya vencio el plazo */

/* var fechaHoraLimite = new date ("December 9, 2021 09:30:00"); */

var fechaHoraLimite = new Date (Date.UTC( 11, 9, 9, 30, 0));
fechaHoraLimite.setHours(8);

console.log ("Fecha y hora de vencimiento:" + fechaHoraLimite);

if (anyo <= fechaHoraLimite.getFullYear()&&
mes <= fechaHoraLimite.getMonth()&&
dia <= fechaHoraLimite.getDate()&&
hora <= fechaHoraLimite.getHours()&&
minutos <= fechaHoraLimite.getMinutes()) {
    console.log ("falta: " +(dia - fechaHoraLimite.getDate())
}



