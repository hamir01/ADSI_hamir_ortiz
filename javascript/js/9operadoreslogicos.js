"use strict"
/* operadores logicos */
/* &&...y
||...o
!=... negacion
xor.o exclusivo */


/* si el aprendiz tiene jovenes en accion o sisben 
puede acceder al subsidio de transporte acceder si tiene jovenes en accion y sibes NO puede acceder al subsidio de transporte
 si no tiene jovenes en accion y no tiene sisben 
 tampo puede accerder al subsidio de transporte */
 
 var jovenesaccionusuario = true;
 var sisbenusuario = true;

 if (jovenesaccionusuario === true ^ sisbenusuario === true) {
     console.log("usted puede accedeer al servicio de transporte");
 }
 else{
      console.log("no puede accerder al servicio de transporte");
 }
