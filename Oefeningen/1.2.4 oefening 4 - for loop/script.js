//Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven.
// Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm.
// De totale som van x getallen is x. Voorbeeld: Hoeveel getallen?:
// 3 Geef getal 1 in:
// 4 Geef getal 2 in:
// 3 Geef getal 3 in:
// 2 De totale som van 3 getallen is 9.


/*
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
document.getElementById("oef5").innerText = "De totale some van "+ aantal + " getallen is " + resultaat;*/

/*
var aantal
var teller = 1
var sterren = ""

aantal = parseInt(prompt("Geef aantal sterren"));
for(teller;teller<=aantal;teller++){
    sterren = sterren + "*";
    console.log(sterren)
    }
teller = 1
var minSterren = sterren.length
for(teller;teller<=sterren.length;teller++){
    minSterren-=1;
    console.log(sterren.substr(0, minSterren));

}
*/

/*
// Eerste juist oplossing ( eigen oplossing )
var aantal = parseInt(prompt("Geef aantal in"));
var teller = 2
var som = aantal
var totaalSom = som

for(teller;teller<=aantal;teller++){
    som-=1;
    totaalSom = totaalSom * som;
}
console.log(totaalSom)
*/


/*
//Tweede juiste oplossing ( Oplossing Tom)
var getal = parseInt(prompt("Geef een getal in"));
var fac = 1
var i = 1

for(i;i<=getal;i++){
    fac=fac*i;
}
console
*/
