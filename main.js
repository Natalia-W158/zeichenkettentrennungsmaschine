function trennen(){
event.preventDefault();

let zeichenkette = document.getElementById("eingabe").value;
let trennung = document.getElementById("trennungsposition").value;
let davor = document.getElementById("radioDavor");
let danach = document.getElementById("radioDanach");
let ausgabeVorne =document.getElementById("vorderTeil");
let ausgabeHinten = document.getElementById("hintererTeil");


if ( davor.checked){

    ausgabeVorne.innerHTML = (zeichenkette.split(trennung)[0]);
    ausgabeHinten.innerHTML = trennung + " " + (zeichenkette.split(trennung)[1]) ;

} else{

    ausgabeVorne.innerHTML = (zeichenkette.split(trennung)[0])+ " " + trennung;
    ausgabeHinten.innerHTML = (zeichenkette.split(trennung)[1]) ;
} 

}

function goodbye() {
    eingabe.value = " ";
    trennungsposition.value = " ";
} 