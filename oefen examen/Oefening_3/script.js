var eindGetal = parseInt(prompt("Geef eindgetal"));
var i = 1;
var resultaat = "";
var som = 2;


for(i;i<=eindGetal;i++){
    if(i%2 === 0){
        resultaat = resultaat + i + "-";
        som = som + i;
    }else{
        resultaat = resultaat + i + "+";
        som = som - i;
    }
}console.log(resultaat.substr(0,resultaat.length-1) + "=" + som);