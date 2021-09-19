
// Eerste juist oplossing ( eigen oplossing )
var aantal = parseInt(prompt("Geef aantal in"));
var teller = 2
var som = aantal
var totaalSom = som

for(teller;teller<=aantal;teller++){
    som-=1;
    totaalSom = totaalSom * som;
}
console.log(totaalSom)



/*
//Tweede juiste oplossing ( Oplossing Tom)
var getal = parseInt(prompt("Geef een getal in"));
var fac = 1
var i = 1

for(i;i<=getal;i++){
    fac=fac*i;
}
console
*/
