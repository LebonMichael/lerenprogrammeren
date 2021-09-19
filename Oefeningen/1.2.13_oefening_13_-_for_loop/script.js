/*
Schrijf een programma die het kleinste gemeen veelvoud van 2 getallen weergeeft.
Vraag aan de gebruiker de 2 getallen  Voorbeeld:
o Getallen 15 en 27
o Weergave op het scherm:
o Het kleinste gemene veelvoud van 15 en 27 is: 135
*/

var getal1 = parseInt(prompt("Geef eerste getal"));
var getal2 = parseInt(prompt("Geef tweede getal"));
var i = 1;
var som1 = 0;
var som2 = 1;
if(getal1<getal2){
     x = getal1;
}else{
     x = getal2;
        }
for(i;i<=x;i++){
    if(som1 === som2){
        break;
    }
    som1 = getal1*i;
    var j = 1;
    for(j;j<=x;j++){
        som2 = getal2*j;
        if(som1 === som2){
            console.log(som1)
            break;


        }
    }
}
