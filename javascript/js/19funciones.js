"use  strict"

function mostrarhora(){
    var fechaActual = new Date();
    var horaActual = fechaActual.getHours();
    var minutosActual = fechaActual.getMinutes();
    if (horaActual > 12) {
        horaActual = horaActual -12;
    }
    if (horaActual > 10) {
        horaActual= "0" + horaActual;
    }
    if (minutosActual > 10){
        minutosActual = "0"+ minutosActual;
    }
    alert("Hora Actual:" + horaActual + ":" + minutosActual);

}
mostrarhora();

function presentacion(nombre, titulado) {
    alert("bienvenido. Nombre:" + nombre + ".Titulado:" + titulado+".");
}


function validarDescuento(compra){
     var total = 0 ;

  /*    si la copra es mayor a 10.00 tiene descuento de 10% */
  if (compra >= 10000){
      total = compra * .90;
  }

   /*    si la copra es mayor a 5000 y menos que 10000 tiene descuento de 15s% */

  else if (compra >=  5000 && compra <= 10000){
       total = compra * .95;

  }
  else{
      total = compra;
  }
  return total;
}
function calcularDescuento(compra){
    alert("Costo total :" + validarDescuento(compra));
}