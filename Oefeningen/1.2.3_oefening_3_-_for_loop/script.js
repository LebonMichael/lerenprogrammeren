/*
Schrijf een programma die het volgende op het scherm weergeeft:
 De gebruiker geef een even aantal even lijnen in.
*
**
***
****
*****
*****
****
***
**
*
*/

var aantal
var teller = 1
var sterren = ""

aantal = parseInt(prompt("Geef aantal sterren"));
for(teller;teller<=aantal;teller++){
    sterren = sterren + "*";
    console.log(sterren)
    }
teller = 1
var minSterren = sterren.length
for(teller;teller<=sterren.length;teller++){
    minSterren-=1;
    console.log(sterren.substr(0, minSterren));

}
