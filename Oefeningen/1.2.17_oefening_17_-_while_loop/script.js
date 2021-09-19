var eindeGetal = parseInt(prompt("Geef eindegetal in "));
var i = 1;
var resultaat = "";


while(i <= eindeGetal){

    if (i%10 === 0){
        resultaat = resultaat + "...,";
    }else if(i%3 === 0) {
        resultaat = resultaat + i + "," + i + ",";

    }else{
        resultaat = resultaat + i + ",";
    }
    i++
}console.log(resultaat.substr(0,resultaat.length-1));