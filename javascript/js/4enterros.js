 "use strict"
 var CostoSinIva = 32000;
 var CostoIva = 3200;
 var CostoDomicilio = 3000;
 var CostoTotal = CostoSinIva  + CostoIva + CostoDomicilio

 console.log("El costo total es: $" + CostoTotal  );
 console.log("el limite para usar entero es:" + Number.MAX_SAFE_INTEGER)

var numMaximo = Number.MAX_SAFE_INTEGER;

/* las siguiente operacion genera un error por sobrepasar el numero maximo disponible */
console.log(numMaximo + 2);
