function trennen() {

let zeichenkette = document.getElementById("eingabe").value;
let trennung = document.getElementById("trennungsposition").value;
let davor = document.getElementById("radioDavor").value;
let danach = document.getElementById("radioDanach").value;
let ausgabeVorne =document.getElementById("vorderTeil");
let ausgabeHinten = document.getElementById("hintererTeil");
let position = document.getElementById("position").value;

    switch (position){

        case "davor":
            zeichenkette.split("trennung");
            ausgabeVorne.innerHTML = zeichenkette;
    break;

        case "danach":
            zeichenkette.split("trennung")
            ausgabeVorne.innerHTML =zeichenkette.length;
    break;
    default: 

    document.getElementById("default").innerHTML ="invalid";
        }
}

