"use stritc"
/* formas de declarar e inicializar un arreglo */
/* forma 1 */

var aprendiz1 = new Array();
aprendiz1[0] = 1;
aprendiz1[1] = "yeimi katherine";
aprendiz1[2] = "luisa ariza";
aprendiz1[3] = 18;
aprendiz1[4] = "B. villa del prado";
aprendiz1[5] = 156;

/* forma 2 */
var aprendiz2 = new Array(2, "luisa fernanda", "ramirez montoya", 19, "B.simon bolivar", 157);

/* forma 3 */

var aprendiz3 =[3, "jesus nicolas", "ayerbe guarnizo",17, "B. las palmitas", 177];

/* mostrar el nombre completo del aprendiz n2 */
console.log ("nombre de aprendiz n2:"+""+aprendiz2[1]);

/* añadiendo elementos al arreglo */
aprendiz3[5] = "3142301876";
console.log (aprendiz3[5]);

/* contando elementos */
var cantidadelementos = aprendiz1.length;
console.log ("aprendiz  1 tiene:" +cantidadelementos + "elementos");
console.log("")

/* contando caracteres */
var cantidadcaracteres = aprendiz2[1].length;
console.log("la cantidad de caracteres son:" +cantidadcaracteres);