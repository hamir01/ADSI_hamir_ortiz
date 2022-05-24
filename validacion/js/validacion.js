"use strict"

function guardarInfo() {
    let cod = document.getElementById("cod").value;
    if (cod == "") {
        alert("Por favor, ingrese el codigo de productos");
        return false;
    }
    if (document.getElementById("descripcion").value == "") {
        alert("Por favor, ingrese una descripcion");
        return false;
    }
    if (document.getElementById("valor").value == "") {
        alert("Por favor, ingrese un valor");
        return false;
    }
    if (document.getElementById("stock").value == "") {
        alert("Por favor, ingrese un stock");
        return false;
    }
    alert("Información guardada con éxito");
    limpiarFormulario();
    return true;
    
}
function limpiarFormulario() {
    document.getElementById("cod").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("valor").value = "";
    document.getElementById("stock").value = "";
}



