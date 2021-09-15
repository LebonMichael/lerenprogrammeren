//Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven.
// Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
// De totale som van x getallen is x. Voorbeeld: Hoeveel getallen?:
// 3 Geef getal 1 in:
// 4 Geef getal 2 in:
// 3 Geef getal 3 in:
// 2 De totale som van 3 getallen is 9.


var aantal; // declareren variabele
var teller = 1;
var getal;
var resultaat = 0;
//variabele opvullen en vragen aan de gebruiker
aantal = parseInt(prompt("Hoeveel getallen"));

for ( teller;teller<=aantal;teller++){
    getal = parseInt(prompt("Geef getal "+ teller + " in "));
    resultaat = resultaat + getal;
}
document.getElementById("oef5").innerText = "De totale some van "+ aantal + " getallen is " + resultaat;