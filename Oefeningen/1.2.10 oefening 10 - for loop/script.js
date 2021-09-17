
var tafel = parseInt(prompt("Geef tafel"));
var Einde = parseInt(prompt("Geef eind getal"));
var i = 1;
var som = 0;
var resultaat = "";
var x = 1;

for(i;i<=Einde;i++){

    if(x <= 3){
        resultaat = resultaat + tafel + "x" + i + "=" + tafel * i + ",";
        x++;
    }else{
        console.log("*",resultaat.substr(0,resultaat.length-1));
        resultaat = "";
        x = 1;
        i--;
    }
}
console.log("*",resultaat.substr(0,resultaat.length-1));



/*

var tafel = parseInt(prompt("Geef tafel"));
var einde = parseInt(prompt("Geef eind getal"));
var i = 1;
var som = 0;
var resultaat = "";

for(i;i<=einde;i++){
    som = tafel * i;
    if(som<=einde){
        resultaat = resultaat + tafel + "x" + i + "=" + som + ",";
    }
    else{
      break;
    }
}
console.log(resultaat.substr(0,resultaat.length-1));
*/


