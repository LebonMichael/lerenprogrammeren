/*
Wanneer men 18 jaar of ouder is dient men te vragen of ze een volledig bulletin van 12 vakjes willen spelen.
Bij een volledig bulletin toon je de kostprijs van 20 euro.
Voor 2 vakjes is de kostprijs 4 euro.
Voor 4 vakjes is de kostprijs 8 euro
Voor 6 vakjes is de kostprijs 12 euro
voor 8 vakjes is de kostprijs 16 euro
voor 10 vakjes is de kostprijs 18 euro
*/


var geboorteJaar = parseInt(prompt("Geef geboorte jaar in"));
var lopendeJaar = parseInt(prompt("Geef lopende jaar in"));
var keuzeBulletin
var aantalVakjes
if((lopendeJaar-geboorteJaar)>= 18){
    keuzeBulletin= prompt("Volledige bulletin? J/N");
    if (keuzeBulletin == "J"){
        console.log("Volledige bulletin 20 euro");
    }else {
        aantalVakjes = parseInt(prompt("Hoeveel vakjes?"));
        if(aantalVakjes == 10){
            console.log("prijs van 18 euro");
        }else if (aantalVakjes == 8){
            console.log("Prijs van 16 euro");
        }else if (aantalVakjes == 6){
            console.log("Prijs van 12 euro");
        }else if (aantalVakjes == 4){
            console.log("Prijs van 8 euro");
        }else if (aantalVakjes == 2){
            console.log("Prijs van 4 euro");
        }
        else{
        alert("geen correct aantal vakjes ingegeven")}
        }
}else{

}




/*
var geboorteJaar = parseInt(prompt("Geef geboorte jaar in"));
var lopendeJaar = parseInt(prompt("Geef lopende jaar in"));

if((lopendeJaar-geboorteJaar)>= 18){
    console.log("Vanaf nu mag,kan en beslis ik alles, binnen de wettelijke grenzen");
}else{
    console.log("Gelukkige heb ik mijn ouders die alles voor me regelen");
}
*/

