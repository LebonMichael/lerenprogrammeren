var aantalNamen = parseInt(prompt("Hoeveel namen?"));
var i = 1;
var klassenLijst = [];


for(i;i<=aantalNamen;i++){
    var naam = prompt("Geef naam");
        klassenLijst.push("- " + naam);
    console.log(klassenLijst[i-1]);
}
