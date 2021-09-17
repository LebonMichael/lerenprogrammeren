var getal = parseInt(prompt("Geef getal"));
var i = 1;
var som = "";

for(i;i<=getal;i*=2){
    som = som + i + ",";
}
console.log(som.substr(0,som.length-1));