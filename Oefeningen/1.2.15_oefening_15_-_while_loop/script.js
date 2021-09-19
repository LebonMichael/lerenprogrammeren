/*
Schrijf een programma waarin je aan de gebruiker vraagt
hoeveel getallen hij wil ingeven. Schrijf vervolgens het totaal
van alle ingegeven getallen op het scherm.
 De totale som van x getallen is x.
 Voorbeeld:
 Hoeveel getallen?: 3
 Geef getal 1 in:
 Geef getal 2 in:
 Geef getal 3 in
 De totale som van 3 getallen is x.
 Het gemiddelde van de 3 getallen is x
*/

var aantal = parseInt(prompt("Hoeveel getallen?"));
var i = 1;
var resultaat = 0;

while(i<=aantal){
    var getal = parseInt(prompt("Geef getal " + i + " in"));
    resultaat = resultaat += getal;
    i ++;
}
console.log(" De totale som van ",aantal," getallen is ",resultaat);
document.write("De totale som van ",aantal," getallen is ",resultaat);/n
var gemiddelde = resultaat /= aantal;
console.log(" Het gemiddeld van de ",aantal," getallen is ",gemiddelde);
document.write(" Het gemiddeld van de ",aantal," getallen is ",gemiddelde)