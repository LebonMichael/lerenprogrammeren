var eindGetal = parseInt(prompt("Geef eindgetal in"));
var getal = 0;
var aantal = 1;
function randomGetalInt(max) {
    return Math.floor(Math.random() * max);
    }
var randomGetal = randomGetalInt(eindGetal);
console.log(randomGetal);
while(aantal<=999){
    getal = parseInt(prompt("Geef getal in"));
    if(getal>randomGetal){
        console.log("Het getal is kleiner");
    }else if(getal<randomGetal){
        console.log("Het getal is groter");
    }else{
        console.log("Proficiat u hebt het getal in",aantal,"keer geraden");
        document.write("Proficiat u hebt het getal in ",aantal, " keer geraden");
        break;
    }aantal++;
}
