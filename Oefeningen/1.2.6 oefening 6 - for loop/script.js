var einde = "99";
var resultaat = "";
var i = 0

for(i;i<=einde;i++){

    if(i<10){
        resultaat = resultaat + "0" + i + ",";
    }else{
        resultaat = resultaat + i + ","
    }
}
console.log(resultaat.substr(0,resultaat.length-1));