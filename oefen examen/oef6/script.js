var text = prompt("Geef zin in")
var i = text.length
var resultaat = ""

for(i;i>=1;i--){
    resultaat = resultaat + text.charAt(i-1)
}console.log(resultaat)
