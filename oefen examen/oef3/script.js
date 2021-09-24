var eindGetal = parseInt(prompt("Geef einde getal in"));
var resultaat = ""
var i = 1
var som = 2

for(i;i<=eindGetal;i++){
    if(i%2 === 0){
        resultaat = resultaat + i + "-"
        som = som + i
        console.log(som)
    }else{
        resultaat = resultaat + i + "+"
        som = som - i
        console.log(som)
    }

}
console.log(resultaat.substr(0,resultaat.length-1),"=",som)
