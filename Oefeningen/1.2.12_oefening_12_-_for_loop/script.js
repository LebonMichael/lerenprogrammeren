/**
 Schrijf een programma die de grootst gemene deler van 2 getallen
 op het scherm schrijft.
  Vraag aan de gebruiker de 2 getallen
  Voorbeeld:
 o Getallen 75 en 105
 o Grootste gemene deler is 15
 o Weergave op het scherm:
 o De grootste gemene deler van 105 en 75 is: 15
 */


var getal1 = parseInt(prompt("Geef eerste getal"));
var getal2 = parseInt(prompt("Geef tweede getal"));
var i = 0
if(getal1<getal2){
     i = getal1;
}else{
     i = getal2;
        }

for(i;i>=1;i--){
    if(getal1%i===0 && getal2%i===0) {
        console.log(i)
        break
    }
}
document.write("De grootste gemene deler van " + getal1 + " en " + getal2 + " is " + i)




/*
// Oplossing Docent

/!**
 Schrijf een programma die de grootst gemene deler van 2 getallen
 op het scherm schrijft.
  Vraag aan de gebruiker de 2 getallen
  Voorbeeld:
 o Getallen 75 en 105
 o Grootste gemene deler is 15
 o Weergave op het scherm:
 o De grootste gemene deler van 105 en 75 is: 15 *!/

let hulp='';
let eersteGetal = parseInt(prompt('Geef eerste getal in'));
let tweedeGetal = parseInt(prompt('Geef tweede getal in'));
let grootsteGemeneDeler;
if(eersteGetal != tweedeGetal){
    hulp = eersteGetal;
    eersteGetal = tweedeGetal;
    tweedeGetal = hulp
}
for(let x=1;x<=eersteGetal;x++){
    if(eersteGetal%x == 0 && tweedeGetal%x == 0){
        grootsteGemeneDeler = x;
    }
}
//document.write(`De grootste gemene deler van ${eersteGetal} en ${tweedeGetal} is ${grootsteGemeneDeler}`);
console.log("De grootste gemene deler van " + eersteGetal + " en " + tweedeGetal + " is " + grootsteGemeneDeler);
*/
