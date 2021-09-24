var beginGetal = parseInt(prompt("Geef begin getal in"));
var eindGetal = parseInt(prompt("Geef eind getal in"));
var som = 1;
var resultaat = "";

for(beginGetal;beginGetal<=eindGetal;beginGetal++) {
    som = som * beginGetal;
    resultaat = resultaat + beginGetal + "*";
}console.log(resultaat.substr(0,resultaat.length-1) + "=" + som);
