/*
Schrijf een programma die een aantal getallen inleest en
eindigt wanneer de gebruiker een negatief getal ingeeft.
 Schrijf daarna de som van de getallen op het scherm.
*/

// FOR LOOP

/*
var getal = parseInt(prompt("Geef getal in"));
var resultaat = 0;

for(getal;getal > 0;getal = parseInt(prompt("Geef getal in"))){
    resultaat = resultaat += getal;
}
console.log("Het resultaat is",resultaat + getal);
document.write("Het resultaat is ",resultaat + getal);
*/

// while loop

var getal = parseInt(prompt("Geef getal in"));
var resultaat = 0;

while(getal > 0){
    resultaat = resultaat += getal;
    getal = parseInt(prompt("Geef getal in"));
}
console.log(resultaat);
document.write(resultaat);
