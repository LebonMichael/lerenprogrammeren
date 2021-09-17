/*
 Schrijf een programma die de volgende reeks horizontaal op het scherm schrijft:
  Voorbeeld:
 o Vraag een getal aan de gebruiker:
 o Wanneer dit getal bijvoorbeeld 100 is dan is de volgende reeks de uitkomst:
  1, 2, 4, 8, 16, 32, 64
 o Wanneer dit getal bijvoorbeeld 130 is dan is de volgende reeks de uitkomst:
  1, 2, 4, 8, 16, 32, 64, 128
*/


var getal = parseInt(prompt("Geef getal in groter dan 0"));
var i = 1;
var som = "";

for(i;i<=getal;i*=2){
    som = som + i + ",";
}
console.log(som.substr(0,som.length-1));

