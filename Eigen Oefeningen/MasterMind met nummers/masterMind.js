function getRandomNummer(max) {
    return Math.floor(Math.random() * max)+1
}
var hiddenCode = []
var i = 1
for(i;i<=4;i++){
    hiddenCode.push(getRandomNummer(4))
}console.log(hiddenCode)

var x = 9
for(x;x>=0;x--){
    var correct = 0
    var getallen = (prompt("Geef 4 getallen in tussen 1 en 4"))
    var arrayGetallen = getallen.split(",")
    var y = 0

    for (y;y<=3;y++){
        getal = arrayGetallen[y]
        if(getal == hiddenCode[y]){
            correct++
            }
        }
    if(correct === 4){
        document.write("Proficiat u hebt alle getallen gevonden")
        break
    }else{
        console.log("U hebt " + correct + " getallen juist! Probeer nog eens. Nog " + x + " pogingen")
    }
}
