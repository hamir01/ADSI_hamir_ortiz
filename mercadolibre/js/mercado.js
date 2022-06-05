class Moto {
    constructor(marca,  version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let moto1 = new Moto("Yamaha", "Mt 09", 2021, 56000000, 2530, "900 cc", "Medellin", "img/mt091.png");
let moto2 = new Moto("Yamaha", "Mt 03", 2018, 19000000, 12650, "300 cc", "Pereira", "img/mt2.png");
let moto3 = new Moto("Yamaha", "Mt 09", 2014, 36000000, 20090, "900 cc", "Manizales", "img/mt3.png");
let moto4 = new Moto("Yamaha", "Mt 07", 2019, 39000000, 30090, "689 cc", "Bogota", "img/mt4.png");
let moto5 = new Moto("Kawasaki", "Klx", 2018, 15000000, 40000, "250 cc", "Armenia", "img/klx1.png");
let moto6 = new Moto("Kawasaki", "Klx", 2022, 12000000,  0000, "150 cc", "Envigado", "img/klx2.png");

function mostrarMoto(moto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "contentImg");

    let imgMoto = document.createElement("img");
    imgMoto.setAttribute("src", moto.imagen);
    imgMoto.setAttribute("class", "estilo-img");
    contenedorImg.appendChild(imgMoto);

    let valorMoto = document.createElement("label");

    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(moto.precio);
    
    
    let textoValorMoto = document.createTextNode("$" + precioFormat);
    valorMoto.appendChild(textoValorMoto);
    valorMoto.setAttribute("class", "precio");
    contenedorImg.appendChild(valorMoto);

    let descripcionMoto = document.createElement("label");
    let textoDescripcionMoto = document.createTextNode(moto.marca + " " + moto.version);
    descripcionMoto.appendChild(textoDescripcionMoto);
    descripcionMoto.setAttribute("class", "descripcion");
    contenedorImg.appendChild(descripcionMoto);


    /* let contenedorSeparador = document.createElement("div"); */
    let anyoMoto = document.createElement("label");
    let textoAnyoMoto = document.createTextNode(moto.anyo);
    anyoMoto.appendChild(textoAnyoMoto);

    
    let kilometrajeMoto = document.createElement("label");
    let textoKilometrajeMoto = document.createTextNode(moto.anyo  + " - " + moto.motor + " - " + moto.kilometraje + "km" +  " - " + moto.ciudad);
    kilometrajeMoto.appendChild(textoKilometrajeMoto);
    kilometrajeMoto.setAttribute("class", "kilometraje");
    contenedorImg.appendChild(kilometrajeMoto);
    
    anyoMoto.setAttribute("class", "anyo");
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Mt") {
            mostrarMoto(moto1);
            mostrarMoto(moto2);
            mostrarMoto(moto3);
            mostrarMoto(moto4);
        }
        else if (busqueda == "Klx") {
            mostrarMoto(moto5);
            mostrarMoto(moto6);
        }
        else {
        this.alert("No se han encontrado coincidencias con la busqueda.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}

