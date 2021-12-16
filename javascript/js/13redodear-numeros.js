"use strict"

/* redondear de forma automatica con el metodo round */
console.log ("redondear de foma automatica con el metodo round");
var number1 = 4.4;
var number2 = 4.6;
var number3 = 4.5;
var number1Round = Math.round(number1);
var number2Round = Math.round(number2);
var number3Round = Math.round(number3);

console.log ("Variable 1: " + number1Round +"\n"+
             "Variable 2: " + number2Round +"\n"+
            "Variable 3: " + number3Round);

/* 
            redondear hacia el Piso
 */
 console.log ("redondear con el metodo floor");
var number4 = 4.9;
var number4Floor = Math.floor(number4);

 console.log("Variable 4 :" + number4Floor);
 

/*  redondear hacia el techo con el metodo ceil */
console.log("redondear con el metodo ceil");
var number5 =4.1;
var number5ceil =Math.ceil(number5);
console.log("Variable 5 :" + number5ceil);
