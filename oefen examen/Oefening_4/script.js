var zin = prompt("Geef zin in");
var letter = 0;
var woorden = 1;
var i = 1;

for(i;i<=zin.length;i++){
    if(zin.charAt(i) === " "){
        woorden++;
        letter--;
    }letter++;
}console.log("Aantal karakters:" + letter);
console.log("Aantal woorden:" + woorden);