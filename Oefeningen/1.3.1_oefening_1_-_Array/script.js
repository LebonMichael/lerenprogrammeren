var getal = 1;
var i = 0;
var resultaat = [];
for(i;getal>=0;i++) {
    getal = (parseInt(prompt("Geef getal in")));
    if(getal>=0){
        resultaat.push(getal);
    }
    console.log(resultaat);
}
var welkGetal = parseInt(prompt("Welke getal wil je"));
console.log(resultaat[welkGetal]);
