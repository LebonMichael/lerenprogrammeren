/*
* LEREN PROGRAMMEREN MET JAVASCRIPT - OEF 1
*
* VRAAG NAAM
* VRAAG LEEFTIJD
* ALS LEEFTIJD 18 OF HOGER IS DAN = MAG JE MEE DOEN MET DE LOTTO
* ALS LEEFTIJD 16 OF HOGER IS DAN = MAG JE MEE DOEN MET DE LOTTO MITS TOESTEMMING VAN OUDERS
* ALS LEEFTIJD MINDER IS DAN 16 = MAG JE  NIET MEEDOEN
 */

var naam = prompt("Wat is uw naam");
var leefTijd = parseInt(prompt("Wat is uw leeftijd"));

console.log("uw naam is",naam);
console.log("u bent",leefTijd,"jaar");

if (leefTijd>=18){
    console.log(naam,"u mag meedoen met de trekking van de Nationale Lottery.");
}
else if (leefTijd>=16){
    console.log(naam,"u mag meedoen met de trekking van de Nationale Lottery mits toestemming van uw ouders.");
}
else {
    console.log(naam,"u mag niet meedoen met de trekking van de Nationale Lottery.");
}