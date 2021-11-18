"use strict"

/* generar un cosecutivo del 1 al 20 */
for (var i=1; i <=20; i++){
    console.log(i)

}
for (var i=1; i <=20; i++){
    console.log("aprendiz N."+""+i);
}

/* recorriendo arreglos */
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

for(i=0; i<=aprendiz1.length -1; i++){
    console.log(aprendiz1[i])
}
for(i=0; i<=aprendiz2.length -1; i++){
    console.log(aprendiz2[i])
}