//Oplossing Michael

var zin = prompt("Geef zin in");
var changeLetter = prompt("Welke letter wil je veranderen?");
var whichLetter = prompt("In welke letter wil je " + changeLetter + " veranderen?");
var i = 0;
var resultaat = "";

changeLetter = changeLetter.split(",");
console.log(changeLetter)
whichLetter = whichLetter.split(",");
console.log(whichLetter)

for(i;i<=zin.length;i++){
    console.log(zin.charAt(i));
    if(changeLetter.indexOf(zin.charAt(i)) >= 0){
        resultaat += whichLetter[changeLetter.indexOf(zin.charAt(i))];
    }else{
        resultaat += zin.charAt(i);
    }
}console.log("Resultaat: " + resultaat);

/*
// Oplossing Tom

var zin=prompt("Geef een zin in: ");
var welkeLetters=prompt("Welke letters wil je veranderen");
var vervangLetters=prompt("In welke karakters wens je deze te veranderen");
var resultaat ="";
var letterReeks=welkeLetters.split(',');
var vervangReeks=vervangLetters.split(',');
var i = 0;
for(i;i<zin.length;i++){
    var mijnKarakter = zin.substring(i,i+1);
    if (letterReeks.indexOf(mijnKarakter) >= 0){
        resultaat+=vervangReeks[letterReeks.indexOf(mijnKarakter)];
    }
    else
        resultaat+=mijnKarakter;
}
console.log("Resultaat:" + resultaat);
*/
