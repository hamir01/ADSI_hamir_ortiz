"use strict"



let rock = document.getElementById("rock");



rock.addEventListener("click",function() {
    rock.classList.remove("div-rock");
    rock.classList.add("div-rock-hidden");
    dualipa.classList.remove("div-dualipa");
    dualipa.classList.add("div-dualipa-visible");

});

let dualipa = document.getElementById("dualipa");

dualipa.addEventListener("click",function() {
    dualipa.classList.remove("div-dualipa-visible");
    dualipa.classList.add("div-dualipa");
    rock.classList.remove("div-rock-hidden");
    rock.classList.add("div-rock");
})