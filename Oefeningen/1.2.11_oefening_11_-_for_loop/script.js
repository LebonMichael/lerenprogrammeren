/**
Schrijf een programma die de getallenreeks van Fibonacci opsomt.
 Vraag aan de gebruiker hoeveel getallen er dienen te worden
weergegeven.  Voorbeeld:  0, 1, 1, 2, 3, 5, 8, 13, 21,
*/

var getal1 = 0;
var getal2 = 1;
var som = 0;
var aantalGetallen = parseInt(prompt("Geef in hoeveel getallen"));
var i = 1;
var resultaat = "";

for(i;i<=aantalGetallen;i++){
    if(i%2 === 0){
        som = som + getal2;
        getal2 = som;
    }else{
        som = som + getal1;
        getal1 = som;
    }
    resultaat = resultaat + som + ",";

}
document.write(resultaat.substr(0,resultaat.length-1));


/*
// Oplossing Docent

/!*
Schrijf een programma die de getallenreeks van Fibonacci opsomt.
 Vraag aan de gebruiker hoeveel getallen er dienen te worden
weergegeven.  Voorbeeld:  0, 1, 1, 2, 3, 5, 8, 13, 21,
*!/

var aantalGetallen = parseInt(prompt('Geef het aantal te tonen getallen in:'));


var getal1 = 0, getal2 = 1, volgendGetal;


for (var i = 1; i <= aantalGetallen; i++) {
    console.log(getal1);
    volgendGetal = getal1 + getal2;
    getal1 = getal2;
    getal2 = volgendGetal;
}*/
