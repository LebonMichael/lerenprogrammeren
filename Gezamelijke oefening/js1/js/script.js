//eerste keer console test (1 regel tekst)
/*meerdere regels
* regel 2
* regel 3*/
//VARIABELEN

var voorNaam = prompt("Geef je voornaam");
var familieNaam = "Lebon"
var geboorteJaar = 1989
var functie = "Student"
var gehuwd = true; // 1 = true, 0 = false
var niets;

//CODE
console.log(voorNaam);
console.log(typeof(voorNaam)); // string
console.log(familieNaam);
console.log(typeof (familieNaam));  //string
console.log(geboorteJaar);
console.log(typeof (geboorteJaar)); //number
console.log(functie);console.log(typeof (functie));
console.log(gehuwd);
console.log(typeof (gehuwd));
niets = 5;
console.log(niets);
console.log(typeof (niets));
console.log(voorNaam + " " + familieNaam + " is een " + functie);
console.log(voorNaam, familieNaam, "is een",functie);
function sprekendeMuis(){
    alert ("piepiep");
}

if (confirm("Ben je zeker dat je dit wil verwijderen?")){
    sprekendeMuis();
}