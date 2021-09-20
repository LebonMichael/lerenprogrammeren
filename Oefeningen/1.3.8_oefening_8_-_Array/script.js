var i = 1;
var j = 0;
var namen = [];
var x = 64;
var t = 0;
var naam = "";
var alfa =[];
var resultaat = ""
for (i;i<=10;i++){
    namen.push(prompt("Geef naam in"));
}i = 1;
    for (i;i<=32;i++){
        x++;
        j = 0;
    for(j;j<=namen.length-1;j++){
        naam = namen[j];
        naam = naam.substr(0,1);
        naam = naam.toUpperCase();
        naam = naam.codePointAt();
        if(naam === x){
            alfa.push(namen[j]);
            t++;
        }t++
    }
}
console.log(namen)
console.log(alfa)
