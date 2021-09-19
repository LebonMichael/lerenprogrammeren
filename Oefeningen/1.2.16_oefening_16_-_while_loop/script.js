var getal = parseInt(prompt("Geef getal in"));
var resultaat = 1;
var i = 1
while(i <= getal){
    resultaat = resultaat *= i
    i++
}
console.log(resultaat)