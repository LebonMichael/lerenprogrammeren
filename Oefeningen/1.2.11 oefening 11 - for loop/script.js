var getal1 = 0
var getal2 = 1
var som = 0
var aantalGetallen = parseInt(prompt("Geef in hoeveel getallen"));
var i = 2
var resultaat = ""

for(i;i<=aantalGetallen;i++){
    if(i%2===1){
        som = som + getal1;
        getal1 = som;
    }else
        som = som + getal2;
        getal2 = som;
    resultaat = resultaat + som + "+";

}
console.log(resultaat.substr(0,resultaat.length-1));